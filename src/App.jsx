import QRCode from 'qrcode'
import { useState } from 'react'

function App() {
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState()
  const GenerateQRCode = () =>{
    QRCode.toDataURL(url,{
      width: 800,
      margin: 2,
    }, (err,url) =>{
      if(err) return console.error(err)
      console.log(url)
      setQrcode(url)
    })
  }

  return (
    <div className="app">
        <h1>QR-CODE GENERATOR</h1>
        <input type="text" placeholder="https://www.example.com"
          value={url}
          onChange={(evt) => setUrl(evt.target.value)}/>

        <button onClick={GenerateQRCode}>PROMPT</button>
        {qrcode && <>
          <img src={qrcode}></img>
          <a href={qrcode} download="qrcode.png" id='download'>BACKUP</a>
        
        </>}

    </div>
  )
}

export default App
