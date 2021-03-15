const { json } = require("express");
const express = require( "express" );
const app = express();

const PORT = process.env.PORT || 8080;

app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/public/index.html" );
} );

app.listen( PORT, ( error ) => {
    if ( error ) {
        console.log( error );
    }
    console.log( "Server running on port:", Number( PORT ) );
} );