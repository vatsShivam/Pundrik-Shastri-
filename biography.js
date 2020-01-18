

var images=[
    'gurudev.JPG',
    'krishna.jpg',
    'krishna1.jpg'
];
var time=3000;

function changeImg(){
    const a=images.pop();

    document.slide.src=a;
    images.unshift(a);
  
    setTimeout(changeImg,time);
   
}
window.onload=changeImg;


   