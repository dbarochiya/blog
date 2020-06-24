import React from "react"
import PropTypes from "prop-types"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee  } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)
import "./layout.css"

const Layout = ({ children }) => (
  <main>{children}</main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
