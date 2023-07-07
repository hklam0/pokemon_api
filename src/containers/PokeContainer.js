"use strict";

import React, {useState, useEffect} from 'react';
import PokeCarousel from '../components/PokeCarousel.js'

const PokeContainer = () => {

	const [list_url, set_list_url] = useState('https://pokeapi.co/api/v2/pokemon/');
	const [pokemonList, setPokemonList] = useState([]);
	const [carouselClick, setCarouselClick] = useState("");

	const loadPokemon = (url) => {
		fetch(url)
		.then(res => res.json())
		.then(results => setPokemonList({...results}))
	};

	const handleCarouselClick = (num) => {
	  setCarouselClick(num);
	}
	
	useEffect(() => {
		loadPokemon(list_url);
		console.log("list_url updated")
	}, [list_url]);
  
	useEffect(() => {
		console.log("pokemon state updated")
	}, [pokemonList]);


	if (!pokemonList.results)
		return null;
	return (
		<>
			{list_url}
			<p>adding and removing this JSX line will force the component to re-render</p>
			<p>IN STATE: { pokemonList.results.map(p => p.name).join(', ')  }</p>
			<h1>Pokemon Container </h1>
			{/* {pokemonList.results ? <PokeCarousel pokemonList={pokemonList} set_list_url={set_list_url}/> : null} */}
			<PokeCarousel pokemonList={pokemonList} set_list_url={set_list_url} handleCarouselClick={handleCarouselClick}/>
		</>
	);






};

export default PokeContainer;