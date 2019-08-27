import React from 'react';
import Logo from "../images/logo.jpg"


const options = ["Features", "Products"]

function Header() {
    return (
        <div className='header'>
            <div className='left-header'>
                <div className='logo' style={{
                    backgroundImage: `url(${Logo})`
                }}></div>
                {
                    options.map((elem, index) => {
                        return (
                            <div key={index}>{elem}</div>
                        )
                    })
                }

            </div>
            <div className='right-header'>
                <div className='searchBox'>
                    <input type="text" placeholder="Search our content" />
                    <i className="fa fa-search"></i>
                </div>
                <div className='languageBox'>
                    <select>
                        <option>Language</option>
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="Spanish">Spanish</option>
                    </select>
                </div>
                <div>Sign in</div>
                <div className='register'>Register</div>

            </div>
        </div>
    );
}

export default Header;
