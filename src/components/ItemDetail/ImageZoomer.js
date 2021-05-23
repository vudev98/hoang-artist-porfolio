import React from 'react'

import src from '../../images/90 x 90cm, Acrylic on canvas,  Ao DAI.jpg'

function ImageZoomer() {
	const state = {
		backgroundImage: `url(${src})`,
		backgroundPosition: '0% 0%',
	}

	const handleMouseMove = (e) => {
		const { left, top, width, height } = e.target.getBoundingClientRect()
		const x = ((e.pageX - left) / width) * 100
		const y = ((e.pageY - top) / height) * 100
		this.state.backgroundPosition = `${x}% ${y}%`
	}

	return (
		<figure onMouseMove={handleMouseMove} style={state}>
			<img src={src} alt='default' />
		</figure>
	)
}

export default ImageZoomer
