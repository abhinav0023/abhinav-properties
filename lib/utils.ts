<<<<<<< HEAD
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
=======
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
>>>>>>> b56d4fc3fdc50b300541215be91d39f2915e5f26

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
