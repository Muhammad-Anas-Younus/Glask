import React, { useEffect } from 'react'
import Product from '../components/Product'
import {ApolloClient, gql, InMemoryCache} from "@apollo/client"

const shop = ({products, loading}) => {
    useEffect(() => {
        console.log(products)
    }, [])
    return (
        <div className="pl-10 pt-10 w-screen min-h-screen justify-center grid grid-cols-3 md:grid-cols-1 md:pl-0">
            {products.map(product => (
                <Product key={product.node.id}
                url={`/shop/id?id=${product.node.id}`}
                as={`/shop/${product.node.id}`}
                name={product.node.name}
                price={product.node.price}
                src={product.node.image.sourceUrl}
                />
            ))}
        </div>
    )
}

export const getStaticProps = async () => {
    const GET_PRODUCTS = gql`
    {
        products {
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
    const client = new ApolloClient({
        uri: "http://localhost/wordpress/graphql",
        cache: new InMemoryCache()
    })
    const {data,loading} = await client.query({query: GET_PRODUCTS})
    return {
        props: {
            products: data.products.edges,
            loading
        }
    }
}

export default shop
