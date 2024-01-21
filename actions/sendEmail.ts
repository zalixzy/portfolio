"use server";
import { error } from 'console';
import { Resend } from 'resend';
import { validateString } from '@/lib/utils';
import { getErrorMessage } from '@/lib/utils';

const resend=new Resend (process.env.RESEND_API_KEY);


 export const sendEmail = async(formData: FormData) =>{
    const senderEmail= formData.get('email');
    const message=formData.get('message');
    //  console.log(formData.get("email"));
    // console.log(formData.get("message"));


    // Validation côté server pour s'assurer que les informations envoyées sont correctes
    if(!message || typeof message !== 'string'){
        return{
            error: 'Message invalide',
        };
    }

    if(!validateString(senderEmail, 500)){
        return{
            error: 'Email invalide',    
        }
    }

    if(!validateString(message, 5000)){
        return{
            error: 'Message invalide',    
        }
    }
  

    try{
    await resend.emails.send({
        from:'Formulaire de contact <onboarding@resend.dev>',
        to:'zalcontactme@gmail.com',
        subject:'Message du formulaire de contact',
        reply_to: senderEmail as string,
        text: message as string
    });
    }
    catch(error: unknown){
       return{
        error: getErrorMessage(error)
       }
    }
    
    
}