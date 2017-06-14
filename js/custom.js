/*
 
 */
$(document).ready(function() {

    $("#banner").fancybox({
        'easingIn': 'easeInBack',
        'easingOut': 'easeOutBack',
        'padding': 40,
        'overlayColor': "#111",
        'overlayOpacity': 0.7,
        'scrolling': 'no',
        'titleShow': false    
    });

     // #contact-me
    $("#contact-me").fancybox({
        'easingIn': 'easeInBack',
        'easingOut': 'easeOutBack',
        'padding': 40,
        'overlayColor': "#111",
        'overlayOpacity': 0.7,
        'scrolling': 'no',
        'titleShow': false    
    });  

    /* Fancy Box */
    $(".fancy-box").fancybox({
        'overlayColor': "#111",
        'overlayOpacity': 0.7,
        'easingIn': 'easeInBack',
        'easingOut': 'easeOutBack'
    });

    $("a[rel=group1").fancybox({
        'overlayColor': "#111",
        'overlayOpacity': 0.7,
        'easingIn': 'easeInBack',
        'easingOut': 'easeOutBack',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });

    $("a[rel=group2]").fancybox({
        'overlayColor': "#111",
        'overlayOpacity': 0.7,
        'easingIn': 'easeInBack',
        'easingOut': 'easeOutBack',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });

    $("a[rel=group3]").fancybox({
        'overlayColor': "#111",
        'overlayOpacity': 0.7,
        'easingIn': 'easeInBack',
        'easingOut': 'easeOutBack',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });

    $("a[rel=group4]").fancybox({
        'overlayColor': "#111",
        'overlayOpacity': 0.7,
        'easingIn': 'easeInBack',
        'easingOut': 'easeOutBack',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });
    
   


    /* Cufon font replacement */
    // Cufon.replace('h1');
    // Cufon.replace('h2');
    // Cufon.replace('h3');
    // Cufon.replace('h4');

    // Cufon.replace('.top-description');
    // Cufon.now();

    var $query = '',
        $elem = $("#tooltip");



    $("#background-switcher a").click(function() {
        var $backgr = $(this).parent().css('background');
        $("body").css({
            'background': $backgr,
            'background-attachment': 'fixed',
            'background-position': '0 0'
        });
    });

    $(".controls li").not('#tooltip').hover(
            function() {
                clearTimeout($query);
                if ($elem.attr("class") === 'active') {
                    $elem.clearQueue().animate({'left': ($(this).position().left - 38) + 'px'}, 300);
                    $elem.text($(this).attr('title'));
                }
                if ($elem.attr("class") === 'inactive') {
                    $elem.css({'left': ($(this).position().left - 38) + 'px'}).css({'top': ($(this).position().top + 40) + 'px'}).fadeIn("slow").attr('class', 'active');
                    $elem.html($(this).attr('title'));
                }

            },
            function() {
                $query = setTimeout(function() {
                    $elem.fadeOut("fast", function() {
                        $elem.css({'left': '0'}).attr('class', 'inactive');
                    });
                }, 500);
            }
    );

    $(".controls li a").click(function() {
        $elem.fadeOut("fast", function() {
            $elem.css({'left': '0'}).attr('class', 'inactive');
        });
    });

    $(".controls li a#print").click(function() {
        $elem.fadeOut("fast", function() {
            $elem.css({'left': '0'}).attr('class', 'inactive');
        });
        window.print();
        return false;
    });


    $('#middle-content ul.list>li:nth-child(even)').not('.arrow-up').css({'background': '#e6e6e6'});
    $('#middle-content ul.list>li:nth-child(odd)').not('.arrow-up').css({'background': '#f6f6f6'});
    $('#middle-content ul.list:last-child').css({'margin-bottom': '0'});

    
    /* Contact form validation */
    $("#contact").validate({
        debug: true,
        errorElement: "font",
        errorContainer: $("#warning, #summary"),
        errorPlacement: function(error, element) {
            error.appendTo(element.parent());
            element.addClass("error");
        },
        success: function(label) {
            label.text("This field is ok !").addClass("success");
        },
        rules: {
            decryption_key: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            lastname: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            message: {
                required: true,
                minlength: 10,
                maxlength: 500
            },
            phone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 14
            },
            email: {
                required: true,
                email: true
            }
        },
        submitHandler: function(form) {
            $("#send").attr("disabled", "disabled");
            $("#loading").fadeIn();

            ajax(file);   
        }
    });

  var file = "";

  function ajax()
  {
       var key = $('#decryption_key').val();
       var version  = $("#lang_version").val();
       $.ajax({
                type: "POST",
                dataType: 'html',
                url: file,   // "js/decr.html"
               // data: $("#contact").serialize(),
                success: function(msg) {

                    $(':input', '#contact').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                    $("#contact font").hide().removeClass("success").removeClass("error");

                     
                    var d = msg.toString();
                    
                    var id = ["name",
                              "vac","top-description",
                              "address","phone","mail","skype",
                              "ts0","ts1","ts2","ts4","ts5","ts6","ts7","ts8","ts9","ts10",
                              "ts11","ts12","ts13","ts14","ts15","ts16","ts17","ts18","ts19","ts20",
                              "projects","project1",
                              "desc_1","project2","desc_2","desc_3",
                              "project3","desc_4","project4","desc_5",
                              "langs","ts21","ts22"
//                              ,"date","date1"
                     ];
                     
            
               var str_decrypted = decrypt_str(d, id, key);
            
              if (str_decrypted != "error") { // OK
                $(".contact_error").slideUp("fast");  /* error div */  
                $(".contact_success").slideDown("fast");  /* succes div */
               
                $("#banner").css({display: 'none'});
                
                setTimeout(function() {
                  $.fancybox.close(); 
                }, 1200);  
                
                setTimeout(function() {
                  unblock_all();
                }, 3500); 
                
                // set content before for all tags to 'none'
                var tags = ['h1','h2','h3','h4','h5','h6','p','li'];
                for(var k = 0; k < tags.length; k++) {
                   $(''+tags[k]).addClass('no-before'); 
                }
                
                for(var i = 0; i < id.length; i++ ) {
                    typing("."+id[i],""+str_decrypted[i]);
                }
//                typing(".name",""+str_decrypted[0]);
                
              } else { // ERROR str_dycrypted
                 $(".contact_error").slideDown("fast");  /* error div */
                 
                 $("#lang_version").val(version);
                 $('#decryption_key').val(key);
              }  
                 $("#send").attr("disabled", "");
                 $("#loading").fadeOut("fast");
                 
              }

            });
  }
    
    // ================================= DECRYPTION ================================
    function decrypt_str(data, id, k)
    {
        if (typeof id === "string")
        {
            var str_encrypted = data.match(new RegExp("[\s]*<(div|ul|li|span|p|h1|h2|h3|h4|h5|h6)[\s]* class=\".+" + id
                                                 + ".+\">[\r\n|\r\n\s]*(.+)[\r\n|\r\n\s]*<\/(div|ul|li|span|p|h1|h2|h3|h4|h5|h6)>[\s]*",
                                                     "im"));                                                    
            var decrypted = CryptoJS.AES.decrypt(str_encrypted[2], k);
            try {
            var str_decrypted = decrypted.toString(CryptoJS.enc.Utf8);
            } catch(e) {
            var str_decrypted = "";
            return str_decrypted;
            }
            
            return str_decrypted;
        }
        if (id instanceof Array)
        {
           var d_arr = []; 
           for(var i = 0; i < id.length; i++)
           {
            var str_encrypted = data.match(new RegExp("[\s]*<(div|ul|li|span|p|h1|h2|h3|h4|h5|h6)[\s]* class=\".+" + id[i]
                                                 + ".+\">[\r\n|\r\n\s]*(.+)[\r\n|\r\n\s]*<\/(div|ul|li|span|p|h1|h2|h3|h4|h5|h6)>[\s]*",
                                                     "im"));
           // alert(str_encrypted[2]);
            var decrypted = CryptoJS.AES.decrypt(str_encrypted[2], k);
            
            try {
            var str_decrypted = decrypted.toString(CryptoJS.enc.Utf8);
            } catch(e) {
            var str_decrypted = "error";
            return str_decrypted;
            }
              d_arr[i] =  str_decrypted ;
            }
              return d_arr;
        }
    }
    // ======================= typed ==========================================
    
    // https://github.com/mattboldt/typed.js/
    // view-source:http://www.mattboldt.com/demos/typed-js/
    function typing(elem,str)
    {
        setTimeout(function(){
        $(elem).typed({
            strings: [str],
            fadeOut: true,
	    fadeOutClass: 'typed-fade-out',
	    fadeOutDelay: 500, // milliseconds
            showCursor: false,
            typeSpeed: 90, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            //callback for every typed string
            onStringTyped: function() {
               // $('.name').css('background','red');
             //return elem.siblings('.typed-cursor').remove();
            },
	    // starting callback function before each string
	    preStringTyped: function() {},
	    // callback for reset
	    resetCallback: function() {},
            callback: function(){
//            $( "span" ).siblings( ".typed-cursor" ).css( "animation", "none" );
//            $( "span" ).siblings( ".typed-cursor" ).css( "opacity", "0" );
           //  return typed.siblings('.typed-cursor').fadeOut('slow', function({typed.siblings('.typed-cursor').remove()});
            } // call function after typing is done
        });
    }, 2000);
    }
    
    // unblock images and buttons
    function unblock_all()
    {
       // unblock control buttons 
       $('.butts_dis, .butts_dis_1, .butts_dis_2').css({'z-index': -2});
       // unbloick covers images
       $('.block_img').css({'z-index': -2});  
    } 
    
    $('#lang_version').change(function(){
        var ver = "";
        $('#lang_version option:selected').each(function(){
            ver = $(this).val();
        });
         if(ver === "") {
             // hide error when change versions
             $(".contact_error").slideUp("fast");
             // hide textfield decryption and submit button
             $('#decryption_block').css('display','none');
             $('.psend').css('display','none');
         }
         if(ver === "russian") {
             // hide error when change versions
             $(".contact_error").slideUp("fast");
             // show textfield decryption and submit button
             $('#decryption_block').css('display','block');
             $('.psend').css('display','block');
             file = "js/decr.html";
//             ajax("js/decr.html");
         }
         if(ver === "english") {
             // hide error when change versions
             $(".contact_error").slideUp("fast");
             // show textfield decryption and submit button
             $('#decryption_block').css('display','block');
             $('.psend').css('display','block');
             file = "js/decr_en.html";
//             ajax("js/decr_en.html");
         }
    });

});