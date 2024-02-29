import Categoria from './Categoria';


export default interface Produto {
  id: number;
  descricao: string;
  estoque: number;
  nome: string;
  preco: number;
  validade: Date;
  categoria: Categoria | null;
}