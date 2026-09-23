import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="section-pad flex flex-1 flex-col justify-center py-32">
        <div className="shell">
          <h1 className="font-display text-4xl text-ink">Project not found</h1>
          <Link href="/#projects" className="prose-link mt-6 inline-block">
            Back to projects
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
