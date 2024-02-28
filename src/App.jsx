import { Button } from '@mui/material'
import './App.css'
import { useEffect, useState} from 'react'



function App() {

  const [color,setColor] = useState('red')


  const handleClick = (color) =>{
    setColor(color);
  };



  return (
    <div style={{width:"100%",height:"100vh"}} className="d-flex justify-content-center align-items-center bg-dark">
      <div className=' p-5 rounded' style={{width:'600px',height:'500px',backgroundColor:color,color:'white'}} >
        <h1>Backgrond Color Changer</h1>
        <div>
        <Button onClick={()=>handleClick('red')} style={{marginRight:'20px',borderRadius:'50px',backgroundColor:'red',color:'white'}} variant="contained">RED</Button>
        <Button onClick={()=>handleClick('blue')} style={{marginRight:'20px',borderRadius:'50px',backgroundColor:'blue',color:'white'}} variant="contained">BLUE</Button>
        <Button onClick={()=>handleClick('green')} style={{marginRight:'20px',borderRadius:'50px',backgroundColor:'green',color:'white'}} variant="contained">GREEN</Button>
        <Button onClick={()=>handleClick('purple')} style={{marginRight:'20px',borderRadius:'50px',backgroundColor:'purple',color:'white'}} variant="contained">PURPLE</Button>
          
        </div>
        </div>
    </div>
  )
}

export default App
