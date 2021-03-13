import * as React from "react"
import { Link } from "gatsby"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
