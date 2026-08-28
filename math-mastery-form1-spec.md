# Math Mastery — Spec Bina Projek (Gold Template: Form 1)

## 1. Ringkasan Produk

Math Mastery ialah portal Matematik untuk pelajar sekolah menengah rendah Malaysia (Tingkatan 1–3, kurikulum KSSM), dibina sebagai **tempat utama untuk belajar konsep, ulangkaji, dan latih tubi sampai betul-betul mahir (mastery)** — bukan sekadar bank soalan.

- **Bukan** app "PT3 prep" (PT3 telah dimansuhkan 2022). Positioning: penguasaan Matematik Tingkatan 1–3, selari dengan hala tuju "Matriks Pembelajaran Malaysia" (assessment berpusat bermula Tingkatan 3 pada 2027).
- **Bukan** reused dari produk sedia ada "Math Booster" (app matematik sekolah rendah kanak-kanak — visual, nada, dan tahap kematangan berbeza sepenuhnya).
- **Bukan** chatbot AI terbuka, dan **bukan** tuisyen live manusia. Bimbingan berlaku melalui sistem berskrip/berstruktur (step-pad, nota interaktif).
- Dibina baharu sepenuhnya: interface baharu, sistem soalan baharu, sistem mastery baharu — hanya silibus KSSM Form 1 yang dijadikan rujukan kandungan.

## 2. Platform & Prinsip Teknikal

- **Platform:** Web/PWA (satu codebase responsif — telefon, tablet, desktop), boleh install seperti app. Sama pendekatan platform seperti produk sedia ada "Math Booster".
- **Prinsip Engine vs Content:** Pisahkan logik sistem (engine) daripada kandungan (nota, soalan, formula). Engine dibina sekali, kandungan bab/topik ditambah tanpa ubah kod teras.
- **Prinsip Gold Template:** Bina SATU bab (Bab 1: Nombor Nisbah, topik 1.1 Integer) sepenuhnya dahulu — nota, pad, mastery, remedial — sampai kualiti kukuh, SEBELUM propagate ke bab-bab lain atau Form 2/3. Jangan scale sebelum pattern UX/kandungan matang.
- **Struktur portal:** Satu portal induk (pilih Form 1/2/3) → setiap Form ialah app tersendiri tetapi kongsi SATU engine yang sama. Form 1 dibina dahulu sebagai gold template untuk Form 2 dan 3.

## 3. Struktur Navigasi (4 Aras)

1. **Pilih Form** — skrin pertama selepas log masuk. Pilih Tingkatan 1, 2, atau 3.
2. **Dashboard Form** — "home" bagi satu Form. Papar: progress keseluruhan (cth. 4/13 bab dikuasai), suis Mod (Belajar Baharu / Ulangkaji), "sambung dari mana ditinggalkan".
3. **Peta Bab** — senarai/peta 13 bab KSSM Form 1. Setiap bab ada status: dikunci, sedang belajar, atau dikuasai (progress ring/badge). Bab dikunci sehingga bab sebelumnya selesai (kecuali dalam Mod Ulangkaji, yang boleh akses mana-mana bab yang pernah dipelajari).
4. **Skrin Topik** — Nota → Diagnostik → Pad → Latihan Sendiri → Mastery Test.

**Elemen global (kekal pada hampir semua skrin):**
- Butang "kembali" (naik satu aras)
- Indikator XP/streak (kekal visible merentas skrin dalam Skrin Topik)
- Akses profil/tetapan (di Dashboard & Peta Bab) — termasuk laporan progress untuk ibu bapa

## 4. Dua Mod Pembelajaran

- **Mod Belajar Baharu** — ikut urutan penuh bab demi bab, unlock berperingkat.
- **Mod Ulangkaji** — untuk pelajar yang pernah belajar. Terus ke nota ringkas (recap) + latih tubi bercampur (soalan dari pelbagai bab yang dah dipelajari) untuk uji ingatan jangka panjang (spaced repetition ringkas). Ini elemen penting supaya app jadi "tempat utama ulangkaji", bukan sekadar bahan sekali guna.

## 5. Struktur Setiap Topik (dalam satu Bab)

Urutan penuh (Mod Belajar Baharu):

1. **Nota Interaktif** — bukan static/formula-drop terus. Guna corak "cikgu terangkan": 
   - Hook/situasi sebenar (real-life context)
   - Fasa eksplorasi interaktif (pelajar cuba sendiri — cth. garis nombor boleh gerak untuk integer, potongan bentuk untuk pecahan, timbangan untuk algebra, rajah boleh ubah untuk geometri — visual berbeza ikut jenis topik)
   - Fasa insight (pelajar sendiri jumpa corak/pattern, dibantu teks pendek)
   - Formula rasmi (dipaparkan selepas eksplorasi, bukan sebelum)
   - Contoh diselesaikan (worked example)
   - Soalan check pantas (1 soalan) sebelum masuk latihan penuh
2. **Diagnostik ringkas** — kesan apa pelajar dah tahu sebelum mula.
3. **Latihan Berpandu (Pad)** — soalan dipecah kepada langkah kerja; pelajar selesaikan satu langkah pada satu masa; sistem sahkan betul/salah SETIAP langkah (bukan jawapan akhir sahaja); butang "Bantuan" bagi hint per-langkah bila diperlukan; jika salah, sistem minta semak semula langkah tu sahaja (bukan seluruh soalan).
4. **Latihan Bersendirian** — soalan serupa tanpa bantuan/hint.
5. **Ujian Mastery** — soalan disusun/dibentangkan secara berbeza (bukan sekadar ulang pattern sama) untuk uji faham sebenar, bukan hafalan. Cadangan threshold: 85% betul, tanpa guna hint.
6. **Gelung remedial** — jika gagal Mastery Test, sistem hantar balik ke Latihan Berpandu KHUSUS untuk langkah/topik yang lemah (dikenal pasti dari data step-pad), bukan ulang keseluruhan bab.
7. **Buka bab/topik seterusnya** apabila syarat mastery dipenuhi.

## 6. Sistem Pengesanan Miskonsepsi

Setiap langkah salah dalam Pad direkod dengan langkah mana yang tersasar. Data ini:
- Memacu remedial yang bersasar (bukan generik)
- Boleh dikumpul merentas ramai pelajar untuk kenal pasti topik/langkah yang paling ramai tersilap (untuk penambahbaikan kandungan kemudian)

## 7. Arah Visual & Nada

- Sasaran umur: remaja 13 tahun (bukan kanak-kanak sekolah rendah — visual mesti "grown-up", bukan kartun/mascot budak-budak).
- Gaya: gamified tapi matang — ada level/XP/badge/streak untuk motivasi, tetapi visual bersih, warna tema per-bab, progress dipaparkan macam "skill tree/roadmap" (bukan peta dunia kanak-kanak).
- Setiap skrin topik idealnya ada:
  - Header (back button, tajuk bab/topik, XP/streak)
  - Ilustrasi/banner ringkas yang berkait dengan konteks soalan (bukan skrin kosong)
  - Watak "mentor" (avatar/ikon) yang "bercakap" dalam speech bubble semasa fasa Nota — beri rasa dibimbing, bukan baca teks kosong
  - Progress bar halus dalam skrin topik (tunjuk berapa jauh dalam fasa semasa)
- Ilustrasi/visual hook untuk Nota berbeza ikut jenis topik:
  - Integer/nombor → garis nombor interaktif
  - Pecahan → potongan bentuk (pizza/bar)
  - Algebra → timbangan/scale visual
  - Geometri → rajah boleh diseret/ubah

## 8. Kandungan Rujukan — Silibus KSSM Matematik Tingkatan 1

13 bab (DSKP KSSM), contohnya:
1. Nombor Nisbah (Integer, operasi asas, pecahan positif/negatif, perpuluhan positif/negatif, nombor nisbah)
2. Faktor dan Gandaan (Faktor, faktor perdana, FSTB, gandaan, GSTK)
3. Kuasa Dua, Punca Kuasa Dua, Kuasa Tiga, Punca Kuasa Tiga
4. Nisbah, Kadar dan Kadaran
5. Ungkapan Algebra
6. (bab 6–13 mengikut DSKP rasmi — rujuk dokumen DSKP KSSM Matematik Tingkatan 1 penuh semasa fasa content-build)

**Bab 1, Topik 1.1 (Integer) — khususnya operasi tolak nombor negatif — dicadangkan sebagai gold template pertama** kerana ia asas kepada banyak bab lain.

## 9. Urutan Bina Dicadangkan (untuk Claude Code)

1. **Navigation shell** — 4 aras navigasi (Pilih Form → Dashboard Form → Peta Bab → Skrin Topik), dengan elemen global (back, XP/streak, profil).
2. **Note Stepper Engine** — komponen reusable untuk fasa Nota Interaktif (hook → eksplorasi → insight → formula → contoh → check pantas), dengan slot untuk visual berbeza ikut topik.
3. **Step-Pad Engine** — komponen reusable untuk latihan berpandu step-by-step, termasuk validasi per-langkah dan sistem hint.
4. **Mastery Engine** — logik Diagnostik → Latihan Sendiri → Mastery Test → gelung remedial → unlock.
5. **Misconception Tracker** — rekod langkah salah, kaitkan dengan topik/miskonsepsi khusus.
6. **Kandungan Gold Template** — penuhkan Bab 1 Topik 1.1 (Integer, tolak nombor negatif) menggunakan kesemua engine di atas.
7. **QA & validasi** pada gold template sebelum propagate ke bab-bab lain dalam Form 1.
8. **Mod Ulangkaji** — dibina selepas beberapa bab siap, guna data progress sedia ada untuk latih tubi bercampur.

## 10. Nota Penting

- Jangan brand atau messaging app ini sebagai "PT3 prep" — guna angle "penguasaan Matematik" / kesediaan Matriks Pembelajaran Malaysia. Elak nada "exam besar/panik" kerana rangka rasmi memberi penekanan kepada penguasaan, bukan lulus/gagal.
- Simpan kandungan (nota, soalan, formula) berasingan daripada kod engine supaya penambahan bab/Form baharu tidak memerlukan perubahan pada struktur teras.
- Validasi kualiti interaksi (Pad, Nota Stepper) sebelum pengeluaran soalan/kandungan secara pukal — sama seperti prinsip kerja sedia ada untuk produk lain.
