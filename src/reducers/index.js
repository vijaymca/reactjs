
import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        {
            title: 'No scrubs', duration: '4.05'
        },
        {
            title: 'Macarina', duration: '3.05'
        },
        {
            title: 'Titanic', duration: '2.05'
        },
        {
            title: 'English', duration: '1.05'
        }
    ];
};


const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};


export default combineReducers({ songs: songsReducer, selectedSong: selectedSongReducer });


