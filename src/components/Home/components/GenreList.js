import React from 'react';

export default ({genres,  onGenreClick}) => {
    return(
        <div>
           <h1 style={{fontSize: 30, color: '#a9a9a9'}}>Filters</h1>
            {genres.length ? genres.map(genre => (
                <div key={genre.id} onClick={() => onGenreClick(genre.name)} className='genreTab' style={{borderLeft: genre.isSelected ? '2px solid red' : 'none'}}>{genre.name}</div>
            )) : null}
        </div>
    );
}