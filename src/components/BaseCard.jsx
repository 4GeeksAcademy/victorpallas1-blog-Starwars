import React, { Children }  from "react";

const BaseCard=({children})=> {
    return <div className="card" style="width: 18 rem">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                {children}
            </p>
            <a href="#" className="btn btn-primary">Go someWhere</a>

        </div>
    </div>
}

export default BaseCard