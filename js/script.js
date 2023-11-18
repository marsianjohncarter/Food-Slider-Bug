/*jshint esversion:11 */
/* jshint node: true */
'use strict';

import  tabs  from './modules/tabs';
import  modal  from './modules/modal';
import  timer  from './modules/timer';
import  cards  from './modules/cards';
import  calc  from './modules/calc';
import  forms  from './modules/forms';
import  slider  from './modules/slider';
import { openModal } from './modules/modal';
import { postData, getResource } from './sevices/services';
window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-model]', '.modal', modalTimerId);
    timer('.timer', '2024-07-12');
    cards();
    calc();
    forms(modalTimerId, 'form', postData);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    });
 
});

