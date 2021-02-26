import React from 'react';
import { List, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

import { MovieCard } from '.';

export default ({movies, search, handleSearch, onToggleFavorite}) => {
    return(
        <div style={{width: '88%', marginTop: 20}}>
           <h2 style={{fontSize: 18, color: '#a9a9a9'}}>Search Movie</h2>
            <Input value={search} onChange={handleSearch} placeholder='Search...' prefix={<SearchOutlined className='searchIcon' />} className='searchInput' />
            <div style={{margin: '20px 0px', fontSize: 14, color: '#a9a9a9'}}>{movies.length} movies found.</div>
            {movies.length ? (
                <List
                grid={{
                gutter: 20,
                xs: 1,
                sm: 1,
                md: 1,
                lg: 2,
                xl: 3,
                xxl: 5,
                }}
                dataSource={movies}
                renderItem={movie => (
                <List.Item key={movie.id}>
                    <MovieCard movie={movie} onToggleFavorite={onToggleFavorite} />
                </List.Item>
                )} />
            ) : <div>There are no movies found</div>} 
        </div>
    );
}