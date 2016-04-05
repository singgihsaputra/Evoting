var urlimg = 'http://localhost/img/partai/';
$(function () {
    var idPartai = 'id='+sessionStorage.getItem('idPartai');
    $.get('http://localhost/server/DetailPartai', idPartai, JSON).done(function (result) {
        $('title').append(result[0].nama);
        $('#foto').append("<h1><strong>" + sessionStorage.getItem('idPartai') + '. ' + result[0].nama + "</strong></h1><img src='" + urlimg + result[0].foto + "'></img>");
    }).fail(function () {
        alert('Error');
    });

    $.get('http://localhost/server/ProfilPartai', idPartai, JSON).done(function (result) {
        $('#profil').append("<h2>" + result[0].profil + "</h2>");
    }).fail(function () {
        alert('Profil Gagal :(');
    });

    $.get('http://localhost/server/SejarahPartai', idPartai, JSON).done(function (result) {
        $('#sejarah').append("<h2>" + result[0].sejarah + "</h2>");
    }).fail(function () {
        alert('Sejarah Gagal :(');
    });

    $.get('http://localhost/server/ProgramPartai', idPartai, JSON).done(function (result) {
        $('#program').append("<h2>" + result[0].program + "</h2>");
    }).fail(function () {
        alert('Program Gagal :(');
    });
});