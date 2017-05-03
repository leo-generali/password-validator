(function test( ){
  var form = document.querySelector('.card__form');

  form.addEventListener('keyup', analyze );

  function analyze() {
    var password = document.querySelector('.card__form').value;
    var result = zxcvbn(password);
    var score = result.score;
  
  }

})();