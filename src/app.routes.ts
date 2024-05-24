import express from 'express';
import authRouter from './modules/auth/auth.routes';

const mainRouter = express.Router();


mainRouter.use('/auth', authRouter)
// mainRouter.get('/', (req,res,next)=>{
//     res.locals.layout = "./layouts/panel/main.ejs";
//     res.render("./pages/home/index.ejs");
// })


export default mainRouter;