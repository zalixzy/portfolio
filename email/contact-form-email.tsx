import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,

} from "@react-email/components"
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
    message : string,
    email : string,
}
export default function ContactFormEmail({
    message, email}: ContactFormEmailProps) {
  return (
    <Html>
        <Head/>
            <Preview>Nouveau message de ton portfolio </Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-gray-800">
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">Tu as reçu un nouveau message depuis le formulaire</Heading>
                            <Text>{message}</Text>
                            <Hr/>
                            <Text>L'email de l'expéditeur est: {email}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
       
    </Html>
  )
}
