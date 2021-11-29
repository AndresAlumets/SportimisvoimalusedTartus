let intro = document.querySelector('.intro');
let logo= document.querySelector('.algtekst');
let logoSpan = document.querySelectorAll('.tekst');

window.addEventListener('DOMContentLoaded', ()=>{
    
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active'); 
            },(idx +1) *400)  //Tekst tuleb ekraanile
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx +1)*50 ) //tekst lahkub ekraanilt
            })
        },2000)

        setTimeout(()=>{
            intro.style.top='-100vh' //Must ekraan lahkub
        }, 2300)
    })
})