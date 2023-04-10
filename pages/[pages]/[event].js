import React from 'react' 
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const event = (props) => {
  const router = useRouter();
  const { pages, event } = router.query;
  let Khuudas = dynamic(() => import(`@/src/${pages}/${event}`), {ssr: false,}) 
  return (
    <Khuudas/>
  )
}

export default event