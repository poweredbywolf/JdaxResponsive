
// JavaScript Document

$(document).ready(function () {


    $("div").each(function () {

        if ($(this).css('display') == 'flex') {


            $(this).css("border", "2px solid orange");
            $(this).css("border-radius", "15px");


        }

    });


});


function initNavScroll() {
    "use strict";
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 30) {
            $(".navbar").addClass("nav-collapse");
        }
        else {
            $(".navbar").removeClass("nav-collapse");
        }
    });
}

function initSideNav() {
    "use strict";
    var Menu = function () {
        function extend(a, b) {
            for (var key in b) {
                if (b.hasOwnProperty(key)) {
                    a[key] = b[key];
                }
            }
            return a;
        }
        function each(collection, callback) {
            for (var i = 0; i < collection.length; i++) {
                var item = collection[i];
                callback(item);
            }
        }
        function Menu(options) {
            this.options = extend({}, this.options);
            extend(this.options, options);
            this._init();
        }
        Menu.prototype.options = {
            wrapper: "#o-wrapper",
            type: "slide-left",
            menuOpenerClass: ".sidenav-button",
            maskId: "#sidenav-mask"
        };
        Menu.prototype._init = function () {
            this.body = document.body;
            this.wrapper = document.querySelector(this.options.wrapper);
            this.mask = document.querySelector(this.options.maskId);
            this.menu = document.querySelector("#sidenav--" + this.options.type);
            this.closeBtn = this.menu.querySelector(".sidenav__close");
            this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass);
            this._initEvents();
        };
        Menu.prototype._initEvents = function () {
            this.closeBtn.addEventListener("click", function (e) {
                e.preventDefault();
                this.close();
            }.bind(this));
            this.mask.addEventListener("click", function (e) {
                e.preventDefault();
                this.close();
            }.bind(this));
        };
        Menu.prototype.open = function () {
            this.body.classList.add("has-active-menu");
            this.wrapper.classList.add("has-" + this.options.type);
            this.menu.classList.add("is-active");
            this.mask.classList.add("is-active");
            this.disableMenuOpeners();
        };
        Menu.prototype.close = function () {
            this.body.classList.remove("has-active-menu");
            this.wrapper.classList.remove("has-" + this.options.type);
            this.menu.classList.remove("is-active");
            this.mask.classList.remove("is-active");
            this.enableMenuOpeners();
        };
        Menu.prototype.disableMenuOpeners = function () {
            each(this.menuOpeners, function (item) {
                item.disabled = true;
            });
        };
        Menu.prototype.enableMenuOpeners = function () {
            each(this.menuOpeners, function (item) {
                item.disabled = false;
            });
        };
        return Menu;
    }();
    var slideLeft = new Menu({
        wrapper: "#o-wrapper",
        type: "slide-left",
        menuOpenerClass: "sidenav-button",
        maskId: "#sidenav-mask"
    });
    var slideLeftBtn = document.querySelector("#sidenav-button--slide-left");
    slideLeftBtn.addEventListener("click", function (e) {
        e.preventDefault();
        slideLeft.open();
    });
}
