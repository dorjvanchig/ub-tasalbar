import React from 'react'

export default function NevtrekhKhuudas(props) {
  return (
    <div className='pb-[100px] mt-[100px]'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-3'>
          <div></div>
            <div className='max-w-max'>
              <div class="login_wrap bg-white p-[30px] rounded shadow-[0px_0px_40px_0px_#0000000d]">
                <div class="padding_eight_all bg-white">
                    <div class="heading_s1">
                        <h3 class="mb-30">Login</h3>
                    </div>
                    <form method="post">
                        <div class="mb-[1rem]">
                            <input type="text" required="" className="border border-[#f0e9ff] rounded-md h-[48px] pl-[18px] text-sm bg-transparent" name="email" placeholder="Your Email" />
                        </div>
                        <div class="mb-[1rem]">
                            <input className="border border-[#f0e9ff] rounded-md h-[48px] pl-[18px] text-sm bg-transparent" required="" type="password" name="password" placeholder="Password"/>
                        </div>
                        <div class="mb-[20px] mt-[5px] flex items-center justify-between w-full">
                            <div class="chek-form">
                                <div class="custome-checkbox">
                                    <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value=""/>
                                    <label class="text-[#6c757d]" for="exampleCheckbox1"><span>Remember me</span></label>
                                </div>
                            </div>
                            <a class="text-muted" href="#">Forgot password?</a>
                        </div>
                        <div class="mb-[1rem]">
                            <button type="submit" 
                              className={`bg-[#ff656a] uppercase text-white inline-block text-sm font-medium p-[27px_44px] rounded relative overflow-hidden m-0 z-10 min-w-[200px] before:content-[""] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#e6373d] before:z-10 before:transform before:hover:scale-110 before:transition before:duration-1000 before:ease-linear `} name="login">
                              Нэвтрэх
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
