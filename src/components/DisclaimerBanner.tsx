export default function DisclaimerBanner() {
  return (
    <div className="flex items-start gap-3 bg-amber-50/80 border border-amber-200/60 rounded-xl px-4 py-3 mb-8">
      <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
      <p className="text-sm text-amber-800 leading-relaxed">
        <strong>Disclaimer:</strong> Konten ini hanya untuk tujuan informasi. Konsultasikan dengan dokter sebelum penggunaan. Peptide.co.id tidak memberikan saran medis.
      </p>
    </div>
  );
}
