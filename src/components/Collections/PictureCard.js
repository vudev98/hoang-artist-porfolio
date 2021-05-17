import React from 'react'

const PictureCard = (props) => {

    const itemCard = {
        flex: '0 0 350px',
        position: 'relative',
        overflow: 'hidden',
        // width: '32%',
        margin: '20px',
        padding: '15px',
        backgroundColor: 'rgb(240, 240, 240)'
        // backgroundColor: 'lightblue'
    }

    const pictureStyle = {
        width: '320px',
        height: '300px',
        objectFit: 'cover',
        filter: 'drop-ShadowRoot(0 3px 5px rgba(0,0,0,.7))'
    }

    const infoStyle = {
        marginTop: '10px'
        // width: '300px',
    }

    return (
        <div className='item-card' style={itemCard}>
            <div className='image'>
                <img src={props.pic.src} alt={props.pic.text} style={pictureStyle}></img>
            </div>
            <div className='info'>
                <h4 className='title'>{props.pic.title}</h4>
                <div className='sub-info' style={infoStyle}>
                    <div className='size'>size: {props.pic.size}</div>
                    <div className='material'>Material: {props.pic.material}</div>
                </div>
            </div>
        </div>
    )
}

export default PictureCard
