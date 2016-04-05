var urlimg = 'http://localhost/img/dpr/';
$(function () {
	if(sessionStorage.getItem('username')!=null){
		document.getElementById('vote').style.display='block';
	} else {
	document.getElementById('vote').style.display='none';
	}
	var dapilDPR = '';
	var dapilUser = '';
    var idDPR= 'id='+sessionStorage.getItem('idDPR');
    $.get('http://localhost/server/DetailDPR', idDPR, JSON).done(function (result) {
        $('title').append(result[0].nama_dpr);
        $('#foto').append("<h1>" + result[0].nama + "</h1><img src='" + urlimg + result[0].foto + "'></img>");
		$('#profil').append("<h2>Tanggal Lahir : "+result[0].tgl_lahir+"</h2><br><h2>Domisili : "+result[0].domisili+"</h2><br><h2>Pendidikan : "+result[0].pendidikan+"</h2>");
		$('#sejarah').append("<h2>Pekerjaan : "+result[0].pekerjaan+"</h2><br><h2>Organisasi : "+result[0].organisasi+"</h2>");
		$('#labelRating').append("<h2>"+result[0].rating+"</h2>");
		dapilDPR=result[0].id_dapil;
    }).fail(function (e) {
        alert('Terjadi Kesalahan : '+e);
    });

    $('#yes').click(function () {
		if(sessionStorage.getItem('username')==null){
			window.location.assign('login.html');
		}
		else{
			var username = 'id='+sessionStorage.getItem('username');
    		$.get('http://localhost/server/GetDapil', username).done(function (result) {
				dapilUser = result[0].dapil;
				if(dapilDPR != dapilUser){
					alert("Maaf, ini bukan daerah pilihan anda");
				} else {
				 	var data = "dpr=" + sessionStorage.getItem('idDPR') + "&u=" + sessionStorage.getItem('username') + "";
        			$.post('http://localhost/server/voteDpr', data, JSON).done(function (result) {
            			if (result.status == '2') {
                			alert('Maaf, Anda sudah memilih');
            			} else {
							alert('Voting Berhasil');
						}
        			}).fail(function (e) {
            			alert('Gagal bero '+e);
        			});
				}	
			});
		}
    });
	
	$('#rate1').click(function () {
		if(sessionStorage.getItem('username')==null){
			window.location.assign('login.html');
		}
		else{
        	var data = "dpr=" + sessionStorage.getItem('idDPR') + "&u=" + sessionStorage.getItem('username') + "&n=1";
        	$.post('http://localhost/server/rateDpr', data, JSON).done(function (result) {
            if (result.status == '0') {
                alert('Maaf, Anda sudah merating orang ini. Sudah Cukuup.');
                $('#wis').style.display = 'block';
            }
			else if(result.status == '1'){
				alert('Rating berhasil');
				setRating();
			}
        }).fail(function (e) {
            alert('Gagal bero '+e);
        });
		}
    });
	
	$('#rate2').click(function () {
		if(sessionStorage.getItem('username')==null){
			window.location.assign('login.html');
		}
		else{
        	var data = "dpr=" + sessionStorage.getItem('idDPR') + "&u=" + sessionStorage.getItem('username') + "&n=2";
        	$.post('http://localhost/server/rateDpr', data, JSON).done(function (result) {
            if (result.status == '0') {
                alert('Maaf, Anda sudah merating orang ini. Sudah Cukuup.');
                $('#wis').style.display = 'block';
            }
			else if(result.status == '1'){
				alert('Rating berhasil');
				setRating();
			}
        }).fail(function (e) {
            alert('Gagal bero '+e);
        });
		}
    });
	$('#rate3').click(function () {
		if(sessionStorage.getItem('username')==null){
			window.location.assign('login.html');
		}
		else{
        	var data = "dpr=" + sessionStorage.getItem('idDPR') + "&u=" + sessionStorage.getItem('username') + "&n=3";
        	$.post('http://localhost/server/rateDpr', data, JSON).done(function (result) {
            if (result.status == '0') {
                alert('Maaf, Anda sudah merating orang ini. Sudah Cukuup.');
                $('#wis').style.display = 'block';
            }
			else if(result.status == '1'){
				alert('Rating berhasil');
				setRating();
			}
        }).fail(function (e) {
            alert('Gagal bero '+e);
        });
		}
    });
	$('#rate4').click(function () {
		if(sessionStorage.getItem('username')==null){
			window.location.assign('login.html');
		}
		else{
        	var data = "dpr=" + sessionStorage.getItem('idDPR') + "&u=" + sessionStorage.getItem('username') + "&n=4";
        	$.post('http://localhost/server/rateDpr', data, JSON).done(function (result) {
            if (result.status == '0') {
                alert('Maaf, Anda sudah merating orang ini. Sudah Cukuup.');
                $('#wis').style.display = 'block';
            }
			else if(result.status == '1'){
				alert('Rating berhasil');
				setRating();
			}
        }).fail(function (e) {
            alert('Gagal bero '+e);
        });
		}
    });
	
	$('#rate5').click(function () {
		if(sessionStorage.getItem('username')==null){
			window.location.assign('login.html');
		}
		else{
        	var data = "dpr=" + sessionStorage.getItem('idDPR') + "&u=" + sessionStorage.getItem('username') + "&n=5";
        	$.post('http://localhost/server/rateDpr', data, JSON).done(function (result) {
            if (result.status == '0') {
                alert('Maaf, Anda sudah merating orang ini. Sudah Cukuup.');
                $('#wis').style.display = 'block';
            }
			else if(result.status == '1'){
				alert('Rating berhasil');
				setRating();
			}
        }).fail(function (e) {
            alert('Gagal bero '+e);
        });
		}
    });
	
	
});

function setRating(){
	$.get('http://localhost/server/getRatingDpr', 'dpr='+sessionStorage.getItem('idDPR'), JSON).done(function (result) {
		$('#labelRating').html("<h2>"+result.rating+"</h2>");
	});
}

