"use strict";
let cnt=0;
let index;
function put_note(note){
  cnt++;
  if (cnt<10) {
    index = '0' + cnt;
  } else {
    index = cnt;
  };

  $('#note1' + index).removeClass();
  $('#note1' + index).addClass(note);

  let elem = document.getElementById("note1" + index);
  elem.style = "background:url(design/svg/note/" + note + ".svg); background-position: left " + (10 + cnt * 33 ) + "% top 0%; background-size: 60% auto; background-repeat:no-repeat;";
  const sound = new Audio("design/sound/" + note + ".wav");
  sound.currentTime = 0;
  sound.play();
};
