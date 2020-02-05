$(document).ready(function() {
  var znak_user,
    znak_comp,
    num,
    check_game,
    endAnimation = false,
    exit_flag = false;
  const win_user_array = [
    "123",
    "456",
    "789",
    "147",
    "258",
    "369",
    "159",
    "357"
  ];
  const tableStyle = { background: "", color: "white" };
  const animDuration = 500;
  // присваиваем знаки
  function showPlayTable(tabP, tabC, check, text, fn, event) {
    endAnimation = false;
    check_game = check;
    $("#CS, #PS").text(0);
    $("td")
      .text("")
      .css(tableStyle)
      .unbind("click");
    $("#tabP").text(tabP);
    $("#tabC").text(tabC);
    $("#C").text(text);
    $("#choice").fadeOut(animDuration, function() {
      $("table, #head").fadeIn(animDuration);
      fn();
    });
    znak_user = event.target.id.toUpperCase();
    znak_user === "X" ? (znak_comp = "O") : (znak_comp = "X");
  }
  // игра с компьютером
  // рандомный выбор первого хода
  function randomOne() {
    let rand_num = Math.round(Math.random() * (9 - 1) + 1);
    // comp first
    if (rand_num > 4) {
      tabs("tabCUp");
      setTimeout(() => {
        $("#cell" + rand_num).text(znak_comp);
        tabs("tabPUp");
        setTimeout(() => {
          $("td").bind("click", oneClick);
        }, animDuration);
      }, animDuration * 2);
    } else {
      // player first
      tabs("tabPUp");
      setTimeout(() => {
        $("td").bind("click", oneClick);
      }, animDuration);
    }
    exit_flag = false;
  }
  // проверка победы игрока
  function check_3_user(znak) {
    for (let i = 0; i < 8; i++) {
      let first = "#cell" + win_user_array[i].substr(0, 1);
      let second = "#cell" + win_user_array[i].substr(1, 1);
      let third = "#cell" + win_user_array[i].substr(2, 1);

      if (
        $(first).text() == znak &&
                $(second).text() == znak &&
                $(third).text() == znak
      ) {
        $(first + "," + second + "," + third).css({
          background: "black",
          color: "#57e6ff"
        });
        tabs("downAllTabs");
        shadowBox("Excellent play!");
        setTimeout(() => {
          $("#PS").text(parseInt($("#PS").text()) + 1);
        }, animDuration * 3);
        exit_flag = true;
      }
    }
  }
  // проверка победы компьютера
  function check_2_comp(znak) {
    function compWin(cellNum) {
      tabs("tabCUp");
      setTimeout(() => {
        $(cellNum).text(znak);
        $(first + "," + second + "," + third).css({
          background: "black",
          color: "#57e6ff"
        });
        tabs("downAllTabs");
      }, animDuration * 2);
      shadowBox("Uh oh, you lost");
      setTimeout(() => {
        $("#CS").text(parseInt($("#CS").text()) + 1);
      }, animDuration * 3);
      exit_flag = true;
    }
    for (let i = 0; i < 8; i++) {
      var first = "#cell" + win_user_array[i].substr(0, 1);
      var second = "#cell" + win_user_array[i].substr(1, 1);
      var third = "#cell" + win_user_array[i].substr(2, 1);

      if (
        $(first).text() == znak &&
                $(second).text() == znak &&
                !$(third).text()
      ) {
        compWin(third);
        break;
      }

      if (
        $(first).text() == znak &&
                !$(second).text() &&
                $(third).text() == znak
      ) {
        compWin(second);
        break;
      }

      if (
        !$(first).text() &&
                $(second).text() == znak &&
                $(third).text() == znak
      ) {
        compWin(first);
        break;
      }
    }
  }
  // проверка хода компьютера
  function check_2_user(znak) {
    function compStep(cellNum) {
      tabs("tabCUp");
      setTimeout(() => {
        $(cellNum).text(znak_comp);
        drawCheck("tabPUp", oneClick);
      }, animDuration * 2);
      exit_flag = true;
    }
    for (let i = 0; i < 8; i++) {
      var first = "#cell" + win_user_array[i].substr(0, 1);
      var second = "#cell" + win_user_array[i].substr(1, 1);
      var third = "#cell" + win_user_array[i].substr(2, 1);

      if (
        $(first).text() == znak &&
                $(second).text() == znak &&
                !$(third).text()
      ) {
        compStep(third);
      }
      if (
        $(first).text() == znak &&
                !$(second).text() &&
                $(third).text() == znak
      ) {
        compStep(second);
      }
      if (
        !$(first).text() &&
                $(second).text() == znak &&
                $(third).text() == znak
      ) {
        compStep(first);
      }
      if (exit_flag) break;
    }
  }
  // нажимаем на клетку
  function oneClick() {
    // Если клетка пустая
    if (!$(this).text()) {
      $(this).text(znak_user);
      $("td").unbind("click", oneClick);
      check_3_user(znak_user);
      check_2_comp(znak_comp);
      if (!exit_flag) check_2_user(znak_user);

      if (!exit_flag) {
        $("td").text().length !== 9 ? tabs("tabCUp") : tabs("downAllTabs");
        setTimeout(() => {
          (function setCompZnak() {
            let rand_num = Math.round(Math.random() * (9 - 1) + 1);
            !$("#cell" + rand_num).text()
              ? $("#cell" + rand_num).text(znak_comp)
              : $("td").text().length !== 9 ? setCompZnak() : 0;
          })();
          drawCheck("tabPUp", oneClick);
        }, animDuration * 2);
      } else exit_flag = false;
    }
  }
  // игра двух игроков
  // выбираем того, кто первый ходит
  function randomTwo() {
    exit_flag = false;
    let rand_num = Math.round(Math.random() * (9 - 1) + 1);
    setTimeout(() => {
      $("td").bind("click", twoClick);
    }, animDuration);
    if (rand_num > 4) {
      tabs("tabCUp");
      num = "player2";
    } else {
      tabs("tabPUp");
      num = "player1";
    }
  }
  // проверка победы игрока
  function check_1_user(znak, text, id) {
    for (let i = 0; i < 8; i++) {
      let first = "#cell" + win_user_array[i].substr(0, 1);
      let second = "#cell" + win_user_array[i].substr(1, 1);
      let third = "#cell" + win_user_array[i].substr(2, 1);

      if (
        $(first).text() == znak &&
                $(second).text() == znak &&
                $(third).text() == znak
      ) {
        $(first + "," + second + "," + third).css({
          background: "black",
          color: "#57e6ff"
        });
        tabs("downAllTabs");
        shadowBox(text);
        setTimeout(() => {
          $(id).text(parseInt($(id).text()) + 1);
        }, animDuration * 3);
        exit_flag = true;
      }
    }
  }
  // нажимаем на кнопку
  function twoClick() {
    if (!$(this).text()) {
      if (num === "player1") {
        $(this).text(znak_user);
        $("td").unbind("click", twoClick);
        check_1_user(znak_user, "Player 1 wins!", "#PS");
        if (!exit_flag) drawCheck("tabCUp", twoClick);
      } else {
        $(this).text(znak_comp);
        $("td").unbind("click", twoClick);
        check_1_user(znak_comp, "Player 2 wins!", "#CS");
        if (!exit_flag) drawCheck("tabPUp", twoClick);
      }
      num === "player1" ? (num = "player2") : (num = "player1");
    }
  }
  // общие функции для обоих вариантов игры
  // проверка на ничью
  function drawCheck(text, fn) {
    if ($("td").text().length === 9) {
      tabs("downAllTabs");
      shadowBox("It was a draw...");
    } else {
      tabs(text);
      setTimeout(() => {
        $("td").bind("click", fn);
      }, animDuration);
    }
  }
  // вывод блока об окончании игры
  function shadowBox(text) {
    if (!endAnimation) {
      $(".shadow p").text(text);
      setTimeout(() => {
        $(".shadow").fadeIn(animDuration);
        if (!endAnimation) {
          setTimeout(() => {
            $(".shadow").fadeOut(animDuration, function() {
              check_game ? randomTwo() : randomOne();
            });
            $("td")
              .text("")
              .css(tableStyle);
          }, animDuration * 4);
        } else {
          $(".shadow").fadeOut(10);
        }
      }, animDuration * 2);
    }
  }
  // анимация вкладок с очередью игроков
  function tabs(value) {
    if (!endAnimation) {
      let tapC = 50,
        tabP = 50;
      switch (value) {
      case "tabCUp":
        tapC = 0;
        tabP = 50;
        break;
      case "tabPUp":
        tapC = 50;
        tabP = 0;
        break;
      case "downAllTabs":
        tapC = 50;
        tabP = 50;
        break;
      }
      $("#tabC").animate({ top: `${tapC}px` }, animDuration);
      $("#tabP").animate({ top: `${tabP}px` }, animDuration);
    }
  }
  // анимация кнопок
  // очистить все
  $(".reset").on("click", function() {
    $("#head, table, .shadow").fadeOut(animDuration);
    tabs("downAllTabs");
    endAnimation = true;
    $("#x, #o").unbind();
    setTimeout(() => {
      $("#greeting").fadeIn(animDuration);
    }, animDuration);
  });
  // назад
  $(".back").on("click", function() {
    $("#choice").fadeOut(animDuration, function() {
      $("#greeting").fadeIn(animDuration);
    });
  });
  // если один игрок
  $("#one").on("click", function() {
    $("h2").text("Would you like to be X or O?");
    $("#x, #o").bind(
      "click",
      showPlayTable.bind(
        this,
        "You turn!",
        "Computer's turn!",
        false,
        "computer",
        randomOne
      )
    );
    $("#greeting").fadeOut(animDuration, function() {
      $("#choice").fadeIn(animDuration);
    });
  });
  // если два игрока
  $("#two").on("click", function() {
    $("#x, #o").bind(
      "click",
      showPlayTable.bind(
        this,
        "Go Player 1",
        "Go Player 2",
        true,
        "рlayer 2",
        randomTwo
      )
    );
    $("h2").text("Player 1 : Would you like X or O?");
    $("#greeting").fadeOut(animDuration, function() {
      $("#choice").fadeIn(animDuration);
    });
  });
});
