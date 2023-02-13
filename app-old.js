import http from 'http';

http.createServer( (req, res) => {

    /**
     * Para simular un tipo de respuesta (ejemplo: res.writeHead(404))
     * 404 = no encontrado
     * 200 = todo ok
     * 201 = se crea algo
     * 20x = es algo exitoso
     * 
     *  */

    // Ejercicio 1:
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // const person = {
    //     id: 1,
    //     name: 'Julian'
    // }
    // res.write(JSON.stringify(person));

    // Ejercicio 2:
    res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});
    
    res.write('id, name\n');
    res.write('1, Julian\n');
    res.write('2, Maria\n');
    res.write('3, Jose\n');
    res.write('4, Jesus\n');

    res.end();

}).listen(9090);

console.log('Listening in the port', 9090);
