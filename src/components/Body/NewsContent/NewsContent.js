import React from 'react';
import Title from '../HomeContent/Title/Title.js';
import TotalNews from '../HomeContent/News/TotalNews.js';

const NewsContent = () => {
    return(
        <div className="news-content">
            <Title
                title={'Быть в курсе событий'}
            />
            <div className="news home-content__news">
                <TotalNews
                    amontNews={18}
                />
            </div>
        </div> 
    )
}

export default NewsContent;