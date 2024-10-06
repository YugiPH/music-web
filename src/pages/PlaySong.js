import React from "react";
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import './pages.css';

const PlaySong = () => {
    return (
        <div className="audio-player-container">
            <AudioPlayer
                style={{ paddingLeft: "100px", paddingRight: "100px" }}
                autoPlay
                src="/musictest/NewEra.mp3"
                onPlay={e => console.log("onPlay")}
            />
        </div>
    )
}

export default PlaySong;