import React, { useContext } from "react";
import { Context } from "../Contexts/Context";

//Icons
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

function Aba() {
const {abas} = useContext(Context)

  return (
    <>
      {abas ? (
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
    </>
  );
}

export default Aba;
