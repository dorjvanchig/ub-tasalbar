import { DursZuragch } from '../src/components/index'
import { Carousel } from 'antd';
import Image from 'next/image'
import Toglolt from '../public/zurag/bieKhun.png'
import Toglolt1 from '../public/zurag/playoff.png'
import Toglolt2 from '../public/zurag/hevtee.png'
import Toglolt3 from '../public/zurag/rahmaninoff.png'
import Toglolt4 from '../public/zurag/winter.png'

export default function Home() {

  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const myLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div className='bg-white'>
       <div className='p-[10px_70px] hidden sm:inline-block w-full border-b border-b-[#D5DFE4] relative bg-white'>
         <div className='flex items-center'>
            <div className="!block w-1/3">
              <ul className="list-none flex items-center relative "> 
                <li>
                  <a 
                    className="text-xs font-normal text-[#425A8B] p-[0px_30px_0px_0px] before:content-'before text' before:absolute before:top-[5px] before:right-[15px] before:w-[1px] h-[13px] before:bg-[#D5DFE4]" 
                    href="page-about-us.html">  
                    Нүүр
                  </a>
                </li>
                <li><a className="text-xs font-normal text-[#425A8B] p-[0px_30px_0px_0px]" href="page-careers.html">Тусламж</a></li>
                <li><a className="text-xs font-normal text-[#425A8B] p-[0px_30px_0px_0px]" href="page-register.html">Заавар</a></li>
              </ul>
            </div>
              <div className="w-1/3 items-center justify-center">
                <span className="text-xs font-normal text-[#425A8B]"></span>
              </div>
              <div className="w-1/3 flex flex-row items-center justify-end">
                  <span className="text-xs font-normal text-[#425A8B] mr-2">Холбоо барих:</span>
                  <span className='text-[#5BC694] text-sm font-semibold'> + 1800 900</span>
                  <div className="dropdown dropdown-language">
                    <button className='flex items-center ml-3'>
                        <DursZuragch icon ="emojione:flag-for-mongolia"/>
                        <span className="text-xs font-normal text-[#425A8B] ml-1">
                          MN
                        </span>
                    </button> 
                  </div> 
              </div>
          </div>
       </div>
       <header 
        className='p-[0px_0px] float-left w-full relative border-b border-b-[#D5DFE4]'
        > 
        <div className='w-full items-center justify-center'>
          <div className='flex place-items-center justify-center relative'>
            <div className='flex items-center w-[87%] p-[5px_0px]'>
              <div className='logo max-w-[150px] w-full'>
                  Logo
              </div>
              <div className='header-search w-[35%]'>
                  <div className='rounded-lg border border-[#D5DFE4] p-[5px]'>
                  <div className="flex items-center"> 
                      <div 
                      className="text-[#425A8B] leading-[28px] relative flex items-center mr-4 min-w-[120px] text-primary before:content-[''] before:absolute before:top-[8px] before:-right-[14px] before:w-[1px] before:h-[14px] before:bg-[#EBF0F3]"
                      //className='box relative mr-4 min-w-[120px] '
                      >
                          <div className='mr-6 px-3'>
                            Бүгд
                          </div>
                          <DursZuragch icon = "material-symbols:arrow-drop-down"/>
                      </div>
                      <div className="box-keysearch w-full">
                        <input className='border-none text-sm p-1 outline-none' type="text" value="" placeholder="Хайх үгээ бичнэ үү"/>
                      </div>
                  </div>
                  </div>
              </div>
              <div className='header-nav w-[45%] inline-block'>
                  <nav className="w-auto p-0 float-none">
                    <ul className="flex items-center pt-[3px] list-none">
                      <li className='float-left relative text-left'>
                        <a 
                          className='text-[#425A8B] block p-[13px_12px_13px_12px] relative text-base leading-[24px] font-normal after:content-[\f151]' 
                          href="index.html">
                            Бүжиг
                        </a>
                      </li>   
                      <li><a href="page-contact.html">Спорт</a></li>
                    </ul>
                  </nav>
              </div>
              <div className='w-[35%] text-right'>
                <div className='relative inline-block'>
                    <div className='flex'> 
                      <div  className='flex relative text-[#425A8B] font-semibold hover:cursor-pointer mr-2'> 
                        <div className=''>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                            <path opacity="0.4" d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#425A8B"/>
                            <path d="M11.9999 14.5C6.98991 14.5 2.90991 17.86 2.90991 22C2.90991 22.28 3.12991 22.5 3.40991 22.5H20.5899C20.8699 22.5 21.0899 22.28 21.0899 22C21.0899 17.86 17.0099 14.5 11.9999 14.5Z" fill="#425A8B"/>
                          </svg>
                        </div>
                        <div className='ml-2 text-[#425A8B] font-semibold'>Нэвтрэх</div>
                      </div>
                      <div className='flex relative text-[#425A8B] font-semibold hover:cursor-pointer mr-2'>
                        <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mdl-js">
                          <path d="M22 8.69001C22 9.88001 21.81 10.98 21.48 12H2.52C2.19 10.98 2 9.88001 2 8.69001C2 5.60001 4.49 3.10001 7.56 3.10001C9.37 3.10001 10.99 3.98001 12 5.33001C13.01 3.98001 14.63 3.10001 16.44 3.10001C19.51 3.10001 22 5.60001 22 8.69001Z" fill="#425A8B"/>
                          <path opacity="0.4" d="M21.48 12C19.9 17 15.03 19.99 12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.97002 19.99 4.10002 17 2.52002 12H21.48Z" fill="#425A8B"/>
                        </svg>
                        </div>
                        <div className='ml-2 text-[#425A8B] font-semibold'>
                          Үзсэн
                        </div>
                      </div>
                      <div className='flex relative text-[#425A8B] font-semibold hover:cursor-pointer mr-2'>
                        <div className=''>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mdl-js">
                            <path opacity="0.4" d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z" fill="#425A8B"/>
                            <path opacity="0.4" d="M17.5 11C19.9853 11 22 8.98528 22 6.5C22 4.01472 19.9853 2 17.5 2C15.0147 2 13 4.01472 13 6.5C13 8.98528 15.0147 11 17.5 11Z" fill="#425A8B"/>
                            <path d="M14.78 22C14.51 22 14.26 21.85 14.13 21.62C14 21.38 14 21.1 14.14 20.86L15.11 19.24C15.32 18.88 15.78 18.77 16.14 18.98C16.5 19.19 16.61 19.65 16.4 20.01L16.22 20.31C18.69 19.67 20.51 17.43 20.51 14.77C20.51 14.36 20.85 14.02 21.26 14.02C21.67 14.02 22 14.36 22 14.78C22 18.76 18.76 22 14.78 22Z" fill="#425A8B"/>
                            <path d="M2.75 9.97C2.34 9.97 2 9.64 2 9.22C2 5.24 5.24 2 9.22 2C9.5 2 9.74 2.15 9.88 2.38C10.01 2.62 10.01 2.9 9.87 3.14L8.9 4.75C8.68 5.11 8.22 5.23 7.87 5.01C7.51 4.8 7.4 4.34 7.61 3.98L7.79 3.68C5.33 4.32 3.5 6.56 3.5 9.22C3.5 9.64 3.16 9.97 2.75 9.97Z" fill="#425A8B"/>
                          </svg>
                          </div>
                        <div className='ml-2 text-[#425A8B] font-semibold'>
                          харьцуулах
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </header>
       <main className='block items-center justify-center clear-both'>
            <section className='inline-block w-full'>
                <div className='bg-white p-[24px_0px_20px_0px] relative'>
                  <div className='px-12'>
                    <div className='bg-[#D4F7FF] h-[500px] p-[60px_60px_25px_60px] rounded-lg bg-no-repeat bg-right-bottom !bg-contain'>
                      <Carousel fade dotPosition = {"left"} afterChange={onChange} autoplay>
                          <div style={contentStyle}>
                              <Image 
                                loader={myLoader}
                                src={Toglolt}
                                className='w-full h-60'
                              />
                            </div>
                            <div style={contentStyle}>
                              <Image 
                              loader={myLoader}
                                src={Toglolt1}
                                className='w-full h-60'
                              />
                            </div>
                            <div style={contentStyle}>
                              <Image 
                              loader={myLoader}
                                src={Toglolt2}
                                className='w-full h-60'
                              />
                            </div>
                            <div style={contentStyle}>
                              <Image 
                              loader={myLoader}
                                src={Toglolt3}
                                className='w-full h-60'
                              />
                            </div>
                            <div style={contentStyle}>
                              <Image 
                                src={Toglolt4}
                                loader={myLoader}
                                className='w-full h-60'
                              />
                            </div>
                      </Carousel>
                    </div>
                  </div>
                </div>
            </section>
            
            <section className='container bg-[#F0F3F8] pt-12 pb-12 mt-12'>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-[40px]">
                {
                [1,2,3,4,5,6,7,8,1,1,1,1,11,1,1,1,1,1,1,1].map(()=>{
                  return (
                    <div className='min-w-0 min-h-0 max-w-none max-h-none overflow-hidden rounded-md border border-b-[#f0f0f0] bg-[#ffffff]'>
                    <div className='object-cover overflow-hidden aspect-{ratio}'>
                      <img 
                        className='w-full h-full object-cover'
                        src="https://cdn.cody.mn/img/164861/1200x400xwebp/hevtee.jpg?h=58ada67a5c1714748aff416ffb8a80df42604c31" alt="cody"/>
                    </div>
                    <div className='bg-[#ffffff] p-4' >
                        <h4 className="text-[#242424] text-base font-semibold mb-2">Thursday Night's Comedy</h4>
                        <div className="gap-5 flex items-center mb-0">
                          <h5>
                            <span role="img" className="anticon sc-1df5tt4-0 hdMEYd">
                              <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true" focusable="false" className=""><path d="M12.667 2.668H3.333C2.597 2.668 2 3.265 2 4.001v9.334c0 .736.597 1.333 1.333 1.333h9.334c.736 0 1.333-.597 1.333-1.333V4c0-.736-.597-1.333-1.333-1.333ZM2 6.668h12M10.668 1.332v2.667M5.332 1.332v2.667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>2023 он 04 сар 06 өдөр</h5><h5 className="location"><span role="img" className="anticon sc-1df5tt4-0 hdMEYd"><svg viewBox="0 0 10 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true" focusable="false" className="">
                                <path d="M5 0C2.24 0 0 2.016 0 4.5c0 4 5 9.5 5 9.5s5-5.5 5-9.5C10 2.016 7.76 0 5 0Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="currentColor" color="currentColor">
                                </path>
                            </svg>
                            </span>
                            <span className="text">
                              The Corporate Convention Centre, B1 Club, Comedy Lab
                            </span>
                          </h5>
                        </div>
                      </div>
                </div>
                  )
                })    }
              </div>
            </section>
       </main>
    </div>
  )
}
