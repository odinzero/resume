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
        downloadContentAjax(file);

        var key = $('#decryption_key').val();
        var version = $("#lang_version").val();
        $.ajax({
            type: "POST",
            dataType: 'html',
            url: file, // "js/decr.html"
            // data: $("#contact").serialize(),
            success: function(msg) {

                $(':input', '#contact').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                $("#contact font").hide().removeClass("success").removeClass("error");


                var d = msg.toString();

              //  alert(file);

                //if (file === "js/decr.html" || file === "js/decr_en.html") {
                if (file === "decr/php_eng_decr.html" || file === "decr/php_russ_decr.html") {

                    // alert(file);

                    var id = ["name",
                        "vac", "top-description",
                        "address", "phone", "mail", "skype",
                        "ts0", "ts1", "ts2", "ts4", "ts5", "ts6", "ts7", "ts8", "ts9", "ts10",
                        "ts11", "ts12", "ts13", "ts14", "ts15", "ts16", "ts17", "ts18", "ts19", "ts20",
                        "projects", "project1",
                        "desc_1", "project2", "desc_2", "desc_3",
                        "project3", "desc_4", "project4", "desc_5",
                        "langs", "ts21", "ts22"
//                              ,"date","date1"
                    ];
                }

                if (file === "decr/java_eng_decr.html" || file === "decr/java_russ_decr.html") {

                    var id = ["name",
                        "vac", "top-description",
                        "address", "phone", "mail", "skype",
                        "ts0", "ts1", "ts2", "ts3", "ts4", "ts5", "ts6", "ts7",
                        "ts8", "ts9", "ts10",
                        "ts11", "ts12", "ts13", "ts14", "ts15",
                        "ts16", "ts17", "ts18", "ts19", "ts20",
                        "projects",
                        "project1", "desc_1", "desc_2", "desc_3",
                        "project2", "desc_21", "desc_22", "desc_23",
                        "project3", "desc_31", "desc_32",
                        "project4", "desc_41", "desc_42",
                        "langs", "lg1", "lg2"
//                              ,"date","date1"
                    ];
                }
                
                if (file === "decr/js_eng_decr.html" || file === "decr/js_russ_decr.html") {

                    var id = ["name",
                          "vac", "top-description",
                          "address", "phone", "mail", "skype",
                          "ts0", "ts1", "ts2", "ts3", "ts4", "ts5", "ts6", "ts7",
                          "ts8", "ts9",
                          "projects",
                          "project1", "desc_11", "desc_12", "desc_13",
                          "project2", "desc_21", "desc_22", "desc_23",
                          "project3", "desc_31", "desc_32", "desc_33",
                          "langs", "lg1", "lg2"
                    ];
                }


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
                    var tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li'];
                    for (var k = 0; k < tags.length; k++) {
                        $('' + tags[k]).addClass('no-before');
                        $('' + tags[k]).css('white-space', 'normal');
                    }

                    for (var i = 0; i < id.length; i++) {
                        typing("." + id[i], "" + str_decrypted[i]);
                    }
//                typing(".name",""+str_decrypted[0]);

                }
                else { // ERROR str_dycrypted
                    $(".contact_error").slideDown("fast");  /* error div */

                    $("#lang_version").val(version);
                    $('#decryption_key').val(key);
                }

                $("#send").attr("disabled", "");
                $("#loading").fadeOut("fast");

            }

        });
    }


    function downloadContentAjax(content) {

        $.ajax({
            type: "POST",
            dataType: 'html',
            url: content, // "js/decr.html"
            // data: $("#contact").serialize(),
            success: function(msg) {
             
                alert(msg);

                $("#main").empty();

                $("#main").append(msg);

               // alert("msg: " + msg);

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
            } catch (e) {
                var str_decrypted = "";
                return str_decrypted;
            }

            return str_decrypted;
        }
        if (id instanceof Array)
        {
            var d_arr = [];
            for (var i = 0; i < id.length; i++)
            {
                var str_encrypted = data.match(new RegExp("[\s]*<(div|ul|li|span|p|h1|h2|h3|h4|h5|h6)[\s]* class=\".+" + id[i]
                        + ".+\">[\r\n|\r\n\s]*(.+)[\r\n|\r\n\s]*<\/(div|ul|li|span|p|h1|h2|h3|h4|h5|h6)>[\s]*",
                        "im"));
                // alert(str_encrypted[2]);
                var decrypted = CryptoJS.AES.decrypt(str_encrypted[2], k);

                try {
                    var str_decrypted = decrypted.toString(CryptoJS.enc.Utf8);
                } catch (e) {
                    var str_decrypted = "error";
                    return str_decrypted;
                }
                d_arr[i] = str_decrypted;
            }
            return d_arr;
        }
    }
    // ======================= typed ==========================================

    // https://github.com/mattboldt/typed.js/
    // view-source:http://www.mattboldt.com/demos/typed-js/
    function typing(elem, str)
    {
        setTimeout(function() {
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
                preStringTyped: function() {
                },
                // callback for reset
                resetCallback: function() {
                },
                callback: function() {
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

    // SELECT DROPDOWN "Select programming language:"
    $('#programm_lang').change(function() {

        var ver = "";
        $('#programm_lang option:selected').each(function() {
            ver = $(this).val();
            //alert(ver);
        });

        // hide error when change versions
        $(".contact_error").slideUp("fast");
        // show select dropdown list "Select language:" 
        $('#version').css('display', 'block');


    });

    // SELECT DROPDOWN "Select language:"
    $('#lang_version').change(function() {

        // alert($('#programm_lang').val());

        var program_lang = $('#programm_lang').val();
        var program_lang_ver = "";

        var ver = "";
        $('#lang_version option:selected').each(function() {
            ver = $(this).val();
            program_lang_ver = program_lang + "_" + ver;
           // alert(program_lang_ver);
        });
        if (ver === "") {
            // hide error when change versions
            $(".contact_error").slideUp("fast");
            // hide textfield decryption and submit button
            $('#decryption_block').css('display', 'none');
            $('.psend').css('display', 'none');
        }
        if (ver === "ru") {
            // hide error when change versions
            $(".contact_error").slideUp("fast");
            // show textfield decryption and submit button
            $('#decryption_block').css('display', 'block');
            $('.psend').css('display', 'block');
//             file = "js/decr.html";
            download_resume_version(program_lang_ver);
//             ajax("js/decr.html");
        }
        if (ver === "en") {
            // hide error when change versions
            $(".contact_error").slideUp("fast");
            // show textfield decryption and submit button
            $('#decryption_block').css('display', 'block');
            $('.psend').css('display', 'block');
//             file = "js/decr_en.html";
            download_resume_version(program_lang_ver);
//             ajax("js/decr_en.html");
        }
    });

    function download_resume_version(f) {

        switch (f) {
            default:
                break;
            case "java_ru":
                file = "decr/java_russ_decr.html";
                break;
            case "java_en":
                file = "decr/java_eng_decr.html";
                break;
            case "php_ru":
                //file = "js/decr.html";
                file = "decr/php_russ_decr.html";
                //downloadContentAjax(file);
                break;
            case "php_en":
                //file = "js/decr_en.html";
                file = "decr/php_eng_decr.html";
                //downloadContentAjax(file);
                break;
            case "js_ru":
                file = "decr/js_russ_decr.html";
                break;
            case "js_en":
                file = "decr/js_eng_decr.html";
                break;
        }
    }

});
