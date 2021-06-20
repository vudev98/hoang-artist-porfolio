import React from 'react'
import PictureCard from './PictureCard'

const Collection = () => {
	const picList = [
		{
			id: 1,
			title: 'Portrait Dao Do Girl I',
			src: require('../../images/thumbnails/Co Gai Dao Do 1- thumbnail.jpg'),
			text: 'co-gai-dao-do-1',
			size: '80 x 80 cm',
			material: 'Oil on Canvas',
			artist: 'Ngo Duc Hoang',
		},
		{
			id: 2,
			title: 'Portrait Dao Do Girl II',
			src: require('../../images/thumbnails/Co Gai Dao Do 2-thumbnail.jpg'),
			text: 'co-gai-dao-do-2',
			size: '90 x 90 cm',
			material: 'Oil on Canvas',
			artist: 'Ngo Duc Hoang',
		},
		{
			id: 3,
			title: 'Quan Ho',
			src: require('../../images/thumbnails/Quan ho-thumbnail.jpg'),
			text: 'quan-ho',
			size: '90 x 90 cm',
			material: 'Oil on Canvas',
			artist: 'Ngo Duc Hoang',
		},
		{
			id: 4,
			title: 'Ao Dai',
			src: require('../../images/thumbnails/Ao DAi-thumbnail.jpg'),
			text: 'ao-dai',
			size: '90 x 90 cm',
			material: 'Acrylic on canvas',
			artist: 'Ngo Duc Hoang',
		},
		{
			id: 5,
			title: 'The Girl Playing Flute',
			src: require('../../images/thumbnails/The Girl Play Flute-thumbnail.jpg'),
			text: 'co-gai-choi-sao',
			size: '90 x 120 cm',
			material: 'Acrylic on canvas',
			artist: 'Ngo Duc Hoang',
		},
		{
			id: 6,
			title: 'Hanoi Girl I',
			src: require('../../images/thumbnails/Hanoi Girl 1-thumbnail.jpg'),
			text: 'co-gai-hanoi-1',
			size: '90 x 90 cm',
			material: 'Acrylic on canvas',
			artist: 'Ngo Duc Hoang',
		},
		{
			id: 7,
			title: 'Hanoi Girl II',
			src: require('../../images/thumbnails/Hanoi Girl 2-thumbnail.jpg'),
			text: 'co-gai-hanoi-1',
			size: '90 x 90 cm',
			material: 'Acrylic on canvas',
			artist: 'Ngo Duc Hoang',
		},
		// {
		// 	id: 8,
		// 	title: 'Hanoi Girl II',
		// 	src: require('../../images/thumbnails/Hanoi Girl 2-thumbnail.jpg'),
		// 	text: 'co-gai-hanoi-1',
		// 	size: '90 x 90 cm',
		// 	material: 'Acrylic on canvas',
		// 	artist: 'Ngo Duc Hoang',
		// },
	]

	const listItems = picList.map((pic) => <PictureCard pic={pic} key={pic.id} />)

	return (
		<div className='main'>
			<div className='flex-container'>{listItems}</div>
		</div>
	)
}

export default Collection
