import React from 'react'
import Image from 'next/image'

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div>
                <Image
                  src="/moi.jpg"  alt="Thomas Travier" 
                  width="192" 
                  height="192" 
                  quality="95"
                  priority={true}
                  className="h-24 w-24 rounded-full border-[0.35rem]
                  border-white shadow-xl"
                  >
                   
                </Image>
             </div>    
          
        </div>

    </section>
  )
}
