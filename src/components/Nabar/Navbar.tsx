import React, { useState } from 'react'
import logo from '../../assets/imgs/Frame 2.svg'
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Mobilni from '../Mobilni/Mobilni';
const Navbar: React.FC = () => {

  const link: string[] = ["Услуги", "О нас", "Блог", "Контакты"]
  const [open, setOpen] = useState<boolean>(false);

  const list: JSX.Element[] = link.map((item, index) => <li key={index}>{item}</li>);
  return (
    <>
      <header>
        <div className="container flex_space">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <nav>
            <ul>
              {list}
            </ul>
          </nav>
          <div className="icons_container">
            <div className="one_icons">
              <CiSearch />
            </div>
            <div className="one_icons">
              <CiHeart />
            </div>
            <div className="one_icons call">
              <IoIosCall />
            </div>
            <div className="one_icons btn_menu" onClick={() => setOpen(!open)}>
              <RxHamburgerMenu />
            </div>
            <select name="" id="">
              <option value="">RU</option>
              <option value="">EN</option>
            </select>
          </div>
        </div>
        {open ? <Mobilni setOpen={setOpen} list={list} /> : null}
      </header>
    </>
  )
}

export default Navbar