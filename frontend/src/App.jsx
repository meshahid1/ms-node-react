import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PostComponent from './components/PostComponent.jsx'
import PostListComponent from './components/PostListComponent.jsx'
import './App.css'

function App() {
  const [childData, setChildData] = useState("");
  const setTheChildData = (arg)=>{
    setChildData(arg);
  }
  return (
      <div>
        <PostComponent passChildData={setTheChildData} />
        <br />
        <PostListComponent postTitle={childData} />
      </div>
  )
}

export default App
