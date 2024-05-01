'use server'
import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";


export const deletePost = async (postId: string) => {
    const supabase = createServerActionClient({cookies});

    // Verificar si el usuario está autenticado
    const { data: { user } } = await supabase.auth.getUser();
    if (user === null) return console.log('No user');

    // Eliminar el tweet si pertenece al usuario autenticado
    await supabase
        .from('post')
        .delete()
        .match({ id: postId, user_id: user.id })
    revalidatePath('/')
}
