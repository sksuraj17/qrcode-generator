import QRCode from 'qrcode'
import { useState } from 'react'

function App() {
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState()
  const GenerateQRCode = () =>{
    QRCode.toDataURL(url, (err,url) =>{
      if(err) return console.error(err)
      console.log(url)
      setQrcode(url)
    })
  }

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
