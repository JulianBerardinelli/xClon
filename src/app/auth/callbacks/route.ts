import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

//evitar de forma estatica el cacheo de la ruta
export const dynamic = 'force-dynamic'


export async function GET ( request : NextRequest){
    const requestUrl = new URL ( request.url)
    const code = requestUrl.searchParams.get('code')

    if (code !== null) {
        const supabase = createRouteHandlerClient({ cookies })
        //usando el codigo que le pasamos por URL nos devuelve la sesion por usuario
        await supabase.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect(requestUrl.origin)
}