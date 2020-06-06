import React from 'react';
import {NavLink} from 'react-router-dom';

const MenuItem = props => {
    return(
        <li>
            <NavLink to={props.link} exact>{props.title}</NavLink>
        </li>
    )
}

export default MenuItem;