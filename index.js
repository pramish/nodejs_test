const { createServer } = require("http");
const PORT = process.env.PORT || 9999;
const app = require("./server");

const server = createServer(app);

server.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
