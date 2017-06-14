   var id, pause = 0, position = 0;
        function banner() {
// variables declaration
            var i, k, msg = "Click here to decode this page !";    // ТЕКСТ ДЛЯ БРАУЗЕРОВ С ПОДДЕРЖКОЙ JAVASCRIPT
// increase msg
            k = (60 / msg.length) + 1;
            for (i = 0; i <= k; i++)
                msg += " " + msg;
// show it to the window
//            document.getElementById("banner").innerHTML = msg.substring(position, position + 60);
              $('#banner').text(""+msg.substring(position, position + 60));
// set new position
            if (position++ == msg.length)
                position = 0;
// repeat at entered speed 
            id = setTimeout("banner()", 200);
        }
// end -->
        banner();