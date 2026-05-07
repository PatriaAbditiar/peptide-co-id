export interface PeptideFAQ {
  question: string;
  answer: string;
}

export type RegulatoryStatus =
  | "fda-approved"
  | "fda-approved-other-indication"
  | "approved-other-countries"
  | "research-only";

export type WadaStatus = "prohibited" | "monitored" | "permitted" | "unclear";
export type BpomStatus = "registered" | "not-registered" | "unclear";

export interface QuickFacts {
  molecularWeight?: string;
  halfLife?: string;
  route: string;
  storage?: string;
  wada: WadaStatus;
  bpom: BpomStatus;
  bpomNote?: string;
}

export interface PeptideData {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  tagline: string;
  description: string;
  icon: string;
  regulatoryStatus: RegulatoryStatus;
  approvalNote?: string;
  quickFacts: QuickFacts;
  sections: {
    whatIsIt: string;
    benefits: { title: string; text: string }[];
    risks: string[];
    usage: string;
    buyingTips: string;
  };
  faqs: PeptideFAQ[];
  relatedSlugs: string[];
  keywords: string[];
}

export const fdaApprovedSlugs = [
  "semaglutide",
  "tirzepatide",
  "tesamorelin",
  "pt-141",
  "sermorelin",
];

export function getFDAApproved(): PeptideData[] {
  return peptides.filter((p) => p.regulatoryStatus === "fda-approved");
}

export const categories = [
  { slug: "recovery", name: "Recovery & Penyembuhan", icon: "🩹", description: "Peptida yang diteliti untuk penyembuhan cedera, regenerasi jaringan, dan pemulihan pasca operasi." },
  { slug: "growth-hormone", name: "Growth Hormone", icon: "📈", description: "Peptida yang merangsang pelepasan hormon pertumbuhan secara alami dari kelenjar pituitari." },
  { slug: "weight-loss", name: "Penurunan Berat Badan", icon: "⚖️", description: "Peptida yang diteliti untuk manajemen berat badan, metabolisme lemak, dan pengaturan nafsu makan." },
  { slug: "anti-aging", name: "Anti-Aging & Kulit", icon: "✨", description: "Peptida yang diteliti untuk efek anti-penuaan, regenerasi kulit, dan perlindungan seluler." },
  { slug: "cognitive", name: "Kognitif & Neuroprotektif", icon: "🧠", description: "Peptida yang diteliti untuk peningkatan fungsi kognitif, memori, dan perlindungan saraf." },
  { slug: "immune", name: "Imunitas", icon: "🛡️", description: "Peptida yang diteliti untuk modulasi dan penguatan sistem kekebalan tubuh." },
  { slug: "sexual-health", name: "Kesehatan Seksual", icon: "❤️", description: "Peptida yang diteliti untuk fungsi seksual dan libido." },
  { slug: "tanning", name: "Tanning & Pigmentasi", icon: "☀️", description: "Peptida yang mempengaruhi produksi melanin dan pigmentasi kulit." },
];

export const peptides: PeptideData[] = [
  // ─── RECOVERY & PENYEMBUHAN ───
  {
    slug: "bpc-157",
    name: "BPC-157",
    category: "Recovery & Penyembuhan",
    categorySlug: "recovery",
    tagline: "Peptida pelindung tubuh untuk penyembuhan jaringan",
    icon: "🩹",
    regulatoryStatus: "research-only",
    description: "BPC-157 (Body Protection Compound-157) adalah peptida sintetis 15 asam amino yang berasal dari protein pelindung dalam cairan lambung manusia. Diteliti secara luas untuk potensi penyembuhan tendon, sendi, saluran pencernaan, dan jaringan lainnya.",
    quickFacts: {
      molecularWeight: "1419.5 Da",
      halfLife: "~30 menit (oral lebih lama)",
      route: "Subkutan / Oral",
      storage: "Kulkas 2-8°C; 28 hari setelah reconstitusi",
      wada: "monitored",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "BPC-157 adalah fragmen peptida sintetis yang diisolasi dari protein BPC (Body Protection Compound) dalam cairan lambung manusia. Dengan 15 asam amino, peptida ini telah menjadi subjek lebih dari 100 penelitian praklinis sejak 1990-an. Keunikannya terletak pada stabilitas di lingkungan asam lambung, memungkinkan administrasi oral — sesuatu yang jarang pada peptida lain. Di Indonesia, BPC-157 populer di kalangan komunitas fitness yang mencari solusi recovery cedera.",
      benefits: [
        { title: "Penyembuhan Tendon & Ligamen", text: "Studi pada tikus menunjukkan percepatan penyembuhan tendon Achilles yang cedera melalui peningkatan faktor pertumbuhan dan aliran darah ke area cedera." },
        { title: "Perlindungan Saluran Pencernaan", text: "Efek protektif terhadap kerusakan GI akibat NSAID, alkohol, dan stres dalam model hewan. Potensi penyembuhan tukak lambung dan sindrom usus bocor." },
        { title: "Anti-Inflamasi", text: "Modulasi respons inflamasi melalui jalur nitric oxide dan interaksi dengan sistem dopamin." },
        { title: "Penyembuhan Luka", text: "Peningkatan angiogenesis dan percepatan penutupan luka pada kulit dan jaringan lainnya dalam studi hewan." },
      ],
      risks: [
        "Tidak ada uji klinis fase III pada manusia — sebagian besar data dari penelitian hewan",
        "Risiko kontaminasi produk karena tidak diatur sebagai obat",
        "Tidak diawasi oleh BPOM Indonesia",
        "Potensi interaksi obat yang belum diteliti secara menyeluruh",
      ],
      usage: "BPC-157 tersedia dalam bentuk serbuk lyophilized untuk direkonstitusi dan kapsul oral. Stabilitas dalam cairan lambung membuatnya unik karena mendukung administrasi oral — jarang pada peptida lain.",
      buyingTips: "Pilih vendor dengan CoA pihak ketiga, kemurnian >98%, dan reputasi yang jelas. Hindari produk dengan harga terlalu murah atau klaim berlebihan.",
    },
    faqs: [
      { question: "Apakah BPC-157 legal di Indonesia?", answer: "BPC-157 belum diatur oleh BPOM Indonesia. Tidak termasuk daftar obat terdaftar maupun zat terlarang, tetapi produk yang beredar tidak melalui pengawasan kualitas resmi." },
      { question: "Apa saja manfaat BPC-157 yang dilaporkan?", answer: "Dalam penelitian praklinis: percepatan penyembuhan tendon/ligamen, perlindungan GI, anti-inflamasi, dan penyembuhan luka. Data klinis manusia masih sangat terbatas." },
      { question: "Berapa lama efek BPC-157 terlihat?", answer: "Berdasarkan laporan pengguna, perbaikan dilaporkan dalam 1-2 minggu, dengan efek lebih signifikan dalam 4-8 minggu. Ini bukan data klinis." },
      { question: "Apakah BPC-157 aman?", answer: "Profil keamanan baik dalam studi hewan, namun belum ada uji klinis fase III pada manusia. Risiko utama: kontaminasi produk dari sumber tidak terpercaya." },
      { question: "Dimana beli BPC-157 di Indonesia?", answer: "Dari vendor internasional yang mengirim ke Indonesia atau supplier lokal. Pastikan CoA pihak ketiga tersedia. Kunjungi halaman Toko Peptida kami." },
    ],
    relatedSlugs: ["tb-500", "pentadecarginine", "ghk-cu"],
    keywords: ["BPC-157 Indonesia", "beli BPC-157", "peptida recovery", "penyembuhan tendon"],
  },
  {
    slug: "tb-500",
    name: "TB-500",
    category: "Recovery & Penyembuhan",
    categorySlug: "recovery",
    tagline: "Fragmen Thymosin Beta-4 untuk regenerasi sistemik",
    icon: "🩹",
    regulatoryStatus: "research-only",
    description: "TB-500 adalah fragmen sintetis dari protein Thymosin Beta-4 yang secara alami diproduksi tubuh. Diteliti untuk pemulihan cedera dan regenerasi jaringan secara sistemik — berbeda dengan BPC-157, efeknya tidak terbatas pada area lokal.",
    quickFacts: {
      molecularWeight: "4963 Da",
      halfLife: "2-3 jam",
      route: "Subkutan / Intramuskular",
      storage: "Kulkas 2-8°C; 28 hari setelah reconstitusi",
      wada: "prohibited",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "TB-500 mereplikasi wilayah aktif Thymosin Beta-4, protein alami di hampir semua sel tubuh yang berperan dalam migrasi sel, angiogenesis, dan regulasi aktin. Sifatnya yang sistemik berarti dapat bekerja di berbagai lokasi tubuh setelah administrasi.",
      benefits: [
        { title: "Regenerasi Jaringan Sistemik", text: "Mempercepat penyembuhan otot, tendon, dan ligamen melalui peningkatan migrasi sel dan pembentukan pembuluh darah baru." },
        { title: "Pengurangan Inflamasi", text: "Efek anti-inflamasi yang dapat mengurangi pembengkakan dan nyeri pasca cedera." },
        { title: "Fleksibilitas & Mobilitas", text: "Pengguna melaporkan peningkatan range of motion, terutama pada area yang sebelumnya cedera." },
        { title: "Potensi Penyembuhan Jantung", text: "Penelitian awal pada tikus menunjukkan potensi perbaikan jaringan jantung pasca infark miokard." },
      ],
      risks: [
        "Data klinis manusia sangat terbatas",
        "Terlarang oleh WADA — atlet kompetitif harus menghindari",
        "Risiko kualitas dan kontaminasi produk",
        "Efek samping: sakit kepala, mual ringan, kemerahan di area injeksi",
      ],
      usage: "Tersedia sebagai serbuk lyophilized untuk injeksi subkutan. Sifat sistemiknya berarti injeksi tidak perlu di dekat area cedera.",
      buyingTips: "Periksa CoA dan kemurnian. Pilih vendor berpengalaman mengirim ke Indonesia.",
    },
    faqs: [
      { question: "Apa perbedaan TB-500 dan Thymosin Beta-4?", answer: "TB-500 adalah fragmen sintetis dari TB4 yang mengandung wilayah aktif utama. Lebih mudah diproduksi secara sintetis dibandingkan protein lengkapnya." },
      { question: "Bisakah TB-500 dikombinasikan dengan BPC-157?", answer: "Sering dibahas karena mekanisme yang saling melengkapi — BPC-157 lokal, TB-500 sistemik. Namun tidak ada penelitian klinis tentang keamanan kombinasi ini pada manusia." },
      { question: "Apakah TB-500 terdeteksi tes doping?", answer: "Ya, TB-500 termasuk daftar zat terlarang WADA kategori S2. Atlet profesional harus menghindari." },
    ],
    relatedSlugs: ["bpc-157", "ghk-cu", "pentadecarginine"],
    keywords: ["TB-500 Indonesia", "Thymosin Beta-4", "peptida recovery otot"],
  },
  {
    slug: "pentadecarginine",
    name: "Pentadecarginine",
    category: "Recovery & Penyembuhan",
    categorySlug: "recovery",
    tagline: "Peptida arginin untuk penyembuhan luka dan vasodilatasi",
    icon: "🩹",
    regulatoryStatus: "research-only",
    description: "Pentadecarginine adalah peptida yang terdiri dari 15 residu arginin, diteliti untuk potensinya dalam meningkatkan aliran darah, penyembuhan luka, dan produksi nitric oxide.",
    quickFacts: {
      molecularWeight: "2362 Da",
      halfLife: "Tidak diketahui",
      route: "Subkutan",
      storage: "Kulkas 2-8°C",
      wada: "unclear",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "Pentadecarginine adalah peptida homopolimer yang terdiri sepenuhnya dari asam amino arginin. Arginin adalah prekursor utama nitric oxide (NO), molekul sinyal penting untuk vasodilatasi dan penyembuhan. Peptida ini diteliti untuk potensinya dalam meningkatkan pengiriman NO ke jaringan target.",
      benefits: [
        { title: "Peningkatan Aliran Darah", text: "Melalui peningkatan produksi nitric oxide, mendukung vasodilatasi dan sirkulasi ke jaringan cedera." },
        { title: "Penyembuhan Luka", text: "Arginin dikenal penting dalam proses penyembuhan luka dan sintesis kolagen." },
        { title: "Dukungan Sistem Imun", text: "Arginin berperan dalam fungsi sel T dan respons imun tubuh." },
      ],
      risks: [
        "Data penelitian spesifik untuk peptida ini masih sangat terbatas",
        "Potensi efek pada tekanan darah karena efek vasodilatasi",
        "Belum ada uji klinis formal",
      ],
      usage: "Biasanya tersedia dalam bentuk serbuk untuk rekonstitusi. Penggunaan dalam konteks riset.",
      buyingTips: "Pastikan kemurnian terverifikasi. Produk ini kurang umum dibanding BPC-157 atau TB-500.",
    },
    faqs: [
      { question: "Apa hubungan pentadecarginine dengan nitric oxide?", answer: "Arginin adalah prekursor langsung nitric oxide melalui enzim NO synthase. Pentadecarginine menyediakan arginin dalam bentuk peptida yang mungkin memiliki bioavailabilitas berbeda." },
    ],
    relatedSlugs: ["bpc-157", "tb-500", "ll-37"],
    keywords: ["pentadecarginine", "arginin peptida", "nitric oxide peptida"],
  },

  // ─── GROWTH HORMONE ───
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    category: "Growth Hormone",
    categorySlug: "growth-hormone",
    tagline: "Growth hormone secretagogue paling selektif",
    icon: "📈",
    regulatoryStatus: "research-only",
    description: "Ipamorelin adalah pentapeptida GHS selektif yang merangsang kelenjar pituitari melepaskan hormon pertumbuhan secara alami, tanpa meningkatkan kortisol, prolaktin, atau aldosteron secara signifikan.",
    quickFacts: {
      molecularWeight: "711.9 Da",
      halfLife: "~2 jam",
      route: "Subkutan",
      storage: "Kulkas 2-8°C; 14-28 hari setelah reconstitusi",
      wada: "prohibited",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "Ipamorelin dikembangkan pada 1990-an sebagai agonis reseptor ghrelin/GHS. Keunggulannya adalah selektivitas tinggi — hanya merangsang pelepasan GH tanpa mempengaruhi hormon lain seperti kortisol atau prolaktin, menjadikannya pilihan populer dengan profil efek samping lebih ringan.",
      benefits: [
        { title: "Peningkatan GH Selektif", text: "Merangsang pelepasan GH dari pituitari mengikuti pola pulsatil alami, tanpa mengganggu hormon lain." },
        { title: "Kualitas Tidur", text: "Banyak pengguna melaporkan tidur lebih dalam dan berkualitas, mendukung recovery." },
        { title: "Komposisi Tubuh", text: "Potensi peningkatan massa otot lean dan pengurangan lemak melalui peningkatan GH." },
        { title: "Anti-Aging", text: "Peningkatan GH dikaitkan dengan perbaikan kulit, energi, dan vitalitas." },
      ],
      risks: [
        "Belum disetujui untuk penggunaan medis oleh FDA atau BPOM",
        "Efek samping ringan: sakit kepala, pusing, mual",
        "Efek jangka panjang manipulasi GH tidak diketahui",
        "Terlarang WADA untuk atlet kompetitif",
      ],
      usage: "Serbuk lyophilized untuk injeksi subkutan. Sering digunakan dalam kombinasi dengan CJC-1295 dalam konteks riset.",
      buyingTips: "Pastikan CoA tersedia. Verifikasi bahwa produk memang Ipamorelin dan bukan peptida GHS lain yang kurang selektif.",
    },
    faqs: [
      { question: "Apa perbedaan Ipamorelin dengan HGH sintetis?", answer: "Ipamorelin merangsang produksi GH alami tubuh, sedangkan HGH sintetis langsung disuntikkan. Ipamorelin dianggap memiliki efek samping lebih ringan karena tubuh mengontrol jumlah GH yang dilepaskan." },
      { question: "Apakah Ipamorelin menyebabkan peningkatan kortisol?", answer: "Tidak secara signifikan. Ini keunggulan utamanya dibanding GHS lain seperti GHRP-6 dan GHRP-2." },
      { question: "Bisakah dikombinasikan dengan CJC-1295?", answer: "Kombinasi ini sering dibahas karena mekanisme berbeda (ghrelin receptor vs GHRH receptor) yang bisa saling melengkapi." },
    ],
    relatedSlugs: ["cjc-1295", "ghrp-6", "ghrp-2", "sermorelin"],
    keywords: ["Ipamorelin Indonesia", "growth hormone peptida", "GHS selektif"],
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    category: "Growth Hormone",
    categorySlug: "growth-hormone",
    tagline: "Analog GHRH untuk stimulasi hormon pertumbuhan berkelanjutan",
    icon: "📈",
    regulatoryStatus: "research-only",
    description: "CJC-1295 adalah analog sintetis GHRH (29 asam amino) yang tersedia dalam dua varian: dengan DAC (waktu paruh panjang) dan tanpa DAC/Mod GRF 1-29 (waktu paruh pendek yang meniru pola alami).",
    quickFacts: {
      molecularWeight: "3367.8 Da (DAC) / 3367.9 (Mod GRF)",
      halfLife: "6-8 hari (DAC) / ~30 menit (Mod GRF)",
      route: "Subkutan",
      storage: "Kulkas 2-8°C",
      wada: "prohibited",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "CJC-1295 dikembangkan oleh ConjuChem Biotechnologies sebagai modifikasi GHRH(1-29) dengan substitusi asam amino untuk meningkatkan stabilitas. Versi DAC berikatan dengan albumin darah, memperpanjang waktu paruh dari menit menjadi hari. Mod GRF 1-29 (tanpa DAC) menghasilkan pola GH lebih mirip ritme alami.",
      benefits: [
        { title: "Peningkatan GH & IGF-1", text: "Uji klinis fase II menunjukkan peningkatan signifikan pada subjek manusia setelah administrasi CJC-1295 dengan DAC." },
        { title: "Peningkatan Massa Otot", text: "Melalui peningkatan GH/IGF-1, diteliti untuk potensi meningkatkan sintesis protein." },
        { title: "Perbaikan Kualitas Tidur", text: "Peningkatan GH alami terkait dengan peningkatan deep sleep untuk recovery." },
        { title: "Pengurangan Lemak", text: "GH memiliki efek lipolitik — peningkatan kadarnya dapat mendukung pengurangan lemak tubuh." },
      ],
      risks: [
        "Reaksi di tempat injeksi: kemerahan, nyeri, bengkak",
        "Retensi air terutama pada awal penggunaan",
        "Risiko terkait manipulasi GH/IGF-1 jangka panjang",
        "Terlarang WADA",
      ],
      usage: "Serbuk lyophilized untuk injeksi subkutan. Perhatikan perbedaan mendasar antara versi DAC dan tanpa DAC.",
      buyingTips: "Pastikan Anda tahu apakah membeli versi DAC atau non-DAC — karakteristiknya sangat berbeda.",
    },
    faqs: [
      { question: "Apa perbedaan CJC-1295 dengan DAC dan tanpa DAC?", answer: "DAC: waktu paruh 6-8 hari, berikatan albumin. Tanpa DAC (Mod GRF 1-29): waktu paruh ~30 menit, lebih meniru pola GH alami." },
      { question: "Mengapa sering dikombinasikan dengan Ipamorelin?", answer: "CJC-1295 melalui GHRH receptor, Ipamorelin melalui ghrelin receptor — jalur berbeda yang bisa menghasilkan efek sinergis." },
    ],
    relatedSlugs: ["ipamorelin", "sermorelin", "tesamorelin", "ghrp-6"],
    keywords: ["CJC-1295 Indonesia", "GHRH analog", "Mod GRF 1-29"],
  },
  {
    slug: "ghrp-6",
    name: "GHRP-6",
    category: "Growth Hormone",
    categorySlug: "growth-hormone",
    tagline: "Growth hormone releasing peptide generasi pertama",
    icon: "📈",
    regulatoryStatus: "research-only",
    description: "GHRP-6 (Growth Hormone Releasing Peptide-6) adalah hexapeptida sintetis yang merangsang pelepasan GH melalui reseptor ghrelin. Salah satu GHS paling awal yang dikembangkan, dikenal meningkatkan nafsu makan secara signifikan.",
    quickFacts: {
      molecularWeight: "873 Da",
      halfLife: "~30 menit",
      route: "Subkutan",
      storage: "Kulkas 2-8°C",
      wada: "prohibited",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "GHRP-6 dikembangkan sebagai salah satu growth hormone secretagogue pertama. Bekerja melalui reseptor ghrelin untuk merangsang pelepasan GH dari pituitari. Dikenal karena efek peningkatan nafsu makan yang kuat, menjadikannya kurang ideal untuk tujuan penurunan berat badan.",
      benefits: [
        { title: "Stimulasi GH Kuat", text: "Pelepasan GH yang signifikan, meskipun kurang selektif dibanding Ipamorelin." },
        { title: "Peningkatan Nafsu Makan", text: "Efek ghrelin menyebabkan peningkatan lapar yang kuat — bermanfaat untuk yang ingin menambah berat badan." },
        { title: "Recovery & Pertumbuhan Otot", text: "Melalui peningkatan GH, mendukung recovery dan pertumbuhan jaringan otot." },
      ],
      risks: [
        "Meningkatkan kortisol dan prolaktin — kurang selektif dibanding Ipamorelin",
        "Efek peningkatan nafsu makan yang sangat kuat",
        "Potensi peningkatan gula darah",
        "Terlarang WADA",
      ],
      usage: "Injeksi subkutan. Biasanya diadministrasikan pada perut kosong karena makanan dapat mengurangi pelepasan GH.",
      buyingTips: "Tersedia luas dari vendor peptida. Pastikan tidak dikacaukan dengan GHRP-2 yang memiliki profil berbeda.",
    },
    faqs: [
      { question: "Apa perbedaan GHRP-6 dan Ipamorelin?", answer: "GHRP-6 meningkatkan kortisol, prolaktin, dan nafsu makan secara signifikan. Ipamorelin jauh lebih selektif tanpa efek samping ini." },
      { question: "Mengapa GHRP-6 meningkatkan nafsu makan?", answer: "Karena bekerja melalui reseptor ghrelin — 'hormon lapar'. Efek ini bisa sangat kuat, terutama 15-30 menit setelah administrasi." },
    ],
    relatedSlugs: ["ghrp-2", "ipamorelin", "cjc-1295", "hexarelin"],
    keywords: ["GHRP-6 Indonesia", "growth hormone releasing peptide"],
  },
  {
    slug: "ghrp-2",
    name: "GHRP-2",
    category: "Growth Hormone",
    categorySlug: "growth-hormone",
    tagline: "GHS generasi kedua dengan selektivitas lebih baik",
    icon: "📈",
    regulatoryStatus: "research-only",
    description: "GHRP-2 adalah growth hormone secretagogue generasi kedua yang menawarkan stimulasi GH kuat dengan peningkatan nafsu makan yang lebih moderat dibanding GHRP-6.",
    quickFacts: {
      molecularWeight: "817.4 Da",
      halfLife: "~15-60 menit",
      route: "Subkutan",
      storage: "Kulkas 2-8°C",
      wada: "prohibited",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "GHRP-2 adalah perkembangan dari GHRP-6, dirancang untuk memberikan stimulasi GH yang kuat sambil mengurangi beberapa efek samping. Meskipun lebih selektif dari GHRP-6, masih kurang selektif dibanding Ipamorelin.",
      benefits: [
        { title: "Stimulasi GH Kuat", text: "Salah satu GHS paling poten untuk pelepasan GH, sering dianggap lebih kuat dari Ipamorelin." },
        { title: "Nafsu Makan Moderat", text: "Peningkatan nafsu makan lebih ringan dibanding GHRP-6." },
        { title: "Recovery", text: "Peningkatan GH mendukung penyembuhan dan pertumbuhan jaringan." },
      ],
      risks: [
        "Masih meningkatkan kortisol dan prolaktin, meskipun kurang dari GHRP-6",
        "Efek nafsu makan, walau lebih ringan",
        "Terlarang WADA",
      ],
      usage: "Injeksi subkutan, biasanya saat perut kosong.",
      buyingTips: "Pastikan membedakan dari GHRP-6. Cek CoA untuk verifikasi identitas peptida.",
    },
    faqs: [
      { question: "GHRP-2 vs GHRP-6 — mana yang lebih baik?", answer: "GHRP-2 lebih selektif dengan efek nafsu makan lebih ringan. GHRP-6 memberikan stimulasi GH sedikit lebih kuat tapi dengan efek samping lebih banyak. Ipamorelin paling selektif dari ketiganya." },
    ],
    relatedSlugs: ["ghrp-6", "ipamorelin", "hexarelin", "cjc-1295"],
    keywords: ["GHRP-2 Indonesia", "growth hormone peptida"],
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    category: "Growth Hormone",
    categorySlug: "growth-hormone",
    tagline: "Analog GHRH alami untuk pelepasan GH fisiologis",
    icon: "📈",
    regulatoryStatus: "fda-approved",
    approvalNote: "Disetujui FDA sebagai Geref untuk diagnosis defisiensi GH pada anak. Penggunaan anti-aging adalah off-label.",
    description: "Sermorelin adalah analog dari GHRH(1-29) alami yang telah disetujui FDA untuk diagnosis defisiensi GH pada anak. Merangsang pelepasan GH secara fisiologis dengan mempertahankan mekanisme umpan balik alami tubuh.",
    quickFacts: {
      molecularWeight: "3358 Da",
      halfLife: "11-12 menit",
      route: "Subkutan",
      storage: "Kulkas 2-8°C",
      wada: "prohibited",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "Sermorelin (juga dikenal sebagai GRF 1-29 NH2) adalah fragmen bioaktif dari GHRH alami. Uniknya, ini salah satu dari sedikit peptida GH yang pernah mendapat persetujuan FDA (untuk diagnosis, bukan terapi anti-aging). Ini bekerja dengan merangsang pituitari untuk melepaskan GH secara alami, mempertahankan loop umpan balik negatif.",
      benefits: [
        { title: "Pelepasan GH Fisiologis", text: "Mempertahankan pola pelepasan GH pulsatil alami dan mekanisme umpan balik tubuh." },
        { title: "Profil Keamanan yang Lebih Dikenal", text: "Lebih banyak data klinis manusia dibanding kebanyakan peptida GH lainnya." },
        { title: "Anti-Aging", text: "Diteliti untuk perbaikan komposisi tubuh, kualitas kulit, dan energi pada populasi aging." },
      ],
      risks: [
        "Stimulasi GH kurang poten dibanding GHRP atau kombinasi CJC-1295",
        "Reaksi di tempat injeksi",
        "Penggunaan off-label untuk anti-aging tidak disetujui FDA",
      ],
      usage: "Injeksi subkutan, biasanya sebelum tidur untuk meniru pola GH nokturnal.",
      buyingTips: "Sermorelin memiliki track record klinis lebih panjang, tapi pastikan tetap membeli dari sumber terpercaya.",
    },
    faqs: [
      { question: "Apakah Sermorelin disetujui FDA?", answer: "Ya, untuk diagnosis defisiensi GH pada anak (Geref). Namun penggunaan off-label untuk anti-aging tidak disetujui." },
    ],
    relatedSlugs: ["cjc-1295", "tesamorelin", "ipamorelin"],
    keywords: ["Sermorelin Indonesia", "GHRH analog", "anti-aging peptida"],
  },
  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    category: "Growth Hormone",
    categorySlug: "growth-hormone",
    tagline: "GHRH analog yang disetujui FDA untuk lipodistrofi",
    icon: "📈",
    regulatoryStatus: "fda-approved",
    approvalNote: "Disetujui FDA sebagai Egrifta (2010) untuk lipodistrofi terkait HIV.",
    description: "Tesamorelin (Egrifta) adalah analog GHRH sintetis yang telah disetujui FDA untuk pengobatan lipodistrofi terkait HIV. Merangsang pelepasan GH dan diteliti untuk efek pengurangan lemak viseral.",
    quickFacts: {
      molecularWeight: "5195.8 Da",
      halfLife: "26-38 menit",
      route: "Subkutan",
      storage: "Kulkas 2-8°C",
      wada: "prohibited",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "Tesamorelin adalah modifikasi dari GHRH(1-44) dengan penambahan asam trans-3-hexenoic untuk meningkatkan stabilitas. Disetujui FDA tahun 2010 sebagai Egrifta untuk pengobatan kelebihan lemak perut pada pasien HIV dengan lipodistrofi. Memiliki data klinis lebih banyak dibanding kebanyakan peptida GH.",
      benefits: [
        { title: "Pengurangan Lemak Viseral", text: "Data klinis menunjukkan pengurangan signifikan lemak viseral pada pasien lipodistrofi HIV." },
        { title: "Peningkatan IGF-1", text: "Meningkatkan kadar IGF-1 secara konsisten dalam studi klinis." },
        { title: "Data Klinis Tersedia", text: "Salah satu peptida GH dengan jumlah data klinis manusia terbanyak." },
      ],
      risks: [
        "Reaksi di tempat injeksi (paling umum dilaporkan)",
        "Artralgia (nyeri sendi) dan mialgia (nyeri otot)",
        "Edema perifer dan retensi cairan",
        "Mahal dibandingkan peptida GH lainnya",
      ],
      usage: "Injeksi subkutan ke area perut. Memiliki protokol dosis yang ditetapkan dalam label FDA.",
      buyingTips: "Sebagai obat yang disetujui FDA, versi farmasi tersedia tetapi mahal. Versi penelitian lebih terjangkau tetapi tanpa jaminan kualitas farmasi.",
    },
    faqs: [
      { question: "Apakah Tesamorelin sama dengan Sermorelin?", answer: "Tidak. Keduanya analog GHRH tapi dengan modifikasi berbeda. Tesamorelin lebih poten dan memiliki data klinis lebih banyak. Tesamorelin disetujui FDA untuk lipodistrofi HIV." },
    ],
    relatedSlugs: ["sermorelin", "cjc-1295", "aod-9604"],
    keywords: ["Tesamorelin Indonesia", "Egrifta", "GHRH peptida"],
  },
  {
    slug: "hexarelin",
    name: "Hexarelin",
    category: "Growth Hormone",
    categorySlug: "growth-hormone",
    tagline: "GHS paling poten dengan efek kardioprotektif",
    icon: "📈",
    regulatoryStatus: "research-only",
    description: "Hexarelin adalah hexapeptida sintetis yang dianggap sebagai salah satu GHS paling poten. Diteliti untuk efek kardioprotektif unik selain stimulasi GH.",
    quickFacts: {
      molecularWeight: "887.04 Da",
      halfLife: "~70 menit",
      route: "Subkutan",
      storage: "Kulkas 2-8°C",
      wada: "prohibited",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "Hexarelin adalah GHS yang bekerja melalui reseptor ghrelin dan juga reseptor CD36. Keunikannya adalah efek kardioprotektif yang tidak tergantung pada pelepasan GH — ini membedakannya dari GHS lainnya. Dianggap GHS paling poten yang tersedia.",
      benefits: [
        { title: "Stimulasi GH Paling Poten", text: "Menghasilkan pelepasan GH tertinggi di antara semua GHS yang dipelajari." },
        { title: "Efek Kardioprotektif", text: "Penelitian menunjukkan efek protektif pada jantung melalui reseptor CD36, independen dari GH." },
        { title: "Meningkatkan Densitas Tulang", text: "Melalui peningkatan GH, dapat mendukung kesehatan tulang." },
      ],
      risks: [
        "Desensitisasi cepat — efektivitas menurun dengan penggunaan berkelanjutan",
        "Meningkatkan kortisol dan prolaktin secara signifikan",
        "Peningkatan nafsu makan",
        "Terlarang WADA",
      ],
      usage: "Injeksi subkutan. Karena desensitisasi, biasanya digunakan dalam siklus terbatas.",
      buyingTips: "Kurang umum dibanding Ipamorelin atau GHRP-6. Verifikasi identitas peptida melalui CoA.",
    },
    faqs: [
      { question: "Mengapa Hexarelin menyebabkan desensitisasi?", answer: "Potensinya yang sangat tinggi menyebabkan down-regulation reseptor ghrelin lebih cepat dibanding GHS lain. Efektivitas biasanya menurun setelah beberapa minggu penggunaan berkelanjutan." },
    ],
    relatedSlugs: ["ghrp-6", "ghrp-2", "ipamorelin"],
    keywords: ["Hexarelin Indonesia", "GHS poten", "kardioprotektif peptida"],
  },
  {
    slug: "mk-677",
    name: "MK-677 (Ibutamoren)",
    category: "Growth Hormone",
    categorySlug: "growth-hormone",
    tagline: "GHS oral non-peptida dengan durasi aksi panjang",
    icon: "📈",
    regulatoryStatus: "research-only",
    description: "MK-677 (Ibutamoren) secara teknis bukan peptida tetapi molekul kecil non-peptida yang bekerja sebagai GHS oral. Populer karena dapat diminum tanpa injeksi dan memiliki durasi aksi 24 jam.",
    quickFacts: {
      molecularWeight: "528.7 Da",
      halfLife: "~24 jam",
      route: "Oral (kapsul/tablet)",
      storage: "Suhu ruang, kering, terhindar cahaya",
      wada: "prohibited",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "MK-677 adalah agonis reseptor ghrelin non-peptida yang aktif secara oral. Meskipun bukan peptida, sering dibahas bersama peptida GH karena mekanisme aksi yang sama. Keunggulannya: tidak perlu injeksi dan waktu paruh panjang (~24 jam) memungkinkan dosis sekali sehari.",
      benefits: [
        { title: "Administrasi Oral", text: "Tidak memerlukan injeksi — cukup diminum, membuatnya lebih mudah digunakan." },
        { title: "Peningkatan GH & IGF-1 Konsisten", text: "Studi klinis menunjukkan peningkatan GH/IGF-1 yang konsisten dan berkelanjutan." },
        { title: "Kualitas Tidur", text: "Peningkatan durasi tidur REM dilaporkan dalam beberapa studi." },
        { title: "Densitas Tulang", text: "Studi pada lansia menunjukkan potensi peningkatan densitas tulang setelah penggunaan." },
      ],
      risks: [
        "Peningkatan nafsu makan yang signifikan",
        "Retensi air dan edema",
        "Potensi peningkatan resistensi insulin",
        "Efek jangka panjang belum dipahami sepenuhnya",
        "Beberapa negara mengklasifikasikan sebagai controlled substance",
      ],
      usage: "Tablet atau kapsul oral, biasanya sekali sehari. Sering diminum sebelum tidur untuk meminimalkan efek nafsu makan.",
      buyingTips: "Lebih mudah ditemukan karena tersedia oral. Waspada produk palsu karena popularitasnya tinggi.",
    },
    faqs: [
      { question: "Apakah MK-677 benar-benar peptida?", answer: "Tidak. MK-677 adalah molekul kecil non-peptida. Tapi sering dikelompokkan dengan peptida GH karena mekanisme aksi yang sama (agonis reseptor ghrelin)." },
      { question: "Berapa lama MK-677 bisa digunakan?", answer: "Studi klinis terpanjang yang dipublikasikan berlangsung 2 tahun pada lansia. Namun penggunaan jangka panjang tanpa pengawasan medis tidak dianjurkan." },
    ],
    relatedSlugs: ["ipamorelin", "ghrp-6", "ghrp-2"],
    keywords: ["MK-677 Indonesia", "Ibutamoren", "GHS oral"],
  },

  // ─── WEIGHT LOSS ───
  {
    slug: "semaglutide",
    name: "Semaglutide",
    category: "Penurunan Berat Badan",
    categorySlug: "weight-loss",
    tagline: "Agonis GLP-1 revolusioner untuk manajemen berat badan",
    icon: "⚖️",
    regulatoryStatus: "fda-approved",
    approvalNote: "Disetujui FDA sebagai Ozempic (2017) untuk diabetes tipe 2, Wegovy (2021) untuk obesitas, dan Rybelsus (oral) untuk diabetes.",
    description: "Semaglutide adalah agonis reseptor GLP-1 yang disetujui FDA untuk diabetes tipe 2 (Ozempic) dan manajemen berat badan (Wegovy). Menjadi salah satu obat paling dibicarakan secara global untuk penurunan berat badan.",
    quickFacts: {
      molecularWeight: "4113.6 Da",
      halfLife: "~165 jam (~7 hari)",
      route: "Subkutan / Oral (Rybelsus)",
      storage: "Kulkas 2-8°C; setelah dibuka 56 hari (Ozempic)",
      wada: "permitted",
      bpom: "registered",
      bpomNote: "Ozempic terdaftar BPOM untuk diabetes tipe 2.",
    },
    sections: {
      whatIsIt: "Semaglutide adalah analog GLP-1 (Glucagon-Like Peptide-1) yang meniru hormon inkretin alami tubuh. Disetujui FDA sebagai Ozempic (diabetes) dan Wegovy (obesitas). Bekerja dengan memperlambat pengosongan lambung, mengurangi nafsu makan, dan meningkatkan sensitivitas insulin. Menjadi fenomena global dalam manajemen berat badan.",
      benefits: [
        { title: "Penurunan Berat Badan Signifikan", text: "Uji klinis STEP menunjukkan rata-rata penurunan 15-17% berat badan pada subjek obesitas setelah 68 minggu." },
        { title: "Kontrol Diabetes Tipe 2", text: "Efektif menurunkan HbA1c dan gula darah pada pasien diabetes tipe 2." },
        { title: "Manfaat Kardiovaskular", text: "Studi menunjukkan pengurangan risiko kejadian kardiovaskular major pada pasien tertentu." },
        { title: "Pengurangan Nafsu Makan", text: "Bekerja pada pusat nafsu makan di otak, mengurangi keinginan makan secara signifikan." },
      ],
      risks: [
        "Efek samping GI umum: mual, muntah, diare, konstipasi",
        "Risiko pankreatitis",
        "Potensi efek pada tiroid (kontraindikasi pada riwayat MTC)",
        "Kehilangan massa otot bersamaan dengan lemak",
        "Efek rebound setelah penghentian — berat badan cenderung kembali",
        "Mahal tanpa asuransi",
      ],
      usage: "Injeksi subkutan mingguan (Ozempic/Wegovy) atau tablet oral (Rybelsus untuk diabetes). Memerlukan resep dokter di kebanyakan negara.",
      buyingTips: "Ini adalah obat resep. Hindari versi 'research grade' untuk penggunaan penurunan berat badan — risiko kualitas dan dosis tidak terjamin. Konsultasikan dokter.",
    },
    faqs: [
      { question: "Apakah Semaglutide tersedia di Indonesia?", answer: "Ozempic (semaglutide untuk diabetes) terdaftar di BPOM Indonesia. Wegovy (untuk obesitas) belum tersedia secara resmi. Konsultasikan dokter untuk akses yang legal dan aman." },
      { question: "Apa perbedaan Ozempic dan Wegovy?", answer: "Keduanya mengandung semaglutide, tapi Wegovy memiliki dosis lebih tinggi dan disetujui khusus untuk manajemen berat badan, sementara Ozempic disetujui untuk diabetes tipe 2." },
    ],
    relatedSlugs: ["tirzepatide", "aod-9604", "mots-c"],
    keywords: ["Semaglutide Indonesia", "Ozempic Indonesia", "Wegovy", "GLP-1"],
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    category: "Penurunan Berat Badan",
    categorySlug: "weight-loss",
    tagline: "Dual agonis GIP/GLP-1 generasi berikutnya",
    icon: "⚖️",
    regulatoryStatus: "fda-approved",
    approvalNote: "Disetujui FDA sebagai Mounjaro (2022) untuk diabetes tipe 2 dan Zepbound (2023) untuk obesitas.",
    description: "Tirzepatide (Mounjaro/Zepbound) adalah dual agonis reseptor GIP dan GLP-1. Menunjukkan penurunan berat badan lebih besar dari semaglutide dalam studi head-to-head.",
    quickFacts: {
      molecularWeight: "4813.5 Da",
      halfLife: "~120 jam (~5 hari)",
      route: "Subkutan",
      storage: "Kulkas 2-8°C",
      wada: "permitted",
      bpom: "not-registered",
      bpomNote: "Mounjaro/Zepbound belum terdaftar BPOM (per 2024).",
    },
    sections: {
      whatIsIt: "Tirzepatide adalah terobosan karena bekerja pada dua reseptor sekaligus: GIP (Glucose-dependent Insulinotropic Polypeptide) dan GLP-1. Disetujui FDA sebagai Mounjaro (diabetes) dan Zepbound (obesitas). Studi SURMOUNT menunjukkan penurunan berat badan rata-rata hingga 22.5%.",
      benefits: [
        { title: "Penurunan Berat Badan Terbesar", text: "Studi menunjukkan rata-rata penurunan 20-25% berat badan — lebih efektif dari semaglutide dalam perbandingan langsung." },
        { title: "Kontrol Glikemik Superior", text: "Dual mechanism memberikan kontrol gula darah yang excellent pada diabetes tipe 2." },
        { title: "Mekanisme Ganda", text: "Aktivasi GIP dan GLP-1 secara bersamaan memberikan efek metabolik yang lebih komprehensif." },
      ],
      risks: [
        "Efek samping GI: mual, diare, muntah (serupa semaglutide)",
        "Risiko pankreatitis",
        "Kehilangan massa otot",
        "Data jangka panjang masih terbatas dibanding semaglutide",
        "Sangat mahal",
      ],
      usage: "Injeksi subkutan mingguan. Memerlukan resep dokter.",
      buyingTips: "Obat resep — konsultasikan dokter. Hindari versi penelitian untuk manajemen berat badan.",
    },
    faqs: [
      { question: "Tirzepatide vs Semaglutide — mana lebih efektif?", answer: "Studi head-to-head menunjukkan tirzepatide menghasilkan penurunan berat badan dan kontrol glikemik lebih besar. Namun keduanya efektif dan pilihan tergantung respons individual dan ketersediaan." },
    ],
    relatedSlugs: ["semaglutide", "aod-9604"],
    keywords: ["Tirzepatide Indonesia", "Mounjaro", "Zepbound", "GIP GLP-1"],
  },
  {
    slug: "aod-9604",
    name: "AOD-9604",
    category: "Penurunan Berat Badan",
    categorySlug: "weight-loss",
    tagline: "Fragmen HGH khusus untuk metabolisme lemak",
    icon: "⚖️",
    regulatoryStatus: "research-only",
    description: "AOD-9604 adalah fragmen modifikasi dari hormon pertumbuhan manusia (hGH fragment 177-191) yang diteliti khusus untuk efek lipolitik tanpa efek pertumbuhan atau diabetogenik dari GH penuh.",
    quickFacts: {
      molecularWeight: "1817 Da",
      halfLife: "~30 menit",
      route: "Subkutan",
      storage: "Kulkas 2-8°C",
      wada: "unclear",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "AOD-9604 adalah fragmen C-terminal dari hGH (asam amino 177-191) yang dimodifikasi. Dirancang untuk mengisolasi efek pemecahan lemak dari GH tanpa efek samping terkait pertumbuhan atau peningkatan gula darah. Telah melalui beberapa uji klinis fase II.",
      benefits: [
        { title: "Lipolisis Tanpa Efek GH", text: "Merangsang pemecahan lemak tanpa efek pertumbuhan, hiperglisemik, atau efek anabolik dari GH penuh." },
        { title: "Tidak Mempengaruhi Gula Darah", text: "Tidak memiliki efek diabetogenik — aman dari segi metabolisme glukosa." },
        { title: "Profil Keamanan Baik", text: "Studi klinis menunjukkan profil keamanan yang baik pada dosis yang diteliti." },
      ],
      risks: [
        "Efektivitas penurunan berat badan tidak seimpresif GLP-1 agonists",
        "Uji klinis fase III tidak menunjukkan hasil signifikan vs plasebo",
        "Sebagai peptida, masih memiliki risiko kualitas produk",
      ],
      usage: "Injeksi subkutan, biasanya di area perut.",
      buyingTips: "Tersedia dari vendor peptida research. Perlu diketahui bahwa data klinis kurang meyakinkan dibanding GLP-1 agonists.",
    },
    faqs: [
      { question: "Apakah AOD-9604 efektif untuk penurunan berat badan?", answer: "Studi awal menunjukkan harapan, tetapi uji klinis fase III tidak mencapai endpoint signifikan. Efektivitasnya jauh di bawah semaglutide atau tirzepatide." },
    ],
    relatedSlugs: ["semaglutide", "mots-c", "tesamorelin"],
    keywords: ["AOD-9604 Indonesia", "hGH fragment", "peptida diet"],
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    category: "Penurunan Berat Badan",
    categorySlug: "weight-loss",
    tagline: "Peptida mitokondria untuk metabolisme dan ketahanan",
    icon: "⚖️",
    regulatoryStatus: "research-only",
    description: "MOTS-c adalah peptida yang dikodekan oleh DNA mitokondria, diteliti sebagai 'exercise mimetic' — meniru beberapa efek olahraga pada metabolisme dan sensitivitas insulin.",
    quickFacts: {
      molecularWeight: "2174 Da",
      halfLife: "Tidak diketahui pasti",
      route: "Subkutan",
      storage: "Kulkas 2-8°C",
      wada: "unclear",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA Type-c) unik karena dikodekan oleh genom mitokondria, bukan genom inti sel. Bertindak sebagai sinyal hormonal dari mitokondria yang mengatur metabolisme, sensitivitas insulin, dan homeostasis energi. Kadang disebut 'exercise in a bottle' karena meniru beberapa efek metabolik olahraga.",
      benefits: [
        { title: "Exercise Mimetic", text: "Mengaktifkan jalur AMPK dan meningkatkan metabolisme seluler, meniru beberapa efek olahraga." },
        { title: "Sensitivitas Insulin", text: "Diteliti untuk peningkatan sensitivitas insulin dan regulasi glukosa." },
        { title: "Ketahanan Fisik", text: "Studi pada tikus menunjukkan peningkatan endurance dan kapasitas latihan." },
        { title: "Anti-Aging Metabolik", text: "Kadar MOTS-c alami menurun seiring usia; suplementasi diteliti untuk memperbaiki fungsi metabolik aging." },
      ],
      risks: [
        "Penelitian masih sangat awal, terutama pada manusia",
        "Ketersediaan produk terbatas dan mahal",
        "Mekanisme aksi penuh belum dipahami",
      ],
      usage: "Injeksi subkutan. Masih sangat eksperimental.",
      buyingTips: "Ketersediaan terbatas. Pastikan vendor memang menyediakan MOTS-c autentik karena peptida ini sulit disintesis.",
    },
    faqs: [
      { question: "Apakah MOTS-c bisa menggantikan olahraga?", answer: "Tidak. MOTS-c meniru beberapa jalur metabolik yang diaktifkan olahraga, tetapi tidak menggantikan manfaat komprehensif dari aktivitas fisik." },
    ],
    relatedSlugs: ["aod-9604", "semaglutide", "epitalon"],
    keywords: ["MOTS-c Indonesia", "exercise mimetic", "peptida mitokondria"],
  },

  // ─── ANTI-AGING & KULIT ───
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    category: "Anti-Aging & Kulit",
    categorySlug: "anti-aging",
    tagline: "Peptida tembaga untuk regenerasi kulit dan anti-aging",
    icon: "✨",
    regulatoryStatus: "research-only",
    approvalNote: "Tidak disetujui sebagai obat, tetapi banyak digunakan dalam produk kosmetik yang diatur sebagai cosmetic ingredient.",
    description: "GHK-Cu (Glycyl-L-Histidyl-L-Lysine Copper) adalah tripeptida alami yang terikat dengan ion tembaga. Diteliti secara luas untuk efek anti-aging pada kulit, penyembuhan luka, dan regenerasi jaringan.",
    quickFacts: {
      molecularWeight: "340.8 Da (peptide) + Cu",
      halfLife: "Lokal di kulit",
      route: "Topikal (paling umum) / Subkutan",
      storage: "Suhu ruang untuk topikal; kulkas untuk injeksi",
      wada: "permitted",
      bpom: "not-registered",
      bpomNote: "Banyak digunakan dalam produk kosmetik terdaftar.",
    },
    sections: {
      whatIsIt: "GHK-Cu secara alami ditemukan dalam plasma darah, saliva, dan urin manusia. Kadarnya menurun seiring usia — dari 200 ng/mL di usia 20 menjadi 80 ng/mL di usia 60. Peptida tembaga ini unik karena memiliki data ilmiah yang cukup kuat, termasuk penggunaan dalam produk skincare komersial.",
      benefits: [
        { title: "Regenerasi Kulit", text: "Merangsang sintesis kolagen, elastin, dan glycosaminoglycan, meningkatkan ketebalan dan elastisitas kulit." },
        { title: "Anti-Wrinkle", text: "Studi menunjukkan efektivitas dalam mengurangi kerutan dan garis halus, sebanding dengan retinol dan vitamin C." },
        { title: "Penyembuhan Luka", text: "Mempercepat penyembuhan luka melalui peningkatan angiogenesis dan rekrutmen sel stem." },
        { title: "Anti-Inflamasi", text: "Efek anti-inflamasi yang kuat, mengurangi kerusakan oksidatif dan inflamasi kronis." },
        { title: "Pertumbuhan Rambut", text: "Diteliti untuk potensi merangsang pertumbuhan folikel rambut." },
      ],
      risks: [
        "Iritasi kulit pada konsentrasi tinggi",
        "Tidak boleh digunakan bersamaan dengan vitamin C topikal (interaksi dengan tembaga)",
        "Kualitas produk bervariasi di pasaran",
      ],
      usage: "Tersedia sebagai serum topikal (paling umum), injeksi subkutan, atau serbuk untuk rekonstitusi. Penggunaan topikal paling banyak diteliti.",
      buyingTips: "Untuk penggunaan topikal, cari produk skincare dengan konsentrasi GHK-Cu yang jelas. Untuk riset, pastikan CoA tersedia.",
    },
    faqs: [
      { question: "Apakah GHK-Cu aman untuk kulit sensitif?", answer: "Umumnya ditoleransi baik, tetapi konsentrasi tinggi bisa menyebabkan iritasi. Mulai dengan konsentrasi rendah dan lakukan patch test." },
      { question: "Bisakah GHK-Cu digunakan dengan retinol?", answer: "Ya, tetapi hindari penggunaan bersamaan dengan vitamin C topikal karena interaksi dengan ion tembaga." },
    ],
    relatedSlugs: ["epitalon", "snap-8", "bpc-157"],
    keywords: ["GHK-Cu Indonesia", "peptida tembaga", "anti-aging kulit", "copper peptide"],
  },
  {
    slug: "epitalon",
    name: "Epitalon (Epithalon)",
    category: "Anti-Aging & Kulit",
    categorySlug: "anti-aging",
    tagline: "Peptida telomerase untuk perlindungan seluler anti-aging",
    icon: "✨",
    regulatoryStatus: "research-only",
    description: "Epitalon adalah tetrapeptida sintetis berdasarkan Epithalamin, hormon yang diproduksi kelenjar pineal. Diteliti untuk kemampuannya mengaktifkan telomerase dan memperpanjang telomere — mekanisme utama penuaan seluler.",
    quickFacts: {
      molecularWeight: "390.4 Da",
      halfLife: "Sangat pendek (menit)",
      route: "Subkutan / Intranasal",
      storage: "Kulkas 2-8°C",
      wada: "unclear",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "Epitalon (Ala-Glu-Asp-Gly) dikembangkan oleh Prof. Vladimir Khavinson di Institut Gerontologi St. Petersburg. Berdasarkan Epithalamin alami dari kelenjar pineal. Diteliti untuk mengaktifkan telomerase — enzim yang memperpanjang telomere (ujung kromosom yang memendek seiring usia).",
      benefits: [
        { title: "Aktivasi Telomerase", text: "Penelitian menunjukkan aktivasi enzim telomerase dan pemanjangan telomere dalam kultur sel manusia." },
        { title: "Regulasi Melatonin", text: "Dapat menormalisasi produksi melatonin dari kelenjar pineal, mendukung ritme sirkadian." },
        { title: "Efek Anti-Oksidan", text: "Meningkatkan aktivitas enzim antioksidan endogen." },
        { title: "Potensi Longevity", text: "Studi pada hewan menunjukkan peningkatan umur rata-rata pada tikus yang diberi Epitalon." },
      ],
      risks: [
        "Sebagian besar penelitian dari satu kelompok riset (bias potensial)",
        "Data klinis manusia terbatas dan kebanyakan dari literatur Rusia",
        "Mekanisme aksi penuh masih diperdebatkan",
        "Efek jangka panjang tidak diketahui",
      ],
      usage: "Injeksi subkutan atau intramuskular. Biasanya dalam siklus periodik.",
      buyingTips: "Pastikan sumber terpercaya. Epitalon relatif murah untuk diproduksi, jadi harga bukan indikator kualitas utama.",
    },
    faqs: [
      { question: "Apakah Epitalon benar-benar memperpanjang umur?", answer: "Studi pada hewan menunjukkan harapan, tetapi belum ada data klinis manusia yang kuat. Klaim longevity harus diperlakukan dengan skeptisisme ilmiah yang sehat." },
    ],
    relatedSlugs: ["ghk-cu", "thymalin", "mots-c"],
    keywords: ["Epitalon Indonesia", "Epithalon", "telomerase peptida", "anti-aging"],
  },
  {
    slug: "snap-8",
    name: "SNAP-8 (Acetyl Octapeptide-3)",
    category: "Anti-Aging & Kulit",
    categorySlug: "anti-aging",
    tagline: "Peptida anti-kerutan topikal alternatif Botox",
    icon: "✨",
    regulatoryStatus: "research-only",
    approvalNote: "Diatur sebagai cosmetic ingredient — banyak digunakan dalam produk skincare komersial.",
    description: "SNAP-8 adalah octapeptida sintetis yang bekerja mirip Botox dengan menghambat pelepasan neurotransmitter yang menyebabkan kontraksi otot wajah, tetapi diaplikasikan secara topikal.",
    quickFacts: {
      molecularWeight: "947.1 Da",
      halfLife: "Lokal di kulit",
      route: "Topikal",
      storage: "Suhu ruang, terhindar cahaya",
      wada: "permitted",
      bpom: "not-registered",
      bpomNote: "Cosmetic ingredient — banyak di produk skincare.",
    },
    sections: {
      whatIsIt: "SNAP-8 (Acetyl Octapeptide-3) adalah perkembangan dari Argireline (Acetyl Hexapeptide-3). Bekerja dengan menghambat pembentukan kompleks SNARE yang diperlukan untuk pelepasan neurotransmitter di neuromuscular junction. Efeknya mengurangi kontraksi otot wajah yang menyebabkan kerutan ekspresi.",
      benefits: [
        { title: "Pengurangan Kerutan Ekspresi", text: "Studi in-vivo menunjukkan pengurangan kedalaman kerutan hingga 63% setelah 28 hari penggunaan topikal." },
        { title: "Non-Invasif", text: "Alternatif topikal untuk Botox — tidak memerlukan injeksi." },
        { title: "Aman untuk Penggunaan Harian", text: "Profil keamanan baik untuk penggunaan topikal rutin." },
      ],
      risks: [
        "Efek lebih lemah dibanding Botox injeksi",
        "Memerlukan penggunaan konsisten untuk mempertahankan efek",
        "Tidak efektif untuk kerutan dalam yang sudah terbentuk permanen",
      ],
      usage: "Serum topikal, biasanya 3-10% konsentrasi, diaplikasikan ke area kerutan.",
      buyingTips: "Tersedia luas dalam produk skincare. Cari produk dengan konsentrasi SNAP-8 yang tercantum jelas.",
    },
    faqs: [
      { question: "Apakah SNAP-8 seefektif Botox?", answer: "Tidak. SNAP-8 memberikan efek yang lebih ringan karena penetrasi topikal terbatas. Namun sebagai alternatif non-invasif, memberikan perbaikan yang terlihat tanpa risiko injeksi." },
    ],
    relatedSlugs: ["ghk-cu", "epitalon"],
    keywords: ["SNAP-8 Indonesia", "anti-kerutan peptida", "Botox alternatif"],
  },

  // ─── KOGNITIF & NEUROPROTEKTIF ───
  {
    slug: "selank",
    name: "Selank",
    category: "Kognitif & Neuroprotektif",
    categorySlug: "cognitive",
    tagline: "Peptida anxiolitik dan nootropik dari Rusia",
    icon: "🧠",
    regulatoryStatus: "approved-other-countries",
    approvalNote: "Disetujui sebagai obat anxiolitik di Rusia.",
    description: "Selank adalah peptida sintetis heptapeptida yang dikembangkan di Institute of Molecular Genetics, Rusia. Analog dari tuftsin (fragmen imunoglobulin) dengan efek anxiolitik dan nootropik.",
    quickFacts: {
      molecularWeight: "751.9 Da",
      halfLife: "Singkat (intranasal cepat)",
      route: "Intranasal / Subkutan",
      storage: "Kulkas 2-8°C",
      wada: "unclear",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "Selank dikembangkan sebagai analog tuftsin dengan penambahan tiga asam amino untuk stabilitas. Disetujui sebagai obat anxiolitik di Rusia (intranasal). Bekerja melalui modulasi GABA, serotonin, dopamin, dan norepinefrin. Unik karena memberikan efek anti-kecemasan tanpa sedasi atau gangguan kognitif.",
      benefits: [
        { title: "Efek Anxiolitik", text: "Mengurangi kecemasan setara benzodiazepine tetapi tanpa efek sedatif, ketergantungan, atau gangguan memori." },
        { title: "Peningkatan Kognitif", text: "Meningkatkan memori, fokus, dan proses pembelajaran dalam studi praklinis." },
        { title: "Neuroprotektif", text: "Efek protektif terhadap stres oksidatif dan neurotoksisitas." },
        { title: "Modulasi Imun", text: "Sebagai analog tuftsin, memiliki efek imunomodulator." },
      ],
      risks: [
        "Data klinis terutama dari penelitian Rusia — kurang diverifikasi internasional",
        "Tidak disetujui di luar Rusia",
        "Efek jangka panjang belum dipelajari secara ekstensif",
      ],
      usage: "Intranasal (spray) atau injeksi subkutan.",
      buyingTips: "Tersedia dari vendor peptida research. Versi intranasal lebih mudah digunakan.",
    },
    faqs: [
      { question: "Apakah Selank menyebabkan ketergantungan seperti benzodiazepine?", answer: "Tidak. Selank tidak menunjukkan potensi ketergantungan atau withdrawal dalam penelitian yang tersedia, berbeda dengan benzodiazepine." },
    ],
    relatedSlugs: ["semax", "dihexa"],
    keywords: ["Selank Indonesia", "peptida nootropik", "anxiolitik peptida"],
  },
  {
    slug: "semax",
    name: "Semax",
    category: "Kognitif & Neuroprotektif",
    categorySlug: "cognitive",
    tagline: "Peptida nootropik ACTH fragment dari Rusia",
    icon: "🧠",
    regulatoryStatus: "approved-other-countries",
    approvalNote: "Disetujui di Rusia untuk pengobatan stroke dan gangguan kognitif.",
    description: "Semax adalah analog sintetis dari fragmen ACTH (4-10) yang dikembangkan di Rusia. Disetujui sebagai obat nootropik dan neuroprotektif di Rusia untuk stroke dan gangguan kognitif.",
    quickFacts: {
      molecularWeight: "813.9 Da",
      halfLife: "Sangat pendek (menit)",
      route: "Intranasal / Subkutan",
      storage: "Kulkas 2-8°C",
      wada: "unclear",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "Semax dikembangkan di Institute of Molecular Genetics, Moscow. Berdasarkan fragmen ACTH(4-10) — bagian dari hormon ACTH yang memiliki efek neurotropik tanpa efek hormonal. Disetujui di Rusia untuk pengobatan stroke, gangguan kognitif, dan ulkus peptikum. Merangsang produksi BDNF (Brain-Derived Neurotrophic Factor).",
      benefits: [
        { title: "Peningkatan BDNF", text: "Merangsang produksi Brain-Derived Neurotrophic Factor, penting untuk plastisitas sinaptik dan pembelajaran." },
        { title: "Neuroproteksi", text: "Efek protektif terhadap kerusakan neuronal, disetujui di Rusia untuk recovery pasca stroke." },
        { title: "Peningkatan Memori & Fokus", text: "Efek nootropik pada konsentrasi, memori kerja, dan proses pembelajaran." },
        { title: "Tanpa Efek Hormonal", text: "Meskipun berasal dari ACTH, tidak mempengaruhi kadar kortisol atau fungsi adrenal." },
      ],
      risks: [
        "Data klinis terutama dari literatur Rusia",
        "Tidak disetujui di Eropa atau AS",
        "Potensi interaksi dengan obat psikiatrik",
        "Efek samping jarang: iritasi hidung (intranasal), sakit kepala ringan",
      ],
      usage: "Intranasal (paling umum) atau injeksi subkutan. Versi intranasal memiliki onset cepat.",
      buyingTips: "Tersedia sebagai solusi intranasal atau serbuk. Pastikan penyimpanan yang tepat karena stabilitas bisa jadi masalah.",
    },
    faqs: [
      { question: "Semax vs Selank — apa bedanya?", answer: "Semax lebih fokus pada efek kognitif dan nootropik (berbasis ACTH), sementara Selank lebih fokus pada efek anxiolitik (berbasis tuftsin). Banyak pengguna menggunakan keduanya bersamaan." },
    ],
    relatedSlugs: ["selank", "dihexa"],
    keywords: ["Semax Indonesia", "nootropik peptida", "BDNF peptida"],
  },
  {
    slug: "dihexa",
    name: "Dihexa",
    category: "Kognitif & Neuroprotektif",
    categorySlug: "cognitive",
    tagline: "Peptida pro-kognitif paling poten yang diteliti",
    icon: "🧠",
    regulatoryStatus: "research-only",
    description: "Dihexa (N-hexanoic-Tyr-Ile-(6) aminohexanoic amide) adalah peptida sintetis yang diteliti sebagai salah satu senyawa pro-kognitif paling poten, dengan potensi jutaan kali lebih besar dari BDNF dalam merangsang sinaptogenesis.",
    quickFacts: {
      molecularWeight: "425.5 Da",
      halfLife: "Tidak diketahui pasti",
      route: "Oral / Sublingual",
      storage: "Suhu ruang, kering",
      wada: "unclear",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "Dihexa dikembangkan di Washington State University sebagai analog angiotensin IV. Bekerja melalui reseptor HGF/c-Met untuk merangsang pembentukan koneksi sinaptik baru. Dalam studi praklinis, menunjukkan potensi luar biasa — efektif pada dosis picomolar, jutaan kali lebih poten dari BDNF.",
      benefits: [
        { title: "Sinaptogenesis", text: "Merangsang pembentukan koneksi sinaptik baru dengan potensi yang sangat tinggi." },
        { title: "Peningkatan Memori", text: "Studi pada hewan menunjukkan peningkatan dramatis dalam memori spasial dan pembelajaran." },
        { title: "Potensi untuk Neurodegenerasi", text: "Diteliti untuk potensi terapi Alzheimer dan demensia." },
        { title: "Oral Bioavailability", text: "Aktif secara oral — tidak memerlukan injeksi." },
      ],
      risks: [
        "Sangat eksperimental — hanya data praklinis",
        "Potensi efek proliferatif pada sel kanker (melalui jalur HGF/c-Met)",
        "Dosis yang tepat dan aman belum ditetapkan untuk manusia",
        "Data keamanan jangka panjang tidak ada",
      ],
      usage: "Tersedia dalam bentuk sublingual atau oral. Sangat eksperimental.",
      buyingTips: "Tersedia sangat terbatas. Karena potensinya sangat tinggi, risiko dosing error lebih besar. Sangat eksperimental.",
    },
    faqs: [
      { question: "Apakah Dihexa aman?", answer: "Data keamanan pada manusia tidak ada. Kekhawatiran utama adalah jalur HGF/c-Met yang juga berperan dalam pertumbuhan beberapa jenis kanker. Ini sangat eksperimental." },
    ],
    relatedSlugs: ["semax", "selank"],
    keywords: ["Dihexa Indonesia", "nootropik poten", "sinaptogenesis peptida"],
  },

  // ─── IMUNITAS ───
  {
    slug: "thymosin-alpha-1",
    name: "Thymosin Alpha-1",
    category: "Imunitas",
    categorySlug: "immune",
    tagline: "Peptida imunomodulator yang disetujui di 35+ negara",
    icon: "🛡️",
    regulatoryStatus: "approved-other-countries",
    approvalNote: "Disetujui sebagai Zadaxin di 35+ negara untuk hepatitis B/C dan sebagai imunomodulator.",
    description: "Thymosin Alpha-1 (Tα1) adalah peptida 28 asam amino alami yang diproduksi oleh thymus. Disetujui sebagai obat (Zadaxin) di lebih dari 35 negara untuk hepatitis B/C dan sebagai imunomodulator.",
    quickFacts: {
      molecularWeight: "3108 Da",
      halfLife: "~2 jam",
      route: "Subkutan",
      storage: "Kulkas 2-8°C",
      wada: "permitted",
      bpom: "not-registered",
      bpomNote: "Zadaxin disetujui di 35+ negara, status BPOM perlu dicek.",
    },
    sections: {
      whatIsIt: "Thymosin Alpha-1 secara alami diproduksi oleh kelenjar thymus dan berperan kritis dalam pematangan sel T dan regulasi sistem imun. Versi sintetisnya (Zadaxin) telah disetujui di lebih dari 35 negara untuk pengobatan hepatitis B kronis, hepatitis C, dan sebagai adjuvan untuk vaksin pada pasien imunocompromised.",
      benefits: [
        { title: "Modulasi Sistem Imun", text: "Merangsang pematangan dan aktivasi sel T, NK cells, dan sel dendritik." },
        { title: "Pengobatan Hepatitis", text: "Data klinis untuk hepatitis B dan C kronis — disetujui di banyak negara Asia." },
        { title: "Adjuvan Vaksin", text: "Meningkatkan respons imun terhadap vaksin pada populasi imunocompromised." },
        { title: "Anti-Tumor", text: "Diteliti sebagai imunoterapi adjuvan dalam beberapa jenis kanker." },
      ],
      risks: [
        "Efek samping umumnya ringan: reaksi injeksi, fatigue",
        "Biaya tinggi untuk versi farmasi (Zadaxin)",
        "Kontraindikasi pada penerima transplantasi organ (karena efek imunostimulasi)",
      ],
      usage: "Injeksi subkutan. Versi farmasi (Zadaxin) memiliki protokol dosis yang ditetapkan.",
      buyingTips: "Versi farmasi (Zadaxin) tersedia di beberapa negara Asia. Versi riset juga tersedia dari vendor peptida.",
    },
    faqs: [
      { question: "Apakah Thymosin Alpha-1 disetujui di Indonesia?", answer: "Zadaxin (thymosin alpha-1 farmasi) telah terdaftar di beberapa negara Asia. Cek dengan BPOM atau konsultasikan dokter untuk ketersediaan di Indonesia." },
    ],
    relatedSlugs: ["ll-37", "thymalin", "bpc-157"],
    keywords: ["Thymosin Alpha-1 Indonesia", "Zadaxin", "imunomodulator peptida"],
  },
  {
    slug: "ll-37",
    name: "LL-37",
    category: "Imunitas",
    categorySlug: "immune",
    tagline: "Peptida antimikroba alami dari sistem imun bawaan",
    icon: "🛡️",
    regulatoryStatus: "research-only",
    description: "LL-37 adalah satu-satunya cathelicidin pada manusia — peptida antimikroba alami yang menjadi bagian penting dari sistem imun bawaan (innate immunity).",
    quickFacts: {
      molecularWeight: "4493 Da",
      halfLife: "Pendek dalam plasma",
      route: "Subkutan / Topikal",
      storage: "Kulkas 2-8°C",
      wada: "unclear",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "LL-37 (37 asam amino, dimulai dengan dua leucine) secara alami diproduksi oleh sel-sel imun, kulit, dan lapisan mukosa. Berfungsi sebagai garis pertahanan pertama terhadap patogen. Produksinya distimulasi oleh vitamin D, menjelaskan hubungan vitamin D dengan fungsi imun.",
      benefits: [
        { title: "Antimikroba Spektrum Luas", text: "Aktif melawan bakteri Gram-positif/negatif, jamur, virus, dan mycobacteria." },
        { title: "Imunomodulasi", text: "Memodulasi respons inflamasi — bisa pro atau anti-inflamasi tergantung konteks." },
        { title: "Penyembuhan Luka", text: "Merangsang angiogenesis dan migrasi sel untuk penyembuhan luka." },
        { title: "Anti-Biofilm", text: "Efektif mengganggu biofilm bakteri yang resisten terhadap antibiotik konvensional." },
      ],
      risks: [
        "Pada konsentrasi tinggi bisa menjadi sitotoksik terhadap sel host",
        "Potensi pro-inflamasi dalam kondisi tertentu",
        "Data penggunaan eksogen pada manusia terbatas",
        "Mahal untuk disintesis",
      ],
      usage: "Injeksi subkutan atau penggunaan topikal dalam konteks riset.",
      buyingTips: "Ketersediaan terbatas dan mahal. Pastikan kemurnian tinggi karena kontaminasi sangat berbahaya untuk peptida antimikroba.",
    },
    faqs: [
      { question: "Bagaimana hubungan LL-37 dengan Vitamin D?", answer: "Vitamin D merangsang ekspresi gen LL-37. Inilah mengapa defisiensi vitamin D dikaitkan dengan peningkatan kerentanan infeksi." },
    ],
    relatedSlugs: ["thymosin-alpha-1", "thymalin", "bpc-157"],
    keywords: ["LL-37 Indonesia", "cathelicidin", "antimikroba peptida"],
  },
  {
    slug: "thymalin",
    name: "Thymalin",
    category: "Imunitas",
    categorySlug: "immune",
    tagline: "Ekstrak thymus untuk rejuvenasi sistem imun",
    icon: "🛡️",
    regulatoryStatus: "approved-other-countries",
    approvalNote: "Disetujui di Rusia dan beberapa negara CIS.",
    description: "Thymalin adalah kompleks polipeptida yang diekstraksi dari kelenjar thymus sapi. Dikembangkan di Rusia dan diteliti untuk kemampuannya merejuvenasi fungsi imun, terutama pada populasi aging.",
    quickFacts: {
      molecularWeight: "Variabel (campuran)",
      halfLife: "Tidak diketahui pasti",
      route: "Intramuskular",
      storage: "Kulkas 2-8°C",
      wada: "unclear",
      bpom: "not-registered",
    },
    sections: {
      whatIsIt: "Thymalin dikembangkan oleh Prof. Khavinson (yang juga mengembangkan Epitalon) dari Institut Gerontologi St. Petersburg. Merupakan campuran peptida dari thymus sapi yang diproses. Diteliti untuk kemampuannya memperbaiki fungsi imun yang menurun seiring usia (immunosenescence).",
      benefits: [
        { title: "Rejuvenasi Imun", text: "Merangsang pematangan sel T dan memperbaiki fungsi imun yang menurun seiring usia." },
        { title: "Anti-Aging", text: "Studi longitudinal di Rusia melaporkan penurunan mortalitas pada kelompok lansia yang diberi Thymalin." },
        { title: "Aktivasi Thymus", text: "Mendukung fungsi kelenjar thymus yang mengecil seiring usia." },
      ],
      risks: [
        "Data klinis terutama dari literatur Rusia",
        "Sebagai ekstrak hewani, standardisasi bisa bervariasi",
        "Risiko alergi terhadap protein sapi",
        "Tidak disetujui di luar Rusia dan beberapa negara CIS",
      ],
      usage: "Injeksi intramuskular, biasanya dalam siklus periodik.",
      buyingTips: "Ketersediaan terbatas di luar Rusia. Verifikasi sumber dan kualitas dengan hati-hati.",
    },
    faqs: [
      { question: "Apa perbedaan Thymalin dan Thymosin Alpha-1?", answer: "Thymosin Alpha-1 adalah peptida tunggal yang terdefinisi (28 asam amino). Thymalin adalah campuran polipeptida dari ekstrak thymus. Thymosin Alpha-1 memiliki lebih banyak data klinis internasional." },
    ],
    relatedSlugs: ["thymosin-alpha-1", "epitalon", "ll-37"],
    keywords: ["Thymalin Indonesia", "thymus peptida", "rejuvenasi imun"],
  },

  // ─── KESEHATAN SEKSUAL ───
  {
    slug: "pt-141",
    name: "PT-141 (Bremelanotide)",
    category: "Kesehatan Seksual",
    categorySlug: "sexual-health",
    tagline: "Peptida yang disetujui FDA untuk disfungsi seksual wanita",
    icon: "❤️",
    regulatoryStatus: "fda-approved",
    approvalNote: "Disetujui FDA sebagai Vyleesi (2019) untuk Hypoactive Sexual Desire Disorder (HSDD) pada wanita premenopause.",
    description: "PT-141 (Bremelanotide, nama dagang Vyleesi) adalah agonis reseptor melanocortin yang disetujui FDA untuk pengobatan Hypoactive Sexual Desire Disorder (HSDD) pada wanita premenopause.",
    quickFacts: {
      molecularWeight: "1025.2 Da",
      halfLife: "~2 jam",
      route: "Subkutan / Intranasal",
      storage: "Kulkas 2-8°C",
      wada: "permitted",
      bpom: "not-registered",
      bpomNote: "Vyleesi disetujui FDA, status BPOM Indonesia belum jelas.",
    },
    sections: {
      whatIsIt: "PT-141 awalnya dikembangkan dari Melanotan II. Uniknya, PT-141 bekerja melalui sistem saraf pusat (reseptor melanocortin MC3R/MC4R di otak), bukan melalui sistem vaskular seperti PDE5 inhibitors (Viagra). Disetujui FDA pada 2019 sebagai Vyleesi untuk HSDD pada wanita — salah satu dari sedikit peptida yang mencapai persetujuan FDA penuh.",
      benefits: [
        { title: "Peningkatan Desire Seksual", text: "Disetujui FDA untuk HSDD pada wanita premenopause berdasarkan studi klinis fase III." },
        { title: "Mekanisme Sentral", text: "Bekerja di otak melalui reseptor melanocortin, bukan efek vaskular perifer." },
        { title: "Efek pada Pria", text: "Studi menunjukkan efektivitas untuk disfungsi ereksi, termasuk pada kasus yang tidak responsif terhadap PDE5 inhibitors." },
      ],
      risks: [
        "Mual (efek samping paling umum, 40% subjek)",
        "Hipertensi sementara",
        "Hiperpigmentasi kulit dengan penggunaan berulang",
        "Tidak boleh digunakan lebih dari sekali dalam 24 jam",
        "Tidak boleh digunakan lebih dari 8 kali per bulan",
      ],
      usage: "Injeksi subkutan (Vyleesi) atau intranasal (dalam riset). Diadministrasikan 45 menit sebelum aktivitas.",
      buyingTips: "Versi farmasi (Vyleesi) memerlukan resep. Versi riset tersedia dari vendor peptida. Pastikan kemurnian tinggi.",
    },
    faqs: [
      { question: "Apakah PT-141 sama dengan Viagra?", answer: "Tidak. Viagra bekerja pada pembuluh darah (PDE5 inhibitor). PT-141 bekerja di otak melalui reseptor melanocortin. PT-141 meningkatkan desire, bukan hanya fungsi mekanis." },
      { question: "Apakah PT-141 bekerja untuk pria?", answer: "Studi menunjukkan efektivitas untuk disfungsi ereksi, termasuk kasus yang tidak responsif terhadap Viagra. Namun tidak disetujui FDA untuk pria." },
    ],
    relatedSlugs: ["melanotan-ii"],
    keywords: ["PT-141 Indonesia", "Bremelanotide", "Vyleesi", "peptida seksual"],
  },

  // ─── TANNING & PIGMENTASI ───
  {
    slug: "melanotan-ii",
    name: "Melanotan II",
    category: "Tanning & Pigmentasi",
    categorySlug: "tanning",
    tagline: "Peptida melanocortin untuk tanning dan pigmentasi kulit",
    icon: "☀️",
    regulatoryStatus: "research-only",
    approvalNote: "Tidak disetujui di negara manapun. Dilarang TGA Australia dan MHRA UK.",
    description: "Melanotan II adalah analog sintetis α-MSH (alpha-melanocyte-stimulating hormone) yang merangsang produksi melanin untuk tanning kulit. Juga memiliki efek pada libido dan nafsu makan.",
    quickFacts: {
      molecularWeight: "1024.2 Da",
      halfLife: "~33 jam",
      route: "Subkutan",
      storage: "Kulkas 2-8°C",
      wada: "permitted",
      bpom: "not-registered",
      bpomNote: "Tidak disetujui di negara manapun, dilarang TGA Australia & MHRA UK.",
    },
    sections: {
      whatIsIt: "Melanotan II dikembangkan di University of Arizona sebagai potensi pencegahan kanker kulit melalui tanning tanpa UV. Bekerja pada reseptor melanocortin (MC1-5R) untuk merangsang melanosit memproduksi melanin (pigmen kulit). Efek non-selektifnya pada berbagai reseptor MC menyebabkan efek samping termasuk peningkatan libido dan penekanan nafsu makan.",
      benefits: [
        { title: "Tanning Tanpa UV Berlebihan", text: "Merangsang produksi melanin, memungkinkan tanning dengan paparan UV minimal." },
        { title: "Potensi Perlindungan UV", text: "Peningkatan melanin secara teoritis meningkatkan perlindungan alami kulit terhadap UV." },
        { title: "Efek Samping yang Diinginkan", text: "Beberapa pengguna menggunakan untuk efek peningkatan libido dan penekanan nafsu makan." },
      ],
      risks: [
        "Mual (sangat umum, terutama dosis awal)",
        "Perubahan pigmentasi tidak merata (bintik gelap, perubahan pada nevi/tahi lalat)",
        "WASPADA: perubahan pada tahi lalat bisa menyamarkan melanoma",
        "Hipertensi sementara dan flushing wajah",
        "Ereksi spontan (pada pria)",
        "Tidak disetujui di negara manapun untuk penggunaan manusia",
        "Dilarang oleh banyak badan regulasi termasuk TGA Australia dan MHRA UK",
      ],
      usage: "Injeksi subkutan atau spray nasal. Memerlukan paparan UV untuk mengaktifkan melanogenesis.",
      buyingTips: "Perlu diketahui bahwa Melanotan II tidak disetujui di negara manapun dan dilarang di beberapa. Risiko kualitas produk sangat tinggi.",
    },
    faqs: [
      { question: "Apakah Melanotan II aman?", answer: "Belum ada data keamanan jangka panjang yang memadai. Risiko termasuk perubahan pada nevi yang bisa menyamarkan melanoma. Banyak badan regulasi telah mengeluarkan peringatan atau larangan." },
      { question: "Apa perbedaan Melanotan I dan II?", answer: "Melanotan I (Afamelanotide/Scenesse) lebih selektif untuk MC1R dan disetujui di Eropa untuk EPP. Melanotan II kurang selektif dan memiliki efek samping lebih banyak termasuk efek seksual." },
    ],
    relatedSlugs: ["pt-141"],
    keywords: ["Melanotan II Indonesia", "tanning peptida", "melanin peptida"],
  },
];

export function getPeptideBySlug(slug: string): PeptideData | undefined {
  return peptides.find((p) => p.slug === slug);
}

export function getPeptidesByCategory(categorySlug: string): PeptideData[] {
  return peptides.filter((p) => p.categorySlug === categorySlug);
}

export function getAllSlugs(): string[] {
  return peptides.map((p) => p.slug);
}
