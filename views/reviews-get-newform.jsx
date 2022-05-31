const Def = require('./default')
import React from 'react'
import Card from 'react-bootstrap/Card'

function get_new_review_form (data) {
    console.log("get_new_review_form.jsx")
    return (
      <Def>
          <main>
            <h1>Add A New Review</h1>
            <Card className="one-card-show">
                <Card.Title>{data.site.name}</Card.Title>
                <Card.Img src={'../../.'+data.site.image} alt="AirBnB image"/>
            </Card>
            <br></br>       

            <form method="POST" action={`/site/${data.site._id}/review`}>
                <div className="form_container">
                    <div className="row">
                        <div style={{"width":"60%"}} className="form-group col-sm-6">
                            <label htmlFor="reviewer">Reviewer username</label>
                            <input className="form-control" id="reviewer" name="reviewer" required />
                        </div>
                        <div style={{"width":"15%"}} className="form-group col-sm-6">
                            <label htmlFor="stars">Rating</label>
                            <input type="number" min="1" max="5" step="1" value="1" className="stars-slider form-control" id="stars" name="stars" />
                        </div>
                    <div style={{"width":"25%"}}>
                        <label htmlFor="date">Review Date</label>
                        <input type="date" className="form-control" id="date" name="date" required />
                    </div>
                    </div>

                    <div>
                        <label htmlFor="review">Your Review</label>
                        <input className="form-control" id="review" name="review" required />
                        <h1></h1>
                    </div>
            
                    <input className="btn btn-primary btn-space" type="submit" value="Add Review" />
                </div>
            </form>
          </main>
      </Def>
    )
  }

module.exports = get_new_review_form