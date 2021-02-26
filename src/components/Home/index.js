import React from 'react';
import { Layout } from 'antd';

import './style.css';
import useHome from './useHome';
import { GenreList, MovieList } from './components';

const { Content } = Layout;

export default () => {
    const {
        genres,
        movies,
        searchText,
        showFiltered,
        filteredMovies,

        onHandleSearch,
        onToggleFavorite,
        onHandleGenreClick
    } = useHome();

    return(
        <Content className='contentContainer'>
            <GenreList genres={genres} onGenreClick={onHandleGenreClick} />
            <MovieList search={searchText} handleSearch={onHandleSearch} movies={showFiltered ? filteredMovies : movies} onToggleFavorite={onToggleFavorite} />
        </Content>
    );
}