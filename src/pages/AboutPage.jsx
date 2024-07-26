import React from 'react'
import snorlax from "../assets/GIF-SNORLAX-removebg-preview.png"
import ivan from "../assets/ivan.png"

function AboutPage() {
  return (
    <>
      <h2 className='title'>About</h2>

      <section className='about-container'>
        <div className='text-about'>
        <h4>Sobre el proyecto</h4>
        <p>The Old Fashioned ha sido el primer proyecto de desarrollo web que hemos hecho a escala completa implementando el uso de servidores json. Para su correcto desarrollo se ha requerido un trabajo conjunto de ambos combinado con el empleo de las nuevas tecnologías aprendidas en el último módulo. Ha sido un reto desafiante que nos ha permitido poner a prueba las habilidades adquiridas y seguir desarrollándolas para así poder aumentar nuestro nivel como desarrolladores.</p>
        </div>

        <section className='lists-container'>

          <div id='tecnologias' className='list-container'>
          <h5>Tecnologías empleadas</h5>
          <li className='listas listas-about'>
            <ul>HTML</ul>
            <ul>CSS</ul>
            <ul>JavaScript (ES6)</ul>
            <ul>React</ul>
            <ul>Bootstrap</ul>
            <ul>JSON server</ul>
            <ul>Git/GitHub</ul>
          </li>
          </div>

          <div id='skills'>
          <h5>Hard/Soft Skills desarrolladas</h5>
          <li className='listas listas-about'>
            <ul>Creación servidores JSON</ul>
            <ul>Trabajo en equipo</ul>
            <ul>Organización flujo de trabajo</ul>
            <ul>Empleo de ramas en git/github</ul>
            <ul>Implementación librerías de estilos</ul>
            <ul>Cumplimiento de plazos</ul>
          </li>
          </div>
        </section>
      </section>

      <hr />

      <section id='devs'>
        <div className='dev-container'>
          <img src={snorlax} alt="" />
          <div className="dev-text-container">
          <p>Mario Lázaro</p>
          <p>Web Developer</p>
          <a href="https://github.com/Zaro-dev">GitHub</a>
          <br />
          <a href="https://www.linkedin.com/in/mario-l%C3%A1zaro-redolar-a052ba24b/">LInkedIn</a>
          </div>
          
        </div>
        <div className='dev-container'>
        <img src={ivan} alt="" style={{width: "148px"}}/>
          <div className='dev-text-container'>
          <p>Iván Ballester</p>
          <p>Web Developer</p>
          <a href="https://github.com/ivanballester">GitHub</a>
          <br />
          <a href="https://www.linkedin.com/in/ivanballester/">LInkedIn</a>
          </div>
          
        </div>
      </section>
    </> 
  )
}

export default AboutPage