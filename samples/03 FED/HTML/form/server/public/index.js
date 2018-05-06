function onLoad() {
    var errorEle = document.getElementById('error');

    var form = document.getElementById('myForm');
    var username = document.getElementById('username');

    form.onsubmit = function (e) {
        e.preventDefault();

        if (!(username.value.length >= 3)) {
            errorEle.innerText = "Username must be over 3 characters long";

            return;
        }

        this.submit();
    }
}

