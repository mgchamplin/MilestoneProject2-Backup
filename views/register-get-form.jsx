const React = require('react')
const Default = require('./default')

function create_registration () {
   
        return (
            <Default>
                <main>
                    <h1>Registration Page</h1> 
                    <form method="POST" action="/register">
                        <div style={{"marginLeft":"auto","marginRight":"auto","width":"20%"}} className="form_container">
                            <div className="form-group">
                                <label htmlFor="name">Username</label>
                                <input className="form-control" id="username" name="username" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Password</label>
                                <input className="form-control" id="password" name="password" type="password" required></input>
                            </div>
                            <h1></h1>
                            <input className="btn btn-primary btn-space" type="submit" value="Register" />
                        </div>
                    </form>
                </main>
            </Default>
        )
  }

module.exports = create_registration