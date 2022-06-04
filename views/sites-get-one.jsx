const Default = require('./default')
import React from 'react'
import Card from 'react-bootstrap/Card'
import gUser from '../views/global'

function get_one (data) {
    console.log("get-one.jsx for " + data.site.name)
    //console.log("DUMP ALL = " + data.site)

    let review_list = (
      <h3 className="inactive">No Reviews Yet - Be The First!</h3>
    )
    let keyNum = 0;
    if (data.site.reviews.length) {
      review_list = data.site.reviews.map(c => {
        let stars = "";
        for (let i=0; i < c.stars; i++)
            stars += '⭐'
  
        return (
          <div key={keyNum++}>
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
    }
    return (
      <Default>
        <br></br>
        <Card className="one-card-show">
            <Card.Title>{data.site.name}</Card.Title>

            <Card.Img src={'.'+data.site.image}/>

            <Card.Text>
              {data.site.city}, {data.site.state} <br></br>
              {data.site.years} years in service
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
