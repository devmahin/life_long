let todos= false;
let birthday;

const iconclick = document.querySelector("#iconclick")
const select_date_box = document.querySelector(".select_date_box")
const input = document.getElementById("input")
const btn_add = document.querySelector(".btn_add")
const initial_text = document.getElementById("initial_text")
const afterBox = document.getElementById("afterBox")
// date
const years = document.querySelector(".years")
const Months = document.querySelector(".Months")
const Days = document.querySelector(".Days")
const Hours = document.querySelector(".Hours")
const Minutes = document.querySelector(".Minutes")
const Second = document.querySelector(".Second")


const activeFun = () => {
    if(todos){
        select_date_box.classList.add("hide")
    }else{
        select_date_box.classList.remove("hide")

    }
    todos = !todos
}

function  duboldigit(number){
    return number > 9 ? number : `0${number}`;
}

const upadateDate = () =>{
    const dates = new Date()
    const birtDiff = dates - birthday
    const year = Math.floor(birtDiff / (1000 *60*60*24*365))
    const Month = Math.floor(birtDiff / (1000 *60* 60* 24* 365)) % 12
    const day = Math.floor(birtDiff / (1000 *60*60*24)) % 30
    const hours = Math.floor(birtDiff / (1000 *60 *60)) % 24
    const minutes = Math.floor((birtDiff / (1000 *60)) % 60)
    const second = Math.floor(birtDiff / 1000) % 60
    // console.log("datedigb", years,Month,day,hours,minutes,second)
    years.innerHTML = duboldigit(year)
    Months.innerHTML = duboldigit(Month)
    Days.innerHTML = duboldigit(day)
    Hours.innerHTML = duboldigit(hours)
    Minutes.innerHTML = duboldigit(minutes)
    Second.innerHTML = duboldigit(second)
}

const settoHandel = () => {
let dateString = input.value;
birthday = dateString ? new Date(dateString) : null;
// console.log(birthday)

    let year = localStorage.getItem("years")
    let month =localStorage.getItem("month")
    let date = localStorage.getItem("date")

    if(year && month && date){
        birthday = new Date(year,month,date)
    }

if(birthday){
    localStorage.setItem("years",birthday.getFullYear())
    localStorage.setItem("month",birthday.getMonth())
    localStorage.setItem("date",birthday.getDate())
    initial_text.classList.add("hide")
    afterBox.classList.remove("hide")
   setInterval(() => {
    upadateDate()
   }, 1000)
}else{
    initial_text.classList.remove("hide")
    afterBox.classList.add("hide")
}
}
settoHandel()
iconclick.addEventListener("click", activeFun)
btn_add.addEventListener("click", settoHandel)

