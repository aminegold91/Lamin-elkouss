let btn=document.querySelector('.btn');
let list=document.querySelector('.lis');

btn.addEventListener('click',()=>{
  list.classList.toggle('active');
});

let cen=document.querySelectorAll('center');

let im=document.querySelectorAll('.img');

for(i=0;i<cen.length;i++){
  im[0].addEventListener('click',()=>{
    cen[0].classList.toggle('active');
  })
  im[1].addEventListener('click',()=>{
    cen[1].classList.toggle('active');
  })
  im[2].addEventListener('click',()=>{
    cen[2].classList.toggle('active');
  })
  
}
