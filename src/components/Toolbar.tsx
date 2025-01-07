import { Button } from '@/components/ui/button'
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Loader2,
  BrainCircuit,
  Play,
} from 'lucide-react'
import { useState } from 'react'

export default function Toolbar() {
  const [isCompiling, setIsCompiling] = useState(false)

  return (
    <div className='flex items-center space-x-1 bg-muted/50 border-b justify-between p-2'>
      <div className='flex items-center space-x-1'>
        <Button variant='ghost' size='sm'>
          <Bold className='w-2 h-2' />
        </Button>
        <Button variant='ghost' size='sm'>
          <Italic className='w-2 h-2' />
        </Button>
        <Button variant='ghost' size='sm'>
          <Underline className='w-2 h-2' />
        </Button>
        <div className='w-px h-6 bg-border mx-2' />
        <Button variant='ghost' size='sm'>
          <AlignLeft className='w-2 h-2' />
        </Button>
        <Button variant='ghost' size='sm'>
          <AlignCenter className='w-2 h-2' />
        </Button>
        <Button variant='ghost' size='sm'>
          <AlignRight className='w-2 h-2' />
        </Button>
        <div className='w-px h-6 bg-border mx-2' />
        <Button variant='ghost' size='sm'>
          <List className='w-2 h-2' />
        </Button>
        <Button variant='ghost' size='sm'>
          <ListOrdered className='w-2 h-2' />
        </Button>
      </div>

      <div className='flex items-center space-x-2'>
        <Button
          className='flex items-center justify-center space-x-2'
          size='sm'
          disabled={isCompiling}
          onClick={() => {
            setIsCompiling(true)
            setTimeout(() => {
              setIsCompiling(false)
            }, 5000)
          }}
        >
          Compile
          {isCompiling && <Loader2 className='animate-spin w-2 h-2 ' />}
          {!isCompiling && <Play className='w-2 h-2 ' />}
        </Button>
        <Button
          className='ai-btn'
          size='sm'
          onClick={() => console.log('Analyze using AI clicked')}
        >
          Analyze using AI
          <BrainCircuit className='w-2 h-2' />
        </Button>
      </div>
    </div>
  )
}
