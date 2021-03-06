const React = require('react')
const Default = require('./default')

function get_new_site_form () {
    console.log("get_new_site_form.jsx")
    return (
      <Default>
          <main style={{"color":"white"}}>
            <h1>Add A New Site To Review</h1>
            <form method="POST" action="/site">
                <div className="form_container">
                    <div className="form-group">
                        <label htmlFor="name">Site Name</label>
                        <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Site Photo</label>
                        <input className="form-control" id="image" name="image" />
                    </div>

                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" name="city" />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" name="state" />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="ave_price">Average Price</label>
                            <input className="form-control" type="number" min="10" max="500" step="10" id="ave_price" name="ave_price" />
                        </div>
                    </div>
                    <br></br>
                    <input className="btn btn-primary btn-space" type="submit" value="Add Site"/>
                </div>
            </form>
          </main>
      </Default>
    )
  }

module.exports = get_new_site_form