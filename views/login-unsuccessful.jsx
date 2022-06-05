const Default = require('./default')
import React from 'react'

function process_unsuccessful_login(response) {
    console.log("process_unsuccessful_login.jsx")

    return (
      <Default>
        <main>
            <h1></h1>
            <h1>Sorry!</h1>
            <h2>{response.failure_reason} {response.username}</h2>
            <h2 style={{"fontSize":"0.9em"}}>Click on a link at the top to continue</h2>
        </main>
      </Default>
    )
  }

module.exports = process_unsuccessful_login