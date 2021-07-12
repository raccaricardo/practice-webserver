

const http = require('http');
http.createServer( (req, res) =>{

    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('Hola pagina');

    // res.writeHead(200, { 'content-type': 'application/JSON' });

    // const people = {
    //     id: 1,
    //     name: 'David'
    // }
    // res.write(JSON.stringify( people ));
    // // // res.setHeader(  'content-disposition', 'attachment; filename = lista.csv');
    
    // // // res.writeHead(200, { 'content-type': 'application/csv'});
    // // // res.write( 'id, nombre\n' );
    // // // res.write( '1, Fernando\n' );
    // // // res.write( '2, Maria\n' );
    // // // res.write( '3, Juan\n' );
    // // // res.write( '4, Pedro\n' );
    // // // res.write( '5, rICARDO\n' );


    res.end();
    // res.writeHead(404);
    // res.write('404 | not found');

/** Codes/status:
 * 201 : se acaba de crear algo
 * 404: error, no encontrado
 * (todos los 200 son mensajes exitosos)
 * 
 */
})
.listen(8080);
console.log("hola consola");