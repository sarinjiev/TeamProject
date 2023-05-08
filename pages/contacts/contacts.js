let btnMassage = document.querySelector(".btn__massage")
let inputMassage = document.querySelector(".input__massage")
let btnSand = document.querySelector(".btn__sand")
let form = document.querySelector(".form")
let email = document.querySelector(".email")
let phone = document.querySelector(".phone")
let name = document.querySelector(".name")



form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const resetForm = () => {
        name.value = ""
        phone.value = ""
        email.value = ""
        inputMassage.value = ""
    }
        fetch("http://localhost:8080/message" , {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nickname: e.target[0].value,
                email: e.target[1].value,
                phone: e.target[2].value,
                sand : e.target[3].value
            })
        }) .then((res)=>{
            console.log(res )
            resetForm()
        }) .catch((err)=>{
            console.log(err)
        })
})