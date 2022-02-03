document.write('<!DOCTYPE html>');
document.write('<html>');
document.write('<head>');
document.write('<title>auto-ehallpass JS</title>');
document.write('<meta charset="UTF-8">');
document.write('<style>');
document.write('div {');
document.write('  display: flex;');
document.write('  justify-content: space-between;');
document.write('}');
document.write('</style>');
document.write('</head>');
document.write('<body style="background-color:black;color:white;">');
document.write('<h1>auto-ehallpass JS version loaded</h1>');
document.write('<h2 id="textArea">Press E to activate the script</h2>');
document.write('<div>')
document.write('<iframe height="600" width="800" id="InnerIframe" src="https://www.e-hallpass.com/createpass"></iframe>');
document.write('<img height="400" width="600" src="https://rivercity.wusd.k12.ca.us/pictures/Our-School/Maps-Parking-and-Permits/rchs_new_campus_labels.jpg" alt="Aerial view campus map with building labels" guid="4ef575c8-bac9-4bc9-8082-fddaded11bbf">');
document.write('</div>')
document.write('<p>made by <a href="https://github.com/zer0mania">zer0mania#4652</a></p>');
document.write('</body>');
document.write('</html>');

var pressed = false;
var retries = 0;

document.onkeydown = function(e) {
switch (e.keyCode) {
case 69:
console.log('Key pressed!');
if (pressed) {
	console.log("key already pressed halt");
} else {
	pressed = true;
	var delay = prompt('Delay (milliseconds) (leave empty for default):');
	if (delay) {
		console.log("value provided");
	} else {
		console.log("value not provided setting to default 100 milliseconds");
		delay = 100
	}
	var myInterval = setInterval(function() {
		$('#InnerIframe').contents().find('#bttbutton').trigger("click");
		retries = retries + 1
		document.getElementById("textArea").innerHTML = "Script is currently running at " + retries + " retries";
		console.log('bttbutton pressed!');
	}, delay);
}
}
};
