import { getFizzBuzz } from "@services/fizzBuzz-service";
import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import {  BadRequest} from '@shared/errors';



// Constants
const router = Router();
const {  OK } = StatusCodes;
/**
 * Get fizzBuzz.
 */
 router.get('/:count', async (req: Request, res: Response) => {
    const { count } = req.params;
    const fizBuzzCount = +count;
    if(typeof fizBuzzCount !=='number'){
        throw  new BadRequest();
    }
    const fizBuzz = await getFizzBuzz(fizBuzzCount)
    return res.status(OK).json({fizBuzz});
});

export default router;