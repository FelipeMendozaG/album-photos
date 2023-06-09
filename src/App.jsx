import React from 'react'
import './assets/home.css';
import './assets/theme.css';
import Photo from './components/Photo';
import ListPhoros from './db/photos'
function App() {
  const {photos} = ListPhoros; 
  return (
    <>
      <div className="bg-black text-white mt-0" data-bs-spy="scroll" data-bs-target="#navScroll">
        <nav id="navScroll" className="navbar navbar-dark bg-black fixed-top px-vw-5">
          <div className="container">
            <h5>Feliz Aniversario</h5>
          </div>
        </nav>
      </div>
      <br />
      <br />
      <br />
      <div>
        {
          photos.map( (item,index)=><Photo image={item} key={index}/> )
        }
      </div>
    </>
  )
}

export default App
