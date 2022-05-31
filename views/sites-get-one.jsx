const Def = require('./default')
import React from 'react'
import Card from 'react-bootstrap/Card'


function get_one (data) {
    console.log("get-one.jsx for " + data.site.name)
    console.log("   Reviews = " + data.site.reviews.length)
    console.log("DUMP ALL = " + data.site)

    let review_list = (
      <h3 className="inactive">No Reviews Yet - Be The First!</h3>
    )
    if (data.site.reviews.length) {
      review_list = data.site.reviews.map(c => {
        let stars = "";
        for (let i=0; i < c.stars; i++)
            stars += '⭐'
        console.log("#star=" + c.stars + `  ${stars}`)
  
        return (
          <div>
            <div className="review-header">
              <p>Reviewed by {c.reviewer}: {c.date}  </p>
              <p>Rating: {stars}</p>
            </div>
          <p className="review-data">{c.review}</p>
          <form style={{"marginTop":"-2em"}} method="POST" action={`/site/${data.site.id}/review/${c._id}?_method=DELETE`}>
                    <input type="image" className="trash-can-icon" src="../images/delete.jpg" value="Delete" />
                </form>
          <hr></hr>
          </div>
        )
      })
      let sumRatings = data.site.reviews.reduce((tot, c) => {return tot + c.stars}, 0)

      let averageRating = Math.round(sumRatings / data.site.reviews.length)
    }

    return (
      <Def>
        <br></br>
        <Card className="one-card-show">
            <Card.Title>{data.site.name}</Card.Title>

            <Card.Img src={'.'+data.site.image}/>

            <Card.Text>
              {data.site.city}, {data.site.state} <br></br>
              {data.site.years} years of Service
            </Card.Text>
            
            <div className="button-group">
              <a href={`/site/${data.site._id}/edit`} className="edit-button btn btn-primary">Edit</a>
              <form method="POST" action={`/site/${data.site._id}?_method=DELETE`}> 
                  <button type="submit" className="delete-button bi btn btn-primary">Delete</button>
              </form> 
            </div>
        </Card>
        <Card className="one-card-show">
          <Card.Title >Site Reviews</Card.Title>
          <div style={{"color":"black"}} className="review-header">
              <p style={{"fontStyle":"italic"}}>Been to this AirBnB site?  Write us a review.  We value your input!</p>
              <a href={`/site/${data.site._id}/review/new`} className="edit-button btn btn-primary">Add Review</a>
          </div>
          <hr></hr>
          <Card.Text>{review_list}</Card.Text>
        </Card>
        <br></br>
      </Def>
    )
  }

module.exports = get_one

/*

<form method="POST" action={`/sites/${data.site._id}/review/${c._id}?_method=DELETE`}>
                  <input type="submit" id="del-review" className="btn-xs btn btn-danger " value="Delete" />
              </form>
*/

/*
.delete-button {
  width:82%;
  background-color:red;
  color:white;
  margin-left: 1em;
}

.edit-button {
  width:20%;
  background-color:rgb(62, 100, 202);
  color:white;
  margin-left: 1em;

}
*/