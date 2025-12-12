const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault() // 기존기능 차단

    let userId = event.target.id.value;
    let userPw1 = event.target.pw1.value;
    let userPw2 = event.target.pw2.value;
    let userName = event.target.name.value;
    let userPhone = event.target.phone.value;
    let userPosition = event.target.position.value;
    let userEmail = event.target.email.value;
    let userIntro = event.target.intro.value;

    if(userId.length < 8) {
        alert("아이디 좀 길게해라~");
        return
    }

    if(userPw1.length == 0 || userPw2.length == 0) {
        alert("비밀번호는 적어야할 것 아니냐~");
        return
    }

    if(userPw1 !== userPw2) {
        alert("비밀번호 틀리잖아~");
        return
    }

    // 가입이 잘 되었다.
    document.body.innerHTML = "";
    document.write(`<p>${userId}님 환영합니다!</p>`)
})
