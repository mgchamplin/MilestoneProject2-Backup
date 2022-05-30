const Def = require('./default')
import React from 'react'
import Card from 'react-bootstrap/Card'

function get_one (data) {
    console.log("get-one.jsx for " + data.site.name)
    return (
      <Def>
        <Card className="one-card-show">
            
            <Card.Title>{data.site.name}</Card.Title>

            <Card.Img src={'.'+data.site.image}/>

            <Card.Text>
              {data.site.city}, {data.site.state} <br></br>
              {data.site.years} years of Service
            </Card.Text>
            
            <div className="button-group">
              <a href={`/site/${data.site._id}/edit`} className="edit-button btn btn-primary btn-space">Edit</a>
              <form method="POST" action={`/site/${data.site._id}?_method=DELETE`}> 
                  <button type="submit" className="delete-button bi bi-trash btn btn-space">Delete</button>
              </form> 
            </div>
        </Card>
      </Def>
    )
  }

module.exports = get_one