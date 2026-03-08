import Link from "next/link";

export default function NotFound() {
  return (
    <main className="surface-dark mx-auto flex min-h-screen w-full max-w-3xl flex-col items-start justify-center px-5 py-16">
      <p className="text-xs font-semibold tracking-[0.16em] text-[var(--color-accent)]">404</p>
      <h1 className="mt-4 text-4xl font-semibold">Seite nicht gefunden</h1>
      <p className="section-muted mt-4">Die angeforderte Seite existiert nicht oder wurde verschoben.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="rounded-sm bg-[var(--color-text)] px-5 py-3 text-sm font-medium text-white">
          Zur Startseite (DE)
        </Link>
        <Link href="/en" className="rounded-sm border border-[var(--color-border)] px-5 py-3 text-sm font-medium">
          Go to EN
        </Link>
      </div>
    </main>
  );
}
