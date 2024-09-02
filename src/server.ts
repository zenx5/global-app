const next = require("next");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const dev = process.env.NODE_ENV !== "production";
const hostname = dev ? "localhost" : "https://global-app-teal.vercel.app";
const port = dev ? 3000 : 80;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket:any) => {
    socket.on("message", (msg:string) => {
        io.emit("message", msg);
    });
    socket.on("list", (list:string[]) => {
        io.emit("new", list);
    });
    io.emit("new", [socket.id])
  });


  httpServer
    .once("error", (err:any) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});