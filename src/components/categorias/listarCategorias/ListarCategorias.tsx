import {useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import CardCategoria from '../cardCategorias/CardCategoria';
import { toastAlerta } from '../../../util/toastAlerta';
import { Link } from "react-router-dom";


function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
      try{
          await buscar('/categorias', setCategorias);
      } catch{
          toastAlerta('Ocorreu um erro ao buscar as categorias.', 'erro');
      }
  }

  useEffect(() => {
      buscarCategorias();
  }, [categorias.length]);

  return (
      <>
          {categorias.length === 0 && (
              <Dna
                  visible={true}
                  height="200"
                  width="200"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper mx-auto"
              />
          )}
          <div className="flex justify-center w-full py-4">
              <div className="container flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {categorias.map((categoria) => (
                          <>
                              <CardCategoria key={categoria.idcat} categoria={categoria} />
                          </>
                      ))}

                      <Link to='/cadastrarCategoria'><h1 className='flex justify-between text-center'>Adicionar nova Categoria</h1></Link>
                  </div>
              </div>
          </div>
      </>
  );
}

export default ListarCategorias;