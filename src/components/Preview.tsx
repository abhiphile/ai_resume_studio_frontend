interface PreviewProps {
  zoom: number
}

export default function Preview({ zoom }: PreviewProps) {
  return (
    <div className='w-1/2 p-4 bg-muted/20'>
      <h2 className='text-lg font-semibold mb-4 text-foreground'>Preview</h2>
      <div className='prose dark:prose-invert' style={{ fontSize: `${zoom}%` }}>
        <h1>Sample Heading</h1>
        <p>
          This is a sample preview of your content. As you type in the editor,
          you'll see the formatted output here.
        </p>
      </div>
    </div>
  )
}
