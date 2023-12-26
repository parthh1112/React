import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Parth from './parth.jsx'



function MyApp() {
  return (
    <div>
      <h1>This is a custom app</h1>
    </div>
  )
}

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click google is here '
)




ReactDOM.createRoot(document.getElementById('root')).
render(
  reactElement
    // // MyApp()
    // <>
    //   < MyApp />
    //   {/* or */}
    //   {/* < Parth /> */}
    // </>
  )