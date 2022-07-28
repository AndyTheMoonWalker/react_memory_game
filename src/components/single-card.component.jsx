import './single-card.style.css';

function SingleCard({ card, clickHandler, flipped }) {
	const choiceHandler = () => {
		clickHandler(card);
	};
	return (
		<div className='card'>
			<div className={flipped ? 'flipped' : ''}>
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
