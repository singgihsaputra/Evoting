var urlimg = 'http://localhost/img/partai/'
$(function () {
    $.get('http://localhost/server/DaftarPartai/').done(function (result) {
        console.log(result);
        for (var i = 0; i < result.length; i++) {
            var a = '<li><a onclick=detail('+result[i].id_partai+')><img src=' + urlimg + result[i].foto + '><h2>' + result[i].nama + '</h2><p>' + result[i].profil + '</p></a></li>';
            $('#ulPartai').append(a);
        }
        $('ul').listview('refresh');
    }).fail(function () {
        $('#ulPartai').html('error');
    });
});

function detail(x) {
		sessionStorage.setItem("idPartai", x);
		window.location.assign('detailpartai.html');
}