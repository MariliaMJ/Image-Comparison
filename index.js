const resemble = require('resemblejs');
const fs = require('fs');
const people = fs.readFileSync('./app/helpers/rgOne.jpg');
const people2 = fs.readFileSync('./app/helpers/rgFive.jpg');

resemble(people).compareTo(people2)
  .ignoreColors()
    .scaleToSameSize()
      .onComplete((data) => {
	console.log(data);
});