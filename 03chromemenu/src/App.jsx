import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './script.js'

function App() {
  const [isActive, setActive] = useState(false)
  const [marginTopp, setMarginTop] = useState(0)
  const menu = document.getElementById('mainmenu')
  function remProp(e) {
    e.stopPropagation();
  }

  useEffect(() => {
    const btnup = document.getElementById('btnup')
    let btndown = document.getElementById('btndown')
    if (marginTopp === 0) {
      btndown.style.display = 'none'
    }
    else if (marginTopp < 0 && marginTopp > -301) {
      btndown.style.display = 'block'
       btnup.style.display = 'block'
    }
     if (marginTopp === -300) {
      btnup.style.display = 'none'
    }

  }, [marginTopp])

  function btnUp() {
    const maincont = document.getElementsByClassName('maincontent')
    if (marginTopp > -300) {
      const mt = marginTopp - 100
      setMarginTop(mt)
    }
  }

  function btnDown() {
    const maincont = document.getElementsByClassName('maincontent')
    if (marginTopp < 0) {
      const mt = marginTopp + 100
      setMarginTop(mt)
    }
  }

  window.onclick = (e) => {
    if (!e.target.matches('.btn')) {
      if (isActive) {
        menu.style.display = 'none'
        setActive(false)
      }
    }
    else {
      handleClick
    }
  }

  const handleClick = (e) => {
    let menu1 = document.getElementById('mainmenu')
    menu1.style.display = 'block'
    if (isActive) {
      menu1.style.display = 'none'
      setActive(false)
    }
    else {
      menu1.style.display = 'block'
      setActive(true)
    }
  }

  return (
    <>
      <h2>chrome menu</h2>
      <button className='btn' onClick={handleClick}>:::</button>
      <div onClick={remProp} id='mainmenu' >
        <div className='maincontent' style={{ marginTop: `${marginTopp}px` }}>
          <button onClick={btnUp} id='btnup'>&#8593;</button>
          <div className='menudiv'> <h2>chrome menu 1</h2></div>
          <div className='menudiv'> <h2>chrome menu 2</h2></div>
          <div className='menudiv'> <h2>chrome menu 3</h2></div>
          <div className='menudiv'> <h2>chrome menu 4</h2></div>
          <div className='menudiv'> <h2>chrome menu 5</h2></div>
          <div className='menudiv'> <h2>chrome menu 6</h2></div>
          <div className='menudiv'> <h2>chrome menu 7</h2></div>
          <div className='menudiv'> <h2>chrome menu 8</h2></div>
          <div className='menudiv'> <h2>chrome menu 9</h2></div>
          <div className='menudiv'> <h2>chrome menu 10</h2></div>
          <button id='btndown' onClick={btnDown} >&#8595;</button>
        </div>
       
      </div>

    </>
  )
}

export default App
