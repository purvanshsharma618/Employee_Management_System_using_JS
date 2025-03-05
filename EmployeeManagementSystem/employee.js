// UC 1
const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck === IS_ABSENT) {
    console.log("Employee is Absent..");
} else {
    console.log("Employee is Present..");
}

// UC 2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;

switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);

// UC 3
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);

// UC 4
const NUM_OF_WORKING_DAYS = 20;
empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {  // Fixed loop variable
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs: " + empHrs + " Emp Wage: " + empWage);

// UC 5
const MAX_HRS_IN_MONTH = 100;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let workingDaysLimit = 10; // Changed from reassigned const to a let

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < workingDaysLimit) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}

empWage = totalEmpHrs * WAGE_PER_HOUR;  // Fixed empWage calculation
console.log("UC5 - Total Days: " + totalWorkingDays + 
    " Total Hrs: " + totalEmpHrs + 
    " Emp Wage: " + empWage);
