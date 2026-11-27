import { personal } from "../data/personal";

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function buildMailtoUrl(to: string, { name, email, subject, message }: ContactMessage): string {
  const body = `${message}\n\n(From ${name} <${email}>)`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * INTEGRATION POINT
 * This is a static site, so the form opens the visitor's email client via mailto.
 * To send messages without an email client, replace the body of this function with a
 * fetch() POST to a form service (Formspree, Web3Forms, Basin, ...) and update the
 * status messages in src/sections/Contact.tsx.
 */
export function submitContact(message: ContactMessage): void {
  window.location.href = buildMailtoUrl(personal.email, message);
}
