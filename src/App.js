import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/single-card.component';
const cardImages = [
	{ src: '/img/helmet-1.png', match: false },
	{ src: '/img/potion-1.png', match: false },
	{ src: '/img/ring-1.png', match: false },
	{ src: '/img/scroll-1.png', match: false },
	{ src: '/img/shield-1.png', match: false },
	{ src: '/img/sword-1.png', match: false },
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [disable, setDisable] = useState(false);

	const shuffle = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));
		setCards(shuffledCards);
		setTurns(0);
		setChoiceOne(null);
		setChoiceTwo(null);
	};

	const clickHandler = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	const resetTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns((prev) => prev + 1);
		setDisable(false);
	};

	useEffect(() => {
		if (choiceOne && choiceTwo) {
			setDisable(true);
			if (choiceOne.src === choiceTwo.src) {
				setCards((prevCards) => {
					return prevCards.map((card) => {
						if (card.src === choiceOne.src) {
							return { ...card, match: true };
						} else {
							return card;
						}
					});
				});
				resetTurn();
			} else {
				setTimeout(() => resetTurn(), 1000);
			}
		}
	}, [choiceOne, choiceTwo]);

	useEffect(() => {
		shuffle();
	}, []);

	return (
		<div className='App'>
			<h1>Memory game</h1>
			<button onClick={shuffle}>Start a new game</button>
			<div className='card-grid'>
				{cards.map((card) => {
					return (
						<SingleCard
							key={card.id}
							card={card}
							clickHandler={clickHandler}
							flipped={card === choiceOne || card === choiceTwo || card.match}
							disabled={disable}
						/>
					);
				})}
			</div>
			<p>Turns: {turns}</p>
		</div>
	);
}

export default App;
