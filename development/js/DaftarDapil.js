$(function () {
    $.get('http://localhost/server/DaftarDapil').done(function (result) {
        console.log(result);
        for (i = 0; i < result.length; i++) {
            var a = '<li><a onclick=detail(' + result[i].id_dapil + ')><h2>' + result[i].nama + '</h2><p>'+result[i].wilayah+'</p></a></li>';
            $('#ulDapil').append(a);
        }
        $('ul').listview('refresh');
    }).fail(function () {
        $('#ulDapil').html('Terjadi Kesalahan');
    });
});

function detail(x) {
    sessionStorage.setItem("idDapil", x);
    window.location.assign('daftardpr.html');
}