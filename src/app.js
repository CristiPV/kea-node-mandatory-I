const { json } = require("express");
const express = require( "express" );
const app = express();

app.use( express.static( "public" ) );

const PORT = process.env.PORT || 8080;

app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/public/index.html" );
} );

app.get( "/home", ( req, res ) => {
    res.redirect( "/" );
} );

app.listen( PORT, ( error ) => {
    if ( error ) {
        console.log( error );
    }
    console.log( "Server running on port:", Number( PORT ) );
} );