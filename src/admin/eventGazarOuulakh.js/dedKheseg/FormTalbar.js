import React from 'react'
import { Col, DatePicker, Form, Input, Row, Select, Steps } from 'antd';
import dynamic from 'next/dynamic';
import { useMapEvent } from 'react-leaflet';
import { DursZuragch } from '@/src/components';
import SeatMap from '@/src/delgerenguiTsonkh/dedKheseg/SeatMap';
import Selecto from 'react-selecto';
// import Seat from "../../../../public/seats.svg"
export default function FormTalbar() {
    const { Option } = Select;
    const Editor = dynamic(() => import('@tinymce/tinymce-react').then(comp => comp.Editor), {ssr: false})
    const MapContainer = dynamic(()=> import('react-leaflet').then((comp) => comp.MapContainer), {ssr: false})
    const Marker = dynamic(()=> import('react-leaflet').then((comp) => comp.Marker), {ssr: false})
    const TileLayer = dynamic(()=> import('react-leaflet').then((comp) => comp.TileLayer), {ssr: false})
    const editorRef = React.useRef()
    const selectorRef = React.useRef()
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

    React.useEffect(() => {
        const timer = setTimeout(() => {svgShalgajSuudaldOnClickUusgey(selectorRef.current)})
        return () => clearTimeout(timer)
    }, [])

    function svgShalgajSuudaldOnClickUusgey (elem, index) {
        return new Promise(resolve => {
            const jagsaalt = [...elem.childNodes]
            if(jagsaalt.length > 0) {
                jagsaalt.forEach((x, i) => {
                    svgShalgajSuudaldOnClickUusgey(x, i+1)
                })
            } else {
                if(elem.id.toLowerCase().includes("suudal")) {
                    elem.id = elem.parentNode.id + "_" + elem.id.toLowerCase().split("x5f")[1].split('_')[1]
                    const idAwaw = elem.id
                    elem.setAttribute('class', 'cursor-pointer')
                    elem.classList.add('suudal')
                }
            }
            return resolve(true)
        })
    }

    return (
        <div className='w-full h-full bg-white rounded-[4px] shadow-md relative flex flex-row overflow-auto'>
            <div className='flex flex-col w-1/3 p-2'>
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
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                initialValue="<p>This is the initial content of the editor.</p>"
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
            <div className='border-r-4 h-full mx-1'/>
            <div className='flex flex-col w-2/3 p-2 gap-2'>
                <div className='flex flex-row overflow-auto relative h-[60px] p-2'>
                    <div className='flex justify-center items-center border-2 border-dashed w-[80px] h-full text-slate-500 cursor-pointer hover:shadow-md'>
                        <DursZuragch icon='material-symbols:add'/>
                    </div>
                </div>
                <div className='flex flex-row gap-2 '>
                    <Selecto
                        container={selectorRef.current}
                        dragContainer={selectorRef.current}
                        selectableTargets={[".suudal", document.querySelector(".suudal")]}
                        selectByClick={true}
                        selectFromInside={true}
                        continueSelect={false}
                        toggleContinueSelect={"shift"}
                        // The rate at which the target overlaps the drag area to be selected. (default: 100)
                        hitRate={0}
                        onSelect={e => {
                            e.added.forEach(el => {
                                el.setAttribute('fill', '#2980db');
                            });
                            e.removed.forEach(el => {
                                el.setAttribute('fill', '#F3808E');
                            });
                        }}
                    />
                    <div ref={selectorRef} className='w-3/4 w-full h-full justify-center items-center flex'>
                        {/* <Seat/> */}
                        <SeatMap/>
                    </div>
                    <div className='w-1/4'>
                        test
                    </div>
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