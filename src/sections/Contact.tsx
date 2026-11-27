import { useState, type ChangeEvent, type FormEvent } from "react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { AnimatedSection } from "../components/AnimatedSection";
import { personal } from "../data/personal";
import { submitContact, type ContactMessage } from "../lib/contact";
import { ui } from "../lib/icons";
import { asset } from "../lib/url";

const empty: ContactMessage = { name: "", email: "", subject: "", message: "" };
const linkClass = "group flex items-center gap-3 py-3 text-muted transition-colors hover:text-accent-text";

export function Contact() {
  const [values, setValues] = useState<ContactMessage>(empty);
  const [sent, setSent] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSent(false);
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitContact(values);
    setSent(true);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="section border-t border-line">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <AnimatedSection>
          <h2 id="contact-title" className="text-4xl font-semibold tracking-tight sm:text-5xl">{personal.contact.headline}</h2>
          <p className="mt-5 max-w-md text-lg text-muted">{personal.contact.description}</p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            <li><a className={linkClass} href={`mailto:${personal.email}`}><ui.Mail size={18} aria-hidden="true" />{personal.email}</a></li>
            <li><a className={linkClass} href={personal.github} target="_blank" rel="noopener noreferrer"><GithubIcon className="size-[18px]" />GitHub</a></li>
            <li><a className={linkClass} href={personal.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon className="size-[18px]" />LinkedIn</a></li>
            <li><a className={linkClass} href={asset(personal.resumePath)} download={personal.resumeDownloadName}><ui.FileText size={18} aria-hidden="true" />Download resume</a></li>
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form onSubmit={onSubmit} className="panel space-y-5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                Name
                <input className="field mt-2" name="name" autoComplete="name" required value={values.name} onChange={onChange} />
              </label>
              <label className="block text-sm font-medium">
                Email
                <input className="field mt-2" type="email" name="email" autoComplete="email" required value={values.email} onChange={onChange} />
              </label>
            </div>
            <label className="block text-sm font-medium">
              Subject
              <input className="field mt-2" name="subject" required value={values.subject} onChange={onChange} />
            </label>
            <label className="block text-sm font-medium">
              Message
              <textarea className="field mt-2 min-h-36 resize-y" name="message" required value={values.message} onChange={onChange} />
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" className="btn btn-primary"><ui.Send size={16} aria-hidden="true" /> Open in email app</button>
              <p className="text-sm text-muted" role="status">
                {sent
                  ? <>Your email app should open with the message ready to send. If it didn't, write to <a className="text-accent-text underline" href={`mailto:${personal.email}`}>{personal.email}</a>.</>
                  : "This form drafts an email in your own email app. Nothing is sent from this site."}
              </p>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
