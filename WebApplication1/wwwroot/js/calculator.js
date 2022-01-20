$("#btnSend").click(function () {

    // Cast inputs into floats
    var assignments = parseFloat($("#Assignments").val());
    var projects = parseFloat($("#Projects").val());
    var quizzes = parseFloat($("#Quizzes").val());
    var exams = parseFloat($("#Exams").val());
    var intex = parseFloat($("#INTEX").val());

    // Sum up the grades
    numeric_grade = assignments + projects + quizzes + exams + intex

  
    if (numeric_grade >= 94) {
        letter_grade = "A";
    } else if (numeric_grade >= 90) {
        letter_grade = "A-";
    } else if (numeric_grade >= 87) {
        letter_grade = "B";
    } else if (numeric_grade >= 84) {
        letter_grade = "B+";
    } else if (numeric_grade >= 80) {
        letter_grade = "B-";
    } else if (numeric_grade >= 77) {
        letter_grade = "C+";
    } else if (numeric_grade >= 74) {
        letter_grade = "C";
    } else if (numeric_grade >= 70) {
        letter_grade = "C-";
    } else if (numeric_grade >= 67) {
        letter_grade = "D+";
    } else if (numeric_grade >= 64) {
        letter_grade = "D";
    } else if (numeric_grade >= 60) {
        letter_grade = "D-";
    } else {
        letter_grade = "I";
    }

    // Alert to print out 
    alert("This is your Final Grade: " + numeric_grade + " and your letter grade is " + letter_grade);
})