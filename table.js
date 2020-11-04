var getPicture=function(employee)
    {
        return employee.photo
    }


var drawTable=function(employees)
    {
        var rows=d3.select("#employeeTable tbody")
            .selectAll("tr")
            .data(employees)
            .enter()
            .append("tr")
    
        
        rows.append("td")
    .text(function(employee)
        {
            return employee.firstName;
        });
   
        
        
        rows.append("td")
        .text(function(employee)
            {
                return employee.lastName;
            });
   
        
        
        rows.append("td")
            .append("img")
            .attr("src",getPicture)
    
        
        
        rows.append("td")
        .text(function(employee)
            {
                return employee.title;
            });
   
        
        
        rows.append("td")
        .text(function(employee)
            {
                return employee.Department;
            });
    
        
        
        rows.append("td")
        .text(function(employee)
            {
                return employee.bio;
            });
   
        
        
        rows.append("td")
        .text(function(employee)
            {
                return employee.email;
            });
  
        
        
        rows.append("td")
        .text(function(employee)
            {
                return employee.phone;
            });

    }

var setBanner=function(message)
    {
        d3.select ("#banner")
            .text(message);
    }
