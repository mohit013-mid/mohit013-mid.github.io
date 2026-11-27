import { personal } from "../data/personal";
import { SocialLinks } from "./SocialLinks";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-semibold">{personal.name}</p>
          <p className="mt-1 text-sm text-muted">Designed and built with React, TypeScript, and curiosity.</p>
          <p className="mt-1 text-xs text-muted">© {YEAR} {personal.name}. All rights reserved.</p>
        </div>
        <SocialLinks withEmail />
      </div>
    </footer>
  );
}
