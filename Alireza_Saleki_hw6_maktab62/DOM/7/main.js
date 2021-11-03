document.getElementById('submit').onclick = function () {
    checkUsernameInput('user')
    checkPasswordInput('pass')
    checkPasswordConfirm('pass', 'confirm')
}

function checkUsername(user) {
    if (!user.value) {
        user.nextElementSibling.innerText = "الزامی"
        user.parentElement.classList.add("error")
        return false
    }
    user.nextElementSibling.innerText = null
    user.parentElement.classList.remove("error")
    return true
}

function checkPassword(pass) {
    if (!pass.value) {
        pass.nextElementSibling.innerHTML = "الزامی"
        pass.parentElement.classList.add("error")
        return false
    }
    let regex = /^(?=.*[a-zA-Z])(?=.*[\d])[\w!@#$%^&*]{8,}$/
    if (!regex.test(value)) {
        pass.nextElementSibling.innerText = "رمز عبور باید شامل حداقل ۸ کاراکتر و حداقل یک حرف و یک عدد باشد"
        pass.parentElement.classList.add("error")
        return false
    }
    pass.nextElementSibling.innerText = null
    pass.parentElement.classList.remove("error")
    return true

}

function passConfirm(pass, confirm) {
    if (!confirm.value) {
        confirm.nextElementSibling.innerText = "الزامی"
        confirm.parentElement.classList.add("error")
        return false
    }
    if (pass.value !== confirm.value) {
        confirm.nextElementSibling.innerText = "رمزهای وارد شده یکسان نیستند"
        confirm.parentElement.classList.add("error")
        return false
    }
    confirm.nextElementSibling.innerText = null
    confirm.parentElement.classList.remove("error")
    return true
}