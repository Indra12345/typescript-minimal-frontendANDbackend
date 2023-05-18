

import  express, {Request, Response, Application}  from 'express';

const app: Application = express();
const PORT = process.env.PORT || 3000


app.get("/test" , (req: Request, res: Response)  => {
    res.send("test apitest.......")
})


app.get("/a" , (req: Request, res: Response)  => {
    res.send("test api234234234.......")
})

app.listen(PORT, ():void  => {
    console.log( `running on ${PORT} .........`)
})

