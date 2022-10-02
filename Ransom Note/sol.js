/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let used = {};
  for (let i = 0; i < ransomNote.length; i++) {
    if (used[ransomNote[i]] === true) continue;
    let a = 0;
    for (let j = 0; j < ransomNote.length; j++) {
      if (ransomNote[i] === ransomNote[j]) a++;
    }

    let b = 0;
    for (let j = 0; j < magazine.length; j++) {
      if (ransomNote[i] === magazine[j]) b++;
    }

    //console.log(`a${a} b${b}`);

    if (a > b) return false;
    used[ransomNote[i]] = true;
  }
  return true;
};
