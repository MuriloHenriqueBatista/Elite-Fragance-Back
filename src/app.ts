import express, {Request, Response,  Router } from 'express';

const app = express();
app.use(express.json());

const router: Router = Router();

router.get('/', (req: Request, res: Response) =>{
    res.send("Hello world (typescript)")
});

router.get('/hello', (req: Request, res: Response) =>{
    res.send("nodejs + express + sequelize")
});

app.use(router);

export default app;