const express = require('express');
const router = express.Router()
const methodOverride = require('method-override')


const genres = require('../models/genres.js');
const platforms = require('../models/platforms.js')
const gameModes = require('../models/gamemodes.js')
const Game = require('../models/games.js')
const User = require('../models/users.js')

router.use(express.urlencoded({extended:false}));
router.use(methodOverride('_method'));




//NEW USER PAGE
router.get('/new', (req,res)=> {
  res.render(
    'users/new.ejs',
    {
      tabTitle: 'Create an Account',
      genres: genres,
      platforms: platforms,
      gameModes: gameModes
    }
  );
})


//CREATE USER ROUTE
router.post('/', (req,res) => {
  User.create(req.body, (err, newUser) => {
    res.redirect('/users')
  })
})


// USER INDEX PAGE - PICK YOUR PROFILE //
router.get('/', (req,res) => {
  User.find({}, (err, allUsers) => {
    res.render(
      'users/index.ejs',
      {
        tabTitle: 'Pick your profile',
        users: allUsers
      }
    )
  })
})




module.exports = router
