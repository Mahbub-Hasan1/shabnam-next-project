import Leyout from "../component/Leyout"


function MyApp({ Component, pageProps }) {
  return (
    <Leyout>
      <Component {...pageProps} />
    </Leyout>
  )
}

export default MyApp
