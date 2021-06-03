import {useState, useRef} from 'react'
import Link from "next/link"
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {faAccusoft, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Header = () => {
    return (
        <>
        <header className="h-15vh w-screen hidden min-lg:flex">
            <ul className="flex items-center w-30% justify-center font-uni">
                <li id="nav-link"><Link href="/shop">SHOP</Link></li>
                <li id="nav-link"><Link href="/about">ABOUT</Link></li>
                <li id="nav-link"><Link href="/contact">CONTACT</Link></li>
            </ul>
            
            <div id="logo" className="w-40% flex justify-center items-center">
                {/* <h1 className="text-4xl font-crimson"><Link href="#">G</Link></h1> */}
                <Link href="/">
                    <img 
                    className="cursor-pointer"
                    width="18%" src="https://mysa-skincare.com/dist/images/logo-gold.svg" alt="" />
                </Link>
            </div>
            
            <div className="w-30% flex justify-end items-center" id="cart">
                <FontAwesomeIcon style={{width: '1.2rem'}} className="mr-8" icon={faShoppingBag}/>
            </div>
        </header>
        <MobileHeader/>
        </>
    )
}

const MobileHeader = () => {
    const [open, setOpen]= useState(false)
    const icon = useRef()

    const onToggle = () => {
        setOpen(!open)
        icon.current.classList.toggle("open")    
    }

    return (
        <header className="h-10vh w-screen hidden lg:flex">
            <div className="logo w-80% flex items-center ml-4">
                <Link href="/">
                    <img 
                    className="cursor-pointer"
                    width="18%" src="https://mysa-skincare.com/dist/images/logo-gold.svg" alt="" />
                </Link>
            </div>
            <div className="cart-and-menu flex items-center w-20%">
                <div id="cart">
                    <FontAwesomeIcon style={{width: '1rem'}} className="mr-4" icon={faShoppingBag}/>
                </div>
                <div onClick={onToggle} ref={icon} className="menu">
                    <div className="menu_btn"></div>
                </div>
            </div>
            <div className={`actualMenu ${open === true ? "flex": "hidden"} flex-col absolute bg-white h-90vh top-10vh flex w-full justify-center text-center z-10`}>
                <ul className="h-60% flex flex-col items-center justify-start mt-20">
                    <li style={{fontSize: '1.5rem', marginTop: '1rem'}} id="nav-link"><Link href="/shop">SHOP</Link></li>
                    <li style={{fontSize: '1.5rem', marginTop: '1rem'}} id="nav-link"><Link href="/about">ABOUT</Link></li>
                    <li style={{fontSize: '1.5rem', marginTop: '1rem'}} id="nav-link"><Link href="/contact">CONTACT</Link></li>
                </ul>
                <div className="social_icons h-20% w-full flex items-center justify-center">
                    <Link href="#"><FontAwesomeIcon width="1.5rem" className="mr-2 cursor-pointer" icon={faTwitter}/></Link>
                    <FontAwesomeIcon width="1.5rem" className="mr-2 cursor-pointer" icon={faFacebook}/>
                    <FontAwesomeIcon width="1.5rem" className="mr-2 cursor-pointer" icon={faInstagram}/>
                </div>
            </div>
        </header>
    )
}

export default Header

