// con01

$(document).ready(function () {
  let currentIndex = 0;
  const totalItems = $(".con01 ul li").length;
  const itemsPerView = 4;
  const maxIndex = totalItems - itemsPerView;

  // 다음 버튼
  $(".con01 .btn:last").click(function () {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  // 이전 버튼
  $(".con01 .btn:first").click(function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  function updateSlider() {
    // 모든 li 숨기기
    $(".con01 ul li").css("display", "none");

    // 현재 인덱스부터 4개 보이기
    for (let i = currentIndex; i < currentIndex + itemsPerView; i++) {
      $(".con01 ul li").eq(i).css("display", "block");
    }

    //bar
    const progress = ((currentIndex + 1) / (maxIndex + 1)) * 100;
    $(".con01 .bar > div").css("width", progress + "%");
  }

  // 초기 설정
  updateSlider();

  // con 04

  $(".con04 .Qa li").on("click", function () {
    let isOn = $(this).hasClass("on");

    if (isOn) {
      $(this).removeClass("on");
      $(this).children(".txt").slideUp();
    } else {
      $(".con04 .Qa li").removeClass("on");
      $(this).addClass("on");
      $(".con04 .Qa li .txt").slideUp();
      $(this).children(".txt").slideDown();
    }
  });
});

// ===== 모바일 CON01 슬라이더 전용 =====

$(document).ready(function () {
  let currentIndex = 0;
  const totalItems = $(".con01 ul li").length;
  let itemsPerView = 4; // 데스크탑 기본값

  // 다음 버튼
  $(".con01 .btn:last").click(function () {
    const maxIndex = totalItems - itemsPerView;
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  // 이전 버튼
  $(".con01 .btn:first").click(function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  //모바일768px 하나로만 보이게 하기

  function updateSlider() {
    // 모든 li 숨기기
    $(".con01 ul li").hide();

    // 현재 인덱스부터 itemsPerView개 보이기
    for (let i = currentIndex; i < currentIndex + itemsPerView; i++) {
      if (i < totalItems) {
        $(".con01 ul li").eq(i).show();
      }
    }

    //  바
    const maxIndex = totalItems - itemsPerView;
    const progress = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0;
    $(".con01 .bar > div").css("width", progress + "%");
  }

  // 반응형 조정
  function checkResponsive() {
    const windowWidth = $(window).width();

    if (windowWidth <= 768) {
      itemsPerView = 1; // 모바일: 1개
    } else if (windowWidth <= 1024) {
      itemsPerView = 3; // 태블릿: 2개
    } else {
      itemsPerView = 4; // 데스크탑: 4개
    }

    const maxIndex = totalItems - itemsPerView;
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }

    updateSlider();
  }

  checkResponsive();

  $(window).on("resize", checkResponsive);
});
