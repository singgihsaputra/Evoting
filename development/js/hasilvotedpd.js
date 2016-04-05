var urlimg = 'http://localhost/img/dpd/';
$(function () {
	getPropinsi();
    getDaftarDPD(0);
    getIdPropinsi();

    $('ul#ulBerita li').click(function () {
        alert($(this).id);
    });
});

function getIdPropinsi(){
	$('.daftarpropinsi').change(function(){
		getDaftarDPD(this.value);	
	});
}

function detail(x) {
		sessionStorage.setItem("idDPD", x);
		window.location.assign('detaildpd.html');
}

function getDaftarDPD(x) {
	$('#ulDPD').html('');
    $.get('http://localhost/server/hasilvoteDPD', 'id='+x).done(function (result) {
        console.log(result);
        var a = '';
        for (i = 0; i < result.length; i++) {
            a = a + '<li><a onclick=detail('+result[i].id_dpd+')><img src=' + urlimg + result[i].foto + '><h2>' + result[i].nama + '</h2><p>' + result[i].domisili + '</p><p class="ui-li-aside"><strong>Perolehan Suara : '+result[i].voting+'</strong></p></a></li>';
        }
        $('#ulDPD').html(a);
        $('ul').listview('refresh');
    }).fail(function () {
        $('#ulDPD').html('Data Tidak Tersedia');
    });
}


function getPropinsi(){
    $.get('http://localhost/server/DaftarPropinsi').done(function (result) {
        console.log(result);
		var a = '';
        for (i = 0; i < result.length; i++) {
            a ='<option value="' + result[i].id_propinsi + '">' + result[i].nama + '</option>';
            $('.daftarpropinsi').append(a);
        }
    }).fail(function () {
        $('.daftarpropinsi').html('error');
    });
}