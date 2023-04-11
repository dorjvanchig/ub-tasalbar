import React from 'react'
import { Divider } from 'antd'
const EventTailbar = () => {
  return (
    <div className='w-full md:w-2/3 px-5 bg-white rounded-[4px] shadow-md py-4'>
        <div class="text-md flex flex-col">
            <div className='flex flex-col'>
              <div className='w-full flex md:flex-row flex-col'>
                <div className='md:w-1/2 w-full flex flex-row gap-2'>
                  <span>Зохион байгуулагч: </span><span>Маск продакшн</span>
                </div>
                <div className='md:w-1/2 w-full flex flex-row gap-2'>
                  <span>Найруулагч: </span><span>Б.Дондог</span>
                </div>
              </div>

            </div>
            <Divider plain orientation='left'><p className='font-bold text-[1.4rem] text-slate-700'>Дэлгэрэнгүй</p></Divider>
            <p>Найруулагч Jerry Zucker &#34;Ghost&#34; киноны үйл явдалаас сэдэвлэсэн неоклассик балет нь хэзээч мартагдашгүй романтик, таны зүрх сэтгэлд гүн нэвтэрч ер бусын нууцлаг
                 бодол төрүүлэх бүтээл бөгөөд илүү шинэлэг хөгжимийн найруулга бүжгийн хэлээр үзэгч та бүхэндээ толилуулах юм.</p>
                 <br/>
            <p className='font-medium'>Балетын агуулгаас товч дурдвал </p>
            <p>Дурлалт хосууд нэгэндээ хязгааргүй их хайртай ч үхэл тэднийг хагацааж орхино. Амьдын ертөнцөд сүнс болон 
                үлдсэн залуу өөрийн үхлийг санамсаргүй осол биш болохыг ойлгож, дурлалт бүсгүйнх нь амь мөн адил эрсдэлд орсныг мэдэн түүнийгээ хамгаалахын тулд зөнчөөс тусламж хүснэ. </p>
        </div>
    </div>
  )
}
 export default EventTailbar