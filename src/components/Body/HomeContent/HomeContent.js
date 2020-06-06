import React from 'react';
import Title from './Title/Title.js';
import TotalNews from './News/TotalNews.js';
import {NavLink} from 'react-router-dom';


const HomeContent = () => {
    return(
        <div className="home-content">
            <Title
                title={'Всегда свежие новости'}
            />
            <div className="news home-content__news">
                <TotalNews
                    amontNews={6}
                />
            </div>

            <div className="news__total">
               <NavLink to={'/news'} exact>Быть в курсе событий</NavLink>
            </div>

        </div> 
    )
}

export default HomeContent;