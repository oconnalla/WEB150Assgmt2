var sumFunc = function(){
  var userName;
  while (!userName){
    userName = prompt('Let\'s play the sum game. Please enter your name');
  }
  if(userName !== ''){
    var sum1 = parseInt(prompt('Enter first number'));
    var sum2 = parseInt(prompt('Enter second number'));
    var totaled =(sum1 + sum2);
    var totalEl = document.getElementById('total');
    console.log(typeof totalEL);
    totalEl.textContent = 'Hi, ' + userName + '! The sum of ' + sum1 + ' + ' + sum1 + ' is ' + totaled;
  }
};

sumFunc();
