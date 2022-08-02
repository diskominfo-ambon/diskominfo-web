

export default function handler(req, res) {
  res.status(200).json({
    message: "Successfully",
    statusCode: 200,
    data: [
      {
        id: 1,
        title: "Judul kegiatan",
        picture_url: "https://images.unsplash.com/photo-1659225260593-f082454ca503?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        desc: "Informasi terbaru dari Dinas komunikasi, informatika dan persandian kota Ambon",
        desc_short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the 1500s...",
        created_at: "Rabu 12 Agustus 2022",
      }
    ]
  })
}
