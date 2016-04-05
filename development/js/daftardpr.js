$(function () {
    var idDapil = sessionStorage.getItem('idDapil');
    setDaftarDPR(idDapil);
    setDaftarDapil(idDapil);

    $('.daftarDapil').change(function () {
        setDaftarDPR(this.value);
    });
});

function setDaftarDapil(x) {
    $.get('http://localhost/server/DaftarDapil/').done(function (result) {
        var a="";
        for (i = 0; i < result.length; i++) {
            a = '<option value="' + result[i].id_dapil + '"';
            if(i==x){
                a=a+' selected';
            }    
            a=a + '>' + result[i].nama + '</option>';
            $('.daftarDapil').append(a);
        }
    }).fail(function () {
        alert('Terjadi Kesalahan : '+e);
    });
}

function setDaftarDPR(x) {
    $('#daftarDpr').html('');
    $.get('http://localhost/server/DaftarDPR', 'id=' + x).done(function (result) {
		$('#namaDapil').html(result[0].nama_dapil);
        var a = '';
        console.log(result);
        for (i = 0; i < result.length; i++) {
            a = a + '<li><a onclick=detail(' + result[i].id_dpr + ')><img src=' + 'http://localhost/img/dpr/' + result[i].foto + '><h2>' + result[i].nama_partai + ' - ' + result[i].nama_dpr + '</h2><p>' + result[i].domisili + '</p><p class="ui-li-aside"><strong>' + result[i].rating + '</strong></p></a></li>';
        }
        $('#daftarDpr').html(a);
        $('ul').listview('refresh');
    }).fail(function (e) {
        alert('Terjadi Kesalahan : '+e);
    });
}

function detail(x) {
    sessionStorage.setItem("idDPR", x);
    window.location.assign('detaildpr.html');
}