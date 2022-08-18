
const employees = [
  {
    "id": 1,
    "name": "DRS. JOY R. ADRIAANSZ, M.Si",
    "employee_role": "KEPALA DINAS "
  },
  {
    "id": 2,
    "name": "RONALD. H. LEKRANSY, ST.M.Si",
    "employee_role": "SEKERTARIS DINAS"
  },
  {
    "id": 3,
    "name": "WILLIAM. G. PELUPESSY, S.Sos",
    "employee_role": "KEPALA BIDANG PENGELOLAAN INFORMASI DAN KOMUNIKASI PUBLIK"
  },
  {
    "id": 4,
    "name": "SULIAN. M. L. SEDUBUN, S.Kom, M.Eng",
    "employee_role": "KEPALA BIDANG TEKNOLOGI INFORMASI PERSANDIAN DAN STATISTIK"
  },
  {
    "id": 5,
    "name": "HENDRA. V. PESIWIRISSA, S.Kom",
    "employee_role": "KEPALA BIDANG PENYELENGGARAAN e-GOVERNMENT"
  },
  {
    "id": 6,
    "name": "CHRISTIAN. JACOB SIHASALE, S.Si, M.T",
    "employee_role": "KEPALA SEKSI STATISTIK"
  },
  {
    "id": 7,
    "name": "MURNI. BAKTI. SIDOANI, S.Si, M.T",
    "employee_role": "KELOMPOK JABATAN FUNGSIONAL PENGAMANAN MANAJEMEN DATA DAN APLIKASI TEKONOLOGI INFORMASI"
  },
  {
    "id": 8,
    "name": "DAISY. SUZANA. UNEPUTTY, S.E",
    "employee_role": "KEPALA SUB BAGIAN PERENCANAAN KEPEGAWAIAN DAN UMUM"
  },
  {
    "id": 9,
    "name": "MICHAEL. O. F. PATTINAMA, S.T",
    "employee_role": "KEPALA SEKSI PERSANDIAN"
  },
  {
    "id": 10,
    "name": "MIERCOLADI. P. R. PATTIWAEL, S.Kom",
    "employee_role": "KELOMPOK JABATAN FUNGSIONAL LAYANAN INFORMASI PUBLIK DAN HUBUNGAN MEDIA"
  },
  {
    "id": 11,
    "name": "YESAYA. R. O. AYAWAILA, S.Sos, M.Med.Kom",
    "employee_role": "KELOMPOK JABATAN FUNGSIONAL PENGELOLAAN KOMUNIKASI PUBLIK"
  },
  {
    "id": 12,
    "name": "LUCAN. J. NANLOHY, S.Kom, M.T",
    "employee_role": "KELOMPOK JABATAN FUNGSIONAL INFRASTRUKTUR DAN TEKNOLOGI"
  },
  {
    "id": 13,
    "name": "ADVENTINE. L. PHILIPPUS, S.Kom",
    "employee_role": "KELOMPOK JABATAN FUNGSIONAL LAYANAN e-GOVERNMENT"
  },
  {
    "id": 14,
    "name": "HERVY HEINDRYTA TAHALELE",
    "employee_role": "KEPALA SUB BAGIAN KEUANGAN"
  },
  {
    "id": 15,
    "name": "KUNIYANTI SARI SAMANERI, S.IP, MSi",
    "employee_role": "KELOMPOK JABATAN FUNGSIONAL PENGELOLAAN INFORMASI PUBLIK"
  },
  {
    "id": 16,
    "name": "MATRYONA S.R. LOPPIES, S.Pd",
    "employee_role": ""
  },
  {
    "id": 17,
    "name": "MARYO W. LATUBESSY, S.Sos",
    "employee_role": ""
  },
  {
    "id": 18,
    "name": "MAMIK KARTIKA WATI, S.E",
    "employee_role": ""
  },
  {
    "id": 19,
    "name": "SEFTY FARADILLAH , S.Si",
    "employee_role": ""
  },
  {
    "id": 20,
    "name": "SANDY ABDUL SAID, A.Md",
    "employee_role": "PEMELIHARA TEKNOLOGI INFROMASI"
  },
  {
    "id": 21,
    "name": "RENDY LATUPUTTY, A.Md",
    "employee_role": ""
  },
  {
    "id": 22,
    "name": "FAISOL AMIR, A.Md",
    "employee_role": ""
  },
  {
    "id": 23,
    "name": "JEREMIAS SILOOY",
    "employee_role": ""
  },
  {
    "id": 24,
    "name": "NANCY SALHUTERU, S.Kom",
    "employee_role": "KONTRAK"
  },
  {
    "id": 25,
    "name": "RICARDUS PALINGGI",
    "employee_role": "KONTRAK"
  },
  {
    "id": 26,
    "name": "ANDY JULIO LATUPEIRISSA",
    "employee_role": "KONTRAK"
  },
  {
    "id": 27,
    "name": "MICHAEL V. LATUHERU, A.Md",
    "employee_role": "KONTRAK"
  },
  {
    "id": 28,
    "name": "MARVILIO PATTIPAWAE",
    "employee_role": "KONTRAK"
  },
  {
    "id": 29,
    "name": "CORNELIS R.M. SOPAMENA",
    "employee_role": "KONTRAK"
  },
  {
    "id": 30,
    "name": "AGUS WEWRA, S.Kom",
    "employee_role": "KONTRAK"
  },
  {
    "id": 31,
    "name": "FARRA BARBARA REHATTA, S.Kom",
    "employee_role": "KONTRAK"
  },
  {
    "id": 32,
    "name": "NOVA MAILOA, S.Kom",
    "employee_role": "KONTRAK"
  },
  {
    "id": 33,
    "name": "KIDUNG KENANG TAHALEA",
    "employee_role": "KONTRAK"
  },
  {
    "id": 34,
    "name": "GLORIA G. REGIN KAYADOE, S.Ds",
    "employee_role": "KONTRAK"
  },
  {
    "id": 35,
    "name": "JEIREN BERNAD MANUPUTTY",
    "employee_role": "KONTRAK"
  },
  {
    "id": 36,
    "name": "KRIVO Y. GOMIES",
    "employee_role": "KONTRAK"
  },
  {
    "id": 37,
    "name": "CHRISTENIA BEATRIX RUHULESSIN, S.Kom",
    "employee_role": "KONTRAK"
  },
  {
    "id": 38,
    "name": "JULIA LIDIA RADJAWANE, S.Si",
    "employee_role": "KONTRAK"
  },
  {
    "id": 39,
    "name": "NELCY TUHUMURY, S.Kom",
    "employee_role": "KONTRAK"
  },
  {
    "id": 40,
    "name": "BRILLIAN LORENZO DWI LATUNY",
    "employee_role": "KONTRAK"
  },
  {
    "id": 41,
    "name": "VIONITA AGUSTINA BERESABY",
    "employee_role": "KONTRAK"
  },
  {
    "id": 42,
    "name": "FITRIYA NENGSI HUKUL. S.Kom",
    "employee_role": "KONTRAK"
  },
  {
    "id": 43,
    "name": "AYU LESTARI ROLOBESSY, S.Kom",
    "employee_role": "KONTRAK"
  },
  {
    "id": 44,
    "name": "AZMAN ABDULLAH, S.Kom",
    "employee_role": "KONTRAK"
  },
  {
    "id": 45,
    "name": "MIZWAR, S.Kom",
    "employee_role": "KONTRAK"
  },
  {
    "id": 46,
    "name": "HELMY LEINUSSA",
    "employee_role": "KONTRAK"
  },
  {
    "id": 47,
    "name": "HERSY SOUHUWAT, S.Pi",
    "employee_role": "KONTRAK"
  },
  {
    "id": 48,
    "name": "SYENIE A. PATTIASINA, S.H",
    "employee_role": "KONTRAK"
  }
 ];

export default function handler(req, res) {
  res.status(200).json({
    message: "Successfully",
    statusCode: 200,
    data: employees,
  });
}
