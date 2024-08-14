import React from 'react'
import './Footer.scss'
import logo from '../../assets/imgs/Frame 2.svg'
import footer from '../../assets/imgs/лого фулл 1.svg'
import { PiInstagramLogoThin, PiFacebookLogoThin } from "react-icons/pi";
import { LiaTelegram, LiaWhatsapp } from "react-icons/lia";

const Footer: React.FC = () => {
    const item_one: string[] = ["Купить", "Арендовать", "Продать", "Оценить"]

    const item_two: string[] = ["О нас",  "блог ", "кантакты", "Связаться"]

    const item_three: string[] = ["Квартиры", "Новостройки", "Дома и участки", "Коммерческая"]

    const item_four: string[] = ["Ипотечный калькулятор",
        "Инвестиции в недвижимость", " в Дубае"]

    const map_item_one: JSX.Element[] = item_one.map((item, index) => {
        return <li key={index}>{item}</li>
    })

    const map_item_two: JSX.Element[] = item_three.map((item, index) => {
        return <li key={index}>{item}</li>
    })

    const map_item_three: JSX.Element[] = item_two.map((item, index) => {
        return <li key={index}>{item}</li>
    })


    const map_item_four: JSX.Element[] = item_four.map((item, index) => {
        return <li key={index}>{item}</li>
    })


    return (
        <>
            <footer>
                <div className="container">
                    <div className="big_wrapper_footer">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="icons_wrapper">
                            <PiInstagramLogoThin />
                            <LiaTelegram />
                            <LiaWhatsapp />
                            <PiFacebookLogoThin />
                        </div>
                    </div>

                    <div className="line"></div>


                    <div className="wrapper_footer">
                        <ul>
                            <h3>Услуги</h3>
                            {map_item_one}
                        </ul>
                        <ul>
                            <h3>Недвижимость</h3>
                            {map_item_two}
                        </ul>
                        <ul>
                            <h3>Компания</h3>
                            {map_item_three}
                        </ul>
                        <ul>
                            <h3>Другое</h3>
                            {map_item_four}
                        </ul>

                    </div>


                    <div className="line" style={{ marginBottom: "33px" }}></div>

                     <div className="and_wrapper">
                        <p>2024 © RMC De Luxe real estate LLC. Все права защищены</p>
                        <img src={footer} alt="" />
                     </div>
                </div>
            </footer>
        </>
    )
}

export default Footer