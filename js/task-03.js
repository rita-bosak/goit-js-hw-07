'use strict';

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

const markupGallery = images
  .map((image) => {
    return `<li><img src = ${image.url}; alt = ${image.alt}; width = '400'; height ='400'/></li>`;
  })
  .join('');

const listGallery = document.querySelector('#gallery');

listGallery.insertAdjacentHTML('afterbegin', markupGallery);

listGallery.classList.add('gallery');

const galleryStyle = `.gallery {
  list-style: none;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
};`;

const style = document.querySelector('style');

style.insertAdjacentHTML('beforeend', galleryStyle);
