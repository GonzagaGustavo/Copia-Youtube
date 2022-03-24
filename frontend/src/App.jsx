import React, { useState } from "react";
import "./App.css";
//Icons
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboard } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdHomeFilled } from 'react-icons/md'
import { MdOutlineExplore } from 'react-icons/md'
import { MdSubscriptions } from 'react-icons/md'
import { MdVideoLibrary } from 'react-icons/md'
import { RiHistoryFill } from 'react-icons/ri'
import { RiVideoLine } from 'react-icons/ri'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiScissors } from 'react-icons/fi'
import { BiChevronDown } from 'react-icons/bi'
import { AiOutlineYoutube } from 'react-icons/ai'

function App() {
const [aba, setAba] = useState(false)

function mudarAbas() {
  if(aba) {
    setAba(false)
  } else {
    setAba(true)
  }
}
  return (
    <div>
      <header>
        <AiOutlineMenu id="menu" onClick={mudarAbas} />
        <img src="youtube-logo-1-3.png" alt="" id="logo" />
        <div className="flex">
          <div className="input">
            <input type="text" id="search" placeholder="Pesquisar" />
            <MdKeyboard id="keyboard" />
          </div>
          <div>
            <button id="btn-search">
              <AiOutlineSearch id="search-icon" />
            </button>
          </div>
          <BsFillMicFill id="mic-icon" />
        </div>
        <BiVideoPlus id="vid-icon" />
        <CgMenuGridR id="menugrid-icon" />
        <IoMdNotificationsOutline id="icon" />
        <AiOutlineUserAdd id="icon" />
      </header>
    {aba ? (
      <div id="abas2">
        <div id="a-expand">
        <MdHomeFilled id="abas-icons2" />
        <p>Início</p>
        </div>
        <div id="a-expand">
          <MdOutlineExplore id="abas-icons2" />
          <p>Explorar</p>
        </div>
        <div id="a-expand">
          <p>Shorts</p>
        </div>
        <div id="a-expand">
          <MdSubscriptions id="abas-icons2" />
          <p>Inscrições</p>
        </div>
        <hr />
        <div id="a-expand">
          <MdVideoLibrary id="abas-icons2" />
          <p>Biblioteca</p>
        </div>
        <div id="a-expand">
          <RiHistoryFill id="abas-icons2" />
          <p>Histórico</p>
        </div>
        <div id="a-expand">
          <RiVideoLine id="abas-icons2" />
          <p>Seus videos</p>
        </div>
        <div id="a-expand">
          <AiOutlineClockCircle id="abas-icons2" />
          <p>Assistir mais tarde</p>
        </div>
        <div id="a-expand">
          <FiScissors id="abas-icons2" />
          <p>Seus clipes</p>
        </div>
        <div id="a-expand">
          <BiChevronDown id="abas-icons2" />
          <p>Mostrar mais</p>
        </div>
        <hr />
        <h4>MAIS DO YOUTUBE</h4>
        <div id="a-expand">
          <AiOutlineYoutube id="abas-icons2" />
          <p>Youtube Premium</p>
        </div>
      </div>
    ) : (
      <div id="abas">
        <div id="a">
          <MdHomeFilled id="abas-icons" />
          <p>Início</p>
        </div>
        <div id="a">
          <MdOutlineExplore id="abas-icons" />
          <p>Explorar</p>
        </div>
        <div id="a">
        
        <p>Shorts</p>
        </div>
        <div id="a">
          <MdSubscriptions id="abas-icons" />
          <p>Inscrições</p>
        </div>
        <div id="a">
          <MdVideoLibrary id="abas-icons" />
          <p>Biclioteca</p>
        </div>
      </div>
    )}
      
    </div>
  )
}

export default App;
