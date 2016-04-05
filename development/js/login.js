$(function () {
    $('#submit').click(function () {
        

        var set = false;
        set = validateEmpty($("#noKtp").val());
        if (!validateEmpty($("#noKtp").val())) {
            //$('#labelnoKtp').text('No Ktp tidak boleh kosong').addClass('red').removeClass('green');
			alert('No Ktp tidak boleh kosong');
        }
        else {
            set = true;
        }

        if (!validateEmpty($("#password").val())) {
            //$('#labelPassword').text('Password tidak boleh kosong').addClass('red').removeClass('green');
			alert('Password tidak boleh kosong');
        }
        else {
            set = true;
        }

        if (set == true) {
            var data = "id=" + $("#noKtp").val() + "&pwd=" + $("#password").val();
            $.post('http://localhost/server/login', data).done(function (result) {
                if (result.status == "1") {
                    sessionStorage.setItem("login", '1');
                    sessionStorage.setItem("username", $("#noKtp").val());
                    window.location.assign('index.html');
                }
                else {
                    alert('noKtp atau password salah');
					//$('#result').text(result).addClass('red');
                }
            }).fail(function () {
                alert("Terjadi Kesalahan");
            });
        }
    });
});

    function validateEmpty(text) {
        if (text.length == 0) {
            return false;
        }
        else {
            return true;
        }
    }