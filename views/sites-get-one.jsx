const Def = require('./default')
import React from 'react'
import Card from 'react-bootstrap/Card'

function get_one (data) {
    console.log("get-one.jsx for " + data.site.name)
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
      </Def>
    )
  }

module.exports = get_one

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