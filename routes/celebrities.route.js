const router = require('express').Router();
const Celebrity = require("../models/Celebrity.model");

//All routes for celebrities
//Get Route to create a user

router.get('/celebrities/create', (req, res, next) =>
{
    res.render('celebrities/new-celebrities.hbs')
});

//POST Route to create a user

router.post('/celebrities/create', (res, req, next) =>
{
    //Data From the form
    celeb = req.body;
    //create a Clebrity
    Celebrity.create(celeb)
    .then(() =>{
        res.redirect('/celebrities');
    })
    .catch((err) => res.render('celebrities/new-celebrities.hbs'));
})




//Export all routes
module.exports = router;