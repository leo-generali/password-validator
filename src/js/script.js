(function test( ){
  var form = document.querySelector('.card__form');

  form.addEventListener('keyup', analyze );

  function analyze() {
    //To-add: Only do this is keypress is an alpha numeric value
    var password = document.querySelector('.card__form').value;
    var result = zxcvbn(password);
    var score = result.score;
    changeEmoji(score);
  }

  function changeEmoji(passwordScore) {
    console.log(passwordScore);
    var emoji = document.querySelector('.emoji');
    var emojiParent = document.querySelector('.card--ouput');
    var remplacementEmoji;

    if(passwordScore = 0) {
     remplacementEmoji = badEmoji();
    }else if(passwordScore = 1) {
     remplacementEmoji = badMediumEmoji();
    }else if(passwordScore = 2) {
     remplacementEmoji = mediumEmoji();
    }else if(passwordScore = 3) {
     remplacementEmoji = mediumGoodEmoji();
    }else {
     remplacementEmoji = goodEmoji();
    };

    emojiParent.removeChild(emoji);

    console.log(remplacementEmoji);

    function badEmoji() {
      return document.createTextNode('💩');
    }

    function badMediumEmoji() {
      return document.createTextNode('🙁');
    }

    function mediumEmoji() {
      return document.createTextNode('😐');
    }

    function mediumGoodEmoji() {
      return document.createTextNode('🙂');
    }

    function goodEmoji() {
      return document.createTextNode('😍');
    }
    
  }

})();