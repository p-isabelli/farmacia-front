import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

  return(

      <>
        <div className="flex justify-center bg-verde text-white font-font5">
          <div className="container flex flex-col items-center py-5">
            <p className='text-lg font-md'>Farmácia CRUD - Isabelli Cruz</p>
            <p className='text-md italic p-2'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={32} weight='bold' />
              <InstagramLogo size={32} weight='bold' />
              <FacebookLogo size={32} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer