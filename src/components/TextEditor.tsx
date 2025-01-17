import Editor from '@monaco-editor/react'

interface TextEditorProps {
  zoom: number
}

export default function TextEditor({ zoom }: TextEditorProps) {
  const dvalue = 'This is the value'

  return (
    <div className='w-1/2 p-4 border-r'>
      <Editor height='90vh' defaultLanguage='md' defaultValue={dvalue} />;
    </div>
  )
}
