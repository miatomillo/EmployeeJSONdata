var employeePromise= d3.json("employee.json");
var successFCN= function(employeeData)
{
    console.log(employeeData);
}
var failFCN= function(employee)
employeePromise.then(successFCN, failFCN)