import QRCode from 'qrcode'
import { useState } from 'react'

function App() {

  return (
    <div className="app">
        <h1>QR-CODE GENERATOR</h1>
        <input type="text" placeholder="https://www.example.com"></input>
        <button>Prompt</button>
        <img src=""></img>
    </div>
  )
}

export default App
