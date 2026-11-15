// Railway runs whatever `npm start` / the start command runs and gives you a PORT env var.
require("node:http").createServer((_req, res) => res.end("Hello from Railway")).listen(process.env.PORT || 3000);
