import React from 'react'
import './Main.scss'
import { LiaMapSolid } from "react-icons/lia";

const Main: React.FC = () => {

    const item: string[] = ["Район","Цена","Тип жилья","Количество комнат","Срок сдачи"];

    const map_itme: JSX.Element[] = item.map((el, index) => <div className='item' key={index}>
        <select name={el}> <option>{el}</option> </select>
    </div>);

  return (
    <>
     <div className="container">
        <h1>Квартиры</h1>
          
        <div className="wrapper_item">
            <div className="wrapper_itmes">
            {map_itme}
            <div className="karta mobilni_karta"> <LiaMapSolid /> На карте </div>
            </div>
            <div className="karta_wrapper">
                <div className="karta"> <LiaMapSolid /> На карте </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Main