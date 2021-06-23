import {useEffect, useRef, useState} from 'react'
import {gql, useQuery} from "@apollo/client"
import Link from 'next/link'
import Image from "next/image"
import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import AOS from "aos"
import 'aos/dist/aos.css'

const GET_PRODUCTS = gql`
    {
        products (first:3){
          edges {
            node {
              id
              name
              link
              slug
              image {
                sourceUrl
              }
              ... on SimpleProduct {
                price
              }
            }
          }
        }
      }
      
    `

const LandingPage = () => {
    const pRef = useRef()
    const h1Ref = useRef()
    const buttonRef = useRef()
    const [hero, setHero] = useState(false)
    const [mouse, setMouse] = useState({x:0, y:0})
    const cursor = useRef()
    useEffect(() => {
        const intervalID = setTimeout(() => {
            setHero(!hero)
        }, 10000)
        return () => clearInterval(intervalID);
    },[hero])
    useEffect(() => {
        AOS.init({once: true})
    }, [])
    const {data, loading, error} = useQuery(GET_PRODUCTS)
    
    return (
        <div className="w-screen">
            <div className="hero w-full h-85vh lg:h-screen flex lg:flex-col">
                <section key={Math.random()} className={`left w-50% lg:w-screen ${hero===false? "bg-blackish" : "bg-blue"} h-full lg:h-screen text-white flex flex-col justify-center pl-24 md:pl-12 transition-all duration-1000`}>
                    <p key={Math.random()} ref={pRef} id="sliding_text" style={{fontFamily: "'Poppins', san-serif", "--index": 0}} className="text-sm mb-4">{hero === false ? "WE ARE GLASK" : "OUR PRODUCTS"}</p>
                    {hero===false ? (
                        <h1 key={Math.random()} ref={h1Ref} id="sliding_text" style={{fontFamily: "'Lora', serif", "--index": 1}} className="text-4xl md:text-3xl mb-10 leading-3">The only glasses <br></br>you are ever going <br/> to need</h1>    
                    ): (
                        <h1 key={Math.random()} ref={h1Ref} id="sliding_text" style={{fontFamily: "'Lora', serif", "--index": 1}} className="text-4xl md:text-3xl mb-10 leading-3">Also save you <br></br>from harmful uv rays<br></br>emitted from devices</h1>    
                    )}
                    
                    <Link href="#"><button key={Math.random()} ref={buttonRef} id="sliding_text" style={{fontFamily: "'Poppins', san-serif", "--index": 2}} className="w-56 border h-12 border-white rounded hover:bg-white hover:text-black transition-all duration-500 focus:outline-none">View Products</button></Link>    

                    <div className="container flex absolute bottom-10 left-0 pl-24 md:pl-12">
                        <span onClick={() => setHero(false)} className={`w-6 h-6 rounded-full bg-transparent border ${hero===false ? "border-white" : "border-gray-500"} ${hero===false ? "text-white" : "text-gray-500"} flex items-center justify-center mr-2 cursor-pointer hover:border-white hover:text-white transition-all duration-200`}>1</span>
                        <span onClick={() => setHero(true)} className={`w-6 h-6 rounded-full bg-transparent border ${hero===true ? "border-white" : "border-gray-500"} ${hero===true ? "text-white" : "text-gray-500"} flex items-center justify-center cursor-pointer hover:border-white hover:text-white transition-all duration-200`}>2</span>
                    </div>
                </section>
                <section id="image" key={Math.random} className={`right w-50% lg:w-screen h-full`}>
                    <div id="img_container" className={`${hero===false ? "bg-hero" : "bg-hero_2"} w-full h-full bg-cover bg-center`}>
                        
                    </div>
                </section>
            </div>
            <div className="secondPage h-screen w-full flex md:flex-col">
                <section className="left w-40% h-full flex flex-col justify-center pl-24 md:w-screen md:pl-12">
                    <h1 id="h1" data-aos="fade-up" data-aos-duration="800" style={{fontFamily: "'Lora', serif"}} className="text-4xl text-black md:text-3xl mb-4 leading-3">We have everything from prescription glasses to sunglasses.</h1>    
                    <p data-aos="fade-up" data-aos-duration="500" data-aos-anchor="#h1" data-aos-delay="500" style={{fontFamily: "'Poppins', san-serif"}}  className="text-gray-400 mb-10">Different styles and colors to satisfy each and everyone's taste.</p>
                    <Link href="#"><button data-aos="fade-up" data-aos-anchor="#h1" data-aos-delay="1200" style={{fontFamily: "'Poppins', san-serif", "--index": 2, transition: "all .5s ease"}} className="w-56 border h-12 border-black rounded hover:bg-blackish hover:text-white focus:outline-none">View Products</button></Link>    
                </section>
                <section className="right w-60% h-full flex items-center pl-10 md:pl-2 md:w-screen">                    
                    <div style={{cursor: 'none'}} onMouseMove={(e) => {
                        setMouse({x: e.clientX, y:e.clientY})
                        cursor.current.setAttribute("style", "left:" + (mouse.x - 50) + "px; top:"+(mouse.y + 670)+"px" )
                    }} className="cursor_div h-70% w-full flex items-center">
                        <ScrollContainer style={{}} className="items_container w-full h-full overflow-x-auto flex items-center md:h-full">
                            <div ref={cursor} className="cursor hidden " style={{fontFamily: "'Poppins', san-serif", pointerEvents: 'none'}}>DRAG</div>
                            {loading && <h1>Loading, please wait..</h1>}
                            {data && data.products.edges.map(product => (
                                <Link 
                                href={`/shop/id?id=${product.node.id}`}
                                as={`/shop/${product.node.id}`}
                                >
                                <div key={product.node.id} className="item mr-10 w-40% h-90% flex-shrink-0 ml-10 md:w-50% md:h-full">
                                    <div className="image w-full h-70%">
                                        <img src={product.node.image.sourceUrl} alt=""  className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="text h-30% w-full flex flex-col items-center justify-center">
                                        <h1>{product.node.name}</h1>
                                        <p>{product.node.price}</p>
                                    </div>
                                </div>
                                </Link>
                            ))}
                        </ScrollContainer>
                    </div>
                </section>
            </div>
            <div className="thirdPage h-screen w-screen flex md:flex-col md:h-150vh">
                <section className="w-50% md:w-full md:h-50% flex md:pl-8 pl-24 items-center">
                    <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1615538785945-6625ccdb4b25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80')"}} className="w-90% h-80% bg-cover bg-no-repeat"></div>
                </section>
                <section className="w-50% md:w-full h-full md:h-50% flex flex-col items-center justify-center">
                    <p id="pp" data-aos="fade-up" data-aos-duration="800" style={{fontFamily: "'Poppins', san-serif"}} className="text-xl mb-4">★★★★★</p>
                    <h1 data-aos="fade-up" data-aos-duration="500" data-aos-anchor="#pp" data-aos-delay="500" style={{fontFamily: "'Poppins', san-serif"}} className="text-3xl w-70% md:w-full text-center leading-10 md:text-lg md:mx-4">
                        After trying so many different glasses brands, Glask is my favourite. I love how durable it's glasses are, and how they have got a wide variety of colors and designs to chose from.
                    </h1>
                    <p data-aos="fade-up" data-aos-duration="500" data-aos-anchor="#pp" data-aos-delay="1300" style={{fontFamily: "'Poppins', san-serif"}} className="text-md text-gray-400 mt-4">Claire</p>
                </section>
            </div>
            <div className="fourthPage h-screen w-screen flex md:flex-col md:h-150vh">
                <section className="w-50% md:w-full h-full md:h-50% flex flex-col items-center justify-center">
                    <p id="p" data-aos="fade-up" data-aos-duration="800" style={{fontFamily: "'Poppins', san-serif"}} className="text-xl mb-4">★★★★★</p>
                    <h1 data-aos="fade-up" data-aos-duration="500" data-aos-anchor="#p" data-aos-delay="500" style={{fontFamily: "'Poppins', san-serif"}} className="text-3xl md:text-lg w-70% md:w-full text-center leading-10">
                        I really like Glask's sunglasses collection. As a sunglasses enthusiast, Glask fulfills all my needs both in looks and practicality.
                    </h1>
                    <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="1200" data-aos-anchor="#p" style={{fontFamily: "'Poppins', san-serif"}} className="text-md text-gray-400 mt-4">John</p>
                </section>
                <section className="w-50% md:w-full h-full md:h-50% flex pl-24 md:pl-8 items-center">
                    <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1611774119019-461b5dbd3ae8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80')"}} className="w-90% h-80% bg-cover bg-no-repeat"></div>
                </section>
            </div>
            <div className="fifthPage h-screen w-screen px-24 md:px-8 flex md:flex-col md:h-150vh">
                <section style={{backgroundImage: "url('https://images.unsplash.com/photo-1615468822882-4828d2602857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')"}} className="w-50% md:w-full h-full md:h-50% bg-no-repeat bg-cover bg-center"></section>
                <section className="w-50% md:w-full h-full md:h-50% bg-gray-100 flex flex-col justify-center pl-20 md:pl-4">
                    <h1 id="h1h1" data-aos="fade-up" data-aos-duration="800" style={{fontFamily: "'Lora', serif"}} className="text-3xl w-70% md:w-full md:text-xl">No experiments, Just great eyecare.</h1>
                    <p data-aos="fade-up" data-aos-duration="500" data-aos-anchor="#h1h1" data-aos-delay="500" style={{fontFamily: "'Poppins', san-serif "}} className="text-md mt-4 text-gray-400 w-70% md:w-full md:text-sm">All products are made with great care and with you in mind. </p>
                    <Link href="#"><button data-aos="fade-up" data-aos-duration="500" data-aos-anchor="#h1h1" data-aos-delay="1200" style={{fontFamily: "'Poppins', san-serif", "--index": 2, transition: "all .5s ease"}} className="w-56 border h-12 border-black rounded hover:bg-blackish hover:text-white focus:outline-none mt-10 md:w-80% ">View Products</button></Link>    
                </section>
            </div>
        </div>
    )
}

export default LandingPage
