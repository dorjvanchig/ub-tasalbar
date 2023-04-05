import '@/styles/globals.css'
import '../styles/tailwind.css'
import Tses from '@/src/tses/Tses'
export default function App({ Component, pageProps }) {
  return <main>
      {/* <Tses /> */}
      <Component {...pageProps} />
    </main>
}
