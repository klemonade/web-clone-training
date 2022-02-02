function toggleDetail(detail, drop){
    document.querySelector(detail).classList.toggle("active")
    if (document.querySelector(drop).innerHTML == '+'){
        document.querySelector(drop).innerHTML = 'X'
    } else{
        document.querySelector(drop).innerHTML = '+'
    }
}
