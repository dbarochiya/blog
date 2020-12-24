import React from "react"
import { Link } from 'gatsby';
import "./Pills.css"

function cssSafe(str) {
  return encodeURIComponent(str.toLowerCase()).replace(/%[0-9A-F]{2}/gi, "")
}

const Taglist = ({ items }) => {
  return (
    <div className="pills">
      {(items || []).map( item => {
          let link = 'tags/' + item.fieldValue.toLowerCase()
          return (
            <Link to={link}
                className={`pill pill--${cssSafe(item.fieldValue)}`}
                key={item.fieldValue}
                style={{ marginRight: 10 }}
            >
            {item.fieldValue} • {item.totalCount}
            </Link>
        )}
      )}
    </div>
  )
}

export default Taglist
