const Default = require('./default')
import React from 'react'
import Card from 'react-bootstrap/Card'
import gUser from '../views/global'

function get_new_review_form (data) {
    console.log("get_new_review_form.jsx")
    return (
      <Default>
          <main>
            <h1>Add A New Review</h1>
            <Card className="one-card-show">
                <Card.Title>{data.site.name}</Card.Title>
                <Card.Img src={data.site.image} alt="AirBnB image"/>
                <br></br>

            </Card>
            <br></br>       
            {console.log("THE USER IS " + gUser.username)}
            <form method="POST" action={`/site/${data.site._id}/review/${gUser.username}`}>
                <div className="form_container">
                    <div className="row">
                        <div style={{"width":"15%"}} className="form-group col-sm-6">
                            <label htmlFor="stars">Rating</label>
                            <input type="number" min="1" max="5" step="1" className="stars-slider form-control" id="stars" name="stars" />
                        </div>
                    <div style={{"width":"25%"}}>
                        <label htmlFor="date">Stay Date</label>
                        <input type="date" className="form-control" id="date" name="date" required />
                    </div>
                    </div>

                    <div>
                        <label htmlFor="review">Your Review</label>
                        <input className="form-control" id="review" name="review" required />
                        <h1></h1>
                    </div>
            
                    <input className="btn btn-primary btn-space" type="submit"/>
                    <br></br>
                    <br></br>
                </div>
            </form>
          </main>
      </Default>
    )
  }

module.exports = get_new_review_form