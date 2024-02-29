import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'

interface CardProdutoProps {
  produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between font-font5'>
      <div>
        <div className="flex w-full bg-gray-800 py-2 px-4 items-center gap-4">
          <h3 className='text-lg font-bold text-center font-font5 '>{produto.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase '>Preço: R$ {produto.preco}</h4>
          <h4 className='text-lg font-semibold uppercase '>Estoque: {produto.estoque} unidades</h4>
          <h4 className='text-lg font-semibold uppercase'>Categoria: {produto.categoria?.categoria}</h4>
          <p>Validade: {produto.validade ? new Intl.DateTimeFormat(undefined, {
            dateStyle: 'full',
            timeStyle: 'medium',
          }).format(new Date(produto.validade)) : 'Validade não definida'}</p>
        </div>
      </div>
      <div className="flex">
        <Link to={`/atualizarProduto/${produto.id}`} className='w-full bg-verde hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${produto.id}`} className='bg-gray-800 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduto;