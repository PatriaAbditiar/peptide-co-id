import Link from "next/link";

interface PeptideCardProps {
  name: string;
  slug: string;
  description: string;
}

export default function PeptideCard({ name, slug, description }: PeptideCardProps) {
  return (
    <Link
      href={`/peptida/${slug}`}
      className="block border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-teal-200 transition-all bg-white group"
    >
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
        {name}
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
      <span className="mt-3 inline-flex items-center text-sm text-teal-700 font-medium">
        Baca Selengkapnya
        <svg
          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </Link>
  );
}
