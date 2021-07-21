import express from "express";

const PORT = 5000;
const app = express();

const handleConnection = () => {
    console.log(`✅ Server online at: http://localhost:${PORT}`)
}

app.listen(PORT, handleConnection);