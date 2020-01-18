

var images=[
    'satyam.jpg',
    'shiva1.jpg',
    'shivam.jpg'
];
var time=3000;

function changeImg(){
    const a=images.pop();

    document.slide.src=a;
    images.unshift(a);
  
    setTimeout(changeImg,time);
   
}
window.onload=changeImg;


   