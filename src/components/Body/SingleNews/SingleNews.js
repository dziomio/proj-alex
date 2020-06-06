import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
    const [data, updateData] = useState(null);
    const requestUrl = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=4908ee40e5b045a28ed0bd079849bf34';
    useEffect( ()=> {
        const fetchdata = async () => {
            const response = await axios.get(requestUrl);
            updateData(response.data);
        }
        fetchdata();
    },[]);
    return data;
}

const singleLink = '/news/single-news/';

const SingleNews = props => {
    const result = useFetch();
    console.log(result);
    console.log(props.location.pathname);

    return result && result.articles.filter( item => singleLink + item.title.split(' ').join('-') === props.location.pathname ).map( (item, index) => (
        <div className="single-content">
            <div className="single-content-info">
                <div className="single-content-info-title">
                    {item.title}
                </div>
                
                <div className="single-content-info-content">
                    <a href={item.url} className="single-content-info-content-link">
                        {item.source.name}
                    </a>
                    <div className="single-content-info-content-date">
                        <div className="single-content-info-content-day">{item.publishedAt.split('').slice(8,10).join('')}</div>
                        <div className="single-content-info-content-month"> / {item.publishedAt.split('').slice(5,7).join('')}</div>
                    </div>
                </div>
            </div>

            <div className="single-content-content">
                <img src={item.urlToImage} alt="photo" className="single-content-content-img"/>
                <p className="single-content-content-text">
                    {item.content}
                </p>
            </div>
        </div>
        
    ));
}

export default SingleNews;