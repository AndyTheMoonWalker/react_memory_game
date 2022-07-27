import { useState } from 'react';
import './App.css';
const cardImages = [
	{ src: '/img/helmet-1.png' },
	{ src: '/img/potion-1.png' },
	{ src: '/img/ring-1.png' },
	{ src: '/img/scroll-1.png' },
	{ src: '/img/shield-1.png' },
	{ src: '/img/sword-1.png' },
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);

	const shuffle = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));
		setCards(shuffledCards);
		setTurns(0);
	};

	console.log(cards, turns);
	return (
		<div className='App'>
			<h1>Memory game</h1>
			<div className='card-grid'>
				{cards.map((card) => {
					return (
						<div key={card.id} className='card'>
							<div>
								<img className='front' src={card.src} alt='card front' />
								<img className='back' src='/img/cover.png' alt='card back' />
							</div>
						</div>
					);
				})}
			</div>

			<button onClick={shuffle}>Start</button>
		</div>
	);
}

export default App;
