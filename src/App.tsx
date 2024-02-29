import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navBar/NavBar';
import Home from './paginas/home/Home';
import Footer from './components/footer/Footer';
import ListarCategorias from './components/categorias/listarCategorias/ListarCategorias';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
/*import ListaPostagens from './components/postagens/listaPostagem/ListaPostagens';
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';*/

function App() {
  
  return (
    <>
      <ToastContainer />
        <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListarCategorias />} />
              <Route path="/cadastrarCategoria" element={<FormularioCategoria />} />
              <Route path="/atualizarCategoria/:id" element={<FormularioCategoria/>} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;