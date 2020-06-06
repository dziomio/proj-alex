import React, { useState, useEffect } from 'react';
import axios from 'axios';
import News from './News';


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

const TotalNews = props => {
    const result = useFetch();
    console.log(result);
    result && result.articles.map( (item, index) => item.source.id = index+1);
   
    return result && result.articles.filter( item => item.source.id <= props.amontNews ).map( (item, index) => (
        
        <News
            key={index}
            title={item.title}
            link={item.url}
            linkName={item.source.name}
            day={item.publishedAt.split('').slice(8,10).join('')}
            mounth={item.publishedAt.split('').slice(5,7).join('')}
            linkTitle={item.title.split(' ').join('-')}
        />
    ));

}

export default TotalNews;


