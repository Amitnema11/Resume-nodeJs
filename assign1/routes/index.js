var express = require('express');
var router = express.Router();
const Resume = require("../models/userSchema")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Resume-builder' });
});

router.get('/create', function(req, res, next) {
  res.render('create', { title: 'create' });
});



router.post('/creater', function(req, res, next) {

Resume.create(req.body)
.then(()=>{
  res.redirect("/list")
})
.catch((err)=>{
  res.send(err)
})
});

router.get('/list', async function(req, res, next) {
  try{
    const LOCALDB = await Resume.find()
    res.render('listR', { title: 'list' , tasks:LOCALDB});
  } catch(error){
    res.send(error)
  }
});


//get view
router.get('/view/:id', async function (req, res, next) {
  const result = await Resume.findById(req.params.id);
  res.render('view', { title: "CV Tamplate", data:result });

});

// GET Delete page
router.get("/delete/:id", async (req, res, next) => {
  await Resume.findByIdAndDelete(req.params.id);
  res.redirect("/list");
});


module.exports = router;
