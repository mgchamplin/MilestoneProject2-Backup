const router = require('express').Router()

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

/********************************************* GET OPERATIONS ****************************************** */
/* SHOW ALL AIRBNB SITES
*/
router.get('/', (req, res) => {
    console.log("GET /")
    res.render('sites-get-all', {sites})
})

/* GET AIRBNB SITE FORM FOR A NEW ENTRY
*/
router.get('/site/new', (req, res) => {
    console.log(`GET /site/new`)
    res.render(`sites-get-newform`)
})

/* GET AIRBNB SITE EDIT FORM BY :id
*/
router.get(`/site/:s_id/edit`, (req, res) => {
    console.log(`GET /site/${req.params.id}/Edit` + " for " + req.params.s_id)
    console.log(sites)
    res.render(`sites-get-editform`, sites[req.params.s_id])
})

/* GET AIRBNB SITE BY :id (***KEEP THIS ROUTE AS THE LAST "GET" ROUTE)
*/
router.get('/site/:s_id', (req, res) => {
    console.log(`GET /site/${req.params.s_id}`)
    if (req.params.s_id < sites.length)
        res.render(`sites-get-one`, sites[req.params.s_id]) 
    else
        res.render("error404")
})

/********************************************* POST/CREATE OPERATIONS ****************************************** */
router.post('/site', (req, res) => {
    console.log(`POST /`)
    console.log(req.body)

    sites.push(req.body)

    sites[sites.length-1].id = sites.length-1;           // Temp code to manage local DB

    res.redirect('/')
})

/********************************************* PUT/MODIFY OPERATIONS ****************************************** */
router.put('/site/:s_id', (req, res) => {
    console.log(`PUT /site/${req.params.s_id}`)
    sites[req.params.s_id] = req.body;                  // Temp code to manage local DB
    sites[req.params.s_id].id = req.params.s_id;        // Temp code to manage local DB
    res.redirect(`/site/${req.params.s_id}`)
})

/********************************************* DELETE OPERATIONS ****************************************** */
router.delete('/site/:s_id', (req, res) => {
    console.log(`DELETE /site/${req.params.s_id}`)
    if (Number(req.params.s_id) < sites.length) {
        console.log("Deleting " + req.params.s_id)
        sites.splice(req.params.s_id,1)                 // Temp code to remove that array element
        sites.forEach((site,i) => site.id=i)            // Temp code to reset ids to be contiguous for future deletes
    }
    
    res.redirect(`/`)
})

module.exports = router