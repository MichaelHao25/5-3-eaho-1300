var mySwiper = new Swiper('.banner .swiper-container', {
    pagination: '.banner .swiper-pagination',
    loop: true,
    paginationClickable: true,
})
var notice = new Swiper('.notice .swiper-container', {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 30
})


try {
    var a = document.querySelectorAll('.check-login .pic')[0]
    a.onclick = function () {
        console.log(1)
        this.getElementsByTagName('input')[0].click();
    }
    $('.check-login  .pic input').on('change', function () {
        var url;
        $(this).parent().addClass('active');
        if (window.createObjectURL != undefined) { // basic
            url = window.createObjectURL(this.files[0]);
        } else if (window.URL != undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(this.files[0]);
        } else if (window.webkitURL != undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(this.files[0]);
        }
        $('.check-login .pic img').attr('src', url);
    });
    // throw 'dada'
} catch (error) {
    console.log(error)
}