import React from 'react'
import './video.css'
//Icons
import { BsThreeDotsVertical } from 'react-icons/bs'

function Videos() {
  return (
    <div id='responsive-flex'>
        <div id='video'>
            <div style={{position: "relative"}}>
            <img src="thumbnails/joao.webp" alt="" id='thumb-img' />
            <p id='temp'>10:25</p>
            </div>
            <div id='details'>
                <BsThreeDotsVertical id='icon-details' />
                <img src="channel-imgs/joaocae.jfif" alt="" id='channel-img' />
                <div style={{width: "100%"}}>
                <p id='title'>ROLOU TRAIÇÃO...</p>
                <p id='info-vid'>João Caetano</p>
                <p id='info-vid'>517 mil visualizações • há 19 horas</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Videos