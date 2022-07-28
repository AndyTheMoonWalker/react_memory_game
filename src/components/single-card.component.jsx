import './single-card.style.css';

function SingleCard({ card, clickHandler }) {
	const choiceHandler = () => {
		clickHandler(card);
	};
	return (
		<div className='card'>
			<div>
				<img className='front' src={card.src} alt='card front' />
				<img
					className='back'
					onClick={choiceHandler}
					src='/img/cover.png'
					alt='card back'
				/>
			</div>
		</div>
	);
}

export default SingleCard;
