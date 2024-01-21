"use server";
import { error } from 'console';
import { Resend } from 'resend';

const resend=new Resend (process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength:number)=>{
    if(!value || typeof value!== "string" || value.length > maxLength){
        return false;
    }
    return true;
}

 export const sendEmail = async(formData: FormData) =>{
    const senderEmail= formData.get('senderEmail');
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

    resend.emails.send({
        from:'onboarding@resend.dev',
        to:'zalcontactme@gmail.com',
        subject:'Message du formulaire de contact',
        text: message
    });
}