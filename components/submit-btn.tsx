import React from 'react'
import { useFormStatus } from 'react-dom';

export default function SubmitBTN() {
    const {pending } = useFormStatus();
  return (

    <button className="flex items-center justify-center w-[8rem] text-white 
        rounded-full outline-none transition-all h-[3rem] gap-2 bg-gray-900
        focus:scale-105 hover:scale-105 active:scale-105 hover:bg-gray-950 disabled:scale-100
        disabled:bg-opacity-65"
     type="submit" disabled={pending}>{

        pending ? <div className="h-5 w-5 rounded-full animate-spin border-white
        border-b-2"></div> : ( <>Envoyer</>)}
    </button>
  )
}
