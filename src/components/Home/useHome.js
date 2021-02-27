//THIS FILE IS FOR LOGIC INSIDE THE HOME COMPONENT
import {useState, useEffect} from 'react';
// import axios from 'axios';

import { GENRES, MOVIES } from './components/DATA';

export default () => {

    //Component State
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState(GENRES);
    const [searchText, setSearchText] = useState('');
    const [activeGenre, setActiveGenre] = useState(0);
    const [showFiltered, setShowFiltered] = useState(false);
    const [isApiLoading, setIsApiLoading] = useState(false);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isFilterGenre, setIsFilterGenre] = useState(false);

    //Should Call APIs here on first call
    useEffect(() => {
        callApi();
    }, [])

    //ComponentDidUpdate whenever we want data to be filtered in genre
    useEffect(() => {
        if(isFilterGenre) {
            filterOnGenre();
            setIsFilterGenre(false)
        }
    }, [isFilterGenre])

    //When we want filter data on searchbar
    useEffect(() => {
        filterOnSearch()
    }, [searchText])

    //For Calling api (But it's showing CORS error)
    const callApi = async () => {
        setIsApiLoading(true)
        //API THROWING CORS ERROR FROM LOCALHOST
        setMovies(MOVIES.map((movie, i) => {return {id: i+1, ...movie, isFavorite: false}}))
        setIsApiLoading(false)
    }

    //Handle on genre click
    const onHandleGenreClick = (genre) => {
        setActiveGenre(genre);
        setGenres(prevGenres => prevGenres.map(gen => {return gen.name === genre ? {...gen, isSelected: true} : {...gen, isSelected: false}}))
        setIsFilterGenre(true)
    }

    //On toggle favorite heart icon
    const onToggleFavorite = (id) => {
        if(showFiltered) {
            //Updating in filtered array too if we're in filter mode
            setFilteredMovies(prevMovies => prevMovies.map(movie => {return movie.id === id ? {...movie, isFavorite: !movie.isFavorite} : {...movie}}))
        } 
        setMovies(prevMovies => prevMovies.map(movie => {return movie.id === id ? {...movie, isFavorite: !movie.isFavorite} : {...movie}}))
    }

    //Genre filter
    const filterOnGenre = () => {
        if(activeGenre !== 'All') {
            let filteredMovies = movies.filter(movie => movie.genre === activeGenre)
            setFilteredMovies(filteredMovies)
            setShowFiltered(true);
            return;
        } else {
            setShowFiltered(false);
            setFilteredMovies([])
        }
    }

    //Search Input
    const onHandleSearch = (e) => {
        setSearchText(e.target.value)
    }


    //Search filter
    const filterOnSearch = () => {
        if (searchText.length >= 3) {
            let filteredItems = movies.filter((movie) => {
                return movie.title.toLowerCase().includes(searchText.toLowerCase());
            });
            setFilteredMovies(filteredItems)
            setShowFiltered(true);
        } else {
            setFilteredMovies([])
            setShowFiltered(false);
        }
    }

    return {
        //Variables or Constants
        genres,
        movies,
        searchText,
        showFiltered,
        filteredMovies, 

        //Methods
        onHandleSearch,
        onToggleFavorite,
        onHandleGenreClick,
    };
};
