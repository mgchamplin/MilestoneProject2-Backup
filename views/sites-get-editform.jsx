const React = require('react')
const Def = require('./default')

function get_edit_form (site) {
    console.log("get-editform.jsx  for  " + site.name)
    return (
      <Def>
        <main>
            <h1>Edit Site</h1>
            <form method="POST" action={`/site/${site.id}?_method=PUT`}>
                <div className="form_container">
                    <div className="form-group">
                        <label htmlFor="name">Site Name</label>
                        <input className="form-control" id="name" name="name" defaultValue={site.name} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Site Photo</label>
                        <input className="form-control" id="image" name="image" defaultValue={site.image}/>
                    </div>

                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" name="city" defaultValue={site.city}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" name="state" defaultValue={site.state}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="founded">Years In Service</label>
                            <input type="number" className="form-control" id="founded" name="founded" defaultValue={site.years}/>
                        </div>
                    </div>
                    <h1></h1>
                    <input className="btn btn-primary btn-space" type="submit" value="Submit" />
                </div>
            </form>
        </main>
      </Def>
    )
  }

module.exports = get_edit_form