import React, { useState } from 'react'
import { Col, Button, Form, Input, Row, Select, Steps } from 'antd';
import { TankhimContext } from './TankhimOruulakh';
import { SButton, useBodyUndurOlyo } from '@/src/components';
import GazriinZuragOruulakh from './GazriinZuragOruulakh';
import dynamic from 'next/dynamic';
export default function FormTalbar(props) {
    console.log('props', props)
    let undur = useBodyUndurOlyo(0)
    const { tomState, editorRef, yurunkhiiMedeelelAvya } = React.useContext(TankhimContext)
    const Editor = dynamic(() => import('@tinymce/tinymce-react').then(comp => comp.Editor), {ssr: false})
    return ( 
        <div className='w-full'>
            <div className='border-b flex justify-between items-center py-1 border-b-slate-300'>
                <Button 
                    onClick={()=> props.talbarButsaakh && props.talbarButsaakh()}
                >
                     Буцах
                </Button>
                <Button 
                    className='!bg-[#1677ff]'
                    type="primary"
                >
                    Хадгалах
                </Button>
            </div>
            <div className='flex flex-row p-2'>
                <div className='w-[50%] p-2 rounded-lg'>
                    <GazriinZuragOruulakh />
                </div>
                <div className='w-[50%]'>
                <Form layout="vertical" >
                        <Row gutter={16}>
                            <Col span={6}>
                                <Form.Item
                                    name="name"
                                    label="Газарын нэр"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Танхимын нэр оруулна уу',
                                    },
                                    ]}
                                >
                                    <Input placeholder="Газарын нэр" value={tomState.yurunkhiiMedeelel.ner} onChange={(e) => {yurunkhiiMedeelelAvya('ner', e.target.value)}} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    name="url"
                                    label="Цахим хаяг"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Цахим хаяг оруулна уу',
                                    },
                                    ]}
                                >
                                    <Input
                                    style={{
                                        width: '100%',
                                    }}
                                    addonBefore="http://"
                                    // addonAfter=".com"
                                    value={tomState.yurunkhiiMedeelel.tsakhimKhayag}
                                    placeholder="Цахим хаяг"
                                    onChange={(e) => {yurunkhiiMedeelelAvya('tsakhimKhayag', e.target.value)}}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    name="phone"
                                    label="Утасны дугаар"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'ТУтасны дугаар',
                                    },
                                    ]}
                                >
                                    <Input placeholder="Утасны дугаар" value={tomState.yurunkhiiMedeelel.utas} onChange={(e) => {yurunkhiiMedeelelAvya('utas', e.target.value)}} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    name="type"
                                    label="Төрөл"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Танхимын төрөл',
                                    },
                                    ]}
                                >
                                    <Select placeholder="Танхимын төрөл сонгоно уу" value={tomState.yurunkhiiMedeelel.turul} onChange={(v) => {yurunkhiiMedeelelAvya('turul', v)}}>
                                        <Option value="sport">Спорт заал</Option>
                                        <Option value="concert">Концерт</Option>
                                        <Option value="movie">Кино театр</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                            <Form.Item
                                name="description"
                                label="Дэлгэрэнгүй мэдээлэл"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter url description',
                                    },
                                ]}
                            >
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    // initialValue="<p>This is the initial content of the editor.</p>"
                                    value={tomState.yurunkhiiMedeelel.delgerengui}
                                    onChange={() => yurunkhiiMedeelelAvya('delgerengui', editorRef.current.getContent())}
                                    init={{
                                        height: 400,
                                        menubar: false,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar: 'undo redo | formatselect | ' +
                                        'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
                            </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    )
}