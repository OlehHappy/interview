// Javascript:
//
// Write a function that flattens a nested object into URLs, so that:
//
//  ```
//  {
//    index: {
//      about: {
//        team: true,
//        company: ['Jim', 'Barry']
//      }
//    }
//  }
//  ```
//
// Is transformed into:
//
// ```
// {
//   'index/about/team': true,
//   'index/about/company': ['Jim', 'Barry']
// }
// ```

var obj = {
   index: {
     about: {
       team: true,
       company: ['Jim', 'Barry']
     }
   }
};

function stringlify(obj) {
  var obj2 = {};

  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      for (var j in obj[p]) {
        if (obj[p].hasOwnProperty(j)) {
          for (var n in obj[p][j]) {
            var element = p + '/' + j + '/' + n;
            obj2[element] = obj[p][j][n];
          }
        }
      }
    }
  }

  return obj2;
}

var obj2 = stringlify(obj);
console.log(obj2);
