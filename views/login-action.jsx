const React = require('react')
const Default = require('./default')
import gUser from './global'

function take_login_action (user) {
    const ADMIN     = 1;
    const REG_USER  = 2;
    const RETIRED   = 3;  // i.e. logged out
    
    let user_type   = Number(user.login_type);

    // For regular user
    //
    let header      = ""
    let usernamed   = ""

    if (user_type === ADMIN) {
        header      = "Admin "
        usernamed   = "Admin"
    } 

    if (user_type === ADMIN || user_type === REG_USER)              // One of these just logged in
        return (
            <Default>
                <main>
                    <h1>{header} Login Page</h1> 
                    <form method="POST" action="/login/">
                        <div style={{"marginLeft":"auto","marginRight":"auto","width":"20%"}} className="form_container">
                            <div className="form-group">
                                <label htmlFor="name">Username</label>
                                <input className="form-control" id="username" name="username" defaultValue={usernamed} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Password</label>
                                <input className="form-control" id="password" name="password"></input>
                            </div>
                            <h1></h1>
                            <input className="btn btn-primary btn-space" type="submit" value="Log in" />
                        </div>
                    </form>
                </main>
            </Default>
        )
    else if (user_type === RETIRED) {                               // Logging out
        gUser.username = "";                                        // Forces logout state
        return (
            <Default>
                <main>
                    <h1>You are now logged out</h1>
                    <h2>You may continue to browse the site as a Guest</h2>
                </main>
            </Default>
        )
    }
  }

module.exports = take_login_action