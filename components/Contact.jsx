import Head from "next/head"

const Contact = () => {
    return (
        <div className="w-screen h-screen flex px-20 py-10 md:px-4 md:py-4">
            <Head>
                <title>Contact - Glask</title>
            </Head>
            <section style={{backgroundImage: "url('https://images.unsplash.com/photo-1589176449149-71f7ea77ec25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80')"}} className="w-40% h-full bg-no-repeat bg-cover md:hidden">

            </section>
            <form className="w-60% h-full flex flex-col pl-20 md:pl-0 justify-center md:w-full md:h-full">
                <h1 id="sliding_text" className="text-4xl mb-6" style={{fontFamily: "'Lora', serif"}}>Contact Glask</h1>
                <p id="sliding_text" className="text-sm mb-6 w-90% md:w-full" style={{fontFamily: "'Poppins', san-serif"}}>If you’re interested in talking to us about our products, or services don’t hesitate to send us a message, and we’ll get back to you in no time.</p>
                <div className="inputs flex items-center justify-between w-full h-24">
                    <div className="input flex flex-col mr-16 md:mr-4">
                        <label style={{fontFamily: "'Poppins', san-serif"}} className="text-sm mb-2" htmlFor="name">NAME</label>
                        <input required name="name" className="w-72 md:w-40 h-14 bg-white p-2 border border-gray-300 rounded focus:border-gray-700 focus:border-2" type="text"/>
                    </div>
                    <div className="input flex flex-col">
                        <label style={{fontFamily: "'Poppins', san-serif"}} className="text-sm mb-2" htmlFor="phone">PHONE</label>
                        <input required name="phone" className="w-72 md:w-40 h-14 bg-white p-2 border border-gray-300 rounded focus:border-gray-700 focus:border-2" type="text"/>
                    </div>
                    
                </div>
                <div className="input flex flex-col">
                    <label style={{fontFamily: "'Poppins', san-serif"}} className='text-sm mb-2 mt-4' htmlFor="email">EMAIL</label>
                    <input required name="email" className="w-full md:w-full h-14 bg-white p-2 border border-gray-300 rounded focus:border-gray-700 focus:border-2" type="text" />
                </div>
                
                <div className="input flex flex-col">
                    <label style={{fontFamily: "'Poppins', san-serif"}} className='text-sm mb-2 mt-4' htmlFor="message">MESSAGE</label>
                    <input required style={{height: "8rem"}} name="message" className="w-full md:w-full bg-white p-2 border border-gray-300 rounded focus:border-gray-700 focus:border-2" type="text" />
               </div>
               <button className="w-40 h-14 focus:outline-none hover:bg-gray-700 transition-all duration-300 text-sm rounded text-white bg-gray-500 mt-14">SEND MESSAGE</button>
            </form>
        </div>
    )
}

export default Contact
