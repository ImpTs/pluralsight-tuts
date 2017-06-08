var book = require("../lib/grades").book;
exports["setUp"]= function(callback){
    book.reset();
    callback();
};

exports["Can add new grade"] = function (test){
    book.addGrade(90);
    var count = book.getCountofGrades();
    test.equal(count, 1);d
    test.done();
};

exports["Can average grades"] = function(test) {
    book.addGrade(100);
    book.addGrade(50);
    var average = book.getAverage();
    console.log(average)
    test.equal(average, 75);
    test.done();
};

exports["Can compute letter grade of A"] = function(test) {
    book.addGrade(100);
    book.addGrade(90);
    var result = book.getLetterGrade();
    test.equal(result, 'A');
    test.done();
}
