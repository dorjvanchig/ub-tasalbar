import React from 'react'
import { Col, DatePicker, Form, Input, Row, Select, Steps } from 'antd'; 
import { TankhimContext } from './TogloltOruulakh'; 
import { DursZuragch } from '@/src/components';
import EditorOruulakh from './EditorOruulakh';
import { InboxOutlined } from '@ant-design/icons'; 
import OgnooOlnooOruulakh from '@/src/components/OgnooOlnooOruulakh';  
import { Upoload } from '@/src/components'

const { Option } = Select;
export default function FormTalbar() {
    const { tomState, editorRef, yurunkhiiMedeelelAvya, zuragOruulakh } = React.useContext(TankhimContext)
    return (
        <div className='w-full  rounded-[4px] relative flex flex-row overflow-auto'>
            <div className='flex flex-row w-full p-2'>
                <div className='w-[35%] shadow-lg px-3 bg-white rounded-lg'>
                    <Form layout="vertical" >
                        <Form.Item
                            name="name"
                            label="Тоглолтын нэр"
                            rules={[
                                {
                                    required: true,
                                    message: 'Тоглолтын нэр оруулна уу',
                                },
                            ]}
                        >
                            <Input value={tomState.yurunkhiiMedeelel.ner} onChange={(e) => {yurunkhiiMedeelelAvya('ner', e.target.value)}} />
                        </Form.Item>
                        <Form.Item
                            name="zokhionBaiguulagch"

                            label="Зохион байгуулагч"
                            rules={[
                                {
                                    required: true,
                                    message: 'Утасны дугаар',
                                },
                            ]}
                        >
                            <Input value={tomState.yurunkhiiMedeelel.zokhionBaiguulagch} onChange={(e) => {yurunkhiiMedeelelAvya('zokhionBaiguulagch', e.target.value)}} />
                        </Form.Item>
                        <Form.Item
                            name="tankhim"
                            label="Танхим"
                            rules={[
                                {
                                    required: true,
                                    message: 'Танхимын төрөл',
                                },
                            ]}
                        >
                            <Select 
                                value={tomState.yurunkhiiMedeelel.tankhim} 
                                onChange={(v) => {yurunkhiiMedeelelAvya('tankhim', v)}}
                            >
                                {tomState.tankhimiinJagsaalt.map((ugugdul) =>{
                                    return(<Option value={ugugdul.tankhimiinNer}>{ugugdul.tankhimiinNer}</Option>)
                                })} 
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="turul"
                            label="Тоглолт болох газар"
                            rules={[
                                {
                                    required: true,
                                    message: 'Тоглолт болох газар',
                                },
                            ]}
                        >
                            <Select  
                                    value={tomState.yurunkhiiMedeelel.turul}
                                    onChange={(v) => {yurunkhiiMedeelelAvya('turul', v)}}>
                                <Option value="sport">Спорт заал</Option>
                                <Option value="concert">Концерт</Option>
                                <Option value="movie">Кино театр</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Үргэлжлэх хугацаа" style={{ marginBottom: 0 }}>
                            <Form.Item 
                            name="urgeljlekhKhugatsaa"
                            label="Минут"
                                style={{ display: 'inline-block', width: 'calc(50% - 141px)', marginRight: 8 }}
                            >
                                <Input size="middle" prefix={<DursZuragch style = {{fontSize: '19px'}} icon = "mdi:clock-time-five-outline" />} 
                                    value={tomState.yurunkhiiMedeelel.urgeljlekhKhugatsaa} 
                                    onChange={(e) => {yurunkhiiMedeelelAvya('urgeljlekhKhugatsaa', e.target.value)}}
                                />
                            </Form.Item> 
                            <Form.Item 
                                name="tsagiinMedeelel"
                                label = "Өдөр тохируулах"
                                style={{ display: 'inline-block', width: 'calc(50% - -131px)' }}>
                                <OgnooOlnooOruulakh />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item
                            name="zurgiinZam"
                            label="Зураг оруулах"
                            rules={[
                                {
                                    required: true,
                                    message: 'Зураг оруулах',
                                },
                            ]}
                        >
                            <Upoload>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Байршуулахын тулд файлыг энэ хэсэг рүү чирнэ үү</p>
                                <p className="ant-upload-hint"> Компанийн мэдээлэл болон бусад хориглогдсон файлуудыг байршуулахыг хатуу хориглоно.
                                </p>
                            </Upoload> 
                        </Form.Item>
                    </Form>
                </div>
                <div className='w-[65%] px-2 ml-2'>
                    <Form layout="vertical" >
                        <Form.Item
                            name="nasniiAngilal"
                            label="Насны ангилал"
                            rules={[
                                {
                                    required: true,
                                    message: 'Насны ангилал',
                                },
                            ]}
                        >
                            <Input value={tomState.yurunkhiiMedeelel.nasniiAngilal} onChange={(e) => {yurunkhiiMedeelelAvya('nasniiAngilal', e.target.value)}} />
                        </Form.Item>
                        <Form.Item
                            name="delgerenguiMedeelel"
                            label="Дэлгэрэнгүй мэдээлэл"
                            rules={[
                                {
                                    required: true,
                                    message: 'Дэлгэрэнгүй мэдээлэл',
                                },
                            ]}
                        >
                            <EditorOruulakh/>
                        </Form.Item>
                  </Form>
                </div>
            </div>
        </div>
    )
}


        // options: {
        //     svgo:{
        //         multipass: false, 
        //         datauri: 'enc', 
        //         js2svg: {
        //           indent: 2, 
        //           pretty: true, 
        //         },
        //         plugins: [
        //           'preset-default',
        //           'prefixIds',
        //           {
        //             name: 'sortAttrs',
        //             params: {
        //               xmlnsOrder: 'alphabetical',
        //             },
        //           },
        //         ],
        //       }
        // }