import '@/styles/globals.css'
import '../styles/tailwind.css'
import UndsenZagvar from '@/src/udnsenZagvar/UndsenZagvar'
export default function App({ Component, pageProps }) {
  return (
    <UndsenZagvar>
        <Component {...pageProps} />
    </UndsenZagvar>)
}
