const Def = require('./default')
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



function get_one (site) {
    console.log("get-one.jsx for " + site.name)
    return (
      <Def>
        <Card className="one-card-show">
            
            <Card.Title>{site.name}</Card.Title>

            <Card.Img src={'.'+site.image}/>

            <Card.Text>
              {site.city}, {site.state}
            </Card.Text>
            
            <div className="button-group">
              <a href={`/site/${site.id}/edit`} className="edit-button btn btn-primary btn-space">Edit</a>
              <form method="POST" action={`/site/${site.id}?_method=DELETE`}> 
                  <button type="submit" className="delete-button bi bi-trash btn btn-space">Delete</button>
              </form> 
            </div>
        </Card>
      </Def>
    )
  }

module.exports = get_one

/*
<form method="POST" action={`/site/${site.id}?_method=DELETE`}> 
                  <button type="submit" className="bi bi-trash btn btn-danger btn-space">DELETE</button>
              </form>
*/