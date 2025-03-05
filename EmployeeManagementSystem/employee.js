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
console.log("UC2 - Emp Wage: " + empWage);

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
console.log("UC3 - Emp Wage: " + empWage);

// UC 4
const NUM_OF_WORKING_DAYS = 20;
empHrs = 0;

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) { 
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}

empWage = empHrs * WAGE_PER_HOUR;
console.log("UC4 - Total Hrs: " + empHrs + " Emp Wage: " + empWage);

// UC 5
const MAX_HRS_IN_MONTH = 100;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let workingDaysLimit = 10;

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < workingDaysLimit) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}

empWage = totalEmpHrs * WAGE_PER_HOUR;  
console.log("UC5 - Total Days: " + totalWorkingDays + 
    " Total Hrs: " + totalEmpHrs + 
    " Emp Wage: " + empWage);

// UC 6
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

const MAX_HOURS_IN_MONTH = 160;
const TOTAL_WORKING_DAYS = 20;
totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyWageArray = [];

while (totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < TOTAL_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let dailyHours = getWorkingHours(empCheck);
    
    totalEmpHrs += dailyHours;
    empDailyWageArray.push(calcDailyWage(dailyHours));
}

empWage = empDailyWageArray.reduce((total, dailyWage) => total + dailyWage, 0);
console.log("UC6 - Total Days: " + totalWorkingDays +
    " Total Hrs: " + totalEmpHrs +
    " Emp Wage: " + empWage);

// Print Daily Wages Array
console.log("UC6 - Daily Wages Array: ", empDailyWageArray);


// UC 7

// a. Calc total Wage using Array forEach or reduce method
let totalWage = empDailyWageArray.reduce((total, dailyWage) => total + dailyWage, 0);
console.log("UC7a - Total Employee Wage using reduce: " + totalWage);

// b. Show the Day along with Daily Wage using Array map helper function
let dailyWageWithDay = empDailyWageArray.map((wage, index) => `Day ${index + 1}: ${wage}`);
console.log("UC7b - Daily Wage with Day:");
console.log(dailyWageWithDay);

// c. Show Days when Full time wage of 160 were earned using filter function
let fullTimeWageDays = empDailyWageArray
    .map((wage, index) => ({ day: index + 1, wage }))
    .filter(record => record.wage === 160)
    .map(record => `Day ${record.day}`);
console.log("UC7c - Days with Full Time Wage of 160:");
console.log(fullTimeWageDays);

// d. Find the first occurrence when Full Time Wage was earned using find function
let firstFullTimeWageDay = empDailyWageArray.find(wage => wage === 160);
console.log("UC7d - First occurrence of Full Time Wage:", firstFullTimeWageDay);

// e. Check if Every Element of Full Time Wage is truly holding Full time wage
let allFullTimeWage = empDailyWageArray.every(wage => wage === 160);
console.log("UC7e - Is Every Entry a Full Time Wage? ", allFullTimeWage);

// f. Check if there is any Part Time Wage
let anyPartTimeWage = empDailyWageArray.some(wage => wage === 80);
console.log("UC7f - Is there any Part Time Wage? ", anyPartTimeWage);

// g. Find the number of days the Employee Worked
let numDaysWorked = empDailyWageArray.filter(wage => wage > 0).length;
console.log("UC7g - Number of Days Employee Worked:", numDaysWorked);
