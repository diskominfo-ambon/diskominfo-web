
const employees = [
  {
    "id": 1,
    "name": "drg. WENDY PELUPESSY, M.Kes",
    "employee_role": "KEPALA DINAS ",
    "profile": "static/pegawai/diskes/dinas.jpg"
  },
  {
    "id": 2,
    "name": "dr. TJIANG ROBERTH CHANDRA, M.Kes",
    "employee_role": "SEKERTARIS DINAS",
    "profile": "static/pegawai/diskes/sekdis.jpg"
  },
  {
    "id": 3,
    "name": "J. RIRIHENA",
    "employee_role": "KEPALA SUBAG KEUANGAN DAN ASET",
    "profile": "static/pegawai/diskes/ririhena.jpg"
  },
  {
    "id": 4,
    "name": "JAKOBIS LEWIER, S.Sos, M.KM",
    "employee_role": "KEPALA SUBAG PERENCANAAN, KEPEGAWAIAN DAN UMUM",
    "profile": "static/pegawai/diskes/jakobis.jpg"
  },
  {
    "id": 5,
    "name": "R.J. TALLE SKM, M.Kes",
    "employee_role": "KEPALA BIDANG P2P",
    "profile": "static/pegawai/diskes/talle.jpg"
  },
  {
    "id": 6,
    "name": "dr. SIOLY SOEMPIET",
    "employee_role": "KEPALA BIDANG PELAYANAN DAN SDK ",
    "profile": "static/pegawai/diskes/dinas.jpg"
  },
  {
    "id": 7,
    "name": "dr. YUSDA TUHAREA",
    "employee_role": "KEPALA BIDANG KESEHATAN MASYARAKAT",
    "profile": "static/pegawai/diskes/yusda.jpg"
  },
  {
    "id": 8,
    "name": "TIARA URSULA SISWANTO",
    "employee_role": "KONTRAK",
    "profile": "static/pegawai/diskes/tiara.jpg"
  },
  {
    "id": 9,
    "name": "BOKI HAWA USEMAHU, Amd.AK",
    "employee_role": "KONTRAK",
    "profile": "static/pegawai/diskes/boki.jpg"
  },
  {
    "id": 10,
    "name": "AMIAMALIA TANGKE, Amd. AK",
    "employee_role": "KONTRAK",
    "profile": "static/pegawai/diskes/amiamalia.jpg"
  },
  {
    "id": 11,
    "name": "NABILA PUTRI RISKY, Amd.AK",
    "employee_role": "KONTRAK",
    "profile": "static/pegawai/diskes/nabila.jpg"
  },
  {
    "id": 12,
    "name": "YULIET SOPLANIT, Amd.AK",
    "employee_role": "KONTRAK",
    "profile": "static/pegawai/diskes/yuliet.jpg"
  },
  {
    "id": 13,
    "name": "YANA SOMAE, Ns",
    "employee_role": "KONTRAK",
    "profile": "static/pegawai/diskes/yana.jpg"
  },
  {
    "id": 14,
    "name": "SEMOEL L. SAMSU, ST",
    "employee_role": "KONTRAK",
    "profile": "static/pegawai/diskes/semoel.jpg"
  },
  {
    "id": 15,
    "name": "NOVITA TUHAREA, SE",
    "employee_role": "KONTRAK",
    "profile": "static/pegawai/diskes/novita.jpg"
  },
  {
    "id": 16,
    "name": "NETY SOHUAT, S.Kom",
    "employee_role": "KONTRAK",
    "profile": "static/pegawai/diskes/nety.jpg"
  },
  {
    "id": 17,
    "name": "RICKY STEVEN LOUHENAPESSY",
    "employee_role": "KONTRAK",
    "profile": "static/img/avatar.jpg"
  },
  {
    "id": 18,
    "name": "JONGKY STEVI NOYA, SP",
    "employee_role": "KONTRAK",
    "profile": "static/img/avatar.jpg"
  },
  {
    "id": 19,
    "name": "ALI ALFATASYAH ARRIFKIH MUH",
    "employee_role": "KONTRAK",
    "profile": "static/pegawai/diskes/ali.jpg"
  },
  {
    "id": 20,
    "name": "EVELYN MEISAN THENU",
    "employee_role": "KONTRAK",
    "profile": "static/pegawai/diskes/evelyn.jpg"
  },
  {
    "id": 21,
    "name": "ZUSIANA NAOMI HAUMAHU",
    "employee_role": "KONTRAK",
    "profile": "static/pegawai/diskes/zusiana.jpg"
  },
  {
    "id": 22,
    "name": "AGUSTINA HAUMAHU",
    "employee_role": "KONTRAK",
    "profile": "static/pegawai/diskes/agustina.jpg"
  },
  {
    "id": 23,
    "name": "AGREET R. WATTIMENA, A.Md. K.L",
    "employee_role": "KONTRAK",
    "profile": "static/img/avatar.jpg"
  }
 ];

export default function handler(req, res) {
  res.status(200).json({
    message: "Successfully",
    statusCode: 200,
    data: employees,
  });
}
