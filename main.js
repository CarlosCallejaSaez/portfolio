import './style.css'

const data= {
  name:"Carlos Calleja Sáez",
  image:"/assets/developer.png",
  job:"web developer",
  github:"https://github.com/CarlosCallejaSaez",
  linkedin:"www.linkedin.com/CarlosCallejaSaez",
  description: "Profesional capacitado y versátil especializado en la creación y el mantenimiento de sitios web y aplicaciones web. Mi principal objetivo es diseñar, desarrollar e implementar soluciones tecnológicas que sean atractivas, funcionales y eficientes."


}


// Lee los comentarios de este código para entender lo que hace 🔴
document.querySelector('#home').addEventListener('click', (ev) => {
  ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
  const linkHref = ev.target.href; // Almacenamos la URL en una constante
  console.log('El link apunta a:', linkHref ); // La mostramos en consola
  // Añade aquí tu lógica! 🔽
  renderHome()
  })

  document.querySelector('#experience').addEventListener('click', (ev) => {
    ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
    const linkHref = ev.target.href; // Almacenamos la URL en una constante
    console.log('El link apunta a:', linkHref ); // La mostramos en consola
    // Añade aquí tu lógica! 🔽
    renderExperience()
    })

document.querySelector('#projects').addEventListener('click', (ev) => {
      ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
      const linkHref = ev.target.href; // Almacenamos la URL en una constante
      console.log('El link apunta a:', linkHref ); // La mostramos en consola
      // Añade aquí tu lógica! 🔽
      renderProjects()

      })


      const divHTML = document.querySelector(".container")

const renderHome= () => {
    divHTML.innerHTML = ` 
    <div id="home">
    <h1>${data.name}</h1>
    <img src="${data.image}" alt="${data.name}" id="image">
    <h2 id="job">${data.job}</h2>
    
    
    <p id="description">${data.description}</p>
    
    <a href="${data.github}" id="github" >Github</a>
    
    <a href="${data.linkedin}" id="linkedin" >Linkedin</a>
    </div>`
  }

const renderExperience = () =>{
  divHTML.innerHTML = ` 
  <div id="experience">
  <h1>Proyectos </h1>
  
  
<ul>
<li><a href="https://www.paginaerror.com"> Página de error</a><img src="/assets/error.webp" alt="error"></li>
<li><a href="https://www.starbucksrewards.com"> Starbucks Rewards </a><img src="/assets/starbucks.webp" alt="starbucks"></li>
<li><a href="https://www.tictactoe.com">Tic-tac-toe</a><img src="/assets/tictac.webp" alt="tic tac toe"></li>
<li><a href="https://www.todo.com"> ToDo </a><img src="/assets/todo.webp" alt="todo"></li>
<li><a href="https://www.aplicaciontiempo.com"> Aplicación del tiempo </a><img src="/assets/tiempo.webp" alt="aplicacion tiempo"></li>

</ul>

  
  </div>`
}

const renderProjects= () =>{
  divHTML.innerHTML = ` <ul>
  <li><a href="https://www.empresa1.com"><h2>empresa1</h2><img src="assets/empresa1.webp" alt=""><h3>2015-2018</h3><p>dafd</p><p>dsafdsfa</p></a></li>
  <li><a href="https://www.empresa2.com"><h2>empresa2</h2><img src="assets/empresa2.jpeg" alt=""><h3>2018-2019</h3><p>dafd</p><p>dsafdsfa</p></a></li>
  <li><a href="https://www.empresa3.com"><h2>empresa3</h2><img src="assets/empresa3.jpg" alt=""><h3>2019-2022</h3><p>dafd</p><p>dsafdsfa</p></a></li>
  <li><a href="https://www.empresa4.com"><h2>empresa4</h2><img src="assets/empresa4.png" alt=""><h3>2022-2023</h3><p>dafd</p><p>dsafdsfa</p></a></li>
  <li><a href="https://www.empresa5.com"><h2>empresa5</h2><img src="assets/empresa5.webp" alt=""><h3>2023-actualidad</h3><p>dafd</p><p>dsafdsfa</p></a></li>

</ul>
 `
}

renderHome()