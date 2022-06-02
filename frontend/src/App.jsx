import React, { useContext } from "react";
import "./App.css";
import Aba from "./Components/Aba";
import Videos from "./Components/Videos";
import { Context } from "./Contexts/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Icons
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboard } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import EnviarVideo from "./Components/EnviarVideo";

function App() {
  const { mudarAbas } = useContext(Context);
  return (
    <BrowserRouter>
      <div>
        <header>
          <AiOutlineMenu id="menu" onClick={mudarAbas} />
          <a href="https://youtubee2.netlify.app">
            <img src="youtube-logo-1-3.png" alt="" id="logo" />
          </a>
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
          <BiVideoPlus
            id="vid-icon"
            onClick={() => (window.location.href = "/enviarvideo")}
          />
          <CgMenuGridR id="menugrid-icon" />
          <IoMdNotificationsOutline id="icon" />
          <AiOutlineUserAdd id="icon" />
        </header>
        <main id="main">
          <Aba />
          <Routes>
            <Route path="/" element={<Videos />}></Route>
            <Route path="/enviarvideo" element={<EnviarVideo />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
