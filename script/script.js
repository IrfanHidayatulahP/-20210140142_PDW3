function openLoginForm() {
    window.open("./page/Login.html", "_blank");
}

function Login() {
    alert("Login Berhasil");
}

const waktu = document.getElementById("waktu");

function tanggal() {
    const date = new Date();
    waktu.innerHTML = date;
}

setInterval(tanggal, 1000);

tanggal();
