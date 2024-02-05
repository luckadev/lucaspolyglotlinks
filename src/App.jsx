import React from 'react'
import './App.css';

const BTN = (props = { url, title, description, icon }) => {
  return (
    <a href={props.url} className='btn-custom'>
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <img src={props.icon} alt="Icon" />
    </a>
  )
}

const App = () => {
  return (
    <div className='container'>
      <div className='header'>
        <img src="./assets/imgs/imgprofile.svg" alt="Minha foto de perfil" />
        <div>
          <h2>Lucas Ribeiro</h2>
          <p>Poliglota & Mentor de idiomas</p>
          <img src="./assets/imgs/flags.svg" alt="" />  
        </div>
      </div>

      <div className='principal'>
        <h4>Principal</h4>
        {/* Criar um component BTN */}
        <BTN url="" title="Pack Starter" description="Comece a aprender + de 4 idiomas de graça com o Pack Starter" icon="./assets/imgs/svgs/Link in Bio/Vector.svg" />
        <BTN url="" title="Comunidade" description="Faça amizades com outros poliglotas que tem a mesma paixão por idiomas." icon="./assets/imgs/svgs/Link in Bio/Subtract.svg" />
        <BTN url="" title="Planner Idiomas" description="Um Planner para quem deseja aprender um novo idioma do zero de maneira organizada e eficiente." icon="./assets/imgs/svgs/Link in Bio/Vector-1.svg" />
      </div>

      <div className='outros'>
        <h4>Outros</h4>
        {/* Criar um component BTN */}
        <BTN url="" title="Telegram" description="Fique sabendo em primeira mão sobre os posts!" icon="./assets/imgs/svgs/Link in Bio/Vector-2.svg" />
        <BTN url="" title="Livros" description="Livros que eu recomedo ler!" icon="./assets/imgs/svgs/Link in Bio/Group.svg" />
      </div>

    </div>
  )
}

export default App;