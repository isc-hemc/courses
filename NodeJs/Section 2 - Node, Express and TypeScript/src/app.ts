import bodyParser from "body-parser";
import express from "express";

class App {
    private app: express.Application;
    private port: string;

    constructor(port: string) {
        this.app = express();
        this.port = port;
        this.config();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    public run(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on port: ${this.port}`);
        });
    }
}

export default App;