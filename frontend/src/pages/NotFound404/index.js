import React from "react";
import {Link} from "react-router-dom"

const NotFound404 = (props) => {

  return (
      <>
        <h1>404</h1>
        <h2>Not Found</h2>
        <Link to="/">Voltar</Link>
      </>
  )
}

export default NotFound404;