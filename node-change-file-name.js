var fs = require('fs');
var fileDirectory = __dirname
if (fs.existsSync(fileDirectory)) {
	fs.readdir(fileDirectory, function(err, files) {
		if (err) {
			console.log(err);
			return;
		}
		// console.log(files)
		files.forEach(function(filename) {
			if (filename.search(/\.(html)$/i) >= 0) {
				console.log('https://michaelhao25.github.io/5-3-eaho-1300/'+filename)
			}
		});
	});
} else {
	console.log(fileDirectory + "  Not Found!");
}
