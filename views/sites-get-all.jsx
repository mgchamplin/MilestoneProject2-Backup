const Default = require('./default')
import React from 'react'
import Card from 'react-bootstrap/Card'

function get_all (data) {
    console.log("get-all.jsx")

    let sitesForRendering = data.sites.map((site,i) => {
      site.id = i;

      let average_rating = "";
      for (let i=0; i<site.ave_rating; i++)
          average_rating += '⭐'

      return (
        <Card key={i} style={{"borderRadius":"1.5em"}} className="card-style border border-primary">
            {console.log("I = " + i + " CITY = " + site.city + " Reviews=" + site.reviews.length + " AllStars=" + site.total_stars)}
            {console.log("FROM GET ALL SITES " + site.reviews)}
            
            <Card.Link className="card-link" href={`/site/${site._id}`}>{site.name}</Card.Link>

            <Card.Img style={{"width":"100%", "height":"240px"}}variant="top" src={site.image}/>

            <Card.Title style={{"marginLeft":"0.8em", "marginTop":"0.3em"}}>{site.city}, {site.state}</Card.Title>

            <Card.Body style={{"marginTop":"-1em"}}>
              
                <Card.Text >Ave Price: ${site.ave_price}</Card.Text>

                <div style={{"display":"flex", "justifyContent":"space-between", "marginTop":"-1.2em"}}>
                  {(site.reviews.length === 1) ? <Card.Text >{site.reviews.length} Review</Card.Text> :
                                                  <Card.Text>{site.reviews.length} Reviews</Card.Text>}
                  <Card.Text>
                    {average_rating}
                  </Card.Text>
                </div>
            </Card.Body> 
        </Card>
      )
    })

    return (
      <Default>
        <main>
            <h1>Popular AirBnB Sites</h1>
            <h2>Log In and Review Them!</h2>

            <div className="cards-list d-flex">
              {sitesForRendering}
            </div>
        </main>
      </Default>
    )
  }

module.exports = get_all

/*

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