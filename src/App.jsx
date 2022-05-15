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
        <p id='para'>Quick Response Code is a machine-readable code consisting of an array of black and white squares, typically used for storing URLs or other information for reading by the camera on a smartphone.</p>

        <input type="text" placeholder="https://www.example.com"
          value={url}
          onChange={(evt) => setUrl(evt.target.value)}/>

        <button onClick={GenerateQRCode}>PROMPT</button>
        {qrcode && <>
          <img src={qrcode}></img>
          <a href={qrcode} download="qrcode.png" id='download'>BACKUP</a>
          <p id='final'>QR-Code Generator by SURAJ SK</p>

        
        </>}
    </div>
  )
}

export default App
