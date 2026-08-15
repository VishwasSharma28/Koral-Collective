/**
 * Builds a WhatsApp deep-link URL from a phone number (E.164 or any digit string)
 * and a pre-filled message string.
 *
 * Uses the wa.me redirect service which is the canonical WhatsApp link format.
 *
 * @param phoneE164 - Phone number in E.164 format (e.g. "+911234567890") or raw digits.
 *                    Non-digit characters are stripped automatically.
 * @param message   - Pre-filled message text (will be URI-encoded).
 * @returns         - A `https://wa.me/...` URL string.
 */
export function buildWhatsAppUrl(phoneE164: string, message: string): string {
  const digits = phoneE164.replace(/\D/g, "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${encoded}`;
}

/**
 * Builds a default WhatsApp enquiry message for a given experience title.
 */
export function buildExperienceEnquiryMessage(experienceTitle: string): string {
  return `Hi Koral Collective, I'd like to enquire about "${experienceTitle}".`;
}
