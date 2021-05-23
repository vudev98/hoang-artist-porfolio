import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import src from '../../images/90 x 90cm, Acrylic on canvas,  Ao DAI.jpg'

const itemDetail = (props) => {
	const pictureStyle = {
		// width: '100%',
		// height: '100%',
		width: '430px',
		height: '300px',
		float: 'right',
		margin: 'auto',
		objectFit: 'cover',
		cursor: 'zoom-in',
	}

	const style = {
		fontSize: '2rem',
	}

	const on = () => {
		document.getElementById('overlay').style.display = 'block'
	}

	const off = () => {
		document.getElementById('overlay').style.display = 'none'
	}

	document.onkeydown = (e) => {
		if (e.key === 'Escape') {
			off()
		}
	}

	return (
		<div className='main'>
			<div className='img-wrapper'>
				<img onClick={on} src={src} style={pictureStyle}></img>
			</div>
			<div id='overlay' onClick={off}>
				<img id='image' src={src} alt=''></img>
			</div>
			<div className='content-wrapper'>
				<h1 style={style}>Ao Dai</h1>
				<table style={{ width: '100%' }}>
					<tr>
						<th>Artist: </th>
						<td> {props.pic.artist}</td>
					</tr>
				</table>
				<Link to='/contact'>
					<input type='submit' value='Contact Me'></input>
				</Link>
			</div>
		</div>
	)
}

export default itemDetail
