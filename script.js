const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');
const navLinks = document.querySelector('#navLinks');
openMenu.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu');
});
closeMenu.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu');
})


window.addEventListener('scroll',function(){
    var header_inner = this.document.querySelector('.header_inner');
    header_inner.classList.toggle("sticky",this.window.scrollY> 0);
})


let section = document.querySelectorAll('section');
let AllNavLinks = document.querySelectorAll('nav #navLinks .nav-item .nav-link');
let imgabout  = document.getElementById('imgabout');

window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 260;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height ){
            AllNavLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.header nav #navLinks .nav-item .nav-link[href*='+ id + ']').classList.add('active');
            })
           
        }
      
    });
};


 
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e)=> observer.observe(e));

