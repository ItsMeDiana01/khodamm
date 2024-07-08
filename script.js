document
  .getElementById("khodamForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    cekKhodam();
  });

document.getElementById("resetButton").addEventListener("click", function () {
  resetForm();
});

const khodams = [
  "Penghuni UKM",
  "Penghuni Gudang Ukm",
  "Mahasiswa Kura-kura",
  "Tumbal Ormawa",
  "Korti (Korban Timpal)",
  "Tumbal Kepanitiaan",
  "Pawang Hujan",
  "Ketupat HUT",
  "Koor Pubdok",
  "Koor Acara",
  "Koor Humas",
  "Koor Perlengkapan",
  "Kating Famous",
  "Kating Jutek",
  "Mahasiswa Kupu-kupu",
  "Mahasiswa Wibu Garis Keras",
  "Mahasiswa Wota",
  "Kesayangan Dosen",
  "Cepat Lulus",
  "Donatur Kampus",
  "Admin Kabar Undiksha",
  "Penunggu Halte FTK",
  "Pengkoding Handal",
  "Dewa Perpajakan",
  "Jegeg/Bagus Undiksha",
  "Tsunami Prestasi",
  "Lolos Pimnas 37",
  "Lolos Abdidaya",
  "Budak Prodi",
  "Budak Ormawa",
  "Tumbal Kepanitiaan",
  "Penikmat Tirta Ganesha",
  "Si Raja Coffee Shop",
  "Penjaga Secret Spot Kampus",
  "Penguasa Tongkrongan",
  "Master Meme Maker",
  "Jago Nyanyi di Karaoke",
  "Sultan Promo Makan",
  "Si Penguasa Grup Chat",
  "Penakluk Turnamen Mobile Legends",
  "Influencer Kampus",
  "Vlogger Hits",
  "Raja TikTok",
  "Penyelundup Wifi Gratis",
  "Penguasa Jam Malam",
  "Ahli Ngegibah",
  "Master Story Instagram",
  "Penggemar Diskon Online",
  "Penyebar Gombalan Maut",
  "Penakluk Drama Kampus",
  "Jagoan Masak di Kos",
  "Penyelamat Baterai Low",
  "Ahli Ngeghosting",
  "Sang Pahlawan Skripsi",
  "Pencari Barang Murah",
  "Stiker Maker",
  "WIBU",
  "Pencetak Quote Bijak",
  "MC Abadi",
  "Jagoan di Game Pou",
  "Penemu Makanan Enak",
  "Penguasa Bantal UKM",
  "Raja Late Night Study",
  "Sultan Voucher Makan",
  "Penakluk Hati Senior",
  "Ahli Ngoding Semalam",
  "Penguasa Drama Korea",
  "Master Spotify Playlist",
  "Penyelamat Uang Kembalian",
  "Pencari Diskon Tengah Malam",
  "Penguasa Grup Belajar",
  "Master Virtual Background",
  "Raja Shopee Flash Sale",
  "Penakluk Hati Admin",
  "Jagoan Bikin Konten Viral",
  "Penguasa Music Streaming",
  "Ahli Ngomong Sendiri",
  "Sang Penghuni UKM 24 Jam",
  "Master Bikin Polling",
  "Pencari Jodoh Online",
  "Jomblo Abadi",
  "Penguasa Study Group",
];

const khodamsKhusus = [
  "Bentar Lagi Lulus",
  "Pembimbing Baik",
  "OTW Seminar Proposal",
  "Donatur Kampus",
];

function cekKhodam() {
  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  let khodam;

  if (nim === "2315051001") {
    alert("KHODAM BERSIFAT PRIVASI!");
    return;
  }
  if (nama === "Yoga") {
    alert("KHODAM BERSIFAT PRIVASI!");
    return;
  }
  if (nama === "Yoga Mardiana") {
    alert("KHODAM BERSIFAT PRIVASI!");
    return;
  }
  if (nama === "I Gede Yoga Mardiana Putra") {
    alert("KHODAM BERSIFAT PRIVASI!");
    return;
  }
  if (
    nim.startsWith("17") ||
    nim.startsWith("18") ||
    nim.startsWith("19") ||
    nim.startsWith("20") ||
    nim.startsWith("21")
  ) {
    khodam = khodamsKhusus[Math.floor(Math.random() * khodamsKhusus.length)];
  } else {
    khodam = khodams[Math.floor(Math.random() * khodams.length)];
  }

  const hasilText = `Anggota UKM bernama ${nama} dengan NIM ${nim} memiliki khodam: <br><span class="khodam-result">${khodam}</span>`;
  document.getElementById("hasilText").innerHTML = hasilText;
  document.getElementById("khodamForm").classList.add("hidden");
  document.getElementById("hasilKhodam").classList.remove("hidden");
  document.getElementById("tambahKhodamButton").classList.remove("hidden");
}

function resetForm() {
  document.getElementById("nama").value = "";
  document.getElementById("nim").value = "";
  document.getElementById("khodamForm").classList.remove("hidden");
  document.getElementById("hasilKhodam").classList.add("hidden");
  document.getElementById("tambahKhodamButton").classList.add("hidden");
}

$(document).ready(function () {
  $("#socialMediaModal").modal("show");
});
