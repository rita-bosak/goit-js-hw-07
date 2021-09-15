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

const markupGallery = images.map(image => {
  
  const itemEl = document.createElement('li');
  
  const imageEl = document.createElement(`<img class = "image-gallery" src = ${image.url} alt = ${image.alt}></img>`);


  itemEl.appendChild(imageEl);

  return itemEl;
  
});

console.log()

const listGallery = document.querySelector('#gallery');

listGallery.insertAdjacentElement("afterbegin", ...imagesEl);

// console.log(listGallery)