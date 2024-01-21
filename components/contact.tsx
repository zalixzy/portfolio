"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { sendEmail } from '@/actions/sendEmail';
import SubmitBTN from './submit-btn';

export default function Contact() {

    
    const formData = new FormData;
 

  
  return (
    <section id="Contact" className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center ">

      <SectionHeading>Me contacter</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Vous pouvez me contacter sur{" "}
        <a className="underline" href="mailto:zalcontactme@gmail.com">
          zalcontactme@gmail.com
        </a>{" "}
        ou à travers ce formulaire
      </p>
      <form className="mt-10 flex flex-col" action={async formData =>{
        await sendEmail(formData);
      }}>
      {/* borderBlack est la rule du global CSS, elle remplace border border-black/10 long à écrire */}
        <input className="h-14 rounded-lg borderBlack p-4" type="email" required={true} 
        placeholder="Votre mail" maxLength={500} name="email"></input> 
        <textarea className="rounded-lg borderBlack py-4 h-52 my-3 p-4 " required={true} maxLength={5000}
        placeholder="Votre message" name="message"></textarea>
       <SubmitBTN/>
      </form>
    </section>
  )
}
