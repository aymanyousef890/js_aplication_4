var names = document.querySelector('#name')
var emails = document.querySelector('#email')
var pass = document.querySelector('#password')
var out = document.querySelector('#out')
var buttom1 = document.querySelector('#btn1')
var buttom2 = document.querySelector('.bum')
var warn = document.querySelector('.warn')
var Signin = document.querySelector('#in')
var Sign_Up = document.querySelector('#up')
var div1 = document.querySelector('.div1')
var div2 = document.querySelector('.div2')
var name_input = document.querySelector('.name')
var main = document.querySelector('.main')
var box = document.querySelector('.box')
var loginBox = document.querySelector('.login-box')
var all_acount = []
if (localStorage.getItem('acount') != null) {
    all_acount = JSON.parse(localStorage.getItem('acount'))
}
else {
    all_acount = []
}
buttom1.addEventListener('click', add)
function add() {
    if (names.value != "" && emails.value != "" && pass.value != "") {
        if (validateEmail(emails.value)) {
            var all_data = {
                Username: names.value,
                Email: emails.value,
                password: pass.value
            }
            all_acount.push(all_data)
            localStorage.setItem('acount', JSON.stringify(all_acount))
            warn.classList.remove('d-none')
            warn.classList.add('text-success')
            warn.classList.remove('text-danger')
            warn.innerHTML = "success!"
            clear()
        }
        else {
            warn.classList.remove('text-success')
            warn.classList.add('text-danger')
            warn.innerHTML = "the email not valid"
            warn.classList.remove('d-none')
        }

    }
    else {
        warn.classList.remove('text-success')
        warn.classList.add('text-danger')
        warn.innerHTML = "All inputs is required "
        warn.classList.remove('d-none')

    }

}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email) {
    return emailRegex.test(email);
}
function clear() {
    names.value = ""
    emails.value = ""
    pass.value = ""
}
document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key == "Enter") {
        add()
    }
})
Sign_Up.addEventListener('click', function (e) {
    div2.classList.add('d-none')
    div1.classList.remove('d-none')
    name_input.classList.remove('d-none')
    buttom1.classList.remove('d-none')
    buttom2.classList.add('d-none')
    warn.classList.add('d-none')
    clear()
})
Signin.addEventListener('click', function (e) {
    div2.classList.remove('d-none')
    div1.classList.add('d-none')
    name_input.classList.add('d-none')
    buttom1.classList.add('d-none')
    buttom2.classList.remove('d-none')
    warn.classList.add('d-none')
    clear()


})
buttom2.addEventListener('click', function () {
    if (emails.value == "" || pass.value == "") {
        warn.classList.remove('text-success')
        warn.classList.add('text-danger')
        warn.innerHTML = "All inputs is required "
        warn.classList.remove('d-none')
    }
    else if (localStorage.getItem('acount') == null) {
        warn.classList.remove('text-success')
        warn.classList.add('text-danger')
        warn.innerHTML = "incorrect email or password "
        warn.classList.remove('d-none')
    }
    else {
        checkinu()
    }
})

function checkinu() {
    for (var i = 0; i < all_acount.length; i++) {
        if (all_acount[i].Email == emails.value && all_acount[i].password == pass.value) {
            box.innerHTML = `Welcome ${all_acount[i].Username}`
            main.classList.remove('d-none')
            loginBox.classList.add('d-none')
            warn.classList.add('d-none')
            clear()
        }
        else {
            warn.classList.remove('d-none')
            warn.classList.add('text-danger')
            warn.innerHTML = "incorrect email or password"

        }
    }
}
out.addEventListener('click', function () {
    main.classList.add('d-none')
    loginBox.classList.remove('d-none')
    warn.classList.add('d-none')
})











