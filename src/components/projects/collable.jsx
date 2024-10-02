import React from 'react';
import styles from '../../stylesheets/collable.module.css';



function Collable() {
    return (
        <div className={styles.background}>
            <h1>Collable</h1>
            <p>Collable is a web application that allows users to create and share collaborative playlists. Users can create a playlist, add songs to it, and share it with others. Users can also collaborate on playlists by adding songs to playlists created by others. Collable is built using React, Node.js, Express, and MongoDB.</p>
        </div>
    );
}

export default Collable;

