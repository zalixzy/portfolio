import React from 'react'
import Image from 'next/image'

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div>
                <Image src="@/public/moi.jpg" alt="Thomas Travier">

                </Image>
             </div>    
          
        </div>

    </section>
  )
}
