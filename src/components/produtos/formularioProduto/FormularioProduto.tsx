import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Produto from "../../../models/Produto";
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';


function FormularioProduto() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  
  const [categoria, setCategoria] = useState<Categoria>({
    idcat: 0,
    categoria: '',
    descricao: ''
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    descricao: '',
    estoque: 0,
    nome: '',
    preco: 0,
    validade: null,
    categoria: null
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto);
  }
  
  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }
  
  async function buscarCategorias() {
    await buscar('/categorias', setCategorias);
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate('/produtos');
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto);
        toastAlerta('O produto foi atualizado com sucesso.', 'sucesso');
        retornar();
      } catch (error: any) {
          toastAlerta('Erro ao atualizar o produto.', 'erro');
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto);

        toastAlerta('O produto foi cadastrado com sucesso.', 'sucesso');
        retornar();
      } catch (error: any) {
          toastAlerta('Erro ao cadastrar o produto.', 'erro');
      }
    }
  }

  const carregandoCategoria = categoria.categoria === '';

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Nome do produto</label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Titulo"
            name="nome"
            required
            className="border-2 border-verdeEscuro rounded p-2 "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do produto</label>
          <input
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Texto"
            name="descricao"
            required
            className="border-2 border-verdeEscuro rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="estoque" className="">Unidades em estoque</label>
          <input
            value={produto.estoque}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="0"
            name="estoque"
            required
            className="border-2 border-verdeEscuro rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="validade" className="">Validade</label>
          <input
            value={produto.validade ? new Date(produto.validade).toLocaleDateString() : ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="0"
            name="validade"
            required
            className="border-2 border-verdeEscuro rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="">Categoria do produto</p>
          <select name="categoria" id="categoria" className='border p-2 border-verdeEscuro rounded' onChange={(e) => {
            buscarCategoriaPorId(e.currentTarget.value);
            setProduto({ ...produto, categoria: categorias.find(cat => cat.idcat === parseInt(e.currentTarget.value, 10)) || null
           });
          }}>
            <option value="" disabled>Selecione uma categoria:</option>
            {categorias.map((categoria) => (
              <option key={categoria.idcat} value={categoria.idcat}>{categoria.categoria}</option>
            ))}
          </select>
        </div>
        <button disabled={carregandoCategoria} type='submit' className='rounded text-white bg-verde hover:bg-verdeEscuro duration-300 w-1/4 py-2 mx-auto block mt-4"'>
          {carregandoCategoria ? <span>Carregando...</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
        </button>

        <button className="rounded text-white bg-verde hover:bg-verdeEscuro duration-300 w-1/4 py-2 mx-auto block mb-2" onClick={retornar}>Voltar</button>
      </form>
    </div>
  );
}

export default FormularioProduto;
