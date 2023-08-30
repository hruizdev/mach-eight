import {Request, Response, Router} from 'express';
import {SumController} from '../controller/sum.controller';


const router = Router();
const sumController = new SumController();
router.post('/get-sum', (req: Request, res: Response) => 
{
    const {list, sum} = req.body;
    const result = sumController.getSum(list, sum);
    res.send(JSON.stringify(result));
});

export default router;