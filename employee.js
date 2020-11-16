{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT) {
        console.log("Employee is Absent");
    } else {
        console.log("Employee is Present");
    }
}

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_WORKING_HRS = 160;

function getWorkingHrs(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HRS;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
        default:
            return 0;
    }
}

// calculating working hours for month
let empHrs = 0;
for (var i = 0; i < NUM_OF_WORKING_DAYS; i++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHrs(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total hrs: " + empHrs + " Emp wage : " + empWage);

// calculating working hours till max working days and hours
// storing daily wages in an array
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empWageArr = new Array(); // daily wage array
while (totalEmpHrs < MAX_WORKING_HRS && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHrs(empCheck);
    totalEmpHrs += empHrs;
    empWageArr.push(calcDailyWage(empHrs));
}
let employeeWage = calcDailyWage(totalEmpHrs);
console.log("Total hrs : " + totalEmpHrs + " Total Employee Wage : " + employeeWage);
console.log("Employee wages array : " + empWageArr)