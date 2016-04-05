var urlimg = 'http://localhost/img/dpd/';
$(function () {
	if(sessionStorage.getItem('username')!=null){
		document.getElementById('vote').style.display='block';
	} else {
	document.getElementById('vote').style.display='none';
	}
	var propinsiDPD ='';
    var idDPD= 'id='+sessionStorage.getItem('idDPD');
    $.get('http://localhost/server/DetailDPD', idDPD, JSON).done(function (result) {
        $('title').append(result[0].nama);
        $('#foto').append("<h1>" + result[0].nama + "</h1><img src='" + urlimg + result[0].foto + "'></img>");
		$('#profil').append("<h2>Tanggal Lahir : "+result[0].tgl_lahir+"</h2><br><h2>Domisili : "+result[0].domisili+"</h2><br><h2>Pendidikan : "+result[0].pendidikan+"</h2>");
		$('#sejarah').append("<h2>Pekerjaan : "+result[0].pekerjaan+"</h2><br><h2>Organisasi : "+result[0].organisasi+"</h2>");
		$('#labelRating').append("<h2>"+result[0].rating+"</h2>");
		propinsiDPD=result[0].id_propinsi;
    }).fail(function () {
        alert('Error');
    });

    $('#yes').click(function () {
		var propinsiUser='';
		if(sessionStorage.getItem('username')==null){
			window.location.assign('login.html');
		}
		
		else{
			var username = 'id='+sessionStorage.getItem('username');
    		$.get('http://localhost/server/GetPropinsiUser', username).done(function (result) {
				propinsiUser = result[0].propinsi;
				if(propinsiDPD != propinsiUser){
					alert("Maaf, ini bukan propinsi anda");
				} else {
				 	var data = "dpd=" + sessionStorage.getItem('idDPD') + "&u=" + sessionStorage.getItem('username');
					
        			$.post('http://localhost/server/voteDpd', data, JSON).done(function (result) {
            			if (result.status == '2') {
                			alert('Maaf, Anda sudah memilih');
            			}
						else {
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
        	var data = "dpd=" + sessionStorage.getItem('idDPD') + "&u=" + sessionStorage.getItem('username') + "&n=1";
        	$.post('http://localhost/server/rateDpd', data, JSON).done(function (result) {
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
        	var data = "dpd=" + sessionStorage.getItem('idDPD') + "&u=" + sessionStorage.getItem('username') + "&n=2";
        	$.post('http://localhost/server/rateDpd', data, JSON).done(function (result) {
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
        	var data = "dpd=" + sessionStorage.getItem('idDPD') + "&u=" + sessionStorage.getItem('username') + "&n=3";
        	$.post('http://localhost/server/rateDpd', data, JSON).done(function (result) {
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
        	var data = "dpd=" + sessionStorage.getItem('idDPD') + "&u=" + sessionStorage.getItem('username') + "&n=4";
        	$.post('http://localhost/server/rateDpd', data, JSON).done(function (result) {
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
        	var data = "dpd=" + sessionStorage.getItem('idDPD') + "&u=" + sessionStorage.getItem('username') + "&n=5";
        	$.post('http://localhost/server/rateDpd', data, JSON).done(function (result) {
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
	$.get('http://localhost/server/getRatingDpd', 'dpd='+sessionStorage.getItem('idDPD'), JSON).done(function (result) {
		$('#labelRating').html("<h2>"+result.rating+"</h2>");
	});
}