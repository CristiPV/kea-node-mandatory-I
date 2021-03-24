const express = require( "express" );
const app = express();

app.use( express.static( "src/public" ) );

const PORT = process.env.PORT || 8080;

app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/public/index.html" );
} );

app.get( "/home", ( req, res ) => {
    res.redirect( "/" );
} );

app.get( "/javascript", ( req, res ) => {
    res.sendFile( __dirname + "/public/javascript/javascript.html" );
} );

app.get( "/npm", ( req, res ) => {
    res.sendFile( __dirname + "/public/npm/npm.html" );
} );

app.get( "/express", ( req, res ) => {
    res.sendFile( __dirname + "/public/express/express.html" );
} );

app.listen( PORT, ( error ) => {
    if ( error ) {
        console.log( error );
    }
    console.log( "Server running on port:", Number( PORT ) );
} );