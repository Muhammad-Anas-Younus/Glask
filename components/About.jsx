import Link from 'next/link'

const About = () => {
    return (
        <div>
            <div className="hero w-full h-85vh lg:h-screen flex lg:flex-col">
                <section className={`left w-50% lg:w-screen bg-blackish h-full lg:h-screen text-white flex flex-col justify-center pl-24 md:pl-6 transition-all duration-1000`}>
                    <p id="sliding_text" style={{fontFamily: "'Poppins', san-serif", "--index": 0}} className="text-sm mb-4">PRONOUNCED GI-LASK</p>
                    
                        <h1 id="sliding_text" style={{fontFamily: "'Lora', serif", "--index": 1}} className="text-4xl md:text-3xl mb-10 leading-3">
                            Glask came into being with a vision of creating the most comfortable and durable eyeglasses.
                        </h1>    
                </section>
                <section id="image" className={`right w-50% lg:w-screen h-full`}>
                    <div id="img_container" className={`bg-hero w-full h-full bg-cover bg-center`}>
                        
                    </div>
                </section>
            </div>
            <div className="thirdPage h-screen w-screen flex md:flex-col md:h-150vh xsm:h-160vh">
                <section className="w-50% md:w-full md:h-50% flex md:pl-8 pl-24 items-center">
                    <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1577400983943-874919eca6ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"}} className="w-90% h-80% bg-cover bg-right bg-no-repeat"></div>
                </section>
                <section className="w-50% md:w-full h-full md:h-50% flex flex-col justify-center pl-10 md:pr-4">
                    <p style={{fontFamily: "'Poppins', san-serif"}} className="text-md text-gray-400">MEET THE FOUNDER</p>
                    <h1 style={{fontFamily: "'Lora', serif"}} className="text-3xl w-70% mt-4 md:w-full">Hi, I'm John Doe, founder of Glask</h1>
                    <p className="w-70% md:w-full mt-4 text-gray-600 text-lg" style={{fontFamily: "'Poppins', san-serif"}}> 
                        After not being able to find the perfect pair of glasses that are both durable and fashionable, I decided to launch my own glasses brand named Glask.
                    </p>
                    <p className="w-70% md:w-full mt-4 text-gray-600 text-lg" style={{fontFamily: "'Poppins', san-serif"}}>
                    With Glask the main aim is to provide both beauty and durability in an affordable package.
                    </p>
                    <Link href="#"><button style={{fontFamily: "'Poppins', san-serif", "--index": 2, transition: "all .5s ease"}} className="w-56 border h-12 border-black rounded hover:bg-blackish hover:text-white focus:outline-none mt-10">View Products</button></Link>    
                </section>
            </div>
        </div>
    )
}

export default About
