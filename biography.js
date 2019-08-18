
var i=0;
var images=[];
var time=3000;
images[0]='shivam.jpg';
images[1]='satyam.jpg';
images[2]='shiva1.jpg';
function changeImg(){
    document.slide.src=images[i];
    if(i<images.length-1)  {
        i++;

    }
    else{
        i=0;
    }
    setTimeout("changeImg()",time);
   
}
window.onload=changeImg;


   