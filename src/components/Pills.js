import { Link } from "gatsby"
import React from "react"
import "./Pills.css"

function cssSafe(str) {
  return encodeURIComponent(str.toLowerCase()).replace(/%[0-9A-F]{2}/gi, "")
}

const Pills = ({ items }) => {
  return (
    <div className="pills">
      {(items || []).map( item => {
          let link = '/tags/' + item.toLowerCase()
          return (
            <Link to={link}
                className={`pill pill--${cssSafe(item)}`}
                key={item}
                style={{ marginRight: 10 }}
            >
            #{item}
            </Link>
        )}
      )}
    </div>
  )
}

export default Pills
