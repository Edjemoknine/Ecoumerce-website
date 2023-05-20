let fbtn=document.querySelectorAll('.filterbtn');
let products=document.querySelectorAll('.product');


// ========================= filtration function ==========================
fbtn.forEach((btn)=>{  
    btn.addEventListener('click',()=>{
        products.forEach((item)=>{
            if(item.classList.contains(btn.id)){
                item.style.display='block';
            }else{
                item.style.display='none';
            }
        })
    })
})

// ================================= change filtration btn ===========================
function change(){
    fbtn.forEach((btn)=>{
        btn.classList.remove('active');
    });
    this.classList.add('active');
};


fbtn.forEach((btn)=>{
        btn.addEventListener('click',change );
});

// ================================ navbar open ===========================

let menu=document.querySelector('#menu');
let navbar=document.querySelector('.navbar');

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('open');
    searchform.classList.remove('open');
});


// ============================ add shadow for header==========================

let header=document.querySelector('.header');

window.onscroll=()=>{

    if(window.scrollY>=80){ header.classList.add('onscroll');
}else{header.classList.remove('onscroll')}

}
// ================================ search form================================

let search=document.querySelector('#search-btn');
let searchform=document.querySelector('.search-form');
search.addEventListener('click',()=>{
    searchform.classList.toggle('open');
    navbar.classList.remove('open');
    menu.classList.remove('fa-times');

})

// =================================== Show more ================================

let showbtn=document.querySelector('#showbtn');
let current=3;

showbtn.addEventListener('click',()=>{
    let product=[...document.querySelectorAll('.product')];
    for (let i = current; i < current+3; i++){
        product[i].style.display='inline-block';
       
    }
    current+=3;

    if (current>= product.length) {
        // showbtn.style.display='none';
        showbtn.innerHTML='NO More';
    }
})