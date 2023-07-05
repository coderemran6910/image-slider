const imageDis= document.querySelector('#sliderImage');

const prebBtn=document.getElementById('prebBtn');
const nextBtn= document.getElementById('nextBtn');


let images=['images/1.jpg','images/2.png','images/3.png','images/4.png',];
let count=0;




nextBtn.addEventListener('click',()=> {
    count++;
    if(count >= images.length){
        count=0;
        imageDis.src =images[count]; 
    }else{
        imageDis.src =images[count];

    }
    

})

prebBtn.addEventListener('click',()=>{
    count--;
    
    if(count<0){
        count=images.length-1;
        images.src=images[count];
    }else{
        imageDis.src=images[count];
    }
})