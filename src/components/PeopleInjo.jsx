import React from "react";

const PeopleInfo =({people})=>{
    return
    <ul className="list-group">
        <li className="list-group-item">height: {people.height}</li>
        <li className="list-group-item">mass: {people.mass}</li>
        <li className="list-group-item">hair_color: {people.hair_color}</li>
        <li className="list-group-item">skin_color: {people.skin_color}</li>
        <li className="list-group-item">eye_color: {people.eye_color}</li>
        <li className="list-group-item">birth_year: {people.birth_year}</li>
    </ul>
}

export default PeopleInfo