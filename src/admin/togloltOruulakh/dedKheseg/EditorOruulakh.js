import React from 'react'
import dynamic from 'next/dynamic';
import { TankhimContext } from './TogloltOruulakh';

export default function EditorOruulakh() {
    const Editor = dynamic(() => import('@tinymce/tinymce-react').then(comp => comp.Editor), {ssr: false})
    const { tomState, editorRef, yurunkhiiMedeelelAvya, zuragOruulakh } = React.useContext(TankhimContext)
  return (  <Editor
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
  )
}
