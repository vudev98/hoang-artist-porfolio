import React from 'react'
import { Link } from 'react-router-dom'
import authorImg from '../images/ArtistHoang.jpeg'

const Home = () => {
	return (
		<div className='main'>
			<img className='author-img' src={authorImg} alt='author-img'></img>
			<div className='content-wrapper'>
				<h1>About Hoang</h1>
				<p className='text-content'>
					Artist Ngo Duc Hoang is a talented and creative painter who has
					enjoyed a lot of success with solo and group exhibitions in Hanoi, Ho
					Chi Minh City as well as Singapore, Korea and New York. <br></br>{' '}
					<br></br> Artistic elements in Hang Trong and Dong Ho folk paintings
					were refined and applied to his works in his own way by painter Ngo
					Duc Hoang. The influence of these two lines in painter Hoang's
					compositions is shown through the way he arranged the composition,
					leveled the depth and exploited the bright tones, clear contrasts.{' '}
				</p>
				<br></br>
				<Link to='/about'>Read more...</Link>
				<br></br>
				<br></br>
				<Link className='btn-submit' to='/contact'>
					Get in touch
				</Link>
			</div>
		</div>
	)
}
export default Home
