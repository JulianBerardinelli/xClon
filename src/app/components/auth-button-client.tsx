'use client'

import { type Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { headers } from "next/headers";
import { FacebookIcon, GithubIcon } from "./icons";
import { useRouter } from "next/navigation";

export default function AuthButton({session}: {session: Session | null}) {
    // Inicializa session como null
    const supabase = createClientComponentClient();
    const router = useRouter()

    const handleSignInWithGitHub = async () => {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: 'http://localhost:3000/auth/callbacks'
            }
        });
    };
    const handleSignOut = async () => {
        const { error} = await supabase.auth.signOut()
        router.refresh()
    };


    return (
        <header>
            {session === null ? (
                <>
                <section className="flex flex-col items-center">
                    <button onClick={handleSignInWithGitHub} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                        <GithubIcon />
                        Iniciar sesión con Github
                    </button>
                </section>
                </>
            ) : (
                <button onClick={handleSignOut} type="button" className="text-sm items-center text-white/80">Cerrar sesión</button>
            )
                
            }
        </header>
    );
}