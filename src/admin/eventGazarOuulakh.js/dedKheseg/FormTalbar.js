import React from 'react'
import { Col, DatePicker, Form, Input, Row, Select, Steps } from 'antd';
import dynamic from 'next/dynamic';
import { useMapEvent } from 'react-leaflet';
export default function FormTalbar() {
    const { Option } = Select;
    const MapContainer = dynamic(()=> import('react-leaflet').then((comp) => comp.MapContainer), {ssr: false})
    const Marker = dynamic(()=> import('react-leaflet').then((comp) => comp.Marker), {ssr: false})
    const TileLayer = dynamic(()=> import('react-leaflet').then((comp) => comp.TileLayer), {ssr: false})
    const Test = () => {
        const map = useMapEvent('click', (e) => {
            // console.log({...e.latlng})
            setState({...e.latlng})
        })
        return null
    }
    // const { useMapEvent } = dynamic(()=> import('react-leaflet/u'), {ssr: false})
    const [state, setState] = React.useState({
        lat: 47.9187,
        lng: 106.9182
    })
    const [step, setStep] = React.useState(0)
    return (
        <div>
            <Steps
                type="navigation"
                size="small"
                current={step}
                onChange={e => setStep(e)}
                className="mb-3"
                items={[
                {
                    title: 'Газарын мэдээлэл',
                    // status: 'finish',
                },
                {
                    title: 'Заал оруулах',
                },
                ]}
            />
           
            {step === 0 ? 
            <>
             <div className='w-full'>
                <MapContainer center={[state.lat, state.lng]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OdpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[state.lat, state.lng]}/>
                    <Test/>
                </MapContainer>
            </div>
            <Form layout="vertical" >
                <Row gutter={16}>
                    <Col span={12}>
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
                        <Input placeholder="Please enter user name" />
                    </Form.Item>
                    </Col>
                    <Col span={12}>
                    <Form.Item
                        name="url"
                        label="Цахим хаяг"
                        rules={[
                        {
                            required: true,
                            message: 'Please enter url',
                        },
                        ]}
                    >
                        <Input
                        style={{
                            width: '100%',
                        }}
                        addonBefore="http://"
                        // addonAfter=".com"
                        placeholder="Please enter url"
                        />
                    </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                    <Form.Item
                        name="phone"
                        label="Утасны дугаар"
                        rules={[
                        {
                            required: true,
                            message: 'Танхимын нэр',
                        },
                        ]}
                    >
                        <Input placeholder="Please enter user name" />
                    </Form.Item>
                    </Col>
                    <Col span={12}>
                    <Form.Item
                        name="type"
                        label="Төрөл"
                        rules={[
                        {
                            required: true,
                            message: 'Please choose the type',
                        },
                        ]}
                    >
                        <Select placeholder="Please choose the type">
                        <Option value="sport">Спорт заал</Option>
                        <Option value="concert">Концерт</Option>
                        <Option value="movie">Кино театр</Option>
                        </Select>
                    </Form.Item>
                    </Col>
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
                        <Input.TextArea rows={4} placeholder="please enter url description" />
                    </Form.Item>
                    </Col>
                </Row>
            </Form>
            </> :
            <div className='flex flex-col w-full gap-3'>
                <div className='flex flex-col justify-center items-center h-[75px] w-full border-2 border-dashed cursor-pointer rounded-[4px] hover:shadow-md'>
                    <span className='text-[1.3rem] text-gray-500'>Заал оруулах</span>
                    <span className='text-[0.75rem] text-gray-300'>*SVG файл хуулна</span>
                </div>
            </div>
        }
        </div>
    )
}
