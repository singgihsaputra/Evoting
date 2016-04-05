-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2014 at 02:35 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `evote`
--

-- --------------------------------------------------------

--
-- Table structure for table `caleg_dpd`
--

CREATE TABLE IF NOT EXISTS `caleg_dpd` (
  `id_dpd` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(30) NOT NULL,
  `tgl_lahir` varchar(30) NOT NULL,
  `domisili` varchar(30) NOT NULL,
  `pendidikan` text NOT NULL,
  `organisasi` text NOT NULL,
  `pekerjaan` text NOT NULL,
  `id_propinsi` int(11) NOT NULL,
  `foto` varchar(30) NOT NULL,
  `rating` int(11) NOT NULL,
  `voting` int(11) NOT NULL,
  PRIMARY KEY (`id_dpd`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `caleg_dpd`
--

INSERT INTO `caleg_dpd` (`id_dpd`, `nama`, `tgl_lahir`, `domisili`, `pendidikan`, `organisasi`, `pekerjaan`, `id_propinsi`, `foto`, `rating`, `voting`) VALUES
(2, 'Agus Mujayanto', '1983-10-02', 'Demak', 'SMA Negiri 1 Sidney', 'Tani Joyo', 'Guru', 2, '1.agus.jpg', 0, 0),
(6, 'BAMBANG J. PRAMONO, S.Si.', '04-01-1965', 'Blitar', '1997 SI Statistik Institut Teknologi Sepuluh Nopember (ITS) Surabaya', 'Pendiri Forum Komunikasi Mahasiswa Surabaya (FKMS) tahun 1989 &amp; aktif sd tahun 1998<br>  				        				Pendiri Yayasan Cakrawala Timur (CT) di Surabaya tahun 1991 &amp; aktif sd sekarang sebagai badan pembina		        				        				<br>Sebagai anggota Front Aksi Mahasiswa Indonesia (FANG) tahun 1993\r\n		        		', '1989 - 1990; Sebagai wiraswasta di Bali\r\n		        				\r\n		        			1990 - 2000; Sebagai wiraswasta di Surabaya\r\n		        				\r\n		        				<br>2000 - 2003; PT. SUA (Sarana Utama Adimandiri) Jakarta sebagai Direktur\r\n		        				\r\n		        				<br>2003 - sekarang; PT. BAP (Bangun Andalan Perkasa) Jakarta sebagai Direktur Operasional', 1, 'bambang.jpg', 0, 0),
(7, 'AINUL YAKIN', '03-01-1967', 'JEMBER', 'IAIN Surtan Ampel Surabaya 1986-1992', 'Ketua SEMAFakDakwah IAIN: 1989-1990\r\n		        				\r\n		        				<br>SekumPKCPMIIJaura: 1992-1994\r\n		        				\r\n		        				<br>Ketua UmumPKCPMHJatim: 1994-1996', 'Wartawan Tabloid Warta NU: 2013-skrg\r\n		        				\r\n		        				<br>Editor Penerbit:1996-1997\r\n		        				\r\n		        				<br>Dosen Agama FKM Unair: 1996-1997\r\n		        				\r\n		        				<br>Wartawan Koran Kabinet: 2004-2005', 1, 'AINUL_YAKIN.jpg', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `caleg_dpr`
--

CREATE TABLE IF NOT EXISTS `caleg_dpr` (
  `id_dpr` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(30) NOT NULL,
  `tgl_lahir` varchar(30) NOT NULL,
  `domisili` varchar(40) NOT NULL,
  `pendidikan` text NOT NULL,
  `organisasi` text NOT NULL,
  `pekerjaan` text NOT NULL,
  `id_partai` int(11) NOT NULL,
  `id_dapil` int(11) NOT NULL,
  `foto` varchar(30) NOT NULL,
  `rating` int(11) NOT NULL,
  `voting` int(11) NOT NULL,
  PRIMARY KEY (`id_dpr`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `caleg_dpr`
--

INSERT INTO `caleg_dpr` (`id_dpr`, `nama`, `tgl_lahir`, `domisili`, `pendidikan`, `organisasi`, `pekerjaan`, `id_partai`, `id_dapil`, `foto`, `rating`, `voting`) VALUES
(1, 'Sutrisno', '5 Maret 1966', 'Banjarmasin', 'S1 Sastra Jepang', 'Perhimpunan Mahahsiswa Jepang Indonesia', 'Dosen Sastra Jepun', 2, 2, 'bachtiar.jpg', 5, 0),
(6, 'VENNA MELLINDA', '29-07-1972', 'NGAWI', '1996 - Sarjana Ekonomi, Universitas Trisakti', '2001: Wakil Ketua I PARSI (Persaruan Artis Film Seluruh Indonesia)\r\n		        				\r\n		        				<br>2003: Public Relation Yayasan Putri Indonesia\r\n		        				\r\n		        				<br>2009-sekarang: Humas Forum Perempuan Partai Demokrat', 'Anggota DPR RI Periode 2009 - 2014, Fraksi Partai Demokrat', 3, 1, 'venna.jpg', 1, 2),
(9, 'NURCAHYONO, SP', '31-03-1974', 'KEDIRI', 'S1 UNISKA KEDIRI', 'KETUA TAKMIR MANADO SULUT.<br>\r\nKETUA KOPERASI WAHIDYAH KDR.<br>\r\nKETUA YAYASAN PW. SULUT', 'DIREKTUR UTAMA PT. GTRA PERSADA<br>\r\nPT. YUDHISTIRA .KEPALA CABANG', 5, 1, 'nur.jpg', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `dapil`
--

CREATE TABLE IF NOT EXISTS `dapil` (
  `id_dapil` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(40) NOT NULL,
  `wilayah` varchar(200) NOT NULL,
  PRIMARY KEY (`id_dapil`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `dapil`
--

INSERT INTO `dapil` (`id_dapil`, `nama`, `wilayah`) VALUES
(1, 'Jawa Timur 1', 'Kota Surabaya, Sidoarjo'),
(2, 'Jawa Timur 2', 'Ngawi, Magetan, Pacitan'),
(3, 'Jawa Timur 3', 'Pasuruan, Probolinggo, Jember'),
(4, 'Jawa Timur 4', 'Banyuwangi,Situbondo, Bondowoso');

-- --------------------------------------------------------

--
-- Table structure for table `partai`
--

CREATE TABLE IF NOT EXISTS `partai` (
  `id_partai` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `profil` text NOT NULL,
  `sejarah` text NOT NULL,
  `foto` varchar(30) NOT NULL,
  `program` text NOT NULL,
  PRIMARY KEY (`id_partai`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `partai`
--

INSERT INTO `partai` (`id_partai`, `nama`, `profil`, `sejarah`, `foto`, `program`) VALUES
(1, 'Partai Nasional Demokrat', 'Partai NasDem satu-satunya partai politik baru di Indonesia yang dinyatakan lolos verifikasi faktual Komisi Pemilihan Umum (KPU) menjadi peserta Pemilu 2014.\nPartai NasDem memiliki logo berbentuk Rotasi biru yang merupakan simbol perputaran yang dinamis sebagai semangat dan harapan baru, keterbukaan, ketegasan yang memiliki tujuan yang nyata. Gestur jingga memeluk sebagai lambang dari kebersamaan, keutuhan dalam bergerak dan semangat pembaharuan yang siap menampung aspirasi.', 'Partai NasDem diresmikan di Hotel Mercure Ancol, Jakarta Utara, pada 26 Juli 2011. Partai ini didirikan oleh sejumlah orang yang sebelumnya juga telah mendirikan organisasi massa Nasional Demokrat yang jika diakronimkan adalah juga NasDem. Pendiri partai paling bontot di Pemilu 2014 ini antara lain Surya Paloh, Patrice Rio Capella, Ferry Mursyidan Baldan, Martin Manurung dan Willy Aditya.\nPada Januari 2013, KPU menetapkan 10 partai politik yang lolos tahapan verifikasi administrasi dan faktual mengikuti Pemilu 2014. Bulan yang sama, partai ini bergejolak. Rencana Ketua Majelis Tinggi Partai Nasional Demokrat, Surya Paloh, dicalonkan sebagai Ketua Umum Partai NasDem pada Kongres Partai NasDem yang akan diadakan pada 25 Januari 2013 di Jakarta menimbulkan riuh. Ketua Dewan Pertimbangan Hary Tanoesoedibjo pun mengundurkan diri.\nPada kongres perdana partai ini, yang diadakan pada Januari 2013.', 'nasdem.jpg', 'Partai NasDem memasuki gelanggang politik untuk mencapai tujuan-tujuan besar: memantapkan eksistensi Negara, memperkuat persatuan bangsa dan meningkatkan kesejahteraan rakyat, mendorong pertumbuhan ekonomi yang tinggi, mendorong keadilan bagi seluruh rakyat Indonesia.\r\nSementara misinya adalah Partai NasDem sebuah gerakan perubahan yang didasari oleh kenyataan bahwa kehidupan seperti yang dicita-citakan oleh Proklamasi 1945 belum terwujud hingga saat ini. Partai NasDem bertujuan untuk menggalang kesadaran dan kekuatan masyarakat untuk melakukan Gerakan Perubahan untuk Restorasi Indonesia, yakni gerakan mengembalikan Indonesia kepada tujuan dan cita-cita Proklamasi 1945, yaitu Indonesia yang berdaulat secara politik, mandiri secara ekonomi, dan berkepribadian secara kebudayaan. '),
(2, 'Partai Kebangkitan Bangsa', 'Partai ini berdiri di Jakarta pada 23 Juli 1998 (29 Rabiul Awal 1419 Hijriyah), dideklarasikan kiai-kiai dari kalangan Nahdlatul Ulama seperti Munasir Ali, Ilyas Ruchiyat, Abdurrahman Wahid, dan A. Mustofa Bisri. Walaupun diprakarsai iai dan santri, partai ini memilih Pancasila sebagai ideologi. Sebagai lambang, PKB memilih gambar bola dunia menonjolkan peta Indonesia yang dikelilingi oleh sembilan bintang.\r\nAlamat Kantor Jl. Raden Saleh No. 9 Jakarta Pusat 10430', '11 Mei 1998, para kiai sesepuh di Langitan, Jawa Timur, mengadakan pertemuan. Mereka membicarakan situasi terakhir yang menuntut perlu diadakan perubahan untuk menyelamatkan bangsa ini dari kehancuran. Saat itu para kyai membuat surat resmi kepada Pak Harto yang isinya meminta agar beliau turun atau lengser dari jabatan presiden. Pertemuan itu mengutus Kyai Muchid Muzadi dari Jember dan Gus Yusuf Muhammad menghadap Pak Harto untuk menyampaikan surat itu. Mereka berangkat ke Jakarta, meminta waktu tetapi belum dapat jadwal. Sehingga sebelum surat itu diterima, Pak Harto sudah mengundurkan diri terlebih dahulu tanggal 23 Mei 1998.\r\n30 Mei 1998, ada istighosah akbar di Jawa Timur. Kiai-kiai berkumpul di kantor PWNU Jatim mendesak KH Cholil Bisri mendirikan partai bagi wadah aspirasi politik NU. Kemudian KH Abdurrahman Wahid yang kemudian mengambil inisiatif mendirikan PKB pada 23 Juli 1998.', 'pkb.jpg', '- '),
(3, 'Partai Demokrat', 'Ketua Dewan Pembina Partai Demokrat merupakan satu satunya orang yang mampu menjadi Presiden RI selama 2 periode berturut turut', 'Partai Demokrat termasuk partai baru dalam dunia politik Indonesia. Namun, mampu meraih simpati masyarakat yang sangat signifikan dalam periode yang relatif singkat.', 'demokrat.jpg', '- Mencerdaskan kehidupan bangsa\r\n- Bantuan Langsung Tunai (BLT)\r\n- Memberi KPK otoritas tertinggi dalam memberantas korupsi.'),
(4, 'Partai Gerindra', 'Partai Gerindra, adalah sebuah partai politik Berideologi Konservstisme di Indonesia. Partai ini didirikan di Jakarta pada tanggal 23 Juli 1998 (29 Rabi''ul Awal 1419 Hijriyah) yang dideklarasikan oleh para kiai-kiai Nahdlatul Ulama, seperti Munasir Ali, Ilyas Ruchiyat, Abdurrahman Wahid, A. Mustofa Bisri, dan A. Muhith Muzadi).', 'Kisah pendirian Partai Gerindra dimulai pada 11 Mei 1998. Ketika para kyai sesepuh di Langitan mengadakan pertemuan. Mereka membicarakan situasi terakhir yang menuntut perlu diadakan perubahan untuk menyelamatkan bangsa ini dari kehancuran. Saat itu para kyai membuat surat resmi kepada Pak Harto yang isinya meminta agar beliau turun atau lengser dari jabatan presiden. Pertemuan itu mengutus Kyai Muchid Muzadi dari Jember dan Gus Yusuf Muhammad menghadap Pak Harto untuk menyampaikan surat itu. Mereka berangkat ke Jakarta, meminta waktu tetapi belum dapat jadwal. Sehingga sebelum surat itu diterima, Pak Harto sudah mengundurkan diri terlebih dahulu tanggal 23 Mei 1998.\n\nPada tanggal 30 Mei 1998, diadakan istighosah akbar di Jawa Timur. Lalu semua kyai berkumpul di kantor PWNU Jatim. Para kyai itu mendesak KH Cholil Bisri supaya menggagas dan membidani pendirian partai bagi wadah aspirasi politik NU. Ia menolaknya karena tidak mau terlalu berkecimpung jauh dalam dunia politik dan merasa lebih baik di dunia pesantren saja. Akan tetapi para kyai terus mendorongnya karena dinilai lebih berpengalaman dalam hal politik. Pada saat itu Gus Dur belum ikut dalam pertemuan ini.', 'gerindra.jpg', 'Data program partai belum tersedia.'),
(5, 'Partai Demokrasi Indonesia Perjuangan', 'Partai Demokrasi Indonesia Perjuangan (PDI-P) adalah sebuah partai politik di Indonesia. Lahirnya PDI-P dapat dikaitkan dengan peristiwa 27 Juli 1996. Hasil dari peristiwa ini adalah tampilnya Megawati Soekarnoputri di kancah perpolitikan nasional. Walaupun sebelum peristiwa ini Megawati tercatat sebagai Ketua Umum Partai Demokrasi Indonesia dan anggota Komisi I DPR, namun setelah peristiwa inilah, namanya dikenal di seluruh Indonesia.', 'Setelah dibukanya kehidupan kepartaian politik oleh Presiden Habibie, untuk menyongsong Pemilu 1999, PDI-P didirikan. Dalam Pemilu ini, PDI-P memperoleh peringkat pertama untuk suara DPR dengan memperoleh 151 kursi. Walaupun demikian, PDI-P gagal membawa Megawati ke kursi kepresidenan, karena kalah voting dalam Sidang Umum MPR 1999 dari Abdurrahman Wahid, dan oleh karenanya Megawati menduduki kursi wakil presiden. Setelah Abdurrahman Wahid turun dari jabatan presiden pada tahun 2001, PDI-P berhasil menempatkan Megawati ke kursi presiden.\r\n\r\nDalam Pemilu Legislatif 2004, perolehan suara PDI-P turun ke peringkat kedua, dengan 109 kursi. Untuk Pemilu Presiden 2004, PDI-P kembali mencalonkan Megawati sebagai calon presiden, berpasangan dengan KH Hasyim Muzadi sebagai calon wakil presiden.\r\n\r\nKongres I PDI-P berlangsung di Semarang, Jawa Tengah pada tahun 2000.', 'pdi.jpg', 'Data program partai belum tersedia.');

-- --------------------------------------------------------

--
-- Table structure for table `pemilih`
--

CREATE TABLE IF NOT EXISTS `pemilih` (
  `username` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `nama` varchar(30) NOT NULL,
  `tgl_lahir` varchar(15) NOT NULL,
  `gender` varchar(2) NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `dapil` varchar(30) NOT NULL,
  `propinsi` int(11) NOT NULL,
  `status_dpr` varchar(1) NOT NULL DEFAULT '0',
  `status_dpd` varchar(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pemilih`
--

INSERT INTO `pemilih` (`username`, `password`, `nama`, `tgl_lahir`, `gender`, `alamat`, `dapil`, `propinsi`, `status_dpr`, `status_dpd`) VALUES
('115090600111006', 'singgih', 'Singgih Rohmad', '13 April 1992', 'l', 'Malang', '1', 1, '0', '1'),
('115090613111004', 'islamismyway', 'Yusuf Aji Wibowo', '1 Januari 2010', 'p', 'Sine, Ngawi', '2', 2, '1', '0'),
('Fakhry Ihsan Firdaus', 'fakhry', 'Fakhry Ihsan Firdaus', '12 April 1992', 'p', 'Malang', '3', 3, '0', '0'),
('Herley Shaori Al Ash', 'herley', 'Herley Shaori Al Ash', '11 April 1992', 'p', 'Malang', '4', 4, '0', '0');

-- --------------------------------------------------------

--
-- Table structure for table `propinsi`
--

CREATE TABLE IF NOT EXISTS `propinsi` (
  `id_propinsi` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(30) NOT NULL,
  PRIMARY KEY (`id_propinsi`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `propinsi`
--

INSERT INTO `propinsi` (`id_propinsi`, `nama`) VALUES
(1, 'Jawa Timur'),
(2, 'Jawa Tengah'),
(3, 'Bali'),
(4, 'Jawa Barat'),
(5, 'Daerah Istimewa Yoyakarta'),
(6, 'Daerah Khusus Ibukota Jakarta'),
(7, 'Aceh'),
(8, 'Sumatera Barat'),
(9, 'Kalimantan Barat'),
(10, 'Nusa Tenggara Barat'),
(11, 'Nusa Tenggara Timur'),
(12, 'Papua');

-- --------------------------------------------------------

--
-- Table structure for table `rating_dpd`
--

CREATE TABLE IF NOT EXISTS `rating_dpd` (
  `id_caleg` int(11) NOT NULL,
  `id_pemilih` varchar(30) NOT NULL,
  `nilai` int(11) NOT NULL,
  PRIMARY KEY (`id_caleg`,`id_pemilih`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rating_dpd`
--

INSERT INTO `rating_dpd` (`id_caleg`, `id_pemilih`, `nilai`) VALUES
(3, '1234', 5);

-- --------------------------------------------------------

--
-- Table structure for table `rating_dpr`
--

CREATE TABLE IF NOT EXISTS `rating_dpr` (
  `id_caleg` int(11) NOT NULL,
  `id_pemilih` varchar(30) NOT NULL,
  `nilai` int(11) NOT NULL,
  PRIMARY KEY (`id_caleg`,`id_pemilih`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rating_dpr`
--

INSERT INTO `rating_dpr` (`id_caleg`, `id_pemilih`, `nilai`) VALUES
(1, '1234', 5),
(2, '1234', 1),
(3, '115090600111006', 5),
(4, '1234', 5);

-- --------------------------------------------------------

--
-- Table structure for table `voting_dpd`
--

CREATE TABLE IF NOT EXISTS `voting_dpd` (
  `id_pemilih` varchar(30) NOT NULL,
  `id_caleg` int(11) NOT NULL,
  `waktu` varchar(30) NOT NULL,
  PRIMARY KEY (`id_pemilih`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `voting_dpd`
--

INSERT INTO `voting_dpd` (`id_pemilih`, `id_caleg`, `waktu`) VALUES
('115090600111006', 1, '2014-05-16 17:09:07'),
('115090613111004', 1, '2014-05-16 12:44:41');

-- --------------------------------------------------------

--
-- Table structure for table `voting_dpr`
--

CREATE TABLE IF NOT EXISTS `voting_dpr` (
  `id_pemilih` varchar(30) NOT NULL,
  `id_caleg` int(11) NOT NULL,
  `waktu` varchar(30) NOT NULL,
  PRIMARY KEY (`id_pemilih`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `voting_dpr`
--

INSERT INTO `voting_dpr` (`id_pemilih`, `id_caleg`, `waktu`) VALUES
('115090613111004', 3, '2014-05-16 12:43:09');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
