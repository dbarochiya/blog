
import React from "react"
import Image from 'gatsby-image'
import "./sidebar.css"

const avatar = {
  "childImageSharp": {
    "fixed": {
      "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAEz0lEQVQ4ywHEBDv7AERHREJJRlIsLWgVFnAREIcqLGAuMDQfHx0QECQbGzcpK0QsLpZrcKdPU503OJchIHI0MgAGAyQgIXZnaQBESEVAREBfSE6EZ3KNXGFOMjUWEBAaGBoxKy42LzEgGxwZFBU5KyyeeH2mYWagLSxkNDIPEBBoXF1yZ2gARUlGQUI+aVNbiYqYW1xfGBwdPz1Ae3F1eXB0d25xcGdrOTU2JCMjYF5fpH6CqDMzcignZ05Pg3R1bWFiAEVIRkNDQHVlbj8+QgQFBBQRDyUiIzAtLRMTEwkJCTk2OIp+gjQvLyUkJGtZWrlHSYEoKHdaWnFmZ1lPUABGSUZIR0VzaXQeHiFeOymZWz5AJRoeIiY2MjM/Oj0bGRpDP0BvZGcjJCRTPT62RUaBNjdIPD1bU1OPf4EARUhFSkdFeGx1UD41dUo0n2BAfUkxeWhkfnV5hXp+Zl1fJyUmd21vNDEyPzAxs0lKdzAwaV1en4yOTkZGAENHQ1NPTl5SV0Y1K5ZbPqlfPJtbOol4d310d390eJqMjzo2N2NbXTo3Nx8XF583N65RUZV/f1RMSlNLSwBDSERaVlZgUVYfGhd3STWLSS5vUUaZkJeXioypmZ1oX2AoJSZvZWg5NTQwJympQkNZKCdHQkKDcnKDdHUAQUM/U1NUbWxzhoOBu3pQsGIvhXNrmZOYb2Vom42QSUNEKSYoeGxtLi0tSTM0rS8ufjk4jn5+jnx7lIKDAE1QTo6PkcO+vtTQz86decdjNsugmM3EwJaIhZSGiS8rLHBmaFZNTRgaGmRHSL08OoVEQ4x+f6CMjaaTkwCfnp7i0cvYxb/k2tHifnrmIy7ipaHt3dDfxLdGPjxjWlx6bW4lISAiJCSPZGW+ODWmX1+rmZqdi42biowAvrSy59HF4M/F4drP7KWT71ZV4sG06dfJ48q7loaEfnFyKSUlHhoaTUpLwnp7ricktHBwr5ycnoqLmoiJAL6yrenQw97Nw+jdzum4mfaAcufMuuvYyO/Twl9TThUUFSQfHyolJZuJjL5qa64sKK90cr2joa6WloyBhgDGubTq0MLSw77n1MHxvpDfrX7nz7fr18f018VPRT8eHiAkJiiTh42woqe7eHm8PTmnY2SgfoKXgIqDeoYAxbi079TFxb+/5set3aR1xY5l48m07dnH+eDMgnRqVkFHiW56kIGRjHF9lVhgkjg7gVBXfF9qczlAekRLAOPa0fPi0cnCweDAp9mebtigbebJrfDayfHUvNSmjqhcXoI6PY1YXI1dW49raIpfXm81OoJcZndMU3xHTQC/kXHPoIW/t7bkzbvTkmzJilvjup3z4NDqtZCiXDVGNDlnXGF2bm9xamNwaF1qWVNsWVpxYWVpV1xtWl0AjU8sv4Vptq2v48W302lbu11K242E9efT6riWq2U6JCUsMzE3c1FVc0dNcUtUdkRMhEdMlk5QkUhMbjlCAJJVMsuYgLu0tejFs9uYeeOSc9yjjPTjzuC1m6pfN0dAQjs3OmdXYlVGXHBWZcSQks+Oj9CKiYheXG9PTgB8RinXpIzLwsLPq5mthGXsd2Tpl37v2cLmv6yyY0BNPztBPUBDPUZRVnSCeo3RurbFsK1mXFtOSEZqX11nCxEPaGUazAAAAABJRU5ErkJggg==",
      "width": 150,
      "height": 150,
      "src": "/static/3a8f0ffe86a74d24014fe54d1b968d3f/b2236/avatar.png",
      "srcSet": "/static/3a8f0ffe86a74d24014fe54d1b968d3f/b2236/avatar.png 1x,\n/static/3a8f0ffe86a74d24014fe54d1b968d3f/72ccb/avatar.png 1.5x,\n/static/3a8f0ffe86a74d24014fe54d1b968d3f/2536c/avatar.png 2x"
    }
  }
}
const SideBar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar-section'><Image
      className="avatar"
      fixed={avatar.childImageSharp.fixed}
      style={{
        marginBottom: 0,
        minWidth: 150,
        borderRadius: '100%',
        border: '8px solid lavender',
      }}
      imgStyle={{
        borderRadius: '50%',
      }}
      /></div>
      <div className='sidebar-section'><p>If you have any doubts feel free to reach out at dhruv.barochia34788@gmail.com</p></div>
      <div className='sidebar-section'><p>If you really liked the work you can buy me a coffee</p></div>
    </aside>
  )
}

export default SideBar

