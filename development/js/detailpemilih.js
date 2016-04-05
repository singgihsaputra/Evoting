$(function () {
    var username = 'id='+sessionStorage.getItem('username');
    $.get('http://localhost/server/DetailPemilih', username, JSON).done(function (result) {
        console.log(result);
        var jk = '';
        if (result[0].gender == 'p') {
            jk = 'Perempuan';
        }
        else {
            jk = 'Laki-laki';
        }
		
		var status_dpr='';
		var status_dpd='';
		if(result[0].status_dpr=='1'){
			status_dpr='Anda sudah memilih calon DPR RI';
		}
		else
		{
			status_dpr='Anda belum memilih calon DPR RI';
		}
		
		if(result[0].status_dpd=='1'){
			status_dpd='Anda sudah memilih calon DPD RI';
		}
		else
		{
			status_dpd='Anda belum memilih calon DPD RI';
		}
		
        $('title').append(result[0].nama_pemilih);
        $('#foto').append("<h1><strong>" + result[0].nama_pemilih + "</strong></h1><h2>" + result[0].username + "</h2>");
        $('#profil').append("<h1><strong>" + result[0].nama_dapil + "</strong></h1><h2>" + result[0].wilayah + "</h2>");
        $('#sejarah').append("<h2>" + jk + "</h2><h2>Alamat : " + result[0].alamat + "</h2>");
		$('#program').append("<h2>"+status_dpr+"</h2><h2>"+status_dpd+"</h2>");
    }).fail(function () {
        alert('Error');
    });
});