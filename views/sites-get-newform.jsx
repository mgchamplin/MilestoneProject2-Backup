const React = require('react')
const Def = require('./default')

function get_new_site_form () {
    console.log("get_new_site_form.jsx")
    return (
      <Def>
          <main>
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
                            <label for="years">Years Of Service</label>
                            <input type="number" className="form-control" id="years" name="years"/>
                        </div>
                    </div>

                    <input className="btn btn-primary btn-space" type="submit" value="Add Site" />
                </div>
            </form>
          </main>
      </Def>
    )
  }

module.exports = get_new_site_form