import React from 'react';
import { Card } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons'; 

import { convertMinutes } from '../../../utils/helperFunctions';

export default ({movie, onToggleFavorite}) => {
    return(
        <Card style={{background: '#190000', border: 'none', borderRadius: 5}} hoverable >
            <div style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>{movie.title}</div>
            <div style={{color: '#a9a9a9', fontSize: 14}}>{convertMinutes(movie.duration)} / {movie.genre}</div>
            <div style={{color: 'red', display: 'flex', justifyContent: 'flex-end', fontSize: 20}}>{movie.isFavorite ? <HeartFilled onClick={() => onToggleFavorite(movie.id)} /> : <HeartOutlined onClick={() => onToggleFavorite(movie.id)} />}</div>
        </Card>
    );
}