import React from 'react'
import { Col, DatePicker, Form, Input, Row, Select, Steps } from 'antd';
import dynamic from 'next/dynamic';
import { TankhimContext } from './TogloltOruulakh';
import GoogleMapReact from 'google-map-react';
import { DursZuragch } from '@/src/components';
export default function FormTalbar() {
    const { tomState, editorRef, yurunkhiiMedeelelAvya, zuragOruulakh } = React.useContext(TankhimContext)
    const { Option } = Select;
    const Editor = dynamic(() => import('@tinymce/tinymce-react').then(comp => comp.Editor), {ssr: false})
    return (
        <div className='w-full h-[calc(100%-48px)] bg-white rounded-[4px] shadow-md relative flex flex-row overflow-auto'>
            <div className='flex flex-col w-full p-2'>
                <Form layout="vertical" >
                    <Row gutter={16} className='w-full justify-center'>
                        <Col span={16}>
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
                                <Input placeholder="Тоглолтын нэр" value={tomState.yurunkhiiMedeelel.ner} onChange={(e) => {yurunkhiiMedeelelAvya('ner', e.target.value)}} />
                            </Form.Item>
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
                                    value={tomState.yurunkhiiMedeelel.delgerenguiMedeelel}
                                    onChange={() => yurunkhiiMedeelelAvya('delgerenguiMedeelel', editorRef.current.getContent())}
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
                        <Col span={6}>
                            <div className='min-h-[200px] h-[200px] w-full border-2 border-dashed cursor-pointer rounded-[4px]' onClick={zuragOruulakh}>
                                
                            </div>
                            <Form.Item
                                name="phone"
                                label="Зохион байгуулагч"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Утасны дугаар',
                                    },
                                ]}
                            >
                                <Input placeholder="Зохион байгуулагч" value={tomState.yurunkhiiMedeelel.ner} onChange={(e) => {yurunkhiiMedeelelAvya('zokhionBaiguulagch', e.target.value)}} />
                            </Form.Item>
                            <Form.Item
                                name="url"
                                label="Насны ангилал"
                            >
                                <Input
                                    style={{
                                        width: '100%',
                                    }}
                                    addonBefore="+"
                                    value={tomState.yurunkhiiMedeelel.tsakhimKhayag}
                                    placeholder="Насны ангилал"
                                    onChange={(e) => {yurunkhiiMedeelelAvya('nasniiAngilal', e.target.value)}}
                                />
                            </Form.Item>
                            <Form.Item
                                name="type"
                                label="Тоглолт болох газар"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Танхимын төрөл',
                                    },
                                ]}
                            >
                                <Select placeholder="Тоглолт болох газараа сонгоно уу" value={tomState.yurunkhiiMedeelel.turul} onChange={(v) => {yurunkhiiMedeelelAvya('khaana', v)}}>
                                    <Option value="sport">Спорт заал</Option>
                                    <Option value="concert">Концерт</Option>
                                    <Option value="movie">Кино театр</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="type"
                                label="Танхим"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Танхимын төрөл',
                                    },
                                ]}
                            >
                                <Select placeholder="Танхим сонгоно уу" value={tomState.yurunkhiiMedeelel.turul} onChange={(v) => {yurunkhiiMedeelelAvya('khaana', v)}}>
                                    <Option value="sport">Спорт заал</Option>
                                    <Option value="concert">Концерт</Option>
                                    <Option value="movie">Кино театр</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="type"
                                label="Цагийн мэдээлэл"
                            >
                                <Input
                                    style={{
                                        width: '100%',
                                    }}
                                    value={tomState.yurunkhiiMedeelel.tsakhimKhayag}
                                    placeholder="Цагийн мэдээлэл"
                                    onChange={(e) => {yurunkhiiMedeelelAvya('tsagiin', e.target.value)}}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
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