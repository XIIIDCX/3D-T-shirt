import { proxy } from 'valtio'; 

const state = proxy({
  intro: true,
  color: '#000',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: '../assets/damian_logo.png',
  fullDecal: '../assets/damian_logo.png',

});

export default state;