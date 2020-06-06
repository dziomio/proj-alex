import React from 'react';

const ContactsContent = () => {
    return(
        <div className="contact-content">
            <div className="contact-content__info">
                <a href="tel:393884422539" className="contact-content__info-phone">
                    +39 (388) 44 22 539
                </a>
                <div className="contact-content__info-name">
                    Yevheniy Kaduk
                </div>
                <a href="mailto:sartoriamodo@gmail.com" className="contact-content__info-link">
                    sartoriamodo@gmail.com
                </a>
                <div className="contact-content__info-position">
                    JavaScript разработчик
                </div>
                <div className="contact-content__info-skills">
                    ES5, ES6, React
                </div>
            </div>
            <img src="https://www.bce.lu/wp-content/uploads/2018/03/Software_developper-Stock.jpg" alt="web star" className="contact-content__img"/>
        </div> 
    )
}

export default ContactsContent;