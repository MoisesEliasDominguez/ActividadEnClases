//Práctica server usando POST

const servidor = require('http');

const server = servidor.createServer((req, res) => {
    
    console.log('Incoming Request');
    console.log(req.method, req.url);

    if (req.method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            console.log(chunk);
            body += chunk;
        });

        req.on('end', () => {
            let userName = body.split
            ('=')[1];
            
            res.end(userName);
        });
    }
    
    else {
        res.setHeader('Content-Type', 'text/html');
    
        res.end('<form method="POST"><label>Username</label><input type="text" name="username"></input><br><button type="submit">Create User</button></form>');    
    }
});

server.listen(5001);