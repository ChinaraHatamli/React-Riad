import './App.css'
import image from "../src/assets/Riad.jpg";
import github from "./assets/Vectorgithub.svg";
import twitter from "./assets/Vectortwitter.svg";
import dribble from "./assets/Vectordribble.svg"

function App() {
  
  return (
    <>
      <div className='container1'>
        <h3>Hello, I am Riyad</h3>
        <p>Graphic Designer, UI/UX Designer , Web Designer</p>
        <button className='btn'>Get in Touch</button>
      </div>

<div className='container2'> 
<img className='container2-image' src={github} alt="img" />
<img className='container2-image' src={twitter} alt="img" />
<img className='container2-image' src={dribble} alt="img" />
</div>


<div className='container3'>
<img className='container3-image' src={image} alt="img" />
</div>

    </>
  )
}

export default App
