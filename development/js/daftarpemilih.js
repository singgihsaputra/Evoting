$(function () {
     $('#daftarPemilih').html('');
    $.get('http://localhost/server/DaftarPemilih').done(function (result) {
        var a = '';
        console.log(result);
        for (i = 0; i < result.length; i++) {
            a = a + '<li><a><h2>'+result[i].nama_pemilih+'</h2><p>' + result[i].nama_dapil + '</p></a></li>';
        }
        $('#daftarPemilih').html(a);
        $('ul').listview('refresh');
    }).fail(function (e) {
        alert('Terjadi Kesalahan : '+e);
    });
});


