const Default = require('./default')
import React from 'react'
import gUser from '../views/global'

function process_successful_login(user) {
    console.log("process_successful_login.jsx")
    gUser.username = user.username;

    return (
      <Default>
        <main>
            <h1></h1>
            <h1>Welcome!</h1>
            <h2>You are logged in as {user.username}</h2>
            <h2 style={{"fontSize":"0.9em"}}>Click on a link at the top to continue</h2>
        </main>
      </Default>
    )
  }

module.exports = process_successful_login