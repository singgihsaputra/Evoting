var urlimg = 'http://localhost/img/dpr/';
$(function () {
	getPropinsi();
    getDaftarDPR(0);
    getIdPropinsi();

    
});

function getIdPropinsi(){
	$('.daftarpropinsi').change(function(){
		getDaftarDPR(this.value);	
	});
}

function detail(x) {
		sessionStorage.setItem("idDPR", x);
		window.location.assign('detaildpr.html');
}

function getDaftarDPR(x) {
	$('#ulDPR').html('');
    $.get('http://localhost/server/hasilvoteDPR', 'id='+x).done(function (result) {
        console.log(result);
        var a = '';
        for (i = 0; i < result.length; i++) {
            a = a + '<li><a onclick=detail('+result[i].id_dpr+')><img src=' + urlimg + result[i].foto + '><h2>' + result[i].nama + '</h2><p>' + result[i].domisili + '</p><p class="ui-li-aside"><strong>Perolehan Suara : '+result[i].voting+'</strong></p></a></li>';
        }
        $('#ulDPR').html(a);
        $('ul').listview('refresh');
    }).fail(function () {
        $('#ulDPR').html('Data Tidak Tersedia');
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