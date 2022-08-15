

export default function handler(req, res) {
  res.status(200).json({
    message: "Successfully",
    statusCode: 200,
    data: [
      {
        id: 1,
        title: "Dinas Kominfo dan DP3AMD Sosialisasi Tahapan Validasi Data Bantuan STB",
        picture_url: "https://ambon.go.id/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-03-at-15.20.12.jpeg",
        desc: "Informasi terbaru dari Dinas komunikasi, informatika dan persandian kota Ambon",
        desc_short: "Dinas Kominfo dan Persandian bersama DP3AMD Kota Ambon kembali menggelar sosialisasi guna memantapkan tahapan validasi data penerima bantuan Set Top Box (STB)...",
        created_at: "03 Agustus 2022",
      },
      {
        id: 2,
        title: "Migrasi TV Analog Ke Digital, Dinas Kominfo dan DP3AMD Gelar Sosialiasi",
        picture_url: "https://ambon.go.id/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-02-at-15.28.33.jpeg",
        desc: "Informasi terbaru dari Dinas komunikasi, informatika dan persandian kota Ambon",
        desc_short: "Ambon, PPID – Sesuai amanat UU Cipta Kerja, Kementerian Komunikasi dan Informatika (Kominfo) RI akan menghentikan penyiaran Televisi (TV) analog untuk...",
        created_at: "02 Agustus 2022",
      },
      {
        id: 3,
        title: "Kota Ambon Jadi Role Model Pengelolaan SP4N LAPOR Di Maluku",
        picture_url: "https://ambon.go.id/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-06-at-17.08.301.jpeg",
        desc: "Informasi terbaru dari Dinas komunikasi, informatika dan persandian kota Ambon",
        desc_short: "Kota Ambon akan dijadikan role model dalam pengelolaan Pengaduan masyarakat melalui Sistem Pengelolaan Pengaduan Pelayanan Publik Nasional (SP4N) – Layanan Aspirasi dan Pengaduan Online Rakyat (LAPOR)....",
        created_at: "06 Juli 2022",
      }
    ]
  })
}
