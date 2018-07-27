var mySwiper = new Swiper('.banner .swiper-container', {
    pagination: '.banner .swiper-pagination',
    loop: true,
    paginationClickable: true,
    autoplay:3000,
})
var notice = new Swiper('.notice .swiper-container', {
    loop: true,
    spaceBetween: 30,
    autoplay:3000,
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

$('.javascript-answers').on('click',function() {
    var target = $(this).attr('data-parents');
    $(this).parents(target).nextAll('.answers-edit').eq(0).slideToggle();
})

$('.javascript-reply').on('click',function() {
    var target = $(this).attr('data-parents');
    $(this).parents(target).nextAll('.child-reply').eq(0).slideToggle();
})
$('.child-reply .close').on('click',function() {
    $(this).parent().slideUp();
})


$('*[data-js-tabs]').children().on('click', function() {
	var tabs_obj = $(this).parent().attr('data-js-tabs');
	$(tabs_obj).children().eq($(this).index()).show().siblings().hide();
	$(this).addClass('active').siblings().removeClass('active');
});
$.each($('*[data-js-tabs]'), function(index, el) {
	var arg = window.location.search;
	if (arg != '') {
		arg = arg.split('?')[1].split('=')[1];
		console.log(arg);
		$(el).children().eq(arg - 1).trigger('click');

	} else {
		$(el).children().first().addClass('active');
		$($(el).attr('data-js-tabs')).children().eq(0).show().siblings().hide();;
	}
});

$('.main .issue .content .row .read').on('click',function() {
    $(this).toggleClass('active')
})




console.log($('.new-7-23-course-details .line-none').offset().top);
var i_offset_top = $('.new-7-23-course-details .line-none').offset().top;
$(window).on('scroll',function(e) {
    console.log($(window).scrollTop());
    $(window).scrollTop()>i_offset_top?$('.new-7-23-course-details .tabs-control').addClass('active'):$('.new-7-23-course-details .tabs-control').removeClass('active')
})



