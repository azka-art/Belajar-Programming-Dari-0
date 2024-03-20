/*
-------
Nomor 1
-------
Buatlah beberapa variabel berikut, isi sesuai data diri kalian.
Gunakan tipe data sesuai datanya masing-masing, misal string
untuk nama dan number untuk umur, kecuali disebutkan di
bawah. Setiap baris di bawah merupakan variabel yang berbeda
dan jangan disatukan.
*/
    //a. Nama lengkap
    const namaLengkap = "Mochamad Azka Nur Fathoni";
    //b. Email
    const Email = "azka1999@gmail.com";
    //c. Nomor handphone
    const nomorHandphone = "085892239936";
    //d. Umur
    const Umur = 25;
    //e. Tempat, tanggal lahir
    const tempatTanggalLahir = "Jakarta,10 Januari 1999";
    //f. Alamat (sampai kecamatan saja)
    const Alamat = "Jalan Pondok Bambu III Blok Ak No.16, Pondok Bambu, Duren Sawit";
    //g. Kota ( kota/kabupaten)
    const Kota = "Jakarta Timur";
    //h. Provinsi
    const Provinsi = "Daerah Keistemewaan Jakarta";
    //i. Kode pos
    const kodePos = "13430";
    /* j. Programming experience
        Array, berisi materi pemrograman yang pernah kalian
        pelajari sebelum mengikuti kelas pengantar ini, misal HTML,
        CSS, dll. Kalau kosong maka isi array kosong.
    */
   const programmingExperience = ["HTML","CSS","Javascript","Python","Java","C++"];
    /*
    k. Riwayat pendidikan
    Array of objects, yakni array yang isinya object. Berisi riwayat
    pendidikan kalian dari awal (SD) sampai terakhir. Variabel di
    dalam objectnya terdapat:
        i. Nama (nama sekolah/kampus)
        ii. Tingkat (SD, SMP, SMA, Universitas)
        iii. Tahun mulai
        iv. Tahun berakhir (jika belum selesai maka perkiraan)
        v. Jurusan (nama jurusan, jika tidak ada gunakan null)
        vi. Direkomendasikan orang lain/tidak (boolean, apakah
        kalian pilih sekolah/jurusan tersebut karena
        direkomendasikan orang lain/tidak)
        vii. Lokasi (cukup kota/kabupaten, dan provinsi)
        viii. Pengajar favorit
        Array, berisi minimal 2 data yakni nama guru/dosen
        yang jadi favorit kalian di sekolah/universtas tersebut.
        Jika lupa/tidak ada isi dengan undefined.
        ix. Materi favorit
        Array of objects, yakni aray yang isinya object. Berisi
        materi favorit kalian minimal 3 di sekolah/universitas
        tersebut. Variabel di dalam objectnya terdapat:
            1. Nama
            2. Date (tahun kalian mempelajari materi)
            3. Pengajar (nama guru/dosen yang mengajar
            materi tersebut, jika lupa gunakan undefined)
            4. Alasan (Array, berisi minimal 2 data yakni alasan
            kenapa kalian suka materi tersebut)
            5. Apakah sulit (boolean, apakah materinya sulit
            atau tidak menurut kalian)
    */
    const riwayatPendidikan = [
        //SD
        {
            Nama : "SDIT Baiturrahman",
            Tingkat : "SD",
            tahunMulai : 2005,
            tahunBerakhir : 2011,
            Jurusan : null,
            Lokasi : "Jakarta Utara, Daerah Keistemewaan Jakarta",
            pengajarFavorit : ["Tri","Shams","Khoir"],
            materiFavorit : [
                {
                    Nama : "Matematika",
                    Date : 2007,
                    Pengajar : "Tri",
                    Alasan : "Memanusiakan Murid dalam Mengajar",
                    apakahSulit : false
                },
                {
                    Nama : "Matematika",
                    Date : 2007,
                    Pengajar : "Syams",
                    Alasan : "Bersahabat dengan murid",
                    apakahSulit : false
                },
                {
                    Nama : "Matematika",
                    Date : 2007,
                    Pengajar : "Khoir",
                    Alasan : "Mengajar dengan perangai baik",
                    apakahSulit : false
                }
            ]
        },
        //SMP
        {
            Nama : "SMPN 49 Jakarta",
            Tingkat : "SMP",
            tahunMulai : 2011,
            tahunBerakhir : 2014,
            Jurusan : null,
            Lokasi : "Jakarta Timur, Daerah Keistemewaan Jakarta",
            pengajarFavorit : ["Suparno","Natalia","Bu Lubis"],
            materiFavorit : [
                {
                    Nama : "IPS",
                    Date : 2011,
                    Pengajar : "Suparno",
                    Alasan : "Mengajar IPS dengan baik",
                    apakahSulit : false
                },
                {
                    Nama : "Matematika",
                    Date : 2011,
                    Pengajar : "Natalia",
                    Alasan : "Perangai Baik",
                    apakahSulit : false
                },
                {
                    Nama : "Bahasa Indonesia",
                    Date : 2012,
                    Pengajar : "Bu Lubis",
                    Alasan : "Mengajarkan Cara Menulis",
                    apakahSulit : false
                }
            ]
        },
        //SMA
        {
            Nama : "SMAN 71 Jakarta",
            Tingkat : "SD",
            tahunMulai : 2014,
            tahunBerakhir : 2017,
            Jurusan : "IPA",
            Lokasi : "Jakarta Timur, Daerah Keistemewaan Jakarta",
            pengajarFavorit : ["Bu Enggar","Miss Ika","Bu Dian"],
            materiFavorit : [
                {
                    Nama : "Prakarya",
                    Date : 2016,
                    Pengajar : "Bu Enggar",
                    Alasan : "Melakukan eksperimen",
                    apakahSulit : false
                },
                {
                    Nama : "Bahasa Inggris",
                    Date : 2016,
                    Pengajar : "Miss Ika",
                    Alasan : "Ada perform lagu Bahasa Inggris",
                    apakahSulit : false
                },
                {
                    Nama : "Seni Budaya",
                    Date : 2015,
                    Pengajar : "Bu Dian",
                    Alasan : "Mempelajari Seni",
                    apakahSulit : false
                }
            ]
        },
        //Universitas
        {
            Nama : "Bina Nusantara University",
            Tingkat : "SD",
            tahunMulai : 2020,
            tahunBerakhir : 2024,
            Jurusan : "Sistem Informasi",
            Lokasi : "Jakarta Barat, Daerah Keistemewaan Jakarta",
            pengajarFavorit : ["Sucianna Ghaddati","Yanto Setiawan","Diana"],
            materiFavorit : [
                {
                    Nama : "IS Strategy, Management and Acquisition",
                    Date : 2023,
                    Pengajar : "Sucianna Ghaddati",
                    Alasan : "Mempelajari hal-hal yang bersifat lebih dalam mengenai SI",
                    apakahSulit : false
                },
                {
                    Nama : "Web Application",
                    Date : 2022,
                    Pengajar : "Yanto Setiawan",
                    Alasan : "Mempelajari Development dengan React Native",
                    apakahSulit : false
                },
                {
                    Nama : "Interface Design",
                    Date : 2022,
                    Pengajar : "Diana",
                    Alasan : "Melakukan Desain",
                    apakahSulit : false
                }
            ]
        }
    ];
    //l. Golongan darah (jika tidak tau dan tidak ada di KTP gunakan undefined)
    const golonganDarah = "B";
    //m.Hobi (Array, minimal 3 data)
    const Hobi = ["Procastinate","Menyanyi","Menari","Mengamati","Mengkritisi","Menyusun argumentasi","Membuat Sesuatu"]
    /*n. Makanan favorit
        Array of objects, yakni array yang berisi object. Isinya
        makanan favorit kalian minimal 3. Di dalamnya terdapat:
            i. Nama
            ii. Asal (kota dan negara asal makanan tersebut)
    */
    const makananFavorit = [
        {
            Nama : "Soto Ayam Solo",
            Asal : "Solo"

        },
        {
            Nama : "Mie Ayam",
            Asal : "Wonogiri"

        },
        {
            Nama : "Pizza",
            Asal : "Italy"

        }
    ]
/*
-------
Nomor 2
-------
Buatlah sebuah object dengan nama variabel yakni biodata,
berisi semua data di atas. (data soal 1)
Const biodata = {
namaLengkap: ‘risano akbar’
Hobi: [‘ngoding’, ‘joging’, ‘gaming]
}
*/
const Biodata = {
    namaLengkap : namaLengkap,
    Email : Email,
    nomorHandphone : nomorHandphone,
    Umur : Umur,
    tempatTanggalLahir : tempatTanggalLahir,
    Alamat : Alamat,
    Kota : Kota,
    Provinsi : Provinsi,
    kodePos : kodePos,
    programmingExperience : programmingExperience,
    riwayatPendidikan : riwayatPendidikan,
    golonganDarah : golonganDarah,
    Hobi : Hobi,
    makananFavorit : makananFavorit
}
/*
-------
Nomor 3
-------
Output dengan console.log() beberapa data berikut yang

mengambil dari object yang dibuat pada nomor 2 (jangan ambil
dari nomor 1). Awali dengan nama masing-masing data
sehingga outputnya seperti “Nama lengkap: Mohammad Hatta”
a. Nama lengkap
b. Nomor handphone
c. Programming Experience
d. Nama dan asal makanan favorit index pertama
e. Hobi index terakhir
f. Nama materi dan pengajar materi favorit pertama dari
sekolah terakhir/paling baru.
*/
const namaMakanan =  Biodata.makananFavorit.map(function(obj) { return obj['Nama']; });
const asalMakanan =  Biodata.makananFavorit.map(function(obj) { return obj['Asal']; });
const materiFavorit =  Biodata.riwayatPendidikan.map(function(obj) { return obj['materiFavorit']; });

//console.log(materiFavorit[3][0].Nama)
console.log(`\n`)
console.log(`=====================================================================================`)
console.log(`                          Homework (Intro to JavaScript)                             `)
console.log(`=====================================================================================`)
console.log(`a. Nama lengkap`)
console.log(`   Nama Lengkap : ${Biodata.namaLengkap}`)
console.log(`b. Nomor handphone`)
console.log(`   Nomor Handphone : ${Biodata.nomorHandphone}`)
console.log("c. Programming Experience")
console.log(`   Programming Experience : ${Biodata.programmingExperience}`)
console.log(`d. Nama dan asal makanan favorit index pertama`)
console.log(`   Nama : ${namaMakanan[0]}`)
console.log(`   Asal : ${asalMakanan[0]}`)
console.log(`e. Hobi index terakhir`)
console.log(`   Hobi : ${Biodata.Hobi[Biodata.Hobi.length - 1]}`)
console.log("f. Nama materi dan pengajar materi favorit pertama dari sekolah terakhir/paling baru")
console.log(`   Nama     : ${materiFavorit[3][0].Nama}`)
console.log(`   Pengajar : ${materiFavorit[3][0].Pengajar}`)
console.log(`=====================================================================================`)
console.log(`\n`)

/*    Object.keys(Biodata).forEach(key => {
        console.log(key,":",Biodata[key]);
    });
*/