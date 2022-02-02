document.write('<!DOCTYPE html>');
document.write('<html>');
document.write('<head>');
document.write('<title>auto-ehallpass JS</title>');
document.write('<meta charset="UTF-8">');
document.write('</head>');
document.write('<body style="background-color:black;color:white;">');
document.write('<h1>auto-ehallpass JS version loaded</h1>');
document.write('<h2>Press E to activate the script</h2>');
document.write('<iframe height="600" width="800" id="InnerIframe" src="https://www.e-hallpass.com/createpass"></iframe>');
document.write('<p>made by <a href="https://github.com/zer0mania">zer0mania#4652</a></p>');
document.write('</body>');
document.write('</html>');

var pressed = false

document.onkeydown = function(e) {
switch (e.keyCode) {
case 69:
console.log('Key pressed!');
if (pressed) {
	console.log("key already pressed halt");
} else {
	pressed = true
	var delay = prompt('Delay (milliseconds) (leave empty for default):');
	if (delay) {
		console.log("value provided");
	} else {
		console.log("value not provided setting to default 100 milliseconds");
		delay = 100
	}
	var myInterval = setInterval(function() {
		$('#InnerIframe').contents().find('#bttbutton').trigger("click");
		console.log('bttbutton pressed!');
	}, delay);
}
}
};