export interface GlossaryTerm {
  term: string;
  alias?: string;
  category: "Anatomi" | "Farmakologi" | "Teknik" | "Hormon" | "Riset" | "Regulasi";
  definition: string;
  related?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "BAC Water",
    alias: "Bacteriostatic Water",
    category: "Teknik",
    definition: "Air steril yang mengandung 0.9% benzyl alcohol sebagai pengawet untuk mencegah pertumbuhan bakteri. Digunakan untuk reconstitusi peptida dalam vial multi-dose. Berbeda dengan sterile water yang tidak mengandung pengawet.",
  },
  {
    term: "Reconstitusi",
    alias: "Reconstitution",
    category: "Teknik",
    definition: "Proses melarutkan peptida lyophilized (serbuk beku-kering) dengan BAC water atau pelarut lain sehingga siap untuk dosing. Volume air yang ditambahkan menentukan konsentrasi akhir.",
  },
  {
    term: "Lyophilized",
    alias: "Liofilisasi / Beku-kering",
    category: "Teknik",
    definition: "Metode pengawetan dengan membekukan zat dan menghilangkan air melalui sublimasi. Peptida lyophilized tampak seperti serbuk putih atau pellet di dalam vial dan stabil untuk waktu lama jika disimpan dengan benar.",
  },
  {
    term: "U-100 Syringe",
    category: "Teknik",
    definition: "Syringe insulin dengan skala 100 unit per 1 mL (1 unit = 0.01 mL). Digunakan untuk dosing peptida karena volume kecil dan akurasi tinggi. Standar untuk injeksi subkutan peptida.",
  },
  {
    term: "Subkutan",
    alias: "SubQ / SC",
    category: "Teknik",
    definition: "Rute injeksi di bawah kulit (lapisan lemak) tetapi di atas otot. Lokasi umum: perut, paha, lengan atas. Absorpsi lebih lambat dibanding intramuskular tetapi lebih nyaman dan kurang menyakitkan.",
  },
  {
    term: "Intramuskular",
    alias: "IM",
    category: "Teknik",
    definition: "Rute injeksi langsung ke dalam jaringan otot. Absorpsi lebih cepat dibanding subkutan. Memerlukan jarum lebih panjang dan teknik berbeda.",
  },
  {
    term: "GHRH",
    alias: "Growth Hormone-Releasing Hormone",
    category: "Hormon",
    definition: "Hormon hipotalamus yang merangsang kelenjar pituitari untuk melepaskan hormon pertumbuhan (GH). Peptida seperti CJC-1295, Sermorelin, dan Tesamorelin adalah analog GHRH.",
    related: ["GH", "GHS"],
  },
  {
    term: "GH",
    alias: "Growth Hormone / Hormon Pertumbuhan",
    category: "Hormon",
    definition: "Hormon yang diproduksi kelenjar pituitari, berperan dalam pertumbuhan jaringan, regenerasi sel, metabolisme, dan komposisi tubuh. Pelepasan GH bersifat pulsatil — terutama tinggi saat tidur.",
  },
  {
    term: "GHS",
    alias: "Growth Hormone Secretagogue",
    category: "Farmakologi",
    definition: "Senyawa yang merangsang sekresi GH dari pituitari. Termasuk GHRH analog (Sermorelin, CJC-1295) dan GHRP (Ipamorelin, GHRP-6, GHRP-2) yang bekerja melalui reseptor ghrelin.",
  },
  {
    term: "GHRP",
    alias: "Growth Hormone Releasing Peptide",
    category: "Farmakologi",
    definition: "Subkelompok GHS yang bekerja melalui reseptor ghrelin di pituitari. Termasuk Ipamorelin, GHRP-6, GHRP-2, dan Hexarelin. Berbeda jalur dari GHRH analog.",
  },
  {
    term: "IGF-1",
    alias: "Insulin-like Growth Factor 1",
    category: "Hormon",
    definition: "Hormon yang diproduksi terutama oleh hati sebagai respons terhadap GH. Memediasi banyak efek pertumbuhan dan anabolik dari GH. Kadar IGF-1 sering digunakan sebagai indikator status GH.",
  },
  {
    term: "GLP-1",
    alias: "Glucagon-Like Peptide 1",
    category: "Hormon",
    definition: "Hormon inkretin yang dilepaskan dari usus setelah makan, merangsang sekresi insulin dan menekan glukagon. Agonis GLP-1 seperti Semaglutide dan Tirzepatide adalah obat blockbuster untuk diabetes dan obesitas.",
  },
  {
    term: "CoA",
    alias: "Certificate of Analysis / Sertifikat Analisis",
    category: "Riset",
    definition: "Dokumen dari laboratorium independen yang memverifikasi identitas, kemurnian, dan kualitas batch peptida. CoA yang baik menyertakan hasil HPLC dan Mass Spectrometry. Esensial untuk verifikasi kualitas vendor.",
  },
  {
    term: "HPLC",
    alias: "High-Performance Liquid Chromatography",
    category: "Riset",
    definition: "Teknik analitis untuk memisahkan, mengidentifikasi, dan mengukur kemurnian senyawa. Standar untuk verifikasi kemurnian peptida — dilaporkan sebagai persentase (idealnya >98%).",
  },
  {
    term: "Mass Spectrometry",
    alias: "MS",
    category: "Riset",
    definition: "Teknik analisis yang mengukur massa molekul dengan presisi tinggi. Digunakan untuk verifikasi identitas peptida — memastikan bahwa peptida benar-benar yang diklaim.",
  },
  {
    term: "Asam Amino",
    alias: "Amino Acid",
    category: "Anatomi",
    definition: "Bahan penyusun protein dan peptida. Ada 20 asam amino standar yang membentuk protein manusia. Peptida adalah rantai pendek (biasanya <50) asam amino.",
  },
  {
    term: "Pituitari",
    alias: "Hypophysis / Kelenjar Hipofisis",
    category: "Anatomi",
    definition: "Kelenjar endokrin kecil di dasar otak yang memproduksi banyak hormon penting termasuk GH, ACTH, TSH, LH, FSH, dan prolaktin. Target utama banyak peptida growth hormone.",
  },
  {
    term: "Hipotalamus",
    alias: "Hypothalamus",
    category: "Anatomi",
    definition: "Region otak yang mengontrol kelenjar pituitari dan banyak fungsi homeostatik. Memproduksi GHRH yang merangsang pelepasan GH dari pituitari.",
  },
  {
    term: "Telomere",
    category: "Anatomi",
    definition: "Struktur pelindung di ujung kromosom yang memendek setiap kali sel membelah. Pemendekan telomere terkait dengan penuaan seluler. Epitalon diteliti untuk aktivasi telomerase yang dapat memperpanjang telomere.",
  },
  {
    term: "Ghrelin",
    category: "Hormon",
    definition: "Hormon 'lapar' yang dilepaskan dari lambung. Merangsang nafsu makan dan juga merangsang pelepasan GH melalui reseptor ghrelin di pituitari. GHRP dan Ipamorelin meniru efek ghrelin pada reseptor ini.",
  },
  {
    term: "Mikrogram (mcg/μg)",
    alias: "Microgram",
    category: "Farmakologi",
    definition: "Satuan berat: 1 mg = 1000 mcg. Banyak peptida didosis dalam mcg karena potensi tinggi. Misalnya: Ipamorelin sering didosis 100-300 mcg, bukan mg.",
  },
  {
    term: "Lipolisis",
    category: "Farmakologi",
    definition: "Proses pemecahan lemak (triglyceride) menjadi asam lemak bebas dan gliserol. GH dan beberapa peptida (AOD-9604) merangsang lipolisis untuk pengurangan lemak tubuh.",
  },
  {
    term: "Angiogenesis",
    category: "Farmakologi",
    definition: "Proses pembentukan pembuluh darah baru dari yang sudah ada. Penting untuk penyembuhan luka dan regenerasi jaringan. BPC-157 dan TB-500 merangsang angiogenesis untuk efek penyembuhan.",
  },
  {
    term: "Anekdotal",
    category: "Riset",
    definition: "Bukti berdasarkan pengalaman individu atau cerita pengguna, bukan studi ilmiah terkontrol. Banyak protokol peptida bersifat anekdotal — penting untuk dibedakan dari bukti klinis.",
  },
  {
    term: "Praklinis",
    alias: "Preclinical",
    category: "Riset",
    definition: "Penelitian sebelum uji pada manusia — biasanya in-vitro (tabung reaksi/kultur sel) dan pada hewan. Hasil praklinis tidak selalu translatable ke manusia. Sebagian besar bukti peptida masih di tahap ini.",
  },
  {
    term: "Off-Label",
    category: "Regulasi",
    definition: "Penggunaan obat untuk tujuan yang tidak disetujui oleh badan regulasi. Banyak peptida yang disetujui FDA digunakan off-label untuk indikasi lain (misalnya Sermorelin disetujui untuk diagnosis GH tetapi digunakan off-label untuk anti-aging).",
  },
  {
    term: "WADA",
    alias: "World Anti-Doping Agency",
    category: "Regulasi",
    definition: "Badan internasional yang menetapkan daftar zat terlarang dalam olahraga kompetitif. Banyak peptida (TB-500, Ipamorelin, CJC-1295, GHRP) termasuk daftar terlarang WADA.",
  },
  {
    term: "BPOM",
    alias: "Badan Pengawas Obat dan Makanan",
    category: "Regulasi",
    definition: "Badan regulasi obat dan makanan di Indonesia. Sebagian besar peptida belum terdaftar di BPOM kecuali beberapa obat farmasi (misalnya Ozempic untuk diabetes).",
  },
  {
    term: "FDA",
    alias: "Food and Drug Administration",
    category: "Regulasi",
    definition: "Badan regulasi obat di Amerika Serikat. Beberapa peptida telah disetujui FDA: Semaglutide, Tirzepatide, Tesamorelin, Sermorelin, dan PT-141.",
  },
  {
    term: "Half-Life",
    alias: "Waktu Paruh",
    category: "Farmakologi",
    definition: "Waktu yang dibutuhkan agar konsentrasi obat dalam tubuh berkurang setengahnya. Menentukan frekuensi dosing — peptida dengan half-life pendek (Ipamorelin ~2 jam) butuh dosing lebih sering dibanding yang panjang (Semaglutide ~7 hari).",
  },
];

export function getTermsByCategory() {
  const grouped: Record<string, GlossaryTerm[]> = {};
  glossaryTerms.forEach((t) => {
    if (!grouped[t.category]) grouped[t.category] = [];
    grouped[t.category].push(t);
  });
  return grouped;
}
