import React from "react";
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';

const PlaySong = ({ id }) => {
    return (
        <div style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            zIndex: "1000"
        }}>
            <AudioPlayer
                style={{ paddingLeft: "100px", paddingRight: "100px" }}
                autoPlay
                src={`/${id}`}
                onPlay={e => console.log("onPlay")}
            />
        </div>
    )
}

export default PlaySong;