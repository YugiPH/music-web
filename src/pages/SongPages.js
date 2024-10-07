import React from 'react'
import PlaySong from '../components/PlaySong'
import { useParams } from 'react-router-dom'

const SongPages = () => {
    const params = useParams();
    const id = params.id;

    return (
        <PlaySong id={id} />
    )
}

export default SongPages;