const Default = require('./default')
import React from 'react'

function process_registration(message_to_user) {
    console.log("registration-response.jsx")

    return (
      <Default>
        <main>
            <h1></h1>
            <h1>{message_to_user.status}</h1>
            <h2 style={{"fontSize":"0.9em"}}>Login at the top to begin reviewing!</h2>
        </main>
      </Default>
    )
  }

module.exports = process_registration