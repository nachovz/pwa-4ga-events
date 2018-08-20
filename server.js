const express = require('express');
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');
const pathMatch = require('path-match');
const compression = require('compression');
const { join } = require('path');

const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const route = pathMatch();
const match = route('/event/:id');

app.prepare()
    .then(() => {
        
        const server = express();
        
        server.use(compression());
        
        server.get("*", (req, res) => {
            const parsedUrl = parse(req.url, true);
            const { pathname, query } = parsedUrl;
            const params = match(pathname);
            
            if (pathname === '/sw.js') {
                //res.setHeader('content-type', 'text/javascript');
                //createReadStream('./offline/serviceWorker.js').pipe(res);
                //createReadStream('./offline/serviceWorker.js');
                //const filePath = join( __dirname, '.next', pathname );
                //app.serveStatic(req, res, filePath);
                app.serveStatic(req, res, path.resolve('./static/sw.js'));
            } else {
                
                if(params !== false){
                    app.render(req, res, '/event', Object.assign(params, query));
                }else{
                    handle(req, res, parsedUrl);
                }
                return;
            }
        })
        .listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
})