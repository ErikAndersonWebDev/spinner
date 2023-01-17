let spin = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let delay = 0;
const spinning = function(arr) {
  for (let x of arr) {
    setTimeout(() => {
      process.stdout.write(`\r ${x}   `);
    }, delay += 200);
  }
}
spinning(spin);
