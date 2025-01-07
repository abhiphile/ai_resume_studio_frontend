import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Slider } from '@/components/ui/slider'
import { Settings, ZoomIn, ZoomOut } from 'lucide-react'

interface SettingsMenuProps {
  zoom: number
  setZoom: (zoom: number) => void
}

export default function SettingsMenu({ zoom, setZoom }: SettingsMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant='ghost' size='sm'>
          <Settings className='w-4 h-4 mr-2' />
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='space-y-4'>
          <div>
            <h4 className='font-medium mb-2'>Zoom</h4>
            <div className='flex items-center space-x-2'>
              <ZoomOut className='w-4 h-4' />
              <Slider
                value={[zoom]}
                onValueChange={value => setZoom(value[0])}
                min={50}
                max={200}
                step={10}
                className='flex-1'
              />
              <ZoomIn className='w-4 h-4' />
            </div>
            <div className='text-center mt-1 text-sm'>{zoom}%</div>
          </div>
          <div className='flex items-center justify-between'>
            <span>Theme</span>
            {/* <ModeToggle /> */}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
