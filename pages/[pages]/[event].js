import React from 'react' 
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import UndsenZagvar from '@/src/udnsenZagvar/UndsenZagvar'
const event = (props) => {
  const router = useRouter();
  const { pages, event } = router.query;
  let Khuudas = dynamic(() => import(`@/src/${pages}/${event}`), {ssr: false,}) 
  return (
    <UndsenZagvar>
      <Khuudas {...props} router= {router}/>
    </UndsenZagvar>
  )
}

export default event