$(document).ready(function () {
  let clickCount = 0;
  let text3Toggle = true; // text3 상태를 저장하는 변수

  // 초기 원이 나타나도록 설정
  $(".box").append('<div class="center-circle"></div>');

  // 클릭 이벤트 등록
  $(".box").on("click", function () {
    clickCount++;

    if (clickCount === 1) {
      // 초기 원 숨김 및 tick1 표시
      $(".center-circle").remove();
      $(".tick1").fadeIn();
    } else if (clickCount === 2) {
      $(".tick2").fadeIn(); // tick2 표시
    } else if (clickCount === 3) {
      $(".boom").fadeIn(); // BOOM 표시
    } else if (clickCount === 4) {
      // 화면 리셋 및 새로운 이미지 표시
      $(".tick1, .tick2, .boom").fadeOut(function () {
        $(
          ".bg, .oval, .text1, .text2, .text3, .text4, .text5, .pattern, .monitor, .computer, .frame, .note, .chair, .piano"
        ).fadeIn();

        // monitor.png 깜빡거림 효과
        blinkMonitor();
      });
    }
  });

  // monitor 깜빡거림 함수
  function blinkMonitor() {
    setInterval(() => {
      $(".monitor").fadeOut(2500).fadeIn(2500); // 2.5초 간격으로 깜빡임
    });
  }

  // Hover 및 Click 이벤트 등록
  const interactiveElements = [
    ".computer",
    ".monitor",
    ".frame",
    ".note",
    ".chair",
    ".piano",
  ];

  interactiveElements.forEach((selector) => {
    // Hover 이벤트
    $(selector).hover(
      function () {
        $(this).css({
          transition: "transform 0.5s",
          transform: "scale(1.1)", // 중심을 기준으로 10% 확대
        });
      },
      function () {
        $(this).css({
          transition: "transform 0.5s",
          transform: "scale(1)", // 원래 크기로 복원
        });
      }
    );

    // Click 이벤트
    $(selector).on("click", function () {
      $(this).fadeOut(500); // 사라지기
      setTimeout(() => {
        $(this).fadeIn(500); // 2초 후 다시 나타나기
      }, 2000);
    });
  });

  // computer와 monitor 동시 상호작용
  $(".computer, .monitor").hover(
    function () {
      $(".computer, .monitor").css({
        transition: "transform 0.5s",
        transform: "scale(1.1)", // 중심을 기준으로 10% 확대
      });
    },
    function () {
      $(".computer, .monitor").css({
        transition: "transform 0.5s",
        transform: "scale(1)", // 원래 크기로 복원
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
      transform: "scale(1.05)", // 5% 확대
    });

    setTimeout(() => {
      $(".text3").css({
        transform: "scale(1)", // 원래 크기로 복원
      });
    }, 500); // 0.5초 후 복원
  }, 1000); // 1초 간격으로 반복

  // text3 클릭 이벤트: 그룹 숨김/표시
  $(".text3").on("click", function () {
    if (text3Toggle) {
      // 사라지기
      $(".computer, .frame, .note, .chair, .piano").fadeOut(500);
    } else {
      // 다시 나타나기
      $(".computer, .frame, .note, .chair, .piano").fadeIn(500);
    }
    text3Toggle = !text3Toggle; // 상태 토글
  });
  // 마우스 hover 이벤트에 따른 이미지 표시/숨김
  function setupHover(selector, target) {
    $(selector).hover(
      function () {
        $(target).fadeIn(); // 마우스가 닿으면 나타나기
      },
      function () {
        $(target).fadeOut(); // 마우스를 떼면 사라지기
      }
    );
  }

  // computer와 monitor는 동시에 처리
  $(".computer, .monitor").hover(
    function () {
      $(".t1").fadeIn();
    },
    function () {
      $(".t1").fadeOut();
    }
  );

  // 나머지 개별 hover 처리
  setupHover(".frame", ".t2");
  setupHover(".note", ".t3");
  setupHover(".piano", ".t4");
  setupHover(".chair", ".t5");
});
