import React from "react";
import {Link} from "react-router-dom"
import '../../bulma.min.css';

const NotFound404 = (props) => {

  return (
      <>
        <p className="title has-text-white has-text-centered">404</p>
        <p className="subtitle has-text-white has-text-centered">Not Found</p>
        <div>
        <Link to="/" className="button is-link">Voltar</Link>
        </div>
   </>
  )
}

export default NotFound404;