import icon from './icons8-checkmark-50.png'

function MyRecipesComponent({ label, image, calories, ingredients }) {
	return (
		<div>
			<div className="container">
				<h2>{label}</h2>
			</div>
			<div className="container">
				<img src={image} alt='food'></img>
			</div>
			<ul className="list">
				{ingredients.map((ingredient) => (
					<li><img src={icon} width='30px' alt='icon'/>{ingredient}</li>
				))}
			</ul>
			<div className="container">
				<p>{calories.toFixed()} calories</p>
			</div>
		</div>
	);
}

export default MyRecipesComponent;
