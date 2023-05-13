import React, {useRef} from 'react'
import { Drawer, message } from 'antd';
import {
  TransformWrapper,
  TransformComponent,
  MiniMap
} from "react-zoom-pan-pinch";
import SeatMap from '../delgerenguiTsonkh/dedKheseg/SeatMap';
import { DursZuragch, isNullOrUndefined, useBodyUrgunOlyo } from '../components';
import { useRouter } from 'next/router';
import { uilchilgeeDuudagch } from '../components';
import Image from 'next/image';
import { clone } from 'lodash';
import { useJsApiLoader } from '@react-google-maps/api';
export default function SuudalSongokh(props) {
  const router = useRouter()
  const selectorRef = React.useRef()
  const [khajuugiinTalbar, setKhajuugiinTalbar] = React.useState(false)
  const delgetsiinUrt =  useBodyUrgunOlyo(0) 
  const { pages } = router.query;
  const [togloltiinMedeelel, setTogloltiinMedeelel] = React.useState()
  const [zakhialgataiSuudal, setZakhialgataiSuudal] = React.useState([])
  const [songogdsonSuudal, setSongogdsonSuudal] = React.useState([])
  console.log("togloltiinMedeelel =============>", togloltiinMedeelel)
  React.useEffect(() => {
      togloltiinMedeelelAvya().then(result => {
        if(!isNullOrUndefined(result)) {
          svgShalgajSuudaldOnClickUusgey(selectorRef.current, undefined, result)
        }
      })
  }, [])

  const togloltiinMedeelelAvya = () => {
    return new Promise(resolve => {
      uilchilgeeDuudagch('togloltAvya', {id: pages}).then(result => {
        if(!isNullOrUndefined(result) && result.success) {
          setTogloltiinMedeelel({...result.data})
          return resolve (result.data)
        } else {
          return resolve (undefined)
        }
      })
    })
  }

  const routeKhiiye = () => {
    router.push({
        pathname: `/delgerengui/${togloltiinMedeelel['_id']}`,
    }) 
  }

  function svgShalgajSuudaldOnClickUusgey (elem, index, ugugdul) {
    return new Promise(resolve => {
        const jagsaalt = [...elem.childNodes]
        if(jagsaalt.length > 0) {
            jagsaalt.forEach((x, i) => {
                svgShalgajSuudaldOnClickUusgey(x, i+1, ugugdul)
            })
        } else {
            if(elem?.id?.toLowerCase().includes("suudal")) {
                elem.id = elem.parentNode.id + "_" + elem.id.toLowerCase().split("x5f")[1].split('_')[1]
                ugugdul?.uniinMedeelel.forEach(x=>{
                    x.suudluud.forEach(z=>{
                        if(z === elem.id) {
                          const shalguur = zakhialgataiSuudal.findIndex(x => x === elem.id)
                          elem.classList.add('suudal')
                          elem.setAttribute('class', 'cursor-pointer')
                          if(shalguur >= 0) {
                              elem.setAttribute('fill', "#e3e3e3")
                              elem.addEventListener('click', messageKharuulya)
                          } else {
                              elem.setAttribute('fill', x.ungu)
                              elem.setAttribute('dataMedeelel', JSON.stringify(x))
                              elem.addEventListener('click', suudalSongokh)
                          }
                        }
                    })
                })
            }
        }
        return resolve(true)
    })
}

  const suudalSongokh = (e) => {
    const id = e.target.id
    const shalguur = songogdsonSuudal.findIndex(x => x.id === id)
    if(shalguur < 0) {
      const bulgiinMedelel = JSON.parse(e.target.getAttribute('dataMedeelel'))
      e.target.setAttribute('fill', '#000')
      let a = {
        id: id,
        egnee: id.split('_')[0].replaceAll('egnee', ''),
        suudal: id.split('_')[1],
        buleg: bulgiinMedelel.buleg,
        une: bulgiinMedelel.une, 
      }
      songogdsonSuudal.push(a)
    } else {
      let ungu = undefined
      console.log("suudal =========>",togloltiinMedeelel)
      togloltiinMedeelel.uniinMedeelel.map(x=>{
        x.suudal.forEach(z => {
          if(z === id) {
            ungu = x.ungu
          }
        })
      })
      e.target.setAttribute('fill', ungu)
      songogdsonSuudal.splice(shalguur, 1)
    }
    
    setSongogdsonSuudal([...songogdsonSuudal])
  }

  const suudalKhasya = (id) => {
    const shalguur = songogdsonSuudal.findIndex(x => x.id === id)
    songogdsonSuudal.splice(shalguur, 1)
    setSongogdsonSuudal([...songogdsonSuudal])
  }

  const messageKharuulya = () => {
    message.warning('Захиалгатай суудал тул сонгох боломжгүй')
  }
  
  return (<div className='h-screen flex flex-col items-stretch'>
        <div className='flex flex-col h-screen w-screen'>
            <section className='h-[100px] md:h-[120px] relative w-full bg-white items-center lg:flex font-semibold text-xl lg:text-3xl p-5 overflow-hidden' 
              style={{
                backgroundImage: `url('${togloltiinMedeelel?.zurag}')`,
                backgroundSize: 'cover',

              }}
            >
              {/* backdrop-blur-md */}
              <div className='absolute top-0 left-0 w-full h-full bg-[#000000aa] backdrop-blur-md'/>
              <div class="w-full h-full lg:px-5 flex items-center justify-start md:justify-between">
                  <div class="flex h-full space-x-4 items-center">
                    <div class="relative h-full w-36 overflow-hidden">
                      <div className='w-full h-full relative'>
                        <Image
                          src={togloltiinMedeelel?.zurag}
                          style={{
                            objectFit: 'contain'
                          }}
                          fill
                        />
                      </div>
                      {/* <img src={togloltiinMedeelel?.zurag}/> */}
                    </div>
                    <section>
                      <h1 class="text-white text-md md:text-xl">{togloltiinMedeelel?.ner}</h1>
                      <p class="hidden md:block text-white text-lg font-normal">5 сар 7, 2023 15:00</p>
                    </section>
                  </div>
                  <section className='flex-col text-sm w-[35%] items-center justify-center hidden md:flex'>
                    <div className='flex flex-row gap-2 w-full justify-start'>  
                      <div className='flex flex-row gap-2 w-1/3'>
                        <span className='text-white'>Төрөл:</span>
                        <span className='text-white'>{togloltiinMedeelel?.turul}</span>
                      </div>
                      <div className='flex flex-row gap-2 w-1/3'>
                        <span className='text-white'>Байршил:</span>
                        <span className='text-white'>{togloltiinMedeelel?.tankhim}</span>
                      </div>
                      <div className='flex flex-row gap-2 w-1/3'>
                        <span className='text-white'>Зохион байгуулагч:</span>
                        <span className='text-white'>{togloltiinMedeelel?.zokhionBaiguulagch}</span>
                      </div>
                    </div>
                    <div className='flex flex-row gap-2 w-full justify-start'>  
                      <div className='flex flex-row gap-2 w-1/3'>
                        <span className='text-white'>Өдөр:</span>
                        <span className='text-white'>2023-04-23</span>
                      </div>
                      <div className='flex flex-row gap-2 w-1/3'>
                        <span className='text-white'>Цаг:</span>
                        <span className='text-white'>18:00 цаг</span>
                      </div>
                    </div>
                  </section>
              </div>
            </section>
            <section class="bg-white h-[60px] w-full hidden lg:flex items-stretch relative justify-center border-b border-gray-300">
              <button class="flex items-center select-none space-x-2 text-c1 px-6 border-r border-gray-300 absolute left-0 top-0 bottom-0 mr-10" onClick={routeKhiiye}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="21" width="21" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z">
                  </path>
                </svg>
                <span>Буцах</span>
              </button>
              <div class="flex items-center select-none cursor-pointer space-x-4">
                <button class="uppercase cursor-pointer text-c1 font-bold">Суудал сонгох</button>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="text-c1" height="21" width="21" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <button class="uppercase text-c1  opacity-50 cursor-not-allowed">
                  Баталгаажуулах
                </button>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="text-c1" height="21" width="21" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"
                  ></path>
                  </svg>
                  <button class="uppercase text-c1 cursor-not-allowed opacity-50">Төлбөр төлөх</button></div>
            </section>
            <section className='w-full relative flex flex-1 overflow-hidden bg-[#FAFAFA]'>
                <div className='flex relative w-full flex-1 lg:w-9/12 items-center justify-center'>
                  <div ref={selectorRef} className='w-full h-full flex [&_.react-transform-wrapper]:!w-full [&_.react-transform-wrapper]:!h-full [&_.react-transform-component]:!w-full [&_.react-transform-component]:!h-full [&_.react-transform-component]:!justify-center [&_.react-transform-component]:!items-center'>
                      <TransformWrapper
                        initialScale={1}
                      >
                          {({ zoomIn, zoomOut, resetTransform, positionX, positionY, ...rest }) => (
                              <div className='relative w-full h-full' >
                                  <div className='absolute flex gap-3 z-[99999]'>
                                      <button className='p-3 py-2 bg-[#e3e3e3] border rounded-[5px]' onClick={() => zoomIn()}>+</button>
                                      <button className='p-3 py-2 bg-[#e3e3e3] border rounded-[5px]' onClick={() => zoomOut()}>-</button> 
                                  </div>
                                  <div className='hidden md:block absolute right-0 [&_.rzpp-wrapper]:!justify-center [&_.rzpp-wrapper]:!items-center [&_.rzpp-wrapper]:!flex'>
                                      <MiniMap >
                                          <SeatMap/>
                                      </MiniMap>
                                  </div>
                                  <TransformComponent>
                                      <SeatMap/>
                                  </TransformComponent>
                              </div>
                          )}
                      </TransformWrapper>
                  </div>
                </div>
                <div className='flex md:hidden w-full h-[60px] border-t-2 fixed bottom-[40px] justify-between items-center px-3 bg-white' onClick={() => setKhajuugiinTalbar(true)}>
                  <div className='flex flex-row gap-2'>
                    <span className='text-lg text-gray-800'>Нийт:</span>
                    <span className='text-xl font-bold text-gray-800'>
                      250,000.00₮
                    </span>
                  </div>
                  <div className='flex flex-row gap-3 items-center'>
                    <span className='text-xl font-bold'>
                      3
                    </span>
                    <DursZuragch icon='material-symbols:left-panel-close-outline-sharp'/>
                  </div>
                </div>
                <div className='flex md:hidden w-full h-[40px] fixed bottom-0 justify-center items-center px-3 bg-white'>
                  <button className='flex w-full h-[40px] bg-emerald-600 justify-center items-center rounded-[4px] mt-[-10px]'>
                    <span className='text-white font-bold'>Захиалах</span>
                  </button>
                </div>
                <div className='w-full h-full lg:flex lg:w-3/12 bg-white relative z-50 overflow-hidden border border-gray-300 hidden flex-col items-baseline justify-between'>
                  <div className='flex flex-col justify-start h-full w-full px-2 py-3 overflow-auto bg-gray-100 gap-2'>
                    {
                      songogdsonSuudal.map(x=> {
                        return <div className='h-[70px] flex flex-row w-full border rounded-[3px]'>
                          <div className='w-[80%] h-full bg-white border-r-2 border-dashed shadow-md rounded-l-md py-2 px-3 flex flex-col gap-2'>
                            <div className='flex flex-row w-full justify-between items-center'>
                                <span>{x.buleg}</span>
                                <span>Үнэ: {`${x.une}₮`}</span>
                            </div>
                            <div className='flex flex-row gap-3'>
                              <div className='bg-sky-100 px-1 rounded-sm flex flex-row gap-2 w-fit text-[0.8rem] border border-sky-300 h-fit'>
                                <span>Эгнээ:</span>
                                <span>{x.egnee}</span>
                              </div>
                              <div className='bg-sky-100 px-1 rounded-sm flex flex-row gap-2 w-fit text-[0.8rem] border border-sky-300 h-fit'>
                                <span>суудал:</span>
                                <span>{x.suudal}</span>
                              </div>
                            </div>
                          </div>
                          <div className='w-[20%] h-full relative bg-white p-2 after:content-[""] after:absolute after:bg-gray-100 after:w-[10px] after:h-[10px] after:bottom-[-5px] after:left-[-5px] after:rounded-full before:content-[""] before:absolute before:bg-gray-100 before:w-[10px] before:h-[10px] before:top-[-5px] before:left-[-5px] before:rounded-full shadow-md rounded-r-md'>
                              <button className='w-full h-full bg-rose-600 flex flex-col justify-center items-center rounded-md' onClick={() => {suudalKhasya(x.id)}}>
                                <DursZuragch icon='solar:trash-bin-minimalistic-2-bold' style={{color: 'white'}}/>
                                <span className='text-sm text-white'>Хасах</span>
                              </button>
                          </div>
                        </div>
                      })
                    }
                  </div>
                  <div className='bg-[#2980b910] flex flex-col px-3 py-5 w-full min-h-[200px] rounded-t-md gap-3 border-t-2'>
                    {
                      togloltiinMedeelel?.uniinMedeelel.map(x=> {
                        return <div className='flex flex-row border-b-2 py-2 px-2 gap-3 justify-between'>
                          <div className='flex flex-row gap-2'>
                            <div className='w-[20px] h-[20px] rounded-full' style={{
                              background: x.ungu
                            }}/>
                            <span className='w-auto'>
                              {x.buleg}
                            </span>
                          </div>
                          <span className='w-auto'>
                            {x.une}
                          </span>
                        </div>
                      })
                    }
                  </div>
                </div>
            </section>
        </div>
        <Drawer
          title="Суудлын жагсаалт"
          placement={'right'}
          closable={true}
          width={delgetsiinUrt - 80}
          onClose={() => setKhajuugiinTalbar(false)}
          open={khajuugiinTalbar}
          key={'drawer'}
          bodyStyle={{
            padding: 10,
            background: '#f3f3f3'
          }}
        >
          <div className='flex flex-col justify-start h-full w-full overflow-auto'>
            <div className='h-[70px] flex flex-row w-full border rounded-[3px]'>
              <div className='w-[80%] h-full bg-white border-r-2 border-dashed shadow-md rounded-l-md py-2 px-3 flex flex-col gap-2'>
                <div className='flex flex-row w-full justify-between items-center'>
                    <span>Бүлгийн нэр</span>
                    <span>Үнэ: 20,000₮</span>
                </div>
                <div className='flex flex-row gap-3'>
                  <div className='bg-sky-100 px-1 rounded-sm flex flex-row gap-2 w-fit text-[0.8rem] border border-sky-300 h-fit'>
                    <span>Эгнээ:</span>
                    <span>5</span>
                  </div>
                  <div className='bg-sky-100 px-1 rounded-sm flex flex-row gap-2 w-fit text-[0.8rem] border border-sky-300 h-fit'>
                    <span>суудал:</span>
                    <span>18</span>
                  </div>
                </div>
              </div>
              <div className='w-[20%] h-full relative bg-white p-2 after:content-[""] after:absolute after:bg-gray-100 after:w-[10px] after:h-[10px] after:bottom-[-5px] after:left-[-5px] after:rounded-full before:content-[""] before:absolute before:bg-gray-100 before:w-[10px] before:h-[10px] before:top-[-5px] before:left-[-5px] before:rounded-full shadow-md rounded-r-md'>
                  <button className='w-full h-full bg-rose-600 flex flex-col justify-center items-center rounded-md'>
                    <DursZuragch icon='solar:trash-bin-minimalistic-2-bold' style={{color: 'white'}}/>
                    <span className='text-sm text-white'>Хасах</span>
                  </button>
              </div>
            </div>
          </div>
        </Drawer>
  </div>)  
}