import React, {useEffect} from 'react'
import {withRouter} from "next/router"
import {gql,ApolloClient, InMemoryCache, useQuery} from "@apollo/client"
import Head from "next/head"


const GET_PRODUCT = gql`
 query MyQuery($id: ID!) {
  product(id: $id) {
    name
    id
    slug
    image{
      sourceUrl
    }
    ... on SimpleProduct {
      price
      shortDescription
    }
  }
}

`

const product = withRouter((props) => {
    const id = props.router.query.id && props.router.query.id.toString()

    const {data,loading,error} = useQuery(GET_PRODUCT, {variables: {id}})

    useEffect(() => {
      console.log(data && data)
    }, [data])


    return (
        <div>
          <Head>
            <title>{`${data && data.product.name} | Glask`}</title>
          </Head>
          {loading && <h1>Fetching data, please wait....</h1>}
          {data && (
            <div className="w-screen h-screen flex md:flex-col">
                <section className="md:w-full md:h-50% w-50% h-full flex items-center justify-center">
                  <div className="image-container h-70% w-70%">
                      <img className="w-full h-full object-cover" src={data.product.image.sourceUrl}></img>
                  </div>
                </section>
                <section className="md:w-full md:h-50% md:pl-12 w-50% h-full flex flex-col justify-center pr-10">
                  <h1 className="text-3xl mb-4">{data.product.name}</h1>
                  <h3 className="text-xl mb-8">{data.product.price}</h3>
                  <p className="text-md mb-8">{data.product.shortDescription}</p>
                  <div className="buttons flex">
                    <div className="flex items-center">
                      <button className="w-8 h-12 border border-gray-400 rounded">+</button>
                      <p className="ml-4 mr-4">0</p>
                      <button className="w-8 h-12 border border-gray-400 rounded">-</button>
                    </div>
                    <button className="ml-8 w-56 h-12 bg-blackish text-white rounded">Add to Cart</button>
                  </div>
                </section>
            </div>            
          )}
        </div>
    )
})

export default product
