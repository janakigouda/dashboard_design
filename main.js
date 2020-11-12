// dropdown
function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.n-drop-btn')) {
        var dropdowns = document.getElementsByClassName("n-drop-content");
        if (dropdowns.classList.contains('show')) {
            dropdowns.classList.remove('show');
        }
    }
}
//  toggle sidebar
    function myFunction() {
        var x = document.getElementById("sidebar");
        if (x.className === "sidebar") {
            x.className += " responsive";
        } else {
            x.className = "sidebar";
        }
    }

    // side toggle
    function myFunctionN() {
        var x = document.getElementById("page-container");
        if (x.className === "fade") {
            x.className = "page-sidebar-minified";
        } else {
            x.className = "fade";
        }
    }

// sidebar-menu
    $(document).ready(function(){
        $(".fade .sidebar .sidebar-menu > .has-sub").click(function(){
          $(this).toggleClass("expand").siblings().removeClass('expand');
        //   $(this).removeClass("expand");
        });
        $(".page-sidebar-minified .sidebar .sidebar-menu > .has-sub").click(function(){
            $(this).removeClass('expand');
        });

      });
