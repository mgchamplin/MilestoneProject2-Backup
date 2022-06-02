const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main style={{}}>
              <h1>404: PAGE NOT FOUND on AirBnB website</h1>
              <h2>Oops, sorry, we can't find this page!</h2>
          </main>
      </Def>
    )
  }

module.exports = error404