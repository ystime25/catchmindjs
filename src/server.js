import { join } from "path";
import express from "express";
import socketIO from "socket.io";

const PORT = 5000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"));

const handleConnection = () => {
  console.log(`✅ Server online at: http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleConnection);

const io = socketIO(server);
