import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://peptide.co.id" },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `https://peptide.co.id${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-slate-400">
          <li>
            <Link href="/" className="hover:text-teal-600 transition-colors">Beranda</Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {item.href ? (
                <Link href={item.href} className="hover:text-teal-600 transition-colors">{item.label}</Link>
              ) : (
                <span className="text-slate-700 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
