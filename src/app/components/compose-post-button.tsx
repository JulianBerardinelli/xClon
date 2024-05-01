"use client"
import { useFormStatus} from 'react-dom'

export function ComposePostButton ({
    disabled
}: {
    disabled: boolean
}) {

    const { pending } = useFormStatus()

    return (
        <button 
            disabled={disabled || pending}
            type='submit' 
            className="bg-sky-500 text-sm disabled:opacity-40 disabled:pointer-events-none font-bold rounded-full px-5 py-2 self-end"
        >
            {pending ? 'Posteando...' : 'Postear'}
        </button>
    )
}