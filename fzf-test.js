var spawn = require('child_process').spawn;
var entries = ['things', 'I', 'want', 'to', 'search'].join('\n');

var fzf = spawn(`echo "${entries}" | fzf`, {
  stdio: ['inherit', 'pipe', 'inherit'],
  shell: true
});

fzf.stdout.setEncoding('utf-8');

fzf.stdout.on('readable', function() {
  var value = fzf.stdout.read();

  if (value !== null) {
    console.log(value);
  }
});
