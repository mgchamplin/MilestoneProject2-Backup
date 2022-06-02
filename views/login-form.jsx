const React = require('react')
const Def = require('./default')

function get_login_form (user) {
    const ADMIN     = 1;
    const REG_USER  = 2;
    let user_type   = Number(user.login_type);

    // For regular user
    //
    let header      = ""
    let usernamed   = ""

    if (user_type === ADMIN) {
        header      = "Admin "
        usernamed   = "Admin"
    } 

    return (
      <Def>
        <main>
            <h1>{header} Login Page</h1> 
            <form method="POST" action={`/login?_method=PUT`}>
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
      </Def>
    )
  }

module.exports = get_login_form