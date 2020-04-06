import React from 'react'
import {Link} from "react-router-dom";

export const Card = () => (
    <div className='card'>
        <img src={''} alt={''} className='card-image-top'/>
        <div className='card-body'>
            <h5 className='card-title'>React JS</h5>
            <Link to={'/profile/'} className='btn btn-primary'>Открыть</Link>
        </div>
    </div>
)