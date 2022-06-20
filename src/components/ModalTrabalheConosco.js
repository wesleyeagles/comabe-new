import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
import './css/ButtonPrimary.css'


function ModalTrabalheConosco({Close, classRef, onClick}) {
  return (
    <div className={`fixed bg-black w-[50%] h-[80%] top-[50%] left-[50%] rounded-xl translate-y-[-50%] translate-x-[-50%] z-50 ${Close} duration-500 ${classRef}`}> 
      <div className="relative w-full h-full ">
      <div onClick={onClick} className='absolute top-1 right-2 text-white cursor-pointer flex items-center gap-3'><FaWindowClose size={20} color='#0F5197'/> </div>
        <div className='bg-white w-full h-full rounded-xl'>
          <div className='flex w-full h-full'>
            <div className='bg-trabalheconosco h-full w-[45%]'>

            </div>

            <div className='w-[55%] h-full flex items-center'>
              <div className='container mx-auto'>
                <h2 className='text-2xl mb-[20px]'>Preencha o formulário</h2>
                <p className='text-sm mb-[30px] font-light'>Assim que recebermos sua solicitação, um dos nossos <span className='text-[#0F5197] font-bold'>especialistas</span> entrará em contato.</p>
                <form className='flex flex-col gap-[20px]'>
                  <input className='bg-[#F8F8FA] h-[55px] pl-[20px] rounded-md outline-none' placeholder='Nome' type='text' />
                  <input className='bg-[#F8F8FA] h-[55px] pl-[20px] rounded-md outline-none' placeholder='E-mail' type='email' />
                  <input className='bg-[#F8F8FA] h-[55px] pl-[20px] rounded-md outline-none' placeholder='Telefone' type='tel' />
                  <label>
                  <input className='bg-[#F8F8FA] h-[35px] w-full pl-[20px] pt-[10px]  flex items-center' type='file'/>
                  <span className='bg-[#F8F8FA] h-[30px] w-full pl-[20px]  flex pb-[10px]'>Deixe seu curriculo</span>
                  </label>
                  <textarea placeholder='Mensagem' className='bg-[#F8F8FA] h-[140px] pl-[20px] pt-[20px] rounded-md outline-none'>

                  </textarea>
                  <label>
                  <button className='text-sm text-white px-6 py-3 sm:px-12 sm:py-3 rounded-3xl font-medium ButtonPrimary' type='submit'>Enviar</button>
                  </label>  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalTrabalheConosco