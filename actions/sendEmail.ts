"use server";
import { Resend } from 'resend';

const resend=new Resend (process.env.RESEND_API_KEY);

 export const sendEmail = async(formData: FormData) =>{
    const senderEmail= formData.get('senderEmail');
    const message=formData.get('message');
    //  console.log(formData.get("email"));
    // console.log(formData.get("message"));

    if(!message || typeof message !== 'string'){
        return{
            error: 'Message invalide',
        };
    }

    resend.emails.send({
        from:'onboarding@resend.dev',
        to:'zalcontactme@gmail.com',
        subject:'Message du formulaire de contact',
        text: message
    });
}