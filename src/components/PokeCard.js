import React, {useState, useEffect} from 'react';
import './PokeCard.css';


const PokeCard = ({url}) => {

	const [pokemon, setPokemon] = useState('');

	useEffect( () => {
		getPokemon();
	}, [url]);
	
	const getPokemon = () => {
		fetch(url)
		.then(res => res.json())
		.then(result => setPokemon(result))
	};
		
	return (
		<div className="PokeCard">
			<h3>{pokemon.name}</h3>
			
			{/* it seems the the key "sprites" doesn't exist when the page first loads
			so we need this check to avoid accessing it prematurely ??? */}
			
			{pokemon.sprites? 
				<img src={pokemon.sprites.front_default}/> :
				null
			}
		</div>
	);


};

export default PokeCard;