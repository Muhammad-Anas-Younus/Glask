import React from 'react'
import Link from "next/link"

const Product = ({src, price, name, url, as}) => {
    return (
        <Link href={url} as={as}>
            <div className="item  mr-10 w-80 h-85vh flex-shrink-0 ml-10 mb-14 md:h-50vh cursor-pointer">
                <div className="image w-full h-70%">
                    <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="text flex w-full h-30% flex-col items-center justify-center ">
                    <h1 className="text-2xl mb-2">{name}</h1>
                    <p>{price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Product
