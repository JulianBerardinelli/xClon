import { AuthButtonServer } from '@/app/components/auth-button-server'
import "./login.css"



export default function Login() {
    return (
        <section className='grid place-content-center min-h-screen bg-img'>
            <h1 className='text-xl font-normal mb-2 text-center'>X - Clon by <span className='font-bold text-blue-500'>Julián Berardinelli</span></h1>
            <h2 className='text-md font-normal mb-4 text-center'>Bienvenido a mi clon de X Twitter!</h2>
            <h5 className='text-xl font-bold mb-4 text-center mt-10'>Inicia sesión</h5>
            <div className='flex items-center justify-center '>
                <AuthButtonServer />
            </div>
        </section>
    )
}