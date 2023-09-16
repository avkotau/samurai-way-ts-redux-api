import React from 'react';
import preloader from "../../../assets/images/my-loader.svg";

let Preloader = () => {
    return (
        <div>
            <img src={preloader} alt='preloader'/>
        </div>
    );
}

export default Preloader;
