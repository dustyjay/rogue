$(function(){
    $navbar = $('.navbar i');
    $close = $('#close-sidebar');
    $sidebar = $('.sidebar');

    $navbar.click(function(){
        $sidebar.css({
            'width': '200px',
            'transition': '100ms ease-in-out'
        });
    });

    $close.click(function(){
        $sidebar.css({
            'width': '0px',
            'transition': '100ms ease-in-out'
        });
    });
});