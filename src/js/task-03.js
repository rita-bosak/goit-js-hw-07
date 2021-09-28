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
{ return `<li><img src = ${image.url}; alt = ${image.alt}; width = '400'; height ='400'/></li>`;}).join('');

const listGallery = document.querySelector('#gallery');

listGallery.insertAdjacentHTML("afterbegin", markupGallery);

listGallery.style.listStyle = "none"; 
listGallery.style.margin = "0 auto";
listGallery.style.padding = "0 20px";
listGallery.style.display = "flex";
listGallery.style.alignItems = "center";
listGallery.style.justifyContent = "space-around";
