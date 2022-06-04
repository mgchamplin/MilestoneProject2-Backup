const router = require('express').Router()
const { cornsilk } = require('color-name')
const db = require('../models')

/********************************************* GET OPERATIONS ****************************************** */
/* GET ALL AIRBNB SITES
*/
router.get('/', (req, res) => {
    console.log("------------------------------------")
    console.log("GET /")

    db.Site.find()
    .then((sites) => {
      res.render('sites-get-all', {sites})
    })
    .catch(err => {
      console.log(err) 
    })
})

/* GET AIRBNB SITE FORM FOR A NEW ENTRY
*/
router.get('/site/new', (req, res) => {
    console.log(`GET /site/new`)
    res.render(`sites-get-newform`)
})

/* GET AIRBNB SITE LOGIN
*/
router.get('/user-login/:id', (req, res) => {
    console.log(`GET /user-login/${req.params.id}`)
    if (req.params.id <= 3)                     // 1 - Admin log in, 2 - Reg User log in, 3 - user logging out
        res.render(`login-action`, {login_type: req.params.id})
    else
        res.render('error404') 
})

/* GET AIRBNB SITE EDIT FORM BY :id
*/
router.get(`/site/:s_id/edit`, (req, res) => {
    console.log(`GET /site/${req.params.s_id}/Edit` + " for " + req.params.s_id)

    db.Site.findById(req.params.s_id)
    .then (site => {
        res.render("sites-get-editform", {site})
    })
    .catch(err => {
      console.log('err1', err)
      res.render('error404')
  })
})

/* GET AIRBNB SITE FORM FOR A NEW REVIEW ENTRY
*/
router.get('/site/:s_id/review/new', (req, res) => {
    console.log('GET /site/:s_id/review/new')
    db.Site.findById(req.params.s_id)
    .then(site => {
        res.render('reviews-get-newform', { site })
    })
    .catch(err => {
        console.log('err2', err)
        res.render('error404')
    })
})


/* GET AIRBNB SITE BY :id (***KEEP THIS ROUTE AS THE LAST "GET" ROUTE)
*/
router.get('/site/:s_id', (req, res) => {
    console.log(`GET /site/${req.params.s_id}`)
    
    db.Site.findById(req.params.s_id)
    .populate("reviews")
    .then(site => {
        res.render('sites-get-one', { site })
    })
    .catch(err => {
        console.log('err2', err)
        res.render('error404')
    })
})

/********************************************* POST/CREATE OPERATIONS ****************************************** */
router.post('/login', (req, res) => {                        // POST - PROCESS USER LOGIN
    console.log(`POST /login`)
    console.log(req.body)

    db.User.find()                            // Log all users in DB
    .then((users) => {
      console.log("ALL users = " + users)
    })

    db.User.findOne({"username" : req.body.username})
    .then(user => {
        if (req.body.password === user.password) {
            console.log("And password matches = " + user.password)

            if (req.body.username === 'Admin') {
                console.log("Admin Logged In")
            }
            else {
                console.log("Regular user Logged In")
            }
            res.render('login-successful',{username: req.body.username})
        }
        else {
            console.log("Incorrect Password")
            res.redirect('/')
        }
    })
    .catch(err => {
        console.log('User Not Found...', req.body.username)
        res.render('error404')
    })
})

router.post('/site', (req, res) => {                        // POST NEW SITE TO DB
    console.log(`POST /`)

    db.Site.create(req.body)

    res.redirect('/')
})

router.post('/site/:s_id/review/:u_id', (req, res) => {     // POST NEW REVIEW TO DB
    console.log(`POST /site/${req.params.s_id}/review`)

    db.Site.findById(req.params.s_id)
    .then(site => {

        console.log("User = " + req.params.u_id)
        req.body.reviewer = req.params.u_id
        req.body.stars = 4


        db.Review.create(req.body)
        .then(review => {

            site.reviews.push(review.id)
            site.save()
            .then(() => {
                res.redirect(`/site/${req.params.s_id}`)
            })
        })
        .catch(err => {
            console.log("Failed Review Create")
  
            res.render('error404')
        })
    })
    .catch(err => {
        console.log("Can't Find Site")
        res.render('error404')
    })
})


/********************************************* PUT/MODIFY OPERATIONS ****************************************** */
router.put('/site/:s_id', (req, res) => {
    console.log(`PUT /site/${req.params.s_id}`)

    db.Site.findByIdAndUpdate(req.params.s_id, req.body)
    
        .then(() => {
            res.redirect(`/site/${req.params.s_id}`)
        })
        .catch (err => {
            console.log('err3', err)
            res.render("error404")
        })  
})

/********************************************* DELETE OPERATIONS ****************************************** */
router.delete('/site/:s_id/review/:r_id', (req, res) => {    // *** FOR DELETING A SINGLE REVIEW
    console.log(`DELETE /site/${req.params.s_id}/review/${req.params.r_id}`)

    db.Review.findByIdAndDelete(req.params.r_id)
        .then (review => {
            db.Site.findById(req.params.s_id)
            .then (site =>{
                console.log("PLACE IZ " + site.id)

                res.redirect(`/site/${site.id}`)
            })

        })
        .catch (err => {
            console.log('err9',err)
            res.render("error404")
        })
}) 

router.delete('/site/:s_id', (req, res) => {                // *** FOR DELETING THE ENTIRE SITE ***
    console.log(`DELETE /site/${req.params.s_id}`)

    db.Site.findByIdAndDelete(req.params.s_id)
        .then (site => {
            res.redirect('/')
        })
        .catch (err => {
            console.log('err',err)
            res.render("error404")
    })    
})

module.exports = router



const sites = [ {
    id:0,
    name: "Hot Beach",
    city: "Philly",
    state: "Pennsylvania",
    years: 6,
    image: "./images/sample.jpg"
},
{
    id:1,
    name: "Cool Beach",
    city: "San Jose",
    state: "California",
    years: 3,
    image: "./images/sample.jpg"
},
{
    id:2,
    name: "Sunny Beach",
    city: "Omaha",
    state: "Nebraska",
    years: 15,
    image: "./images/sample.jpg"
},
{
    id:3,
    name: "Dirty Beach",
    city: "New York City",
    state: "New York",
    years: 9,
    image: "./images/sample.jpg"
},
{
    id:4,
    name: "Amazing Beach",
    city: "Dallas",
    state: "Texas",
    years: 2,
    image: "./images/sample.jpg"
}
]