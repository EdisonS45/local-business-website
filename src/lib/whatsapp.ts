// src/lib/whatsapp.ts

export function generateWhatsAppUrl(
  phone: string,
  message: string
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
