import React from 'react'
import PictureCard from './PictureCard'

const Collection = () => {
    const picList = [{
        id: 1,
        title: 'Co Gai Dao Do 2',
        src: require('../../images/thumbnails/Co Gai Dao Do 1- thumbnail.jpg'),
        text: 'co-gai-dao-do-1',
        size: '80 x 80 cm',
        material: 'Oil on Canvas'
    },
    {
        id: 2,
        title: 'Co Gai Dao Do 1',
        src: require('../../images/thumbnails/Co Gai Dao Do 2-thumbnail.jpg'),
        text: 'co-gai-dao-do-2',
        size: '90 x 90 cm',
        material: 'Oil on Canvas'
    },
    {
        id: 3,
        title: 'Quan Ho',
        src: require('../../images/thumbnails/Quan ho-thumbnail.jpg'),
        text: 'quan-ho',
        size: '90 x 90 cm',
        material: 'Oil on Canvas'
    },
    {
        id: 4,
        title: 'Ao Dai',
        src: require('../../images/thumbnails/Ao DAi-thumbnail.jpg'),
        text: 'ao-dai',
        size: '90 x 90 cm',
        material: 'Acrylic on canvas'
    },
    {
        id: 5,
        title: 'The Girl Play Flute',
        src: require('../../images/thumbnails/The Girl Play Flute-thumbnail.jpg'),
        text: 'co-gai-choi-sao',
        size: '90 x 120 cm',
        material: 'Acrylic on canvas'
    },
    {
        id: 6,
        title: 'Hanoi Girl 1',
        src: require('../../images/thumbnails/Hanoi Girl 1-thumbnail.jpg'),
        text: 'co-gai-hanoi-1',
        size: '90 x 90 cm',
        material: 'Acrylic on canvas'
    },
    {
        id: 7,
        title: 'Hanoi Girl 2',
        src: require('../../images/thumbnails/Hanoi Girl 2-thumbnail.jpg'),
        text: 'co-gai-hanoi-1',
        size: '90 x 90 cm',
        material: 'Acrylic on canvas'
    },
    ]

    const flexGallery = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // width: '100%',
        // padding: '5% 10%',
        flexWrap: 'wrap',
        // background: 'white'
    }

    const listItems = picList.map((pic) =>
        <PictureCard pic={pic} key={pic.id} />

    )

    return (
        <div className="main">
            <div style={flexGallery}>
                {listItems}
            </div>
        </div >
    )
}

export default Collection
