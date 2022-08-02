

export default function handler(req, res) {
  res.status(200).json({
    message: "Successfully",
    statusCode: 200,
    data: [
      {
        id: 1,
        title: "Kegiatan pemerintah kota Ambon",
        desc: "Informasi terbaru dari Dinas komunikasi, informatika dan persandian kota Ambon",
        desc_short: "informasi terbaru dari Dinas komunikasi, informatika dan persandian kota Ambon",
        attachments: [],
        created_at: "Ditambahkan pada Rabu 12 Agustus 2022",
      },
      {
        id: 2,
        title: "Kegiatan pemerintah kota Ambon untuk membantu penambahan CCTV pada beberapa titik kota",
        desc: "Informasi terbaru dari Dinas komunikasi, informatika dan persandian kota Ambon",
        desc_short: "informasi terbaru dari Dinas komunikasi, informatika dan persandian kota Ambon",
        attachments: [],
        created_at: "Ditambahkan pada Rabu 12 Agustus 2022",
      }
    ]
  })
}
