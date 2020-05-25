  // zjh
  let zjh;
  //xky right
  let xky;

  zjh = 10;
  console.log(zjh * 2);
  console.log(zjh % 3);
  console.log(Math.floor(zjh / 3));

  xky = '20';
  console.log(zjh + xky);
  
  if (zjh == xky) {
    console.log ('true');
  } else {
    console.log ('false');
  }
  console.log (zjh == xky ? true : 'notEqual');
  if (zjh > xky) {
    console.log ('zjh');
  } else {
    console.log ('xky');
  }

  let score = 60;
  
  if (score >= 80) {
    console.log ('优秀');
  } else if (score >= 60) {
    console.log ('及格');
  } else {
    console.log ('不及格');
  }
  
  switch (Math.floor(score/10)) {
    case 10:
    case 9:
    case 8: console.log('优秀');break;
    case 7:
    case 6: console.log('及格');break;
    case 5: console.log('不及格');break;

  }

  let zzz = [];
  zzz = [1, 2, 3, 4, 5,];
  zzz[6] = 'string';
  console.log(zzz[5]);
  console.log (zzz.length);
  for ( let count = 0; count < zzz.length; count++) {
    console.log(zzz[count]);
  }
  
  let count = 0;
  let str = '';
  while ( count < zzz.length ) {
    str += 'zzz[' + count +']' + zzz[count]
    count++;
  }
  console .log (str);

  console.log('     ');
  
  function aaa(x) {
    console.log('Hello Worls!');
    return x;
  };

  function max(x, y) {
    return x > y ? x : y;
  }
  console.log(max(20,30));
  console.log(max(30,2310));
  let num1 = (20,30);
  let num2 = (30,2310);
  function pj(a, b, c, d, e) {
    console.log(1, 2, 3, 4, 5);
    
  }






