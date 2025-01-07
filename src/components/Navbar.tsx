import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Save, Share } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between p-4 bg-background border-b'>
      <div className='flex items-center space-x-4'>
        <h1 className='text-2xl font-bold text-foreground'>AI Resume Studio</h1>
        <Input className='w-64' placeholder='Document name' />
      </div>
      <div className='flex items-center space-x-2'>
        <Button variant='outline' size='sm'>
          <Save className='w-4 h-4 mr-2' />
          Save
        </Button>
        <Button variant='outline' size='sm'>
          <Share className='w-4 h-4 mr-2' />
          Share
        </Button>
      </div>
    </nav>
  )
}
