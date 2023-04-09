import '@/styles/globals.css'
import '../styles/tailwind.css'
export default function App({ Component, pageProps }) {
  return <main>
      <Component {...pageProps} />
    </main>
}
