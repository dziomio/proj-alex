import React from 'react';
import {NavLink} from 'react-router-dom';



const News = props => {
   
    return (
        <div className="news__element">
            <div className="news__element-title-content">
                <div className="news__element-title">
                    <NavLink to={'/news/single-news/'+ props.linkTitle} exact> {props.title}</NavLink>
                </div>
            </div>
            
            <div className="news__element-content">
                <a href={props.link} className="news__element-content-link">
                    {props.linkName}
                </a>
                <div className="news__element-content-date">
                    <div className="news__element-content-day">{props.day}</div>
                    <div className="news__element-content-month"> / {props.mounth}</div>
                </div>
            </div>
        </div>
    )
}

export default News;