const Default = require('./default')
import React from 'react'
import Card from 'react-bootstrap/Card'
import gUser from '../views/global'

function get_one (data) {
    console.log("get-one.jsx for " + data.site.name)
    //console.log("DUMP SITE and REVIEWS = " + data.site)

    let review_list = (
      <h3 className="inactive">No Reviews Yet - Be The First!</h3>
    )
    let keyNum = 0;
    let average_rating = ""

    if (data.site.reviews.length != data.site.num_reviews)  
          console.log ("ERROR - DB OOS DBRL="+data.site.reviews.length + " DBNR=" + data.site.num_reviews)

    if (data.site.reviews.length) {

      review_list = data.site.reviews.map(c => {
          let stars = "";
          for (let i=0; i < c.stars; i++)
              stars += '⭐'
    
          return (
            <div key={keyNum++}>
              <div className="review-header">
                <p>Reviewed by {c.reviewer}: {c.date}</p>
                <p>Rating: {stars}</p>
              </div>
              <p className="review-data">{c.review}</p>
              {(gUser.username === "Admin") ? <form style={{"marginTop":"-2em"}} method="POST" action={`/site/${data.site.id}/review/${c._id}?_method=DELETE`}>
                  <input type="image" className="trash-can-icon" src="../images/delete.jpg" value="Delete" />
              </form>:""}
              <hr></hr>
            </div>
        )
      })



      /* Calculate the average rating for the site
      */
      console.log("Reviews#" + data.site.reviews.length + " Ave Rating=" + data.site.ave_rating)
      for (let i=0; i<data.site.ave_rating; i++)
          average_rating += '⭐'
    }
    return (
      <Default>
        <br></br>
        <Card className="one-card-show">
            <Card.Title>{data.site.name}</Card.Title>

            <Card.Img src={data.site.image}/>

            <Card.Text>
              {data.site.city}, {data.site.state} <br></br>
              <Card.Text style={{"marginTop":"-1em"}}>Average Price: ${data.site.ave_price}</Card.Text>

              <div style={{"display":"flex", "justifyContent":"space-between", "marginLeft":"2em","marginRight":"2em", "marginTop":"-1em"}}>
                  <p1>{data.site.reviews.length} reviews</p1>
                  <p1>Average Rating: {average_rating}</p1>
              </div>
            </Card.Text>
            
            <div className="button-group">
              {(gUser.username === "Admin") ? <a href={`/site/${data.site._id}/edit`} className="edit-button btn btn-primary">Edit</a> : ""}
              {(gUser.username === "Admin") ? <form method="POST" action={`/site/${data.site._id}?_method=DELETE`}>
                                                <button type="submit" className="delete-button bi btn btn-primary">Delete</button>
                                              </form> : ""}
            </div>
        </Card>
        <Card className="one-card-show">
          <Card.Title >Site Reviews</Card.Title>
          <div style={{"color":"black"}} className="review-header">
              <p style={{"fontStyle":"italic"}}>Been here before?  Write a review.  (If not logged in, log in first.)</p>
              {(gUser.username !== "") ? <a href={`/site/${data.site._id}/review/new`} className="edit-button btn btn-primary">Add Review</a>:""}
          </div>
          <hr></hr>
          <Card.Text>{review_list}</Card.Text>
        </Card>
        <br></br>
      </Default>
    )
  }

module.exports = get_one
