const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const markupGallery = images.map((image) =>
{ return `<li class = "item-gallery"><img class = "image-gallery"; src = ${image.url}; alt = ${image.alt}/></li>`;}).join('');

console.log(markupGallery)

const listGallery = document.querySelector('#gallery');

listGallery.insertAdjacentHTML("afterbegin", markupGallery);

const itemGallery = document.querySelectorAll('.item-gallery');
const imageGallery = document.querySelectorAll('.image-gallery');

listGallery.style.margin = "0 auto"; 
listGallery.style.maxWidth = "1050px";
listGallery.style.height = "430px";
listGallery.style.padding = "0 20px";
listGallery.style.display = "grid";
listGallery.style.justifyItems = 'center';
listGallery.style.alignItems = 'center';
// listGallery.style.gridTemplateColumns = "repeat(5, 140px);";
// listGallery.style.gridTemplateRows = "repeat(9, 43px);";
// listGallery.style.columnGap = '5px';
// listGallery.style.rowGap = '5px';


imageGallery.style.display = 'block';
imageGallery.style.maxWidth = '100%';
imageGallery.style.height = 'auto';
imageGallery.style.width = '200px';


// {
//   margin: 0 auto;
//   max-width: 1050px;
//   height: 430px;
//   padding-left: 20px;
//   padding-right: 20px;
//   background-color: white;
//   display: grid;
//   grid-template-columns: repeat(5, 140px);
//   grid-template-rows: repeat(9, 43px);
//   row-gap: 5px;
//   column-gap: 5px;
// }