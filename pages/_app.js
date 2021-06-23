import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client"
import Header from "../components/Header"
import Footer from '../components/Footer'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

const client = new ApolloClient({
  uri: "http://localhost/wordpress/graphql",
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </ApolloProvider>
  )
}

export default MyApp
