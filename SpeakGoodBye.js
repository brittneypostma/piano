
(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    consol.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;

}) (window);
