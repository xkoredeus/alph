$(window).on('load', function () {
    $('.level-list  > .level').each((idx, elem) => {
        if (!($(elem).hasClass('active'))) {
            $(elem).find('.level-content').hide();
        }
    })

    $('.js-toggle-menu').on('click', function () {
        $(this).toggleClass('active');
        $('.header').toggleClass('active');
    });

    $(document).on('click', function (e) {
        var container = $('.header');

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.header').removeClass('active');
            $('.js-toggle-menu').removeClass('active');
        }
    });

    $('.js-toggle-level').on('click', function () {
        $(this)
            .parent('.level')
            .toggleClass('active')
            .find('.level-content')
            .slideToggle();
    });
});

