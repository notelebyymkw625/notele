"use strict";
function sing(index){
  let note;
  const sound = new Array();
  index = index + '0';

  for (let i=1; i<9; i++) {
    if (i===10) {
      index.slice(0,-1);
    };
    note = document.getElementById('note' + index + i).className;
    if (note) {
      sound.push(new Audio("design/sound/" + note + ".wav"));
    }
  };

  for (let k=0; k<sound.length; k++) {
    if (k===0) {
      sound[k].currentTime = 0;
      sound[k].play();
    } else {
      sound[k-1].addEventListener("ended", function(e) {
        sound[k].currentTime = 0;
        sound[k].play();
      });
    };
  };
};
