  var slideIndex_2 = 1;
  showslides_2(slideIndex_2);

  function plusSlides_2(n) {
      showslides_2(slideIndex_2 += n);
  }





  function currentSlide_2(n) {
      showslides_2(slideIndex_2 = n);
  }

  function showslides_2(n) {
      var i;

      var slides_2 = document.getElementsByClassName("mySlides_2");

      var dots_2 = document.getElementsByClassName("dot_2");

      var steps_2 = document.getElementsByClassName("steps_2");

      if (n > slides_2.length) {
          slideIndex_2 = 1
      }
      if (n < 1) {
          slideIndex_2 = slides_2.length;
      }
      for (i = 0; i < slides_2.length; i++) {
          slides_2[i].style.display = "none";
      }
      for (i = 0; i < dots_2.length; i++) {
          dots_2[i].className = dots_2[i].className.replace(" active", "");
      }

      for (i = 0; i < steps_2.length; i++) {
          steps_2[i].className = steps_2[i].className.replace(" active", "");
      }

      slides_2[slideIndex_2 - 1].style.display = "block";


      dots_2[slideIndex_2 - 1].className += " active";

      steps_2[slideIndex_2 - 1].className += " active";

  }
