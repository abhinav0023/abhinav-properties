import { site } from '../data/site'

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${site.whatsappPhone}`
  if (!text) return base
  return `${base}?text=${encodeURIComponent(text)}`
}

export function openWhatsApp(text?: string): void {
  window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer')
}
