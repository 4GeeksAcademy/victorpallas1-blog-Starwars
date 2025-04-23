import React, { Children }  from "react";
import { Link } from "react-router-dom";

const BaseCard=({title,url,image,children})=> {
    return <div className="card" style="width: 18 rem">
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
                {children}
            </p>
            <Link to={url} className="btn btn-primary">Read more</Link>

        </div>
    </div>
}

export default BaseCard