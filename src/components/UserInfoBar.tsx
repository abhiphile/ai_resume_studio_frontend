import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface UserInfoBarProps {
  children: React.ReactNode
}

export default function UserInfoBar({ children }: UserInfoBarProps) {
  return (
    <div className='flex items-center justify-between p-2 bg-muted/50 border-t'>
      <div className='flex items-center space-x-2'>
        <Avatar className='w-8 h-8'>
          <AvatarImage src='/placeholder.svg' alt='User' />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <span className='text-sm font-medium text-foreground'>John Doe</span>
      </div>
      {children}
    </div>
  )
}
