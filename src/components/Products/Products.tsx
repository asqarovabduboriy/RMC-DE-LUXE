import React, { useState } from 'react'
import './Produtcts.scss'
import { data } from '../data/index'


const Products: React.FC = () => {
    const [slice, setSlice] = useState<number>(3)

    const data_map: JSX.Element[] = data.slice(0, slice).map((item) => (
        <div className="product" key={item.id}>
            <div className="product_img">
                <img src={item.img} alt="" />
            </div>
            <div className="product_description">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")  }</span>
            </div>
        </div>
    ))

    return (
        <>
            <div className="container">
                <div className="wrapper_products">
                    {data_map}
                </div>
                 <button className='btn_load' disabled={slice >= data.length} onClick={() => setSlice(slice + 3)} >Load more</button>
            </div>
        </>
    )
}

export default Products