var visable = false;
var currentPage = 1;
let switchBlocked = false
$(function () {
  var currentPage = 1;
  function mycomparator (a, b) {
    return parseInt(a.id, 10) - parseInt(b.id, 10);
  }
  window.addEventListener('message', function (event) {

    switch (event.data.action) {
      case 'toggle':
        if (visable) {
          if ($(".player-list-2").children(".table-item").length > 0) {
            $('.page-switcher').css("display", "unset")
          } else {
            $('.page-switcher').css("display", "none")
          }
          //$(".player-list-2").hide();
          //$(".player-list-1").show();
          //$("#switcher-2").removeClass('active');
          //$("#switcher-1").addClass('active');
          $(".scoreboard").fadeIn(400);
        } else {
          $(".scoreboard").fadeOut(200);
        }

        visable = !visable;
        break;
      case 'nextpage':
        if (!switchBlocked) {
          if (currentPage >= 1 && !visable && $(`.player-list-${currentPage + 1}`).children(".table-item").length > 0) {
            switchBlocked = true
            $(`.player-list-${currentPage}`).fadeOut(400, function () {
              currentPage++;
              $(`.player-list-${currentPage}`).fadeIn(100);
            })
            $(`#switcher-${currentPage}`).removeClass('active');
            $(`#switcher-${currentPage + 1}`).addClass('active');
            setTimeout(() => {
              switchBlocked = false
            }, 500)
          }
        }
        break;
      case 'prevpage':
        if (!switchBlocked) {
          if (currentPage !== 1 && !visable) {
            switchBlocked = true
            $(`.player-list-${currentPage}`).fadeOut(400, function () {
              currentPage--;
              $(`.player-list-${currentPage}`).fadeIn(100);
            });
            setTimeout(() => {
              switchBlocked = false
            }, 500)
            $(`#switcher-${currentPage}`).removeClass('active');
            $(`#switcher-${currentPage - 1}`).addClass('active');

          }
        }
        break;
      case 'close':
        $(".scoreboard").fadeOut(200);
        visable = false;
        break;

      case 'updatePlayerList':
        $('.player-list-1').empty();
        $('.player-list-2').empty();
        $('.player-list-3').empty();
        $('.player-list-4').empty();
        $('.player-list-5').empty();
        $('.player-list-6').empty();
        $('.player-list-7').empty();
        $('.player-list-8').empty();


        function capitalize (s) {
          return s && s[0].toUpperCase() + s.slice(1);
        }
        var showed = false;
        $('#player-count').text(event.data.players.length + "/" + 32)

        //mock
        // event.data.players = ["{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}", "{\"id\": \"1\", \"name\": \"PHX\", \"ping\": \"16\"}"];
        
        for (var i = 0; i < event.data.players.sort(mycomparator).length; i++) {
          var element = '<div id="id-pid" class="table-item" style="border-bottom:2px solid pingColor!important;"><div class="player-name-column col-md-12" style="margin-left: 0px!important;"><span class="badge badge-light">playerid</span><span class="col-md-6 pull-right" id="player-name">playername</span></div></div>';
          var arrayPlayers = JSON.parse(event.data.players.sort()[i]);
          var username = arrayPlayers['name'];
          if (username.length > 18) {
            username = username.substring(0, 18) + ".."
          }
          element = element.replace('playerid', arrayPlayers['id']);
          element = element.replace('pid', arrayPlayers['id']);
          element = element.replace('playername', username);
          if (i <= 32) {
            $(".player-list-1").append(element);
          } else {
            let list = ~~(i / 32) + 1;
            $(`.player-list-${list}`).append(element);
          }
        }

        break;




    }
  }, false);
});

function applyPingColor () {
  $('.player-list-1 tr').each(function () {
    $(this).find('td:nth-child(3),td:nth-child(6)').each(function () {
      var ping = $(this).html();
      var color = 'black';

      if (ping > 60 && ping < 85) {
        color = 'black';
      } else if (ping >= 86) {
        color = 'black';
      }

      $(this).css('color', color);
    });

  });
}

function updatePing (players) {

  jQuery.each(players, function (index, element) {
    if (element != null) {
      var color = 'black';
      if (element.ping > 60 && element.ping < 85) {
        color = 'black';
      } else if (element.ping >= 86) {
        color = 'black';
      }
      $('#id-' + element.id).css('border-bottom', '2px solid ' + color)
    }
  });
}

function sortPlayerList () {
  var table = $('#playerlist'),
    rows = $('tr:not(.heading)', table);

  rows.sort(function (a, b) {

    var keyA = $('td', a).eq(1).html();
    var keyB = $('td', b).eq(1).html();

    return (keyA - keyB);
  });

  rows.each(function (index, row) {
    table.append(row);
  });
}


