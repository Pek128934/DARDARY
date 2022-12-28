'use strict';
const phone = document.querySelectorAll('.phone');
const phone__header = document.querySelector('.header__btn');
phone__header.addEventListener('click',()=>{
    alert('+7 (985) 178 99 02');
})
phone.forEach(item=>{
    item.addEventListener('click',()=>{
        alert('+7 (985) 178 99 02');
    })
})