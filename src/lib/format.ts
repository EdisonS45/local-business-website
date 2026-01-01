// src/lib/format.ts

export function formatPhoneForDisplay(phone: string): string {
  // Example: +919876543210 → +91 98765 43210
  if (phone.startsWith("+91") && phone.length === 13) {
    return `+91 ${phone.slice(3, 8)} ${phone.slice(8)}`;
  }
  return phone;
}
