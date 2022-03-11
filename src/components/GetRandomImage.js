import React from "react";


const httpGetAsync = (theUrl, callback) =>          // faster but not working
{
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

const httpGet = (theUrl) =>            // gets the HTTP url
{
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

const GetRandomImage = () => {
    const randomUrl = JSON.parse(httpGet('https://100k-faces.glitch.me/random-image-url'));
    return (
        <img src={randomUrl.url} alt="friend" />  
    )
}

export default GetRandomImage;