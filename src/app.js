import server from "./server/index.js";

const PORT = 8080;

server.listen(PORT, () => console.log(`Server listening at the port ${PORT}`));
