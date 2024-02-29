import Tema from './Categoria';


export default interface Produto {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  tema: Tema | null;
}