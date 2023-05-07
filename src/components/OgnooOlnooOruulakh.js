import { Button, Divider, Select, DatePicker } from 'antd';
import React, { useRef, useState } from 'react';
import DursZuragch from './suuriComponent/DursZuragch';
import { TankhimContext } from '../admin/togloltOruulakh/dedKheseg/TogloltOruulakh';
import dayjs from 'dayjs';

export default function OgnooOlnooOruulakh() {
    const { tomState, setleye } = React.useContext(TankhimContext)
    const [open, setOpen] = useState(false)  
    const inputRef = useRef(null);  
    const onOk = (value) => {
        let ognoo = dayjs(value).format('YYYY-MM-DD HH:mm:ss')
        tomState.yurunkhiiMedeelel.tsagiinMedeelel.push(ognoo)
        setleye()
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
       
    };
    const handleChange = (value) => {
        let index = tomState.yurunkhiiMedeelel.tsagiinMedeelel.findIndex(a=> a===value[0])
        console.log('index', index, 'value', value)
        if (index > -1){
            tomState.yurunkhiiMedeelel.tsagiinMedeelel.splice(index,1)
            setleye()
        }
    };
    
  return (<Select
            mode="multiple"
            onFocus={()=> setOpen(true)}  
            onBlur={()=> setOpen(false)}
            open = {open} 
            onChange={handleChange}
            allowClear
            value={tomState.yurunkhiiMedeelel.tsagiinMedeelel}
            dropdownRender={(menu) => (
            <>
            {menu}
            <Divider
                style={{
                    margin: '8px 0',
                }}
            /> 
            <div className='grid w-full'>
                <DatePicker  
                    showNow = {false}
                    placeholder='Огноо сонгох'
                    onFocus={()=> setOpen(true)}  
                    ref={inputRef}
                    showTime={{
                        format: 'HH:mm',
                    }}
                    format="YYYY-MM-DD HH:mm"   
                    onOk={onOk}
                /> 
            </div> 
      </>
    )}
    options={tomState.yurunkhiiMedeelel.tsagiinMedeelel.map((item) => ({
      label: item,
      value: item,
    }))}
  />
  )
}
