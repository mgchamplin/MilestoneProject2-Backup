const Default = require('./default')
import React from 'react'
import Card from 'react-bootstrap/Card'
import gUser from './global'

function search_sort_sites (data) {
    console.log("search_sort_sites.jsx")

    let sitesForRendering = data.sites.map((site,i) => {
      
      let average_rating = "";
      for (let i=0; i<site.ave_rating; i++)
          average_rating += '⭐'

      return (
        <Card key={i} className="border border-primary">

            <Card.Body className="row">
                <Card.Img  className="col-sm-1" style={{"width":"8%", "height":"60px"}} variant="top" src={site.image}/>
                <Card.Link style={{"marginTop":"0.7em", "textAlign":"left"}} className="col-sm-3" href={`/site/${site._id}`}>{site.name}</Card.Link>
                <Card.Text style={{"marginTop":"1em"}} className="col-sm-1">{site.state}</Card.Text>
                <Card.Text style={{"marginTop":"1em"}} className="col-sm-2">{site.city}</Card.Text>
                <Card.Text style={{"marginTop":"1em"}} className="col-sm-1">${site.ave_price}</Card.Text>
                {(site.reviews.length === 1) ? <Card.Text style={{"marginTop":"1em"}} className="col-sm-1">{site.reviews.length} Review</Card.Text> :
                                                <Card.Text style={{"marginTop":"1em"}} className="col-sm-1">{site.reviews.length} Reviews</Card.Text>}
                <Card.Text style={{"marginTop":"1em"}} className="col-sm-2">{average_rating}</Card.Text>
            </Card.Body>
        </Card>
      )
    })
    console.log("target = " + data.sort_target)

    var name_sort;
    let name_sort_next  = 1;                            

    if (data.sort_target === "name")
        if (gUser.current_sort_type_name == 0 || gUser.current_sort_type_name == 1)     // Just sorted ascending
            {name_sort = "NAME v"; name_sort_next = -1;}
        else
            {name_sort = "NAME ^"; name_sort_next = 1;}
    else
        name_sort = "NAME    ^"

    gUser.current_sort_type_name = name_sort_next;


    var state_sort;
    let state_sort_next  = 1;                            

    if (data.sort_target === "state")
        if (gUser.current_sort_type_state == 0 || gUser.current_sort_type_state == 1)     // Just sorted ascending
            {state_sort = "STATE v"; state_sort_next = -1;}
        else
            {state_sort = "STATE ^"; state_sort_next = 1;}
    else
        state_sort = "STATE   ^"

    gUser.current_sort_type_state = state_sort_next;


    var city_sort;
    let city_sort_next  = 1;                            

    if (data.sort_target === "city")
        if (gUser.current_sort_type_city == 0 || gUser.current_sort_type_city == 1)     // Just sorted ascending
            {city_sort = "CITY v"; city_sort_next = -1;}
        else
            {city_sort = "CITY ^"; city_sort_next = 1;}
    else
    city_sort = "CITY ^"

    gUser.current_sort_type_city = city_sort_next;

    var price_sort;
    let price_sort_next  = 1;                            

    if (data.sort_target === "price")
        if (gUser.current_sort_type_price == 0 || gUser.current_sort_type_price == 1)     // Just sorted ascending
            {price_sort = "AVE PRICE v"; price_sort_next = -1;}
        else
            {price_sort = "AVE PRICE ^"; price_sort_next = 1;}
    else
    price_sort = "AVE PRICE ^"

    gUser.current_sort_type_price = price_sort_next;

    var num_reviews_sort;
    let num_reviews_sort_next  = 1;                            

    if (data.sort_target === "num_reviews")
        if (gUser.current_sort_type_num_reviews == 0 || gUser.current_sort_type_num_reviews == 1)     // Just sorted ascending
            {num_reviews_sort = "REVIEWS v"; num_reviews_sort_next = -1;}
        else
            {num_reviews_sort = "REVIEWS ^"; num_reviews_sort_next = 1;}
    else
    num_reviews_sort = "REVIEWS ^"

    gUser.current_sort_type_num_reviews = num_reviews_sort_next;

    var ave_rating_sort;
    let ave_rating_sort_next  = 1;                            

    if (data.sort_target === "ave_rating")
        if (gUser.current_sort_type_ave_rating == 0 || gUser.current_sort_type_ave_rating == 1)     // Just sorted ascending
            {ave_rating_sort = "RATINGS v"; ave_rating_sort_next = -1;}
        else
            {ave_rating_sort = "RATINGS ^"; ave_rating_sort_next = 1;}
    else
    ave_rating_sort = "RATINGS ^"

    gUser.current_sort_type_ave_rating = ave_rating_sort_next;



    return (
      <Default>
        <main>
            <h1>Search and Sort Sites</h1>
                
                <Card.Body style={{"color":"white"}} className="row">
                    <Card.Text style={{"marginBottom":"-1em"}} className="col-sm-1"></Card.Text>

                    <a style={{"color":"white", "textDecoration":"none"}} className="col-sm-3" href={`/sort/name/${name_sort_next}`}>{name_sort}</a>
                    <a style={{"color":"white", "textDecoration":"none"}} className="col-sm-1" href={`/sort/state/${state_sort_next}`}>{state_sort}</a>
                    <a style={{"color":"white", "textDecoration":"none"}} className="col-sm-2" href={`/sort/city/${city_sort_next}`}>{city_sort}</a>
                    <a style={{"color":"white", "textDecoration":"none"}} className="col-sm-1" href={`/sort/price/${price_sort_next}`}>{price_sort}</a>
                    <a style={{"color":"white", "textDecoration":"none"}} className="col-sm-1" href={`/sort/num_reviews/${num_reviews_sort_next}`}>{num_reviews_sort}</a>
                    <a style={{"color":"white", "textDecoration":"none"}} className="col-sm-2" href={`/sort/ave_rating/${ave_rating_sort_next}`}>{ave_rating_sort}</a>

                </Card.Body>
              {sitesForRendering}
        </main>
      </Default>
    )
  }

module.exports = search_sort_sites


/*
<form method="POST" action="/sort-time">
                    <div style={{"color":"white", "justifyContent":"center", "paddingBottom":"2em"}} className="row">
                        <div className="form-group col-sm-2">
                            <label htmlFor="name">By Name</label>
                            <input className="checkbox-style" type="checkbox" name="name" id="name"/>
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="state">By State</label>
                            <input className="checkbox-style" type="checkbox" name="state" id="state"/>
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="city">By City</label>
                            <input className="checkbox-style" type="checkbox" name="city" id="city"/>
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="review_count">By #Reviews</label>
                            <input className="checkbox-style" type="checkbox" name="review_count" id="review_count"/>
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="average_rating">By Ave Rating</label>
                            <input className="checkbox-style" type="checkbox" name="average_rating" id="average_rating"/>
                        </div>
                        <input className="col-sm-1 btn btn-primary btn-space" type="submit" value="Sort" />
                    </div>
                </form>
*/