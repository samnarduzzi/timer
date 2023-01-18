const alarmTime = function() {
  const alarms = process.argv.slice(2);
// use slice to get rid of first two command line arguments in array (path to node and path to js file)
if (alarms.length === 0) {
  console.log("No alarms");
  return;
}
  for (const alarm of alarms) {
    if (isNaN(alarm) || alarm < 0) {
      console.log("SKIP");
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log("BEEP!")
    }, alarm * 1000)
  }
}
alarmTime();