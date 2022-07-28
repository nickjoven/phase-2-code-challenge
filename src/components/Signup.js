import { useState } from 'react'

const Signup = () => {
    return (
        <div className='search'>
            <h3>Join the Planeteers!</h3>
            <form>
                <div>
                    <label> Name: </label>
                    <input type='text' placeholder='Name' />
                    <label> Birth Date: </label>
                    <input type="number" min="1900" max="2099" step="1" value="2000" />
                    <label> I'm from the US </label>
                    <input type='checkbox' />
                </div>
                <div>

                <label> Bio: </label>
                <input type='textarea' placeholder='About me...'/>
                <label> Quote: </label>
                <input type='textarea' placeholder="A quote I'd like to share..."/>
                </div>
                <label> Picture URL: </label>
                <input type='text' placeholder='image URL' />
                <label> twitter: </label>
                <input type='text' placeholder='link to twitter' />
            </form>
        </div>
    )
}

export default Signup