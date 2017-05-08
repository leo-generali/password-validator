(function test( ){
  var form = document.querySelector('.card__form');

  form.addEventListener('keyup', analyze );

  function analyze() {
    //To-add: Only do this is keypress is an alpha numeric value
    var password = document.querySelector('.card__form').value;
    var result = zxcvbn(password);
    var score = result.score;

    changeEmoji(score, password);
  }

  function changeEmoji(passwordScore, password) {
    var length = password.length || 0;
    console.log(length);
    var emoji = document.querySelector('.emoji');
    var emojiParent = document.querySelector('.card--ouput');
    var emojiReplacement = checkLength(length);
    var newEmojiElem = createNewEmoji(emojiReplacement);

    emojiParent.removeChild(emoji);
    emojiParent.appendChild(newEmojiElem);

    
    function checkLength(len) {
      if(len === 0) {
        return '❓';
      }else{
        return returnNewEmoji(passwordScore);
      }
    }

    function returnNewEmoji(rating) {
      if(rating === 0) {
       return '💩';
      }else if(rating === 1) {
       return '🙁';
      }else if(rating === 2) {
       return '😐';
      }else if(rating === 3) {
       return '🙂';
      }else {
       return '😍';
      }
    }

    function createNewEmoji(replacement) {
      var element = document.createElement('span');
      var text = document.createTextNode(replacement);
      element.appendChild(text);
      element.classList.add('emoji');
      return element;
    }    
  }

})(); 