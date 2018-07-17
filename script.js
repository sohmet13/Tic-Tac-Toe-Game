$(document).ready(function() {
 $('#choice, #playerOne, table, .s').css({opacity: "0"}).hide();
 $('#head').css({opacity: "0"});
 $('td').text('').css({background: '', color: 'white'});
 var znak_user, znak_comp, rand_num, num, check_game;
 var exit_flag = false;
 var win_user_array = ['123','456','789','147','258','369','159','357'];
 //нажимаем кнопки
 //очистить все
 $('.reset').on('click', function(){
   $('#head').animate({opacity: "0"}, 500);
   $('table, .s').animate({opacity: "0"}, 500).hide('fast', function(){
      $('#greeting').animate({opacity: "1"}, 500).show();
      $('.tab').animate({marginTop: "-400px"}, 500);
      $('td').text('').css({background: '', color: 'white'});
      $('#CS, #P2S, #P1S').text(0);
      $('.after').css({opacity: '0', zIndex:'-1'});
   });
 });
 //если один игрок
 $('#one').on('click', function(){
   $('#greeting').animate({opacity: "0"}, 500).hide('fast', function(){
      $('#choice').animate({opacity: "1"}, 500).show();
   });
 });
 //назад
  $('.back').on('click', function(){
    $('#choice, #playerOne').animate({opacity: "0"}, 500).hide('fast', function() {
    $('#greeting').animate({opacity: "1"}, 500).show();
    });
  });
  //если два игрока
  $('#two').on('click', function(){
    $('#greeting').animate({opacity: "0"}, 500).hide('fast', function(){
      $('#playerOne').animate({opacity: "1"}, 500).show();
   });
  });
  // х или 0 игра с компом
  $('.xo1').on('click', function(){
    check_game=false;
    $('td').unbind('click', pClick).unbind('click', aClick);
    $('#tabP').text("You turn!");
    $('#tabC').text("Computer's turn!");
    $('#choice').animate({opacity: "0"}, 500).hide('fast', function(){
      $('table, #head, #second').show().animate({opacity: "1"}, 500);
      Rand();
    });
    znak_user = $(this).text();
    znak_user==='X' ? znak_comp = 'O': znak_comp = 'X';
  });
  // х или 0 два игрока
  $('.xo').on('click', function(){
    check_game=true;
    $('td').unbind('click', aClick).unbind('click', pClick);
    $('#tabP').text("Go Player 1");
    $('#tabC').text("Go Player 2");
    $('#playerOne').animate({opacity: "0"}, 500).hide('fast', function() {
      $('table, #head, #third').animate({opacity: "1"}, 500).show();
      $('td').bind('click', pClick)
      RandomPlayer();
    });
    znak_user = $(this).text();
    znak_user==='X' ? znak_comp = 'O': znak_comp = 'X';
  });
    //игра с компьютером
    //рандомный выбор начинает игру комп или игрок
    function Rand(){
    rand_num = Math.round((Math.random() * (9 - 1) + 1));
      if( rand_num > 3 ){
        CompOpen();
        setTimeout(function() {
           $('#cell'+rand_num).text(znak_comp);
           CompDown();
        }, 1000);
      } else {
        $('#tabP').animate({marginTop: "-500px"}, 500);
        $('td').bind('click', aClick);
      }
      exit_flag = false;
    }
    //проверка победы игрока
    function check_3_user(znak){
        for (var i = 0; i < 8; i++) {
            var first = '#cell' + win_user_array[i].substr(0,1);
            var second = '#cell' + win_user_array[i].substr(1,1);
            var third = '#cell' + win_user_array[i].substr(2,1);
             
            if( $(first).text()==znak && $(second).text() == znak && $(third).text() == znak ){
              $(first+','+second+','+third).css({background: "black", color: '#57e6ff'});
              $('#tabP').animate({marginTop: "-400px"}, 500);
              $('.after').text('Excellent play!');
              Table();
              setTimeout(function() {$('#P1S').text(eval($('#P1S').text())+1);},1500);
              exit_flag = true;
            }    
        }
    }
    //проверка победы компьютера
    function check_2_comp(znak){
        for (var i = 0; i < 8; i++) {

            var first = '#cell' + win_user_array[i].substr(0,1);
            var second = '#cell' + win_user_array[i].substr(1,1);
            var third = '#cell' + win_user_array[i].substr(2,1);
                     
            if( $(first).text() == znak && $(second).text() == znak && $(third).text() == ''){
              CompOpen();
              setTimeout(function() {
                $(third).text(znak);
                $(first+','+second+','+third).css({background: "black", color: '#57e6ff'});
                $('#tabC').animate({marginTop: "-400px"}, 500);
               }, 1000);
              $('.after').text('Uh oh, you lost');
              Table();
              setTimeout(function() {$('#CS').text(eval($('#CS').text())+1);},1500);
              exit_flag = true;
              break;
            }
          
            if( $(first).text() == znak && $(second).text() == '' && $(third).text() == znak ){
              CompOpen();
              setTimeout(function() {
                $(second).text(znak);
                $(first+','+second+','+third).css({background: "black", color: '#57e6ff'});
                $('#tabC').animate({marginTop: "-400px"}, 500);
              }, 1000);
              $('.after').text('Uh oh, you lost');
              Table();
              setTimeout(function() {$('#CS').text(eval($('#CS').text())+1);},1500);
              exit_flag = true;
              break;
            } 
          
            if( $(first).text() == '' && $(second).text() == znak && $(third).text() == znak ){
              CompOpen();
              setTimeout(function() {
                $(first).text(znak); 
                $(first+','+second+','+third).css({background: "black", color: '#57e6ff'});
                $('#tabC').animate({marginTop: "-400px"}, 500);
              }, 1000);
              $('.after').text('Uh oh, you lost');
              Table();
              setTimeout(function() {$('#CS').text(eval($('#CS').text())+1);},1500);
              exit_flag = true;
              break;
            }
        }
    }
    //проверка хода компьютера
    function check_2_user(znak)  { 
        for (var i = 0; i < 8; i++) {
            var first = '#cell' + win_user_array[i].substr(0,1);
            var second = '#cell' + win_user_array[i].substr(1,1);
            var third = '#cell' + win_user_array[i].substr(2,1);    
            if( exit_flag == false ){
                if( $(first).text() == znak && $(second).text()==znak && $(third).text()== ''){
                  CompOpen();
                  setTimeout(function() {
                    $(third).text(znak_comp);
                    CompDown();
                  }, 1000);
                  exit_flag = true;
                }
            }           
            if( exit_flag == false ){
                if( $(first).text()==znak && $(second).text() == ''&& $(third).text() ==znak){
                  CompOpen();
                  setTimeout(function() {
                    $(second).text(znak_comp);
                      CompDown();
                  }, 1000);   
                 exit_flag = true;
                }    
            }    
            if($(first).text() == '' && $(second).text() == znak && $(third).text() == znak ){
                  CompOpen();
                  setTimeout(function() {
                    $(first).text(znak_comp);     
                    CompDown();
                  }, 1000);
              exit_flag = true;
            }
            if(exit_flag) break; 
        }
    }
    //нажимаем на клетку
    $('td').click(aClick); 
    function aClick(){
        //Если клетка пустая              
        if( $(this).text() == ''){
            $(this).text(znak_user);
            $('td').unbind('click', aClick);
            check_3_user(znak_user);
            check_2_comp(znak_comp);
            check_2_user(znak_user);
             
            if( exit_flag == false ){
              CompOpen();
              setTimeout(function() {
                for(var i=0; i<100; i++) { 
                    rand_num = Math.round((Math.random()*(9 - 1) + 1));
                    if( $('#cell'+rand_num).text() == '' ){
                      $('#cell'+rand_num).text(znak_comp);
                      break;
                    }
                 } 
                CompDown();
             }, 1000);
            }else exit_flag = false;
        }
    }
  //вспомогательные функции
  //открыть вкладку компа
  function CompOpen() {
    $('#tabC').animate({marginTop: "-500px"}, 500);
    $('#tabP').animate({marginTop: "-400px"}, 500);
  }
  //открыть вкладку игрока и проверить не ничья ли
  function CompDown() {
    var end =0;
    for (var j=1; j<10; j++) {
     if ($('#cell'+j).text()) { end++};
     }
    if (end===9) {
     $('.after').text('It was a draw...');
     $('#tabC, #tabP').animate({marginTop: "-400px"}, 500);
     Table();
    } else {
      $('#tabP').animate({marginTop: "-500px"}, 500);
      $('#tabC').animate({marginTop: "-400px"}, 500, function(){
        $('td').bind('click', aClick);
      });  
    }
  }
  //вывод таблицы об окончании игры
  function Table() {
    setTimeout(function() {
      $('.after').css({zIndex:'20'}).animate({opacity: '1'}, 500);
      setTimeout(function() {
         $('.after').animate({opacity: '0', zIndex:'-1'}, 500, function() {
           if(check_game) {
            RandomPlayer();
           } else {
            Rand();
           }
         });
         $('td').text('').css({background: '', color: 'white'});
      }, 2000);
    },1000);
  }
  //игра двух игроков
  //выбираем того, кто первый ходит
  function RandomPlayer(){
    exit_flag=false;
    rand_num = Math.round((Math.random() * (9 - 1) + 1));
      if( rand_num > 3 ){
        $('#tabC').animate({marginTop: "-500px"}, 500);
        num=true;
      } else {
        $('#tabP').animate({marginTop: "-500px"}, 500);
        num=false;
      }
  }
     //проверка победы игрока
    function check_1_user(znak){
        for (var i = 0; i < 8; i++) {
            var first = '#cell' + win_user_array[i].substr(0,1);
            var second = '#cell' + win_user_array[i].substr(1,1);
            var third = '#cell' + win_user_array[i].substr(2,1);
             
            if( $(first).text()==znak && $(second).text() == znak && $(third).text() == znak ){
              $(first+','+second+','+third).css({background: "black", color: '#57e6ff'});
              $('.tab').animate({marginTop: "-400px"}, 500);           
              Table();
              exit_flag=true;
            } 
        }
    }
  //проверка на ничью
  function Draw(){
    var end =0;
    for (var k=1; k<10; k++) {
     if ($('#cell'+k).text()) { end++};
     }
    if (end===9) {
     $('.after').text('It was a draw...');
     $('.tab').animate({marginTop: "-400px"}, 500);
     Table();
     exit_flag=true;
    }
  }
  //нажимаем на кнопку
  $('td').click(pClick);
  function pClick() {
    if(!num) {
      $(this).text(znak_user); 
      $('.after').text('Player 1 wins!');
      $('#tabP').animate({marginTop: "-400px"}, 500);
      check_1_user(znak_user);
      if (exit_flag===false) {
        Draw();
        if (exit_flag===false)
        $('#tabC').animate({marginTop: "-500px"}, 500);
      }else{
        setTimeout(function() {$('#P1S').text(eval($('#P1S').text())+1);},1500);
      }
    } else {
      $(this).text(znak_comp);
      $('.after').text('Player 2 wins!');
      $('#tabC').animate({marginTop: "-400px"}, 500);
      check_1_user(znak_comp);
      if (exit_flag===false) {
        Draw();
        if (exit_flag===false)
        $('#tabP').animate({marginTop: "-500px"}, 500);
      } else{
        setTimeout(function() {$('#P2S').text(eval($('#P2S').text())+1);},1500);
      }
    }
    num=!num;
  }
});
