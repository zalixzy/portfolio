import React from 'react'
import SectionHeading from './section-heading'

export default function Contact() {
  return (
    <section id="Contact">

      <SectionHeading>Me contacter</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Vous pouvez me contacter sur{" "}
        <a className="underline" href="mailto:zalcontactme@gmail.com">
          zalcontactme@gmail.com
        </a>{" "}
        ou à travers ce formulaire
      </p>
    </section>
  )
}
