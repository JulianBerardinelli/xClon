import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "@/app/components/auth-button-server";
import { redirect } from "next/navigation";
import { PostList } from "./components/post-list";
import { Database } from "./types/database";
import { ComposePost } from "./components/compose-post";
import { Header } from "./components/header";
import {ScrollShadow} from "@nextui-org/react";
import { Menu } from "./components/menu";
import Widget1 from "./components/widget1";
import { SearchBar } from "./components/search-bar";


export default async function Home() {
  const supabase = createServerComponentClient<Database>({cookies})
  const { data: {session} } = await supabase.auth.getSession()


  if (session === null) {
    redirect('/login')
}

   const { data: posts} = await supabase
     .from('post')
     .select('*, user:users(*)')
     .order('created_at', {ascending: false})
  // const { data: posts } = await supabase
  // .from('post')
  // .select(`
  //   id,
  //   content,
  //   user_id,
  //   user:user_id (name, user_name, avatar_url)
  // `)
  // .order('created_at', { ascending: false });

  return (
    
    <main className="dark grid grid-cols-3 ">
      {/* Columna 1: Menú de navegación */}
      
      <section className="col-span-1 flex flex-col items-end max-w-[430px] w-full">
        <Menu userAvatarUrl={session.user?.user_metadata?.avatar_url}  userName={session.user?.user_metadata?.user_name} userFullName={session.user?.user_metadata?.name}/>

      </section>
      {/* Columna 2: Tweets y postear */}
      <section 
        className="dark flex min-h-screen flex-col items-center justify-between"
      >
        <section
        className="col-span-2 max-w-[1200px] w-full mx-auto border-l border-r border-white/25 min-h-screen"
        >
          <Header/>
          <ScrollShadow visibility='bottom' hideScrollBar className="w-full h-[645px]">
            <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url}  userName={session.user?.user_metadata?.user_name}/>
            <PostList posts={posts}/>
          </ScrollShadow>
        </section>
      </section>
      {/* Columna 3: Widgets */}
      <section className="col-span-1 flex flex-col items-center max-w-[400px] ">
        <section className=" flex flex-col items-center w-full">
          <SearchBar/>
          <div className="p-5">
            <Widget1/>
          </div>
          
        </section>
        
      </section>
    </main>

  );
}
