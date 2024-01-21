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
                <Body>
                    <Container>
                        <Section>
                            <Heading>Tu as reçu un nouveau message depuis le formulaire</Heading>
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
