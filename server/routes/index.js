const express = require('express')
const { isLoggedIn } = require('../middlewares')
const router = express.Router()
const Student = require('../models/Student.js')

router.get('/secret', isLoggedIn, (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user,
  })
})

// Students
router.post('/add-student', (req, res, next) => {
  console.log('ADD STUDENTS WORKS', req.body.student)

  Student.create({
    name: req.body.student,
    grade: Number(req.body.grade),
  })
    .then(data => {
      res.json({
        addedStudent: true,
        data: data,
      })
    })
    .catch(err => console.error(err))
})

router.get('/all-the-students', (req,res,next) =>{
  Student.find().then(allStudentsFromDB =>{
    res.json({allStudentsFromDB})
    .catch(err => console.log(err))
  })
})

module.exports = router
