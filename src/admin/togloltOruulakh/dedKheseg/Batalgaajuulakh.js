import React from 'react'
import { Button, Result } from 'antd';
import { TogloltContext } from './TogloltOruulakh'
export default function Batalgaajuulakh(props) {
  const { batalgaajuulakh } = React.useContext(TogloltContext)
  return ( 
    <div className='w-full h-full items-center flex justify-center bg-white'>
      <Result
        status="success"
        title="Мэдээлэл баталгаажуулах"
        subTitle="Мэдээлэл баталгаажуулахдаа заавал бөглөх талбараа шалгана уу"
        extra={[
          <Button onClick={()=> batalgaajuulakh()} className='!bg-[#1677ff]' type="primary" key="console">
            Баталгаажуулах
          </Button>, 
        ]}
      />
    </div>
  )
}
