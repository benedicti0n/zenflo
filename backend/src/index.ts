import express, { Request, Response } from "express"

const app = express()

app.get("/", (req: Request, res: Response) => {
    res.send("hello benediction server here")
})

app.listen("8080", () => {
    console.log("Server running on port 8080");
})