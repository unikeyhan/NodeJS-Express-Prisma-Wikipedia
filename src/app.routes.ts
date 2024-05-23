import express from 'express';

const mainRouter = express.Router();

mainRouter.get('/', (req,res,next)=>{
    res.locals.layout = "./layouts/panel/main.ejs";
    res.render("./pages/home/index.ejs");
})


export default mainRouter;