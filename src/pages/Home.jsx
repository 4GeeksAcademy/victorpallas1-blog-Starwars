import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const { store, dispatch } = useGlobalReducer()
  useEffect(()=>{
	loadPeople()

  },[])
  
  const apiurl1 = ("https://swapi.dev/api/people")
  const apiurl2 = ("https://www.swapi.tech/api/people")

  const loadPeople = async ()=>{
	let response = await fetch (apiurl2)
	if (!response.ok){
		console.error(response.status, response.statusText)
		return
	}
	let data = await response.json()
	dispatch({type:"load_people", payload:data})
  }

	return (
		<div className="text-center mt-5">
			
		</div>
	);
}; 