import React from 'react'

const form = () => {
    return (
        <>
            <div className='main'>
                <div>
                    <h1>Welcome to my page</h1>
                </div>
                <div>
                    <form action="">
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                    </form>
                </div>
                <div>
                    <a href="">Forgot Password ?</a>
                </div>
                <div>
                    <p>or</p>
                    <button>Login with Google</button>
                    <button>Login</button>
                </div>
            </div>
        </>
    )
}

export default form