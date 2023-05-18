$(document).on("scroll", function() {
    

    var $pageTop = $(document).scrollTop();
    var $pageBottom = $pageTop + $(window).height();
    
   
    var $cards = $('.card');
    var $contact = $('.contact-div');

    
    for (let i = 0; i < $cards.length; i++) {
        let card = $cards[i];
        
       if ($(card).position().top < $pageBottom) {
           $(card).addClass("visible");
       }
    }
    
    if ($($contact).position().top < $pageBottom) {
        $($contact).addClass("visible");
    }
});





// $(".r1").click(function(){
//     $(".r2,.r3").addClass("test");
//     $(".bb2,.bb3").prop('disabled', true);
//     // $('.c1').slideUp(1000);
// });

// $(".r2").click(function(){
//     $(".r3,.r1").addClass("test");
//     $(".bb1,.bb3").prop('disabled', true);
    
// });

// $(".r3").click(function(){
//         $(".r1,.r2").addClass("test");
//         $(".bb2,.bb1").prop('disabled', true);
//     });
    
    
$(document).ready(function(){
        if($('.bb2').click(function(){
            alert("worked");
            $(".r1,.r3").addClass("test");
            $('.r1', '.r3').attr('disabled', true);
        
        }));
        
        else if($('.bb1').click(function(){
            $(".bb12,.bb3").addClass("test");
            $('.r2', '.r3').prop('disabled', true);
            
            
        }));    
        else if($('.bb3').click(function(){
            
            $(".r2,.r1").addClass("test");
            $('.r2', '.r1').prop('disabled', true);
        
        }));
});

