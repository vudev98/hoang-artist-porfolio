import React from 'react'

const Contact = () => {
	return (
		<div className='main'>
			<div id='form-wrapper'>
				<form>
					<label for='fname'>First Name</label>
					<input
						type='text'
						id='fname'
						name='firstname'
						placeholder='Your name..'
					></input>
					<label for='lname'>Last Name</label>
					<input
						type='text'
						id='lname'
						name='lastname'
						placeholder='Your last name..'
					></input>
					<label for='email'>Email</label>
					<input
						type='text'
						id='fname'
						name='email'
						placeholder='Your email..'
					></input>
					<label for='subject'>Subject</label>
					<textarea
						id='subject'
						name='subject'
						placeholder='Write something..'
						style={{ height: '200px' }}
					></textarea>
					<input type='submit' value='Submit'></input>
				</form>
			</div>
			<div id='contact-wrapper'>
				<h1>Where My Workshop Is</h1>
				<div className='content-wrapper'>
					<p className='text-content'>
						My workshop is located at no.2 Me Tri Street, Tu Liem District. If
						you have interest in my arts, I would be pleasured to meet you in my
						workshop.
					</p>
					<br></br>
					<b>Tel:</b>
					<span> +84.438390484</span> <br></br> <br></br>
					<b>Mobile:</b>
					<span> +84.913005046</span> <br></br> <br></br>
					<b>Email:</b>
					<span> Ngoduchoang1974@gmail.com</span> <br></br> <br></br>
				</div>
			</div>
		</div>
	)
}

export default Contact
