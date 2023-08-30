import express from 'express';

export default class Server 
{
    public app: express.Application;
    public port: number;

    constructor (port: number) 
    {
        this.port = port;
        this.app = express();
    }

    init (): Server 
    {
        return new Server(this.port);
    }

    start (): void 
    {
        this.app.listen(this.port, () => console.log(`Service running on port ${this.port}`));
    }
}