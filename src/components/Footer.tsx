import { siteConfig } from "../config/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Blue accent line at top */}
        <div className="mb-8 h-px accent-line-carolina opacity-40" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p
              className="text-sm tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {siteConfig.org.name}
            </p>
            <p className="text-sm text-muted">{siteConfig.org.university}</p>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-xs text-muted/60">
              Affiliated with the Dept. of Applied Physical Sciences
            </p>
            <a
              href={siteConfig.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-tight text-carolina transition-colors duration-200 hover:text-foreground"
            >
              All Links &rarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
