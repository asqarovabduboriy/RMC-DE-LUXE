import React from 'react'
import { IoMdClose } from 'react-icons/io'


interface Props {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    list: JSX.Element[]
}

const Mobilni: React.FC<Props> = ({ setOpen, list }) => {

    return (
        <>
            <div className='mobilni_bg' onClick={() => setOpen(false)}></div>
            <div className="mobilni_top_animation">
                <div className="close_btn">
                    <button onClick={() => setOpen(false)} ><IoMdClose /></button>
                </div>
                <ul>
                    {list}
                </ul>
            </div>
        </>
    )
}

export default Mobilni