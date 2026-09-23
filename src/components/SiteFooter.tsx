import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="section-band-alt section-pad border-t border-line py-10">
      <div className="shell flex flex-col gap-4 text-sm text-ink-soft md:flex-row md:items-center md:justify-between">
        <p className="font-display text-ink">{profile.brand}</p>
        <p>
          Product · AI · regulated delivery ·{" "}
          <a
            href={profile.karuna}
            className="prose-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Karuṇā Space
          </a>
        </p>
      </div>
    </footer>
  );
}
