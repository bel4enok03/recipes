import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4';
import image from './icons8-reserch-64.png';
import MyRecipesComponent from './MyRecipesComponent';

function App() {
	const MY_ID = 'ee711610';
	const MY_KEY = '8cdd4f884e035c5a039dfff133eaa8ca';

	const [mySerch, setMySerch] = useState('');
	const [myRecipes, setMyRecipes] = useState([]);
	const [wordSubmitted, setWordSubmitted] = useState('avocado');

	useEffect(() => {
		const getAdvace = async () => {
			const responce = await fetch(
				`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`
			);
			const data = await responce.json();
			setMyRecipes(data.hits);
		};
		getAdvace();
	}, [wordSubmitted]);

	const myRecipeChange = (e) => {
		setMySerch(e.target.value);
	};

	const finalSerch = (e) => {
		e.preventDefault();
		setWordSubmitted(mySerch);
	};

	return (
		<div className="App">
			<div className="container">
				<video autoPlay muted loop>
					<source src={video} type="video/mp4" />
				</video>
				<h1>Find a Recipe</h1>
			</div>

			<div className="container">
				<form onSubmit={finalSerch}>
					<input className="search" placeholder="Search..." onChange={myRecipeChange} value={mySerch}></input>
				</form>
			</div>

			<div className="container">
				<button onClick={finalSerch}>
					<img src={image} width="40px" alt="logo"></img>
				</button>
			</div>
			<div>
				{myRecipes.map((element) => (
					<MyRecipesComponent
						label={element.recipe.label}
						image={element.recipe.image}
						calories={element.recipe.calories}
						ingredients={element.recipe.ingredientLines}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
