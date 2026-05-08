import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

//Css:
import './Ex01Css/Estilos.css'
import './Ex02Css/Listas.css'

//Jsx:
import NomeAluno from './Ex01Css/NomeAluno'
import Curso from './Ex01Css/Curso'
import Botaover from './Ex01Css/BotaoVer'
import Listas from './Ex02Css/Listas';

function App() {


  return (
    <div>
      
      <h1>Exercicio 3 - Menu Horizontal</h1>
      

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
