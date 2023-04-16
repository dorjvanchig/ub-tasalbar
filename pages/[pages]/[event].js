import React from 'react' 
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import UndsenZagvar from '@/src/udnsenZagvar/UndsenZagvar'
export default function Event (props){
  const router = useRouter();
  const { pages, event } = router.query;
  let Khuudas = dynamic(() => import(`@/src/${pages}/${event}`), {ssr: false,}) 
  return (
    <UndsenZagvar>
      <Khuudas {...props} router= {router}/>
    </UndsenZagvar>
  )
} 
export async function getServerSideProps(context) {
  console.log('context', context)
  return { props: {  } }
}