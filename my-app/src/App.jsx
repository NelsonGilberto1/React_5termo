import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

//Css:
import './Ex01Css/Estilos.css'
import './Ex02Css/Listas.css'
import './Ex03Css/Menu.css'

//Jsx:
import NomeAluno from './Ex01Css/NomeAluno'
import Curso from './Ex01Css/Curso'
import Botaover from './Ex01Css/BotaoVer'
import Listas from './Ex02Css/Listas';

function App() {

  
  return (
    <div>
      <h2>Exercício 3 — Menu Horizontal</h2>
      <div className='menu'>
        <a href='https://www.youtube.com/watch?v=Wu3Y_v8JeE8' className='menuh3'>Home</a>
        <a href='https://www.youtube.com/watch?v=WnOWVSYNMFw' className='menuh3'>Produtos</a>
        <a href='https://www.youtube.com/watch?v=Fy69pNzf9iE' className='menuh3'>Contato</a>
        <a href='https://www.youtube.com/watch?v=GktuAm_72HM' className='menuh3'>Sobre</a>
      </div>

      {/**
       *
       * 
      Ex 02:

      const Produtos = [
        {id: 1, nome: 'D-10', preco: 'R$: 40.000', className: 'id1'},
        {id: 2, nome: 'D-20', preco: 'R$: 60.000', className: 'id2'},
        {id: 3, nome: 'S-10', preco: 'R$: 80.000', className: 'id3'}
      ];

      <h2>Lista de Produtos:</h2>

      <ul>
         {Produtos.map((produto) =>(
          <li key={produto.id} className={produto.className}>
            {produto.nome} - {produto.preco}
          </li>
        ))}
      </ul>

      Ex 01:
      <div className='borda'>
        <h2 className='texto'>Card Simpes:</h2> 
        <NomeAluno className='texto'/>
        <Curso/>
        <button onClick={Botaover} className='botaoEstilo'>Ver Perfil</button>
      </div>
      */}

    </div> 
  )
}

export default App
