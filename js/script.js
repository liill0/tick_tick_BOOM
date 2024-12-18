$(document).ready(function () {
  let clickCount = 0;
  let text3Toggle = true;

  $(".box").append('<div class="center-circle"></div>');

  $(".box").on("click", function () {
    clickCount++;

    if (clickCount === 1) {
      $(".center-circle").remove();
      $(".tick1").fadeIn();
    } else if (clickCount === 2) {
      $(".tick2").fadeIn();
    } else if (clickCount === 3) {
      $(".boom").fadeIn();
    } else if (clickCount === 4) {
      $(".tick1, .tick2, .boom").fadeOut(function () {
        $(
          ".bg, .oval, .text1, .text2, .text3, .text4, .text5, .pattern, .monitor, .computer, .frame, .note, .chair, .piano"
        ).fadeIn();

        blinkMonitor();
      });
    }
  });

  function blinkMonitor() {
    setInterval(() => {
      $(".monitor").fadeOut(2500).fadeIn(2500);
    });
  }

  const interactiveElements = [
    ".computer",
    ".monitor",
    ".frame",
    ".note",
    ".chair",
    ".piano",
  ];

  interactiveElements.forEach((selector) => {
    $(selector).hover(
      function () {
        $(this).css({
          transition: "transform 0.5s",
          transform: "scale(1.1)",
        });
      },
      function () {
        $(this).css({
          transition: "transform 0.5s",
          transform: "scale(1)",
        });
      }
    );

    $(selector).on("click", function () {
      $(this).fadeOut(500);
      setTimeout(() => {
        $(this).fadeIn(500);
      }, 2000);
    });
  });

  $(".computer, .monitor").hover(
    function () {
      $(".computer, .monitor").css({
        transition: "transform 0.5s",
        transform: "scale(1.1)",
      });
    },
    function () {
      $(".computer, .monitor").css({
        transition: "transform 0.5s",
        transform: "scale(1)", 
      });
    }
  );

  $(".computer, .monitor").on("click", function () {
    $(".computer, .monitor").fadeOut(500);
    setTimeout(() => {
      $(".computer, .monitor").fadeIn(500);
    }, 2000);
  });

  setInterval(() => {
    $(".text3").css({
      transition: "transform 0.5s",
      transform: "scale(1.05)",
    });

    setTimeout(() => {
      $(".text3").css({
        transform: "scale(1)",
      });
    }, 500);
  }, 1000);

  $(".text3").on("click", function () {
    if (text3Toggle) {
      $(".computer, .frame, .note, .chair, .piano").fadeOut(500);
    } else {
      $(".computer, .frame, .note, .chair, .piano").fadeIn(500);
    }
    text3Toggle = !text3Toggle;
  });
  function setupHover(selector, target) {
    $(selector).hover(
      function () {
        $(target).fadeIn();
      },
      function () {
        $(target).fadeOut();
      }
    );
  }

  $(".computer, .monitor").hover(
    function () {
      $(".t1").fadeIn();
    },
    function () {
      $(".t1").fadeOut();
    }
  );

  setupHover(".frame", ".t2");
  setupHover(".note", ".t3");
  setupHover(".piano", ".t4");
  setupHover(".chair", ".t5");
});
