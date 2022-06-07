const React = require('react')
const Default = require('./default')

function get_edit_form (data) {
    console.log("get-editform.jsx  for  " + data.site.name)
    return (
      <Default>
        <main style={{"color":"white"}}>
            <h1>Edit Site</h1>
            <form method="POST" action={`/site/${data.site._id}?_method=PUT`}>
                <div className="form_container">
                    <div className="form-group">
                        <label htmlFor="name">Site Name</label>
                        <input className="form-control" id="name" name="name" defaultValue={data.site.name} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Site Photo</label>
                        <input className="form-control" id="image" name="image" defaultValue={data.site.image}/>
                    </div>

                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" name="city" defaultValue={data.site.city}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" name="state" defaultValue={data.site.state}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="ave_price">Price Range</label>
                            <input type="number" min="10" max="500" step="5" className="form-control" id="ave_price" name="ave_price" defaultValue={data.site.price}/>
                        </div>
                    </div>
                    <h1></h1>
                    <input className="btn btn-primary btn-space" type="submit" value="Submit" />
                </div>
            </form>
        </main>
      </Default>
    )
  }

module.exports = get_edit_form