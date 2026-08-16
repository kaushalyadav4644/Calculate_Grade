function calculateGrade() {
  // Get student name
    let studentName =
        document.getElementById("studentName").value
    // Convert input values from String to Number
    let mark1 =
        Number(document.getElementById("sub1").value);

    let mark2 =
        Number(document.getElementById("sub2").value);

    let mark3 =
        Number(document.getElementById("sub3").value);

    let mark4 =
        Number(document.getElementById("sub4").value);

    let mark5 =
        Number(document.getElementById("sub5").value);


    let marks = [
        mark1,
        mark2,
        mark3,
        mark4,
        mark5
    ];

    if (
        studentName === "" ||
        marks.some(mark => isNaN(mark))
    ) {

        alert("Please enter all details.");

        return;
    }


    let total = 0;

    for (let i = 0; i < marks.length; i++) {

        // Addition operator
        total = total + marks[i];
    }


    for (let i = 0; i < marks.length; i++) {

        if (marks[i] < 0 || marks[i] > 100) {

            alert(
                "Marks must be between 0 and 100."
            );

            return;
        }
    }

    // Division operator
    let average = total / marks.length;


 
    let grade = "F";

    let status = "Fail";


    if (average >= 90) {

        grade = "A+";

    }
    else if (average >= 80) {

        grade = "A";

    }
    else if (average >= 70) {

        grade = "B";

    }
    else if (average >= 60) {

        grade = "C";

    }
    else if (average >= 50) {

        grade = "D";

    }
    else {

        grade = "F";
    }


    let passed = true;


    for (let i = 0; i < marks.length; i++) {

        if (marks[i] < 40) {

            passed = false;

            break;
        }
    }


    if (passed) {

        status = "Pass";

    }
    else {

        status = "Fail";
    }


    let result = document.getElementById("result");

    result.style.display = "block";


    result.innerHTML = `

        <h2>Student Result</h2>

        <p>
            <b>Name:</b>
            ${studentName}
        </p>

        <p>
            <b>Total:</b>
            ${total} / 500
        </p>

        <p>
            <b>Average:</b>
            ${average.toFixed(2)}
        </p>

        <p>
            <b>Grade:</b>
            ${grade}
        </p>

        <p>
            <b>Status:</b>

            <span class="${status === "Pass"
                ? "pass"
                : "fail"}">

                ${status}

            </span>

        </p>
    `;
}

function resetForm() {

    // Clear all input fields
    document.getElementById("studentName").value = "";

    document.getElementById("sub1").value = "";
    document.getElementById("sub2").value = "";
    document.getElementById("sub3").value = "";
    document.getElementById("sub4").value = "";
    document.getElementById("sub5").value = "";


    // Hide result
    document.getElementById("result").style.display = "none";
}