$(function () {
	if(sessionStorage.getItem('login')=='1'){
		$('#loginMenu').hide('fast');
		document.getElementById('logout').style.display='block';
		document.getElementById('profil2').style.display='block';
		
	}
	else{
		$('#vote').hide('fast');
		document.getElementById('logout').style.display='none';
		document.getElementById('profil2').style.display='none';
	}
	
	$('#logout').click( function(){
		
		$('#logout').hide();
		sessionStorage.setItem('login', null);
		window.location.assign('index.html');
	});
	
	$('#partai').click( function(){
		window.location.assign('daftarpartai.html');
	});

	$('#profil').click(function () {
	    window.location.assign('detailpemilih.html');
	});
	
	$('#dpr').click( function(){
		window.location.assign('daftardapil.html');
	});

	$('#dpd').click(function () {
	    window.location.assign('daftardpd.html');
	});
	
	$('#daftarPemilih').click(function () {
	    window.location.assign('daftarpemilih.html');
	});
	
	$('#hasilvotedpd').click(function () {
	    window.location.assign('hasilvotedpd.html');
	});
	
	$('#hasilvotedpr').click(function () {
	    window.location.assign('hasilvotedpr.html');
	});
	
	$('#hasilratingdpd').click(function () {
	    window.location.assign('hasilratingdpd.html');
	});
	
	$('#hasilratingdpr').click(function () {
	    window.location.assign('hasilratingdpr.html');
	});
});