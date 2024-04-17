const text = document.querySelector('.text');
const qrimg = document.querySelector('.qrimg');
const btn = document.querySelector('.btn');
const qrcodeempty = document.querySelector('.qrcode')


const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

btn.addEventListener("click", () =>{
        qrimg.src = url + text.value;
})
