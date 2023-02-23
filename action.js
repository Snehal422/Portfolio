

// (function ($) {

//     $.fn.pagefade = function (fadein, fadeout) {

//         this.css("display", "none");

//         this.fadeIn(fadein);

//         $("a").click(function (event) {

//             event.preventDefault();

//             linkLocation = this.href;

//             this.fadeOut(fadeout, redirectPage);

//         });

//         function redirectPage() {

//             window.location.disabled = linkLocation;

//         }

//         return this;

//     };

// }(jQuery));


$(document).ready(function () {
    // $("html,body").pagefade(300,300)
    $(".content").fadeOut(1);
    $(".content").fadeIn(3000);
    $(".me").click( function () {
      $(".about-text").fadeOut(1);
      $(".about-text").fadeIn(3000);
      
    });

    
    
});





// let mybutton = document.getElementById("btn-back-to-top");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };



// function scrollFunction() {
//   if (
//     document.body.scrollTop > 20 ||
//     document.documentElement.scrollTop > 20
//   ) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// // When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener("click", backToTop);

// function backToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// $("#submitbtn").click(function () {
//   // document.getElementsByClassName(tabname).classList.add("activelink");
//   document.getElementById("submitbtn").className="activelink"
  
// });

      function check(){
        var name =document.getElementById("username");
        var mailid=document.getElementById("usermail");
        var text=document.getElementById("usertext");

        // var tabcontents = document.getElementsByClassName("tab-contents");
        var link = document.getElementsByClassName("error");

        var msg="";
        if(name==null&&mailid==null&&text==null){
            msg="Please Enter All Details"
            document.getElementById("submitbtn").className="activelink"
        }
        else{
            if(name==null){
                msg="Please Enter The Name";
                document.getElementById("submitbtn").className="activelink"
            }
            else{
                if(mailid==null){
                    msg="Please Enter The Mail";
                    document.getElementById("submitbtn").className="activelink"
                }
                else{
                    if(text==null)
                    {
                        msg="Please Provide Information";
                        document.getElementById("submitbtn").className="activelink"
                    }
                    else{
                        window.open("./thankyou.html");
                    }
                }
            }
        }
        document.getElementById("error").text=msg;
        
        // document.getElementById(tabname).classList.add("activelink");

      }



