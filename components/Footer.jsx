import {faAccusoft, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="h-85vh bg-blackish w-screen mt-10 flex items-center md:flex-col md:h-screen">
            <section className="w-50% h-50% flex flex-col justify-center pl-14 md:pl-4 md:w-full md:h-70%">
                <h1 style={{fontFamily: "'Poppins', san-serif"}} className="text-sm text-gray-300 w-70% md:w-90% mb-8">
                Subscribe to the GLASK newsletter to receive exclusive content, offers and discounts!
                </h1>
                <div className="input md:h-20 md:flex md:items-center">
                    <input style={{fontFamily: "'Poppins', san-serif"}} className="pl-8 w-80 h-14 border border-white rounded bg-transparent text-sm focus:bg-white focus:outline-none transition-all duration-200 md:w-56" type="text" placeholder="EMAIL ADDRESS"/>
                    <button style={{fontFamily: "'Poppins', san-serif"}} className="bg-gray-500 w-32 h-14 text-white px-4 rounded text-sm ml-4 hover:bg-gray-800 transition-all duration-200 md:w-24">SIGN ME UP</button>
                </div>
                <div className="icons flex text-white mt-8 ">
                    <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center mr-2">
                        <FontAwesomeIcon width="1rem" icon={faTwitter}/>
                    </div>
                    <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center mr-2">
                        <FontAwesomeIcon width="1rem" icon={faFacebook}/>   
                    </div>
                    <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon width="1rem" icon={faInstagram}/>
                    </div>
                </div>
                <div className="rights flex text-gray-300 items-center mt-32 md:mt-12">
                    <p style={{fontFamily: "'Poppins', san-serif"}} className="text-sm mr-4">© 2021 GLASK </p>
                    <span className="bg-gray-300 w-1 h-1 rounded-full mr-4"></span>
                    <p style={{fontFamily: "'Poppins', san-serif"}} className="text-sm">ALL RIGHTS RESERVED</p>
                </div>
            </section>
            <section className="w-50% h-50% flex flex-col md:flex-row justify-center md:w-full md:h-30% md:pl-4 md:items-center">
                <div className="top h-80% flex flex-col md:w-50%">
                    <h1 style={{fontFamily: "'Poppins', san-serif"}} className="text-white text-sm">EXPLORE</h1>
                    <div className="links flex flex-col mt-4">
                        <p style={{fontFamily: "'Poppins', san-serif"}} className="text-sm text-gray-300 mb-2"><Link href="#">ABOUT</Link></p>
                        <p style={{fontFamily: "'Poppins', san-serif"}} className="text-sm text-gray-300"><Link href="#">SHOP</Link></p>
                    </div>
                </div>
                <div className="inspiration w-full flex md:flex-col justify-between md:justify-center md:w-50%">
                    <h1 style={{fontFamily: "'Poppins', san-serif"}} className='text-white text-sm md:mr-10 md:mb-4'>DESIGN INSPIRATION FROM <Link href="https://mysa-skincare.com/">MYSA</Link></h1>
                    <h1 style={{fontFamily: "'Poppins', san-serif"}} className='text-white text-sm mr-10'>WEBSITE BUILT BY <Link href="#">MUHAMMAD ANAS</Link></h1>
                </div>
            </section>
        </footer>
    )
}

export default Footer
