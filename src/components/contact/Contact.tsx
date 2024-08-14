import React from 'react'
import './Contact.scss'

const Contact: React.FC = () => {
    return (
        <>
            <section id="contact" className='contact'>
                <div className="container">
                    <div className="big_wrapper">
                        <div className="one_wrapper">
                            <h2>Оцените или сдайте вашу недвижимость в аренду с легкостью</h2>
                            <p>Получите профессиональную оценку вашей недвижимости и начните зарабатывать, сдавая её в аренду. Наши эксперты помогут вам на каждом этапе</p>
                        </div>
                        <div className="two_wrapper">
                            <input type="text" placeholder="ФИО *" />
                            <input type="text" placeholder="Телефон *" />
                            <input type="text" placeholder='Email' />
                            <input type="text" placeholder='Сообщение' />
                            <button>Отправить</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact