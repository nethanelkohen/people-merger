var fs = require("fs");
var people1 = require("./people1.json");
var people2 = require("./people2.json");

var merge = people1.concat(people2).sort();
merge.join("\n");

fs.writeFile("./sorted_people.txt", merge, function(err) {
	if (err) {
		console.error("Error");
		console.error(err);
		return;
	}
	console.log("Sorted People file created");
});
