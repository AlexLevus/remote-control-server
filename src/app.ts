import { config } from 'dotenv';

import http from "node:http";

config();

const PORT = Number(process.env.PORT) ?? 4000;

const server = http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        message: 'Hello'
    }));
});

server.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});