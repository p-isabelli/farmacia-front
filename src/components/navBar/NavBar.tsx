
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {

  return(
  <>
        <div className='shadow-md p-4 rounded-md w-full top-0 left-0 font-font5 bg-white '>
          <div className="md:flex items-center justify-between py-4 md:px-10 px-7 ">
            <Link to='/home' className='text-2xl mr-1 pt-2 font-medium hover:text-verde duration-300'>MixFarma</Link>
          

            <div className='flex gap-8 items-center justify-center py-2 text-lg'>
              <Link to='/produtos' className='hover:text-verde duration-300'>Produtos</Link>
              <Link to='/categorias' className='hover:text-verde duration-300'>Categorias</Link>
              <Link to='/cadastroProduto' className='hover:text-verde duration-300'>Cadastrar produto</Link>
            </div>
          </div>
        </div>
      </>
  )
}


export default Navbar