/**
 * Created by Edward on 2017/6/12.
 */
var swiper = new Swiper('body > .swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    touchRatio : 1.5
});
var mySwiper = new Swiper('.swiper-wrapper > .swiper-container',{
    effect : 'cube',
    cube: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 100,
        shadowScale: 0.6
    }
})