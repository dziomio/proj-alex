import React from 'react';
import HomeContent from './HomeContent/HomeContent.js';
import NewsContent from './NewsContent/NewsContent.js';
import ContactsContent from './ContactsContent/ContactsContent.js';
import SingleNews from './SingleNews/SingleNews.js';

import {Route} from 'react-router-dom';

const Body = () => {
    return(
        <div className="content">
            
            <Route
                path={'/'}
                exact
                component={HomeContent}
            />
            <Route
                path={'/news'}
                exact
                component={NewsContent}
            />

            <Route
                path={'/contacts'}
                exact
                component={ContactsContent}
            />

            <Route
                path={'/news/single-news'}
                component={SingleNews}
            />

          
        </div>
    )
}

export default Body;