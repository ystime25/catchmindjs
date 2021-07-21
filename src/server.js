import express from "express";

const PORT = 5000;
const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.get("/", (req,res) => res.render("home"));

const handleConnection = () => {
    console.log(`✅ Server online at: http://localhost:${PORT}`)
}

app.listen(PORT, handleConnection);