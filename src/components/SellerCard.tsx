import { Seller } from "@/lib/types";

export default function SellerCard({ seller }: { seller: Seller }) {
  const link = seller.affiliate_link || seller.website;

  return (
    <div className="group p-5 rounded-2xl border border-slate-200/80 bg-white hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-0.5 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{seller.name}</h3>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${
                seller.type === "lokal"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                  : "bg-blue-50 text-blue-700 border border-blue-100"
              }`}
            >
              {seller.type === "lokal" ? "Lokal" : "Internasional"}
            </span>
            {seller.verified && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-teal-50 text-teal-700 border border-teal-100">
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Terverifikasi
              </span>
            )}
            {seller.ships_to_indonesia && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-100">
                🇮🇩 Kirim ke ID
              </span>
            )}
          </div>
        </div>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed">{seller.notes}</p>

      <div className="mt-3 flex flex-wrap gap-1">
        {seller.products.map((product) => (
          <span key={product} className="px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-600 rounded text-[11px]">
            {product}
          </span>
        ))}
      </div>

      {link !== "#" && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-teal-600 hover:text-teal-700 font-medium group-hover:gap-2 transition-all"
        >
          Kunjungi situs
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  );
}
