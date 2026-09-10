const fs = require('fs');
let css = fs.readFileSync('src/components/SudokuGame.css', 'utf8');
css = css.replace(/([0-9.]+)rem/g, (match, p1) => {
  return (parseFloat(p1) * 10) + 'px';
});
fs.writeFileSync('src/components/SudokuGame.css', css);
