import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

//Css:
import './Ex01Css/Estilos.css'
import './Ex02Css/Listas.css'
import './Ex03Css/Menu.css'
import './Ex04Css/Condicional.css'
import './Ex05Css/ListaFilmes.css'
import './Ex07Css/Usuario.css'
import './Ex08Css/Grid.css'
import './Ex09Css/DiferentesBoto.css'

//Jsx:
import NomeAluno from './Ex01Css/NomeAluno'
import Curso from './Ex01Css/Curso'
import Botaover from './Ex01Css/BotaoVer'
import Listas from './Ex02Css/Listas';
import Email from './Ex07Css/Email'
import Nome from './Ex07Css/Nome'
import Telefone from './Ex07Css/Telefone'
import BotaoSucesso from './Ex09Css/BotaoSucesso'
import BotaoErro from './Ex09Css/BotaoErro'
import BotaoAviso from './Ex09Css/BotaoAviso'

function App() {

  

  return (
    

    <div>

      <h1>Exercicio 10 - Desadio Completo</h1>
      

      {/**
      
      Ex09: 
      
      <h1>Exercício 9 - Botões Dinâmicos: </h1>

      <div className='campobotoes'>

        <button onClick = {BotaoSucesso} className={'sucesso'}>Sucesso</button>

        <button onClick = {BotaoErro} className='erro'>Erro</button>

        <button onClick = {BotaoAviso} className='aviso'>Aviso</button>

      </div>


      Ex08: 

      <h1>Exercicio 8 - Grid de Produtos: </h1>

      <div className = 'gridContainer'>

        <div className = 'card'>
          <h3>Produto 1</h3>
          <p>Descrição do Produto 1</p>
        </div>

        <div className = 'card'>
          <h3>Produto 2</h3>
          <p>Descrição do Produto 2</p>
        </div>

        <div className = 'card'>
          <h3>Produto 3</h3>
          <p>Descrição do Produto 3</p>
        </div>

        <div className = 'card'>
          <h3>Produto 4</h3>
          <p>Descrição do Produto 4</p>
        </div>

        <div className = 'card'>
          <h3>Produto 5</h3>
          <p>Descrição do Produto 5</p>
        </div>

        <div className = 'card'>
          <h3>Produto 6</h3>
          <p>Descrição do Produto 6</p>
        </div>

        <div className = 'card'>
          <h3>Produto 7</h3>
          <p>Descrição do Produto 7</p>
        </div>

        <div className = 'card'>
          <h3>Produto 8</h3>
          <p>Descrição do Produto 8</p>
        </div>

        <div className = 'card'>
          <h3>Produto 9</h3>
          <p>Descrição do Produto 9</p>
        </div>

      </div>
       * 
      
      Ex07: 

      <h1>Exercício 7 — Tela de Usuários</h1>
      <div className='container'>
        <div className='box'>
          <Nome/>
        </div>

        
        <div className='box1'>
          <Email/>
        </div>

        <div className='box2'>
          <Telefone/>
        </div>
      </div>

      Ex 06:
      
      <h1>Exercício 6 - CSS Inline:</h1>
      <h2 style={{color: 'blue', fontSize: '40px', backgroundColor: 'red', padding: '10px'}}>Um título</h2>
      <h3 style={{color: 'red', fontSize: '20px', backgroundColor: 'blue', padding: '10px'}}>Um subtítulo</h3>

      Ex 05:

      const Filmes = [
        {id: 1, nome: 'Cabo do medo', categoria: 'Suspense', nota: 8.0},
        {id: 2, nome: 'Senhor dos Aneis', categoria: 'Aventura', nota: 8.6},
        {id: 3, nome: 'Corra que a Polica vem Ai', categoria: 'Comedia', nota: 8.0}
      ]
      <h2>Exercício 5 — Lista de Filmes</h2>
      <div>
        <ul className='lista'>
          {Filmes.map ((filme) => <li className='item'>{filme.nome} - {filme.categoria} - {filme.nota}
            <button className='botao'>Assistir</button>
          </li>)}
          
        </ul>  
      </div>

       * 
      Ex 04:
      const Alunos = [
        {id: 1, nome: 'Ana', nota: 10.0},
        {id: 2, nome: 'Bruna', nota: 7.0},
        {id: 3, nome: 'Carla', nota: 5.0},
        {id: 4, nome: 'Daniele', nota: 6.0}
      ]

      <h2>Exercicio 4 - CSS Condicional</h2>
      <ul>
        {Alunos.map((aluno)=> (
          <li className={aluno.className}>
            {aluno.nome} - Nota: <span className={aluno.nota >= 7 ? 'aprovado' : 'reprovado'}>{aluno.nota}</span>
            
          </li>
        ))}
      </ul>


       *
       * 
      Ex 03:

      <h2>Exercício 3 — Menu Horizontal</h2>
      <div className='menu'>
        <a href='https://www.youtube.com/watch?v=Wu3Y_v8JeE8' className='menuh3'>Home</a>
        <a href='https://www.youtube.com/watch?v=WnOWVSYNMFw' className='menuh3'>Produtos</a>
        <a href='https://www.youtube.com/watch?v=Fy69pNzf9iE' className='menuh3'>Contato</a>
        <a href='https://www.youtube.com/watch?v=GktuAm_72HM' className='menuh3'>Sobre</a>
      </div>


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
