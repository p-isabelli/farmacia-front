import './Home.css';
import { useNavigate } from "react-router-dom";
/*import ListaPostagens from '../../components/postagens/listaPostagem/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';*/



function Home() {
  let navigate = useNavigate();

    return (
        <>
        <div className="bg-gray-900 flex justify-around flex-grow w-full fundo font-font5">
          <div className='grid grid-cols-2 m-2'>
            <div className="flex flex-col gap-4 py-4 items-center justify-center">
              <h2 className='text-5xl font-semibold font-font5 text-center'>Sua saúde em primeiro lugar!</h2>
              <p className='text-xl italic'>Aqui você encontra tudo o que precisa para cuidar de você.</p>
  
              <div className="flex justify-center gap-4 font-font5">
             
              <button className='border border-verde hover:bg-verdeEscuro rounded bg-verde text-white py-2 px-4' onClick={() => navigate('/produtos')}>Ver Produtos</button>
              <button className='border border-verde hover:bg-verdeEscuro rounded bg-verde text-white py-2 px-4' onClick={() => navigate('/categorias')}>Categorias</button>

            </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow w-full items-center">
          <h2 className="text-3xl py-6 font-font5">Produtos recentes</h2>
          
        </div>
      </>
    );
}

export default Home;