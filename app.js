import dotenv from 'dotenv';

dotenv.config();
import express from 'express';

class App {
    constructor() {
        this.app = express();
        console.log('constructor');
    }

    middlewares() {

    }

    routes() {
        this.app.use('/');
    }
}

export default App().app;