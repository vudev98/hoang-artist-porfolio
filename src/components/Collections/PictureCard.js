import React from 'react'
import { Link } from "react-router-dom";

const PictureCard = (props) => {

    const itemCard = {
        position: 'relative',
        flex: '0 0 30%',
        overflow: 'hidden',
        margin: '20px',
        padding: '15px',
        backgroundColor: 'rgb(240, 240, 240)'
    }

    const pictureStyle = {
        width: '320px',
        height: '300px',
        objectFit: 'cover',
        filter: 'drop-ShadowRoot(0 3px 5px rgba(0,0,0,.7))'
    }

    const infoStyle = {
        marginTop: '10px'
    }

    return (
        <div className='item-card' style={itemCard}>
            <div className='image'>
                <img src={props.pic.src} alt={props.pic.text} style={pictureStyle}></img>
            </div>
            <div className='info' style={infoStyle}>
                <h4 className='title'>{props.pic.title} </h4>
                <div className='sub-info' >
                    <div className='size'>size: {props.pic.size}</div>
                    <div className='material'>Material: {props.pic.material}</div>
                </div>
            </div>
            <div className='overlay'>
                <Link to={`/img/${props.pic.id}`}></Link>
            </div>
        </div>
    )
}

export default PictureCard
