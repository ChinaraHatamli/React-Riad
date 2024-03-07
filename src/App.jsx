import './App.css'
import image from "../src/assets/Riad.jpg";
import github from "./assets/Vectorgithub.svg";
import twitter from "./assets/Vectortwitter.svg";
import dribble from "./assets/Vectordribble.svg"

function App() {
  
  return (
    <>
      <div className='container'>
        <h3>Hello, I am Riyad</h3>
        <p>Graphic Designer, UI/UX Designer , Web Designer</p>
        <button className='btn'>Get in Touch</button>
      </div>

<div className='main'> 
<img className='main-image' src={github} alt="img" />
<img className='main-image' src={twitter} alt="img" />
<img className='main-image' src={dribble} alt="img" />
</div>


<div className='riad'>
<img className='riad-image' src={image} alt="img" />
</div>

    </>
  )
}

export default App
