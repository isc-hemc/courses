const usersList = [];

const handler = (request, response) => {
    const method = request.method;
    const url = request.url;
    if (url === "/" && method === "GET") {
        return root(response);
    }
    if (url === "/users" && method === "GET") {
        return getUsers(response);
    }
    if (url === "/users/create" && method === "POST") {
        return createUser(request, response);
    }
}

const root = (response) => {
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>Welcome!</h1>");
    response.write("<form action='/users/create' method='POST'>");
    response.write("<input type='text' name='user'>");
    response.write("<button type='submit'>Send</button>");
    response.write("</form>");
    return response.end();
}

const getUsers = (response) => {
    response.setHeader("Content-Type", "text/html");
    usersList.forEach((user) => {
        response.write(`<ul><li>${user}</li></ul>`);
    })
    return response.end();
}

const createUser = (request, response) => {
    let body = [];
    request.on("data", chunck => {
        body.push(chunck);
    });
    request.on("end", () => {
        const user = Buffer.concat(body).toString().split("=")[1];
        if (user !== "") {
            usersList.push(user);
        }
    });
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>Adding new user.</h1>");
    return response.end()
}

module.exports = {
    handler
}