const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//* Generate employee data object
const generateEmployee = (employeeId, supervisorId) => {
  return {
    EmployeeId: employeeId,
    EmployeeName: `Employee_${employeeId}`,
    SupervisorId: supervisorId,
  };
};

//* Create a JSON array with a given number of employees
const generateEmployeeData = (numOfEmployees) => {
  const employees = [];

  for (let i = 1; i <= numOfEmployees; i++) {
    const supervisorId = i === 1 ? null : getRandomInt(1, i);
    const employee = generateEmployee(i, supervisorId);
    employees.push(employee);
  }

  return employees;
};

//* Generate employee data
// const generatedEmployeeData = generateEmployeeData(100);
//* Dummy data
const employeeData = [
  { EmployeeId: 1, EmployeeName: "Employee_1", SupervisorId: null },
  { EmployeeId: 2, EmployeeName: "Employee_2", SupervisorId: 2 },
  { EmployeeId: 3, EmployeeName: "Employee_3", SupervisorId: 1 },
  { EmployeeId: 4, EmployeeName: "Employee_4", SupervisorId: 4 },
  { EmployeeId: 5, EmployeeName: "Employee_5", SupervisorId: 4 },
  { EmployeeId: 6, EmployeeName: "Employee_6", SupervisorId: 3 },
  { EmployeeId: 7, EmployeeName: "Employee_7", SupervisorId: 7 },
  { EmployeeId: 8, EmployeeName: "Employee_8", SupervisorId: 2 },
  { EmployeeId: 9, EmployeeName: "Employee_9", SupervisorId: 6 },
  { EmployeeId: 10, EmployeeName: "Employee_10", SupervisorId: 10 },
  { EmployeeId: 11, EmployeeName: "Employee_11", SupervisorId: 2 },
  { EmployeeId: 12, EmployeeName: "Employee_12", SupervisorId: 5 },
  { EmployeeId: 13, EmployeeName: "Employee_13", SupervisorId: 6 },
  { EmployeeId: 14, EmployeeName: "Employee_14", SupervisorId: 11 },
  { EmployeeId: 15, EmployeeName: "Employee_15", SupervisorId: 12 },
  { EmployeeId: 16, EmployeeName: "Employee_16", SupervisorId: 6 },
  { EmployeeId: 17, EmployeeName: "Employee_17", SupervisorId: 9 },
  { EmployeeId: 18, EmployeeName: "Employee_18", SupervisorId: 14 },
  { EmployeeId: 19, EmployeeName: "Employee_19", SupervisorId: 6 },
  { EmployeeId: 20, EmployeeName: "Employee_20", SupervisorId: 8 },
  { EmployeeId: 21, EmployeeName: "Employee_21", SupervisorId: 11 },
  { EmployeeId: 22, EmployeeName: "Employee_22", SupervisorId: 18 },
  { EmployeeId: 23, EmployeeName: "Employee_23", SupervisorId: 6 },
  { EmployeeId: 24, EmployeeName: "Employee_24", SupervisorId: 18 },
  { EmployeeId: 25, EmployeeName: "Employee_25", SupervisorId: 12 },
  { EmployeeId: 26, EmployeeName: "Employee_26", SupervisorId: 11 },
  { EmployeeId: 27, EmployeeName: "Employee_27", SupervisorId: 5 },
  { EmployeeId: 28, EmployeeName: "Employee_28", SupervisorId: 26 },
  { EmployeeId: 29, EmployeeName: "Employee_29", SupervisorId: 19 },
  { EmployeeId: 30, EmployeeName: "Employee_30", SupervisorId: 5 },
  { EmployeeId: 31, EmployeeName: "Employee_31", SupervisorId: 17 },
  { EmployeeId: 32, EmployeeName: "Employee_32", SupervisorId: 4 },
  { EmployeeId: 33, EmployeeName: "Employee_33", SupervisorId: 31 },
  { EmployeeId: 34, EmployeeName: "Employee_34", SupervisorId: 5 },
  { EmployeeId: 35, EmployeeName: "Employee_35", SupervisorId: 8 },
  { EmployeeId: 36, EmployeeName: "Employee_36", SupervisorId: 27 },
  { EmployeeId: 37, EmployeeName: "Employee_37", SupervisorId: 8 },
  { EmployeeId: 38, EmployeeName: "Employee_38", SupervisorId: 5 },
  { EmployeeId: 39, EmployeeName: "Employee_39", SupervisorId: 2 },
  { EmployeeId: 40, EmployeeName: "Employee_40", SupervisorId: 23 },
  { EmployeeId: 41, EmployeeName: "Employee_41", SupervisorId: 21 },
  { EmployeeId: 42, EmployeeName: "Employee_42", SupervisorId: 3 },
  { EmployeeId: 43, EmployeeName: "Employee_43", SupervisorId: 41 },
  { EmployeeId: 44, EmployeeName: "Employee_44", SupervisorId: 27 },
  { EmployeeId: 45, EmployeeName: "Employee_45", SupervisorId: 9 },
  { EmployeeId: 46, EmployeeName: "Employee_46", SupervisorId: 32 },
  { EmployeeId: 47, EmployeeName: "Employee_47", SupervisorId: 8 },
  { EmployeeId: 48, EmployeeName: "Employee_48", SupervisorId: 11 },
  { EmployeeId: 49, EmployeeName: "Employee_49", SupervisorId: 22 },
  { EmployeeId: 50, EmployeeName: "Employee_50", SupervisorId: 2 },
  { EmployeeId: 51, EmployeeName: "Employee_51", SupervisorId: 7 },
  { EmployeeId: 52, EmployeeName: "Employee_52", SupervisorId: 30 },
  { EmployeeId: 53, EmployeeName: "Employee_53", SupervisorId: 22 },
  { EmployeeId: 54, EmployeeName: "Employee_54", SupervisorId: 7 },
  { EmployeeId: 55, EmployeeName: "Employee_55", SupervisorId: 34 },
  { EmployeeId: 56, EmployeeName: "Employee_56", SupervisorId: 35 },
  { EmployeeId: 57, EmployeeName: "Employee_57", SupervisorId: 40 },
  { EmployeeId: 58, EmployeeName: "Employee_58", SupervisorId: 40 },
  { EmployeeId: 59, EmployeeName: "Employee_59", SupervisorId: 7 },
  { EmployeeId: 60, EmployeeName: "Employee_60", SupervisorId: 21 },
  { EmployeeId: 61, EmployeeName: "Employee_61", SupervisorId: 18 },
  { EmployeeId: 62, EmployeeName: "Employee_62", SupervisorId: 7 },
  { EmployeeId: 63, EmployeeName: "Employee_63", SupervisorId: 35 },
  { EmployeeId: 64, EmployeeName: "Employee_64", SupervisorId: 43 },
  { EmployeeId: 65, EmployeeName: "Employee_65", SupervisorId: 65 },
  { EmployeeId: 66, EmployeeName: "Employee_66", SupervisorId: 50 },
  { EmployeeId: 67, EmployeeName: "Employee_67", SupervisorId: 6 },
  { EmployeeId: 68, EmployeeName: "Employee_68", SupervisorId: 46 },
  { EmployeeId: 69, EmployeeName: "Employee_69", SupervisorId: 5 },
  { EmployeeId: 70, EmployeeName: "Employee_70", SupervisorId: 9 },
  { EmployeeId: 71, EmployeeName: "Employee_71", SupervisorId: 49 },
  { EmployeeId: 72, EmployeeName: "Employee_72", SupervisorId: 7 },
  { EmployeeId: 73, EmployeeName: "Employee_73", SupervisorId: 1 },
  { EmployeeId: 74, EmployeeName: "Employee_74", SupervisorId: 64 },
  { EmployeeId: 75, EmployeeName: "Employee_75", SupervisorId: 48 },
  { EmployeeId: 76, EmployeeName: "Employee_76", SupervisorId: 47 },
  { EmployeeId: 77, EmployeeName: "Employee_77", SupervisorId: 76 },
  { EmployeeId: 78, EmployeeName: "Employee_78", SupervisorId: 18 },
  { EmployeeId: 79, EmployeeName: "Employee_79", SupervisorId: 78 },
  { EmployeeId: 80, EmployeeName: "Employee_80", SupervisorId: 47 },
  { EmployeeId: 81, EmployeeName: "Employee_81", SupervisorId: 35 },
  { EmployeeId: 82, EmployeeName: "Employee_82", SupervisorId: 35 },
  { EmployeeId: 83, EmployeeName: "Employee_83", SupervisorId: 70 },
  { EmployeeId: 84, EmployeeName: "Employee_84", SupervisorId: 34 },
  { EmployeeId: 85, EmployeeName: "Employee_85", SupervisorId: 26 },
  { EmployeeId: 86, EmployeeName: "Employee_86", SupervisorId: 73 },
  { EmployeeId: 87, EmployeeName: "Employee_87", SupervisorId: 71 },
  { EmployeeId: 88, EmployeeName: "Employee_88", SupervisorId: 41 },
  { EmployeeId: 89, EmployeeName: "Employee_89", SupervisorId: 20 },
  { EmployeeId: 90, EmployeeName: "Employee_90", SupervisorId: 16 },
  { EmployeeId: 91, EmployeeName: "Employee_91", SupervisorId: 21 },
  { EmployeeId: 92, EmployeeName: "Employee_92", SupervisorId: 9 },
  { EmployeeId: 93, EmployeeName: "Employee_93", SupervisorId: 28 },
  { EmployeeId: 94, EmployeeName: "Employee_94", SupervisorId: 76 },
  { EmployeeId: 95, EmployeeName: "Employee_95", SupervisorId: 48 },
  { EmployeeId: 96, EmployeeName: "Employee_96", SupervisorId: 25 },
  { EmployeeId: 97, EmployeeName: "Employee_97", SupervisorId: 23 },
  { EmployeeId: 98, EmployeeName: "Employee_98", SupervisorId: 90 },
  { EmployeeId: 99, EmployeeName: "Employee_99", SupervisorId: 11 },
  { EmployeeId: 100, EmployeeName: "Employee_100", SupervisorId: 7 },
];

//* Function to find the employee with the maximum number of direct reportees
const findMaxDirectReportees = (data) => {
  let maxReporteesCount = 0;
  let maxReporteesEmployee = null;

  for (const employee of data) {
    const directReportees = data.filter(
      (e) => e.SupervisorId === employee.EmployeeId
    );
    const reporteesCount = directReportees.length;

    if (reporteesCount > maxReporteesCount) {
      maxReporteesCount = reporteesCount;
      maxReporteesEmployee = employee;
    }
  }
  return { maxReporteesEmployee, count: maxReporteesCount };
};

//* Function to find the employee with the maximum number of cumulative reportees
const findMaxCumulativeReportees = (data) => {
  const visitedEmployees = new Set();

  const countCumulativeReportees = (employee) => {
    // Check if the employee has been visited to avoid infinite loops
    if (visitedEmployees.has(employee.EmployeeId)) {
      return 0;
    }

    visitedEmployees.add(employee.EmployeeId);

    const directReportees = data.filter(
      (e) => e.SupervisorId === employee.EmployeeId
    );
    let cumulativeCount = directReportees.length;

    for (const reportee of directReportees) {
      cumulativeCount += countCumulativeReportees(reportee);
    }
    return cumulativeCount;
  };

  let maxCumulativeCount = 0;
  let maxCumulativeEmployee = null;

  for (const employee of data) {
    visitedEmployees.clear(); // Clear visited employees for each iteration
    const cumulativeCount = countCumulativeReportees(employee);

    if (cumulativeCount > maxCumulativeCount) {
      maxCumulativeCount = cumulativeCount;
      maxCumulativeEmployee = employee;
    }
  }

  return { maxCumulativeEmployee, count: maxCumulativeCount };
};

//* Function to print hierarchy for a given employee id
const printHierarchy = (employeeId, data, visited = new Set(), level = 0) => {
  const employee = data.find((e) => e.EmployeeId === employeeId);

  if (employee) {
    if (visited.has(employee.EmployeeId)) {
      // Prevent circular reference
      console.log(
        "  ".repeat(level) + `(${employee.EmployeeName} - Circular Reference)`
      );
      return;
    }

    console.log(
      "   ".repeat(level) +
        `${employee.EmployeeName} (ID: ${employee.EmployeeId})`
    );

    visited.add(employee.EmployeeId);

    const directReportees = data.filter((e) => e.SupervisorId === employeeId);
    for (const reportee of directReportees) {
      printHierarchy(reportee.EmployeeId, data, visited, level + 1);
    }
  } else {
    console.log(`Employee with ID ${employeeId} not found.`);
  }
};

//* Employee with the maximum number of direct reportees
const maxDirectReporteesEmployee = findMaxDirectReportees(employeeData);
//* Employee with the maximum number of cumulative reportees
const maxCumulativeReporteesEmployee = findMaxCumulativeReportees(employeeData);

console.log(
  "Employee with maximum direct reportees:",
  maxDirectReporteesEmployee
);
console.log(
  "Employee with maximum cumulative reportees:",
  maxCumulativeReporteesEmployee
);

//* Print heirarchy for employee with employeeID
printHierarchy(2, employeeData);
