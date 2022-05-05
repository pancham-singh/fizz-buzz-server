import { Router } from 'express';
import fizzBuzzRouter from './fizzBuzz-router';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/fizz-buzz', fizzBuzzRouter);


// Export default.
export default baseRouter;
