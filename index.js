/**
 * Created by Adrian on 15/10/2017.
 */
const express = require( 'express' );
const path = require( 'path' );
const app = express();
const port = 3300;
const bodyParser = require( 'body-parser' );

const server = require( 'http' ).createServer( app );
const pollsRouter = require( './api/routers/polls-router' );



app.get('/', (request, response) => {
    response.sendFile( path.join( __dirname,'index.html' ));
});

//Json Body parser
app.use(bodyParser.urlencoded( {extended: true } ) );
app.use(bodyParser.json());

//Middleware (register a route)
app.use('/polls', pollsRouter);

server.listen(port, () => {
    console.log("Servidor corriendo en el puerto", port)
});
