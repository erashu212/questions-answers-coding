// run `node index.js` in the terminal

const isEven = (num) => num % 2 === 0;

const generatePalindrome = (str) => {
  const len = str.length;
  if (len % 2 === 0) return null;
  const charsMap = str.split('').reduce((acc, ch) => {
    return {
      ...acc,
      [ch]: (acc[ch] || 0) + 1,
    };
  }, {});
  console.log('charsMap', charsMap);
  let results = ['', '', ''];
  for (const [ch, count] of Object.entries(charsMap)) {
    if (!isEven(count)) {
      if (results[1] !== '') return null;
      results[1] = ch.repeat(count);
    } else {
      results[0] += ch.repeat(count / 2);
      results[2] += ch.repeat(count / 2);
    }
  }
  console.log('results', results.join(''));
};

generatePalindrome('hollo');
