import { CornerDownLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useAuth } from '@/helpers/zustand'

export function MessagesInputField() {
  const user = useAuth((state) => state.user)
  return (
    <form className="overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring mt-auto">
      <div className="flex">
        <Textarea
          id="message"
          placeholder={`send messages to ${user.name}`}
          className="resize-none border-0 shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center p-3 pt-0">
          <Button type="submit" size="sm" asChild={false}>
            Send Message
            <CornerDownLeft className="size-3.5" />
          </Button>
        </div>
      </div>
    </form>
  )
}
