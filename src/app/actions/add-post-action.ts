'use server'
import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";

export const addPost = async (formData: FormData) => {

    const content = formData.get("content")

    if (content === null ) return console.log('No content')
    
    const supabase = createServerActionClient({cookies})

    const { data : {user}} = await supabase.auth.getUser()
    if (user === null) return console.log('No user')


    await supabase.from('post').insert({content, user_id: user.id})
    revalidatePath('/')
    
}
