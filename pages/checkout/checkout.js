let order = document.querySelector(".order__cart")
let form = document.querySelector(".form")
let name = document.querySelector(".name")
let email = document.querySelector(".email")
let phone = document.querySelector(".phone")
let from = document.querySelector(".from")
let city = document.querySelector(".city")
let street = document.querySelector(".street")
let home = document.querySelector(".home")
let apartment = document.querySelector(".apartment")


const funcOrder = () =>{
    let a = 0

    fetch(" http://localhost:8080/cart")
        .then(res => res.json())
        .then(res =>{

            res.forEach((item)=>{
                a = a + item.price
                order.innerHTML += `

                    <div class="table">
                        <div class="named"><h6>${item.title}</h6></div>
                        <div class="price"><h6>${item.price}</h6></div>
                    </div>
                    <div class="tab">
                        <div class="named"><h6>Итого</h6></div>
                        <div class="price"><h6>${a}</h6></div>
                    </div>  


                `
            })
        })
}
funcOrder()

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(name.value)
    let users = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        from : form.value,
        city : city.value,
        street : street.value,
        home : home.value,
        apartment : apartment.value
    }
    const resetForm = () => {
        name.value = ""
        phone.value = ""
        email.value = ""
        from.value = ""
        city.value = ""
        street.value = ""
        home.value = ""
        apartment.value = ""
    }

    fetch(" http://localhost:8080/order" , {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(users)
    }) .then((res)=>{
        console.log(res )
        resetForm()
    }) .catch((err)=>{
        console.log(err)
    })
})