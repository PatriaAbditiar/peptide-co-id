export interface StackData {
  slug: string;
  name: string;
  alias?: string;
  goal: "Recovery" | "Anti-Aging" | "Fat Loss" | "Growth Hormone" | "Imunitas";
  goalSlug: string;
  icon: string;
  tagline: string;
  description: string;
  peptides: string[]; // peptide slugs
  duration: string;
  difficulty: "Pemula" | "Menengah" | "Lanjut";
  whyItWorks: string;
  benefits: string[];
  considerations: string[];
  protocolNote: string;
  faqs: { question: string; answer: string }[];
}

export const goals = [
  { slug: "recovery", name: "Recovery & Penyembuhan", icon: "🩹" },
  { slug: "growth-hormone", name: "Growth Hormone", icon: "📈" },
  { slug: "anti-aging", name: "Anti-Aging", icon: "✨" },
  { slug: "fat-loss", name: "Fat Loss", icon: "⚖️" },
  { slug: "imunitas", name: "Imunitas", icon: "🛡️" },
];

export const stacks: StackData[] = [
  {
    slug: "wolverine-stack",
    name: "Wolverine Stack",
    alias: "BPC-157 + TB-500",
    goal: "Recovery",
    goalSlug: "recovery",
    icon: "🩹",
    tagline: "Kombinasi recovery paling populer untuk cedera tendon dan otot",
    description: "Kombinasi BPC-157 + TB-500 adalah stack peptida paling banyak dibahas dalam komunitas recovery. Disebut 'Wolverine Stack' karena reputasinya untuk penyembuhan cepat. Mekanisme kedua peptida saling melengkapi — BPC-157 fokus penyembuhan lokal, TB-500 efek sistemik regenerasi jaringan.",
    peptides: ["bpc-157", "tb-500"],
    duration: "4-8 minggu",
    difficulty: "Pemula",
    whyItWorks: "BPC-157 bekerja melalui modulasi growth factor dan jalur nitric oxide untuk penyembuhan lokal — sangat efektif jika diinjeksikan dekat area cedera. TB-500 memiliki efek sistemik melalui regulasi aktin dan migrasi sel — bekerja di seluruh tubuh termasuk jaringan dengan suplai darah terbatas. Kombinasi keduanya menargetkan aspek sinyal (BPC-157) dan struktural (TB-500) dari proses penyembuhan.",
    benefits: [
      "Percepatan penyembuhan tendon, ligamen, dan otot",
      "Pengurangan inflamasi dan pembengkakan",
      "Peningkatan range of motion pada area cedera",
      "Dukungan penyembuhan saluran pencernaan (efek BPC-157)",
      "Regenerasi sistemik di seluruh tubuh (efek TB-500)",
    ],
    considerations: [
      "Keduanya termasuk daftar zat terlarang WADA — atlet kompetitif harus menghindari",
      "Tidak menggantikan fisioterapi atau perawatan medis konvensional",
      "Data klinis kombinasi pada manusia tidak ada — kebanyakan anekdotal",
      "Mulai dengan satu peptida dulu untuk mengidentifikasi reaksi sebelum kombinasi",
    ],
    protocolNote: "Komunitas riset umumnya mendiskusikan injeksi subkutan harian dalam siklus 4-6 minggu, dengan istirahat 2-4 minggu di antara siklus. Peptide.co.id tidak memberikan rekomendasi dosis — konsultasikan dengan profesional kesehatan.",
    faqs: [
      { question: "Apakah BPC-157 dan TB-500 boleh dicampur dalam satu syringe?", answer: "Komunitas riset terbagi pendapat. Beberapa pengguna mencampurnya untuk kenyamanan, tetapi yang lain menjaga injeksi terpisah untuk meminimalkan risiko interaksi atau degradasi. Tidak ada data klinis yang mendukung kompatibilitas." },
      { question: "Apakah bisa digunakan untuk cedera akut?", answer: "Banyak pengguna melaporkan menggunakan untuk cedera baru, tetapi prioritaskan perawatan medis akut dahulu. Konsultasikan dokter olahraga atau ortopedi sebelum memutuskan." },
    ],
  },
  {
    slug: "classic-gh-stack",
    name: "Classic GH Stack",
    alias: "CJC-1295 + Ipamorelin",
    goal: "Growth Hormone",
    goalSlug: "growth-hormone",
    icon: "📈",
    tagline: "Stack growth hormone paling fundamental dan teruji",
    description: "Kombinasi CJC-1295 (atau Mod GRF 1-29) dengan Ipamorelin adalah stack GH paling sering didiskusikan. Keduanya bekerja melalui mekanisme reseptor yang berbeda namun komplementer, menghasilkan efek sinergis pada pelepasan hormon pertumbuhan.",
    peptides: ["cjc-1295", "ipamorelin"],
    duration: "8-12 minggu",
    difficulty: "Pemula",
    whyItWorks: "CJC-1295 adalah analog GHRH yang merangsang reseptor GHRH di pituitari. Ipamorelin adalah agonis reseptor ghrelin yang merangsang pelepasan GH melalui jalur berbeda. Karena kedua jalur sinyal independen, aktivasi simultan menghasilkan pulsa GH yang lebih besar dibanding penggunaan tunggal — efek sinergis sejati, bukan additif.",
    benefits: [
      "Peningkatan kadar GH dan IGF-1 alami",
      "Perbaikan kualitas tidur (deep sleep)",
      "Recovery yang lebih cepat dari latihan",
      "Potensi peningkatan komposisi tubuh (lean mass, lemak)",
      "Tidak meningkatkan kortisol atau prolaktin (selektif Ipamorelin)",
    ],
    considerations: [
      "Terlarang WADA untuk atlet kompetitif",
      "Manipulasi GH jangka panjang memiliki risiko yang belum sepenuhnya dipahami",
      "Mod GRF 1-29 (tanpa DAC) lebih meniru pola GH alami dibanding CJC-1295 dengan DAC",
      "Peningkatan IGF-1 berkepanjangan secara teoritis bisa mendukung pertumbuhan sel kanker existing",
    ],
    protocolNote: "Protokol komunitas umumnya melibatkan injeksi pre-bed atau pasca latihan. Mod GRF 1-29 + Ipamorelin sering 2-3x sehari karena waktu paruh pendek. CJC-1295 dengan DAC memungkinkan dosing 1-2x per minggu.",
    faqs: [
      { question: "Apakah perlu pakai versi DAC atau non-DAC dari CJC-1295?", answer: "Non-DAC (Mod GRF 1-29) memberikan pola GH lebih meniru fisiologis alami. DAC nyaman karena dosing jarang, tapi pelepasan GH kontinu yang tidak alami. Kebanyakan praktisi merekomendasikan non-DAC untuk pemula." },
      { question: "Kapan waktu terbaik injeksi?", answer: "Pre-bed (30 menit sebelum tidur) memanfaatkan pulsa GH nokturnal alami. Pasca latihan juga populer untuk recovery. Hindari injeksi dekat dengan makan karena makanan menumpulkan respons GH." },
    ],
  },
  {
    slug: "anti-aging-longevity",
    name: "Anti-Aging & Longevity Stack",
    alias: "Epitalon + Ipamorelin/CJC-1295",
    goal: "Anti-Aging",
    goalSlug: "anti-aging",
    icon: "✨",
    tagline: "Stack kombinasi telomerase dan GH untuk anti-aging komprehensif",
    description: "Menggabungkan Epitalon (aktivasi telomerase) dengan Classic GH Stack (Ipamorelin + CJC-1295) untuk pendekatan anti-aging multi-arah. Epitalon menargetkan penuaan seluler di level telomere, sementara stack GH mendukung regenerasi jaringan dan komposisi tubuh.",
    peptides: ["epitalon", "ipamorelin", "cjc-1295"],
    duration: "Epitalon: siklus 10-20 hari, 2x/tahun. GH stack: 8-12 minggu",
    difficulty: "Menengah",
    whyItWorks: "Epitalon merangsang aktivasi enzim telomerase, yang memperpanjang telomere — struktur ujung kromosom yang memendek seiring usia. GH stack mendukung sintesis protein, kualitas kulit, dan komposisi tubuh yang menurun seiring penuaan. Pendekatan dua arah: mengatasi aging di level seluler (Epitalon) dan jaringan (GH).",
    benefits: [
      "Potensi pemanjangan telomere dan regulasi melatonin",
      "Perbaikan kualitas tidur dan ritme sirkadian",
      "Peningkatan kualitas kulit dan elastisitas",
      "Dukungan komposisi tubuh dan vitalitas",
      "Efek anti-oksidan (Epitalon)",
    ],
    considerations: [
      "Klaim longevity belum dibuktikan dalam studi klinis manusia kuat",
      "Sebagian besar penelitian Epitalon dari satu kelompok riset di Rusia",
      "GH stack bukan untuk siapa saja — hindari jika ada riwayat kanker",
      "Komitmen jangka panjang dan biaya konsisten",
    ],
    protocolNote: "Epitalon umumnya dilakukan dalam siklus 10-20 hari, 2 kali per tahun. GH stack lebih kontinu dengan istirahat berkala. Kombinasi keduanya tidak ada protokol standar — sangat eksperimental.",
    faqs: [
      { question: "Apakah benar Epitalon memperpanjang umur?", answer: "Studi pada hewan menunjukkan potensi, tetapi tidak ada data klinis manusia yang kuat. Klaim longevity harus diperlakukan dengan skeptisisme ilmiah." },
    ],
  },
  {
    slug: "fat-loss-stack",
    name: "Fat Loss Stack",
    alias: "Tesamorelin + AOD-9604",
    goal: "Fat Loss",
    goalSlug: "fat-loss",
    icon: "⚖️",
    tagline: "Kombinasi peptida untuk lipolisis dan komposisi tubuh",
    description: "Menggabungkan Tesamorelin (analog GHRH disetujui FDA untuk lipodistrofi) dengan AOD-9604 (fragmen HGH spesifik untuk lipolisis). Pendekatan dual: peningkatan GH alami via Tesamorelin dan stimulasi lipolisis langsung via AOD-9604.",
    peptides: ["tesamorelin", "aod-9604"],
    duration: "12-16 minggu",
    difficulty: "Menengah",
    whyItWorks: "Tesamorelin meningkatkan GH dan IGF-1 yang mendukung lipolisis (pemecahan lemak), terutama lemak viseral — terbukti dalam uji klinis fase III. AOD-9604 adalah fragmen HGH 177-191 yang dimodifikasi untuk efek lipolitik tanpa efek pertumbuhan atau hiperglisemik. Kombinasi: efek GH komprehensif + targeted fat metabolism.",
    benefits: [
      "Pengurangan lemak viseral (data klinis Tesamorelin)",
      "Stimulasi lipolisis tanpa efek diabetogenik (AOD-9604)",
      "Peningkatan IGF-1 dan komposisi tubuh",
      "Tidak menekan produksi GH alami",
    ],
    considerations: [
      "GLP-1 agonists (Semaglutide/Tirzepatide) jauh lebih efektif untuk weight loss berdasarkan data klinis",
      "Tesamorelin sangat mahal — versi farmasi harga premium",
      "AOD-9604 efektivitasnya kurang meyakinkan dalam fase III",
      "Recovery lemak setelah penghentian umum",
    ],
    protocolNote: "Tesamorelin biasanya injeksi harian. AOD-9604 protokol bervariasi. Untuk weight loss serius, GLP-1 agonists lebih efektif berdasarkan data klinis.",
    faqs: [
      { question: "Apakah lebih baik dari Semaglutide untuk weight loss?", answer: "Tidak — Semaglutide dan Tirzepatide menunjukkan penurunan berat badan jauh lebih besar dalam uji klinis (15-22%). Stack ini lebih cocok untuk komposisi tubuh dibanding weight loss massive." },
    ],
  },
  {
    slug: "immune-support",
    name: "Immune Support Stack",
    alias: "Thymosin Alpha-1 + BPC-157",
    goal: "Imunitas",
    goalSlug: "imunitas",
    icon: "🛡️",
    tagline: "Modulasi imun dengan recovery jaringan",
    description: "Menggabungkan Thymosin Alpha-1 (peptida imunomodulator yang disetujui di 35+ negara) dengan BPC-157 (efek protektif pada saluran pencernaan dan jaringan). Pendekatan: dukungan sistem imun + perlindungan barrier mukosa.",
    peptides: ["thymosin-alpha-1", "bpc-157"],
    duration: "4-8 minggu",
    difficulty: "Menengah",
    whyItWorks: "Thymosin Alpha-1 merangsang pematangan sel T dan aktivasi NK cells — berperan dalam respons imun adaptif dan innate. BPC-157 mendukung integritas barrier saluran pencernaan, di mana sebagian besar sistem imun berada. Kombinasi: modulasi imun langsung + dukungan barrier mukosa.",
    benefits: [
      "Modulasi sistem imun adaptif dan innate",
      "Dukungan barrier saluran pencernaan",
      "Potensi adjuvan untuk recovery dari infeksi",
      "Anti-inflamasi sistemik",
    ],
    considerations: [
      "Kontraindikasi pada penerima transplantasi organ (Thymosin Alpha-1 imunostimulan)",
      "Thymosin Alpha-1 mahal untuk versi farmasi (Zadaxin)",
      "Bukan pengganti vaksin atau perawatan infeksi konvensional",
      "Konsultasikan dokter terutama jika ada kondisi autoimun",
    ],
    protocolNote: "Thymosin Alpha-1 umumnya injeksi 2x/minggu sesuai label Zadaxin. BPC-157 harian. Sangat penting konsultasi dokter sebelum penggunaan, terutama jika ada masalah imun.",
    faqs: [
      { question: "Apakah bisa untuk pencegahan infeksi?", answer: "Beberapa praktisi menggunakan untuk modulasi imun sebelum musim flu atau setelah paparan. Tidak ada data klinis kuat untuk pencegahan pada populasi umum sehat." },
    ],
  },
  {
    slug: "skin-rejuvenation",
    name: "Skin Rejuvenation Stack",
    alias: "GHK-Cu + Ipamorelin/CJC-1295",
    goal: "Anti-Aging",
    goalSlug: "anti-aging",
    icon: "✨",
    tagline: "Kombinasi topikal dan sistemik untuk regenerasi kulit",
    description: "Menggabungkan GHK-Cu topikal (peptida tembaga untuk sintesis kolagen) dengan Classic GH Stack untuk efek sistemik. Pendekatan: stimulasi langsung di kulit + dukungan dari dalam via GH/IGF-1.",
    peptides: ["ghk-cu", "ipamorelin", "cjc-1295"],
    duration: "12+ minggu (kontinu untuk skin)",
    difficulty: "Pemula",
    whyItWorks: "GHK-Cu topikal merangsang sintesis kolagen, elastin, dan glycosaminoglycan langsung di kulit — efek anti-wrinkle dan ketebalan kulit yang well-documented. GH stack meningkatkan produksi IGF-1 sistemik yang mendukung kualitas kulit dari dalam. Kombinasi: targeted topical + systemic anti-aging.",
    benefits: [
      "Pengurangan kerutan dan garis halus",
      "Peningkatan elastisitas dan ketebalan kulit",
      "Stimulasi kolagen (GHK-Cu well-studied)",
      "Perbaikan tekstur kulit dan tone",
      "Potensi pertumbuhan rambut (GHK-Cu)",
    ],
    considerations: [
      "GHK-Cu jangan dipakai bersamaan dengan vitamin C topikal",
      "Hasil topikal butuh 2-3 bulan konsisten untuk terlihat",
      "GH stack memiliki considerations sendiri (lihat Classic GH Stack)",
    ],
    protocolNote: "GHK-Cu topikal pagi atau malam (pisahkan dari vitamin C). GH stack pre-bed. Sunscreen wajib di pagi hari.",
    faqs: [
      { question: "Apakah GHK-Cu cukup tanpa GH stack?", answer: "Untuk hasil skin saja, ya — GHK-Cu topikal sudah memberikan efek signifikan dalam studi. GH stack menambah dimensi sistemik untuk anti-aging menyeluruh." },
    ],
  },
];

export function getStackBySlug(slug: string): StackData | undefined {
  return stacks.find((s) => s.slug === slug);
}

export function getStackSlugs(): string[] {
  return stacks.map((s) => s.slug);
}
