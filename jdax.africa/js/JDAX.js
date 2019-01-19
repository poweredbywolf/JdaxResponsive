
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function initNavScroll() {
    "use strict";
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 30) {
            $(".ln-navbar").addClass("ln-nav-collapse");
        }
        else {
            $(".ln-navbar").removeClass("ln-nav-collapse");
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
            this.menu = document.querySelector("#sidenav-menu--" + this.options.type);
            this.closeBtn = this.menu.querySelector(".sidenav-menu__close");
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
