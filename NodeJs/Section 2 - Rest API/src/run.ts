import App from "./app";

const port: string = process.env.PORT || "8080";

let app: App = new App(port);

app.run();
