import React from 'react'
import { Link } from 'react-router-dom'

const PictureCard = (props) => {
	const pictureStyle = {
		width: '410px',
		height: '300px',
		objectFit: 'cover',
		overflow: 'hidden',
	}

	const infoStyle = {
		marginTop: '10px',
	}

	const subInfo = {
		marginTop: '8px',
	}

	return (
		<div className='item-card' id='item-card'>
			<div className='image'>
				<Link to={`/collection/${props.pic.id}`}>
					<img
						src={props.pic.src}
						alt={props.pic.text}
						style={pictureStyle}
					></img>
				</Link>
			</div>
			<div className='info' style={infoStyle}>
				<h4 className='title' id='title'>
					{props.pic.title}
				</h4>
				<div className='sub-info' style={subInfo}>
					<div className='size'>Size: {props.pic.size}</div>
					<div className='material'>Material: {props.pic.material}</div>
				</div>
			</div>
		</div>
	)
}

export default PictureCard
