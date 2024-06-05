import express from "express";

const app = express();
app.use(express.json());

app.get('/', (req, res)=> {

    return res.json({
        message : "Hey its on vercel"
    })
})

app.listen(3000, ()=> {
    console.log(`Server is up and running on http://${process.env.HOST || "localhost"}:${process.env.PORT || 8080}`)
})