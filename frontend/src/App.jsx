import React from "react";
import "./App.css";
//Icons
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboard } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { BiVideoPlus } from 'react-icons/bi'
import { CgMenuGridR } from 'react-icons/cg'

function App() {
  return (
    <div>
      <header>
        <AiOutlineMenu id="menu" />
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
        </div>
        <BsFillMicFill id="mic-icon" />
        <BiVideoPlus id="vid-icon" />
        <CgMenuGridR id="menugrid-icon"/>
      </header>
    </div>
  );
}

export default App;