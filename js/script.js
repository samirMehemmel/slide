    let img = document.getElementsByClassName('img_slider');
    let etape = 0;
    let nbr_img=img.length;
    
    let precedent=document.querySelector('.precedent');
    let next =document.querySelector('.next');
    
    // Function Remove Active Classe //

    function removeact (){
        for(let i=0; i<nbr_img ;i++){
            img[i].classList.remove('active')
        }
    }
// NEXT//
    next.addEventListener('click',function(){
        etape++;
        if(etape >= nbr_img){
            etape = 0;
        }
        removeact();
        img[etape].classList.add('active');
    })


//Precedent //


    precedent.addEventListener('click',function(){
        etape--;
        if(etape<0){
            etape = nbr_img-1;
            
        }
        removeact();
        
        img[etape].classList.add('active')
    })

   // Auto Repeat // 

    setInterval(function(){
        etape++;
        if(etape >= nbr_img){
            etape = 0;
        }
        removeact();
        img[etape].classList.add('active');
        
    },3000)