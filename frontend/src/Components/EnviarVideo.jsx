import React, { useState } from 'react'

function EnviarVideo() {
const [file, setFile] = useState()

    function upload() {
        console.log(file)
    }
  return (
    <div id="responsive-flex" className="margin-left2">
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button onClick={upload}>Upload</button>
    </div>
  )
}

export default EnviarVideo