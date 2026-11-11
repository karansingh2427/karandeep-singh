import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Chiku privacy policy",
  description: "How Chiku, Karandeep Singh's personal AI agent, handles Google user data.",
  robots: { index: false, follow: false },
};

const UPDATED = "10 November 2026";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl tracking-tight text-ink">{title}</h2>
      <div className="mt-3 space-y-4 leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

export default function ChikuPrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article className="section-band section-pad pb-24 pt-28 md:pt-36">
          <div className="shell max-w-2xl">
            <Link href="/chiku" className="text-sm text-ink-soft transition hover:text-sage-deep">
              ← Chiku
            </Link>
            <h1 className="mt-10 font-display text-4xl tracking-tight text-ink md:text-5xl">Chiku privacy policy</h1>
            <p className="mt-4 text-sm text-ink-soft">Last updated {UPDATED}</p>

            <Section title="Who this covers">
              <p>
                Chiku is a personal AI agent built and operated by {profile.name}. It is used only by him, with his own
                Google accounts. It is not offered to anyone else, and no other person&apos;s account can be connected to it.
              </p>
            </Section>

            <Section title="What Google data Chiku accesses">
              <p>With the account owner&apos;s consent, Chiku requests three Google permissions:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-ink">Gmail, read</strong> (<code>gmail.readonly</code>): search and read
                  messages and their metadata (sender, subject, date and labels).
                </li>
                <li>
                  <strong className="text-ink">Gmail, drafts</strong> (<code>gmail.compose</code>): save draft emails,
                  with attachments the owner provided, in his own Gmail. Google bundles sending into this permission;
                  Chiku never uses it to send. The owner reviews each draft and sends it himself.
                </li>
                <li>
                  <strong className="text-ink">Google Calendar</strong> (<code>calendar.readonly</code>): read the
                  calendars and events on the account (title, time, location and number of attendees).
                </li>
              </ul>
              <p>
                Chiku does not send, delete, label or change existing email, cannot create or change calendar events,
                and does not access any other Google service.
              </p>
            </Section>

            <Section title="How the data is used">
              <p>
                Google data is used only to help the account owner: to summarise unread mail, point out what needs a
                reply, prepare reply drafts in his Gmail for him to review and send himself, show his schedule, and answer his questions about
                his own mail and calendar. It is read when he asks, and once a day for his morning brief.
              </p>
              <p>
                Google data is never used for advertising, never sold, and never used to train AI models. Chiku&apos;s use
                of information received from Google APIs adheres to the{" "}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  className="prose-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
            </Section>

            <Section title="Where the data goes">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-ink">Anthropic:</strong> to produce a summary or answer, the relevant email
                  or calendar text is sent to Anthropic&apos;s Claude API, which processes it under Anthropic&apos;s commercial terms.
                  Anthropic does not train its models on API data.
                </li>
                <li>
                  <strong className="text-ink">Telegram:</strong> Chiku&apos;s replies, which may include summaries of
                  email and calendar entries, are delivered to the account owner in a private Telegram chat.
                </li>
                <li>
                  <strong className="text-ink">The owner&apos;s own storage:</strong> Chiku keeps a log of its
                  conversations with the owner, which may include those summaries. The log is stored on his computer and
                  backed up to his private GitHub repository. Full emails and calendars are not stored.
                </li>
              </ul>
              <p>Google data is not shared with anyone else.</p>
            </Section>

            <Section title="Security">
              <p>
                Google sign-in tokens are stored only on the owner&apos;s computer, readable by his user account alone, and
                are never committed to any repository. All connections to Google, Anthropic and Telegram use encryption
                in transit.
              </p>
            </Section>

            <Section title="Revoking access and deleting data">
              <p>
                Access can be revoked at any time at{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  className="prose-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  myaccount.google.com/permissions
                </a>
                . Deleting the saved token disconnects the account immediately, and conversation logs can be deleted
                from the owner&apos;s storage.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about this policy:{" "}
                <a href={`mailto:${profile.email}`} className="prose-link">
                  {profile.email}
                </a>
              </p>
            </Section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
