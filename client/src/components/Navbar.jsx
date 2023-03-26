import React from "react";
import Logo from '../logo/logo.png'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <img src={Logo} />
                </div>
                <div className='links'>
                    <Link className='link' to='/?cat=art'> {/*query and the catagory is art*/}
                        <h6>ART</h6>
                    </Link>
                    <Link className='link' to='/?cat=science'> {/*query and the catagory is art*/}
                        <h6>SCIENCE</h6>
                    </Link>
                    <Link className='link' to='/?cat=technology'> {/*query and the catagory is art*/}
                        <h6>TECHNOLOGY</h6>
                    </Link>
                    <Link className='link' to='/?cat=cinema'> {/*query and the catagory is art*/}
                        <h6>CINEMA</h6>
                    </Link>
                    <Link className='link' to='/?cat=design'> {/*query and the catagory is art*/}
                        <h6>DESIGN</h6>
                    </Link>
                    <Link className='link' to='/?cat=food'> {/*query and the catagory is art*/}
                        <h6>FOOD</h6>
                    </Link>
                    <span>John</span>
                    <span>Logout</span>
                    <span className='write'>
                        <Link className='link' to='/write'>Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar