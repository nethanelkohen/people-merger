var fs = require("fs");
var people1 = require("./people1.json");
var people2 = require("./people2.json");

var merge = people1.concat(people2).sort();
var string = "";

for (var i = 0; i < merge.length; i++) {
	string += merge[i] + "\n";
}

fs.writeFile("./sorted_people.txt", string, function(err) {
	if (err) {
		console.error("Error");
		console.error(err);
		return;
	}
	console.log("Sorted People file created");
});
