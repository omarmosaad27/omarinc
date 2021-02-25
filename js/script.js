$(function() {
    // adjust the slider height to be the same window height
    $("#carousel-example-generic").height($(window).height())
    // adjust slider properties
    $(".carousel").carousel({
        interval: 5000
    })
    // display color options when gear check is clicked
    $(".gear-check").on("click", function (){
        $(".color-options").slideToggle(500)
    })
    // change theme color on click
    $(".color-options ul li:eq(0)").css("background-color", "#2980b9").end()
    $(".color-options ul li:eq(1)").css("background-color", "#c0392b").end()
    $(".color-options ul li:eq(2)").css("background-color", "#27ae60").end()
    $(".color-options ul li:eq(3)").css("background-color", "#f39c12")
    $(".color-options ul li").on("click",function (){
        $("link[href*='theme']").attr("href", $(this).attr("data-value"))
    })
    // scroll to top 
    let scroll = $(".scroll")
    // fade in the scroll when the window is 500px top 
    $(window).scroll(function (){
        
            if($(window).scrollTop() >= 500 ){
                scroll.fadeIn(500)
               
            }else{
                scroll.fadeOut(500)
            }
    })
    // srcoll top when click on the button 
    $(scroll).on("click", function (){
        $("html,body").animate({
            scrollTop: 0
        },500)
    })
    // nice scroll
    $("html").niceScroll({
        cursorcolor:'#2980b9',
        cursorwidth: "10px",
        cursorborder: "1px solid #2980b9",
        zindex: "9999999",
        cursorborderradius: "0",
    });
})
// loading screen

$(window).on("load",function (){
    
    $('body').css("overflow", "auto");
    $(".loading-overlay").delay(4000).fadeOut(1000,function (){
        $(this).remove()
       
    });

    
    
})
