// import { Header } from './componentes/Header'
import {Routes, Route} from 'react-router-dom';
import { Home }from './Home';
import { About } from './About';
import './styles.global.css';

function App() {


  return (

   <div>
    <header>
      <h1>Meu Site</h1>
    </header>
    <hr />
    <hr />

    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<About />} />


      </Routes>
    </div>
    <hr />
    <hr />

    <footer>
      <h2>Contato</h2>
    </footer>
   </div>



  //  <div>
  //   <Header nomeCliente='Luciano' cidadeCliente='Cataguases' ufCliente='MG' />
  //   <Header nomeCliente='Luciano' cidadeCliente='Cataguases' ufCliente='MG' />
  //   <Pagina2 />
  //   <Pagina3 />
  //   <Footer />
  // </div>
  )
}

export default App
