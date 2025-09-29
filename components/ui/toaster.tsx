<<<<<<< HEAD
'use client'

import { useToast } from '@/hooks/use-toast'
=======
"use client"

import { useToast } from "@/hooks/use-toast"
>>>>>>> b56d4fc3fdc50b300541215be91d39f2915e5f26
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
<<<<<<< HEAD
} from '@/components/ui/toast'
=======
} from "@/components/ui/toast"
>>>>>>> b56d4fc3fdc50b300541215be91d39f2915e5f26

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
