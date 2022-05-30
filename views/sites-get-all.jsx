const Def = require('./default')
import React from 'react'
import Card from 'react-bootstrap/Card'

function get_all (data) {
    console.log("get-all.jsx")
    console.log(data.sites)

    let sitesForRendering = data.sites.map((site,i) => {
      site.id = i;
      return (
        <Card key={i} className="card-style border border-primary">
            {console.log("I = " + i + "  CITY = " + site.city)}
            
            <Card.Link className="card-link" href={`site/${i}`}>{site.name}</Card.Link>

            <Card.Img variant="top" src={site.image}/>

            <Card.Body>
                <Card.Title>{site.city}</Card.Title>
                <Card.Text>
                  {site.state}
                </Card.Text>
            </Card.Body> 
        </Card>
      )
    })

    return (
      <Def>
        <main>
            <h1>Popular AirBnB Stays</h1>
            <h2>Click On One & Review It</h2>

            <div className="cards-list d-flex">
              {sitesForRendering}
            </div>
        </main>
      </Def>
    )
  }

module.exports = get_all
//className="d-flex"

//

//className="border border-primary"

//style={{"width":"30%","height":"3em"}} 

/*
h1 {
  text-align: center;
  color: black;
  font-size: 2em;
}
.h1a {
  color: rgb(16, 108, 214);
}

h3 {
  text-align: center;
  font-size: 0.8em;
}

img {
  width: 600px;
  height: 450px;
  max-width: 100%;
  max-width: 100%;
  margin-bottom: 0em;
}

nav {
  padding: 10px;
  margin-left: 1.2em;
  margin-right: 1.2em;
}

nav ul {
  list-style-type: none;
  margin: 0;
}

nav li {
  display: inline;
  margin-right: 25px;
}

nav a {
  color: black;
  font-size: 1.5em;
  font-weight: 700;
  text-decoration: none;
}

nav a:hover {
  color: blue;
  text-decoration: none;
}

body {
  background-image: url("/images/picnic-table-image.jpg");
  background-size: cover;
  text-align: center;
}

main {
  margin-right: 20px;
  margin-left: 20px;
  background-color: white;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
}

.image {
  margin-top: 2em;
  flex-basis: 40%;
}
.text {
  font-size: 20px;
  padding-left: 20px;
}

.btn-space {
  margin-top: 2em;
  margin-left: 1em;
  margin-bottom: 2em;
  min-width: 5em;
}

.form_container {
  width: 50%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

footer {
  color: black;
  margin-left: 1.2em;
  margin-right: 1.2em;
  font-weight: 600;
}

a {
  color: blue;
}

.check-box {
  margin-top:2em;
}

.stars-slider {
  text-align: center;
}

#del-comment {
  padding-bottom: 2em;
  height:1.5em;
  width: 6em;
  text-align: center;
  align-items: center;
  font-size:12px;
}

.site-cards {
  display:flex;
  flex-wrap:wrap;
}





*/