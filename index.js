var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Joseph96-",
    database: "trackemployees_db"
})

connection.connect(function(err){
    if(err){
        throw err
    }
    console.log("Connected as id " + connection.threadId + "\n");
    startPrompt();
})

// Set the inquirer prompt to ask the user
function startPrompt(){
    inquirer.prompt([
        {
            name:"userChoice",
            message:"What would you like to do?",
            type:"list",
            choices:["View All Employees", "View All Employees by Department", "View All Employess by Manager", "View All Roles", "View All Departments", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager", "Add Role", "Add Department", "Remove Role", "Remove Department", "Exit"]
        }
    ]).then(function(response){
        console.log(response);
        // connection.end();
        if(response.userChoice === "View All Employees"){
            viewAllEmployees();
        } else if (response.userChoice === "View All Employees by Department"){
            viewAllEmployeesByDepartment();
        } else if (response.userChoice === "View All Employess by Manager"){
            viewAllEmployeesByManager();
        } else if (response.userChoice === "View All Roles"){
            viewAllRoles();
        } else if (response.userChoice === "View All Departments"){
            viewAllDepartments();
        } else if (response.userChoice === "Add Employee"){
            addEmployee();
        } else if (response.userChoice === "Add Role"){
            addRole();
        } else if (response.userChoice === "Add Department"){
            addDepartment();
        } else if (response.userChoice === "Remove Employee"){
            removeEmployee();
        } else if (response.userChoice === "Update Employee Role"){
            updateEmployeeRole();
        } else if (response.userChoice === "Update Employee Manager"){
            updateEmployeeManager();
        } else if (response.userChoice === "Remove Role"){
            removeRole();
        } else if (response.userChoice === "Remove Department"){
            removeDepartment();
        } else if (response.userChoice === "Exit"){
            connection.end();
        } 
    })
}

// Set view all employees function
function viewAllEmployees(){
    // console.log("View All Employees")
    // ================================
    // connection.query("SELECT first_name, last_name, title, department, salary, manager FROM employee JOIN", function(err){
    //     if(err) {
    //         throw err
    //     }
    //     console.log("Success!!");

    //     // Keep asking user prompts
    //     startPrompt();
    // })
}

// Set view all employees by department function
function viewAllEmployeesByDepartment(){
    console.log("View All Employees By Department")
    // connection.query("SELECT first_name, last_name, department FROM ?",
    // {

    // }, 
    // function(err){
    //     if(err){
    //         throw err
    //     }
    //     console.log("Success!!")
        
    //     // Keep asking user prompts
    //     startPrompt();
    // })
}

// Set view all employees by manager function
function viewAllEmployeesByManager(){
    console.log("All Employees By Manager");
    // connection.query("SELECT first_name, last_name, manager_id FROM ?",
    // {

    // }, function(err){
    //     if(err){
    //         throw err
    //     }
    //     console.log("Success!!")
        
    //     // Keep asking user prompts
    //     startPrompt();
    // })
}

// Set view all roles function
function viewAllRoles(){
    // console.log("All Roles");
    connection.query("SELECT * FROM role", function(err){
        if(err){
            throw err
        }
        console.log("Success!!")
        
        // Keep asking user prompts
        startPrompt();
    })
}

// Set view all roles function
function viewAllDepartments(){
    // console.log("All Roles");
    connection.query("SELECT * FROM department", function(err){
        if(err){
            throw err
        }
        console.log("Success!!")
        
        // Keep asking user prompts
        startPrompt();
    })
}

// Set add employee function
function addEmployee(){
    inquirer.prompt([
        {
            name:"addFirstName",
            message:"What's the employee first name?",
        },
        {
            name:"addLastName",
            message:"What's the employee last name?",
        },
        {
            name:"addRoleID",
            message:"What's the employee role id?",
        },
        {
            name:"addManagerID",
            message:"What's the employee manager id?",
        },
    ]).then(function(response){
        // console.log(response);
        connection.query("INSERT INTO employee SET ?",
        {
            first_name: response.addFirstName,
            last_name: response.addLastName,
            role_id: response.addRole,
            manager_id: response.addManagerID
        }),
        function(err){
            if(err){
                throw err
            }
            console.log("Successfully added an employee to our database!")

            // Keep asking user prompts
            startPrompt();
        }
    })
}

// Set add role function
function addRole(){
    inquirer.prompt([
        {
            name:"addTitle",
            message:"What's the role title that you would like to add?"
        },
        {
            name:"addSalary",
            message:"What's the salary of this role?"
        },
        {
            name:"addDepartmentID",
            message:"What's the department ID of this role?"
        },
    ]).then(function(response){
        // console.log(response);
        connection.query("INSERT INTO role SET ?", 
        {
            title: response.addTitle,
            salary: response.addSalary,
            department_id: response.addDepartmentID
        }),
        function(err){
            if(err){
                throw err
            }
            console.log("Successfully added role to our database!")
            
            // Keep asking user prompts
            startPrompt();
        }
    })
}

// Set add department function
function addDepartment(){
    inquirer.prompt([
        {
            name:"addDepartmentName",
            message:"What's the department name that you would like to add?"
        },
    ]).then(function(response){
        // console.log(response);
        connection.query("INSERT INTO department SET ?",
        {
            name: response.addDepartmentName
        }),
        function(err){
            if(err){
                throw err
            }
            console.log("Successfully added a department to our database!")
            
            // Keep asking user prompts
            startPrompt();
        }
    })

}

// Set update employee role function
function updateEmployeeRole(){
    // console.log("Update Employee Role");
    inquirer.prompt([
        {
            name:"updateTitle",
            message:"What's the new title role?"
        },
        {
            name:"updateSalary",
            message:"What's the new salary?"
        },
        {
            name:"updateDepartmentId",
            message:"What's the new department ID?"
        },
    ]).then(function(response){
        // console.log(response);
        connection.query("UPDATE role SET ? WHERE ?",
        [
            {title: response.updateTitle},
            {salary: response.updateSalary},
            {department_id: response.updateDepartmentId}
        ],
        function(err){
            if(err){
                throw err
            }
            console.log("Successfully update employee role!")
            
            // Keep asking user prompts
            startPrompt();
        })
    })
}

// Set update employee manager function
function updateEmployeeManager(){
    console.log("Update Employee Manager");
    // inquirer.prompt([
    //     {
    //         name:"updateFirstName",
    //         message:"What's the new manager first name?"
    //     },
    //     {
    //         name:"updateLastName",
    //         message:"What's the new manager last name?"
    //     },
    //     {
    //         name:"updateRoleId",
    //         message:"What's the new manager role id?"
    //     },
    //     {
    //         name:"updateManagerId",
    //         message:"What's the new manager ID?"
    //     },
    // ]).then(function(response){
    //     // console.log(response);
    //     connection.query("UPDATE employee SET ? WHERE ?",
    //     [
    //         {first_name: response.updateFirstName},
    //         {last_name: response.updateLastName},
    //         {role_id: response.updateRoleId},
    //         {manager_id: response.updateManagerId}
    //     ],
    //     function(err){
    //         if(err){
    //             throw err
    //         }
    //         console.log("Successfuuly update the employee manager!")

    //         // Keep asking user prompts
    //         startPrompt();
    //     })
    // })
}

// Set remove employee function
function removeEmployee(){
    console.log("Remove Employee");
    // inquirer.prompt([
    //     {
    //         name:"removeFirstName",
    //         message:"Please put employee first name"
    //     },
    //     {
    //         name:"removeLastName",
    //         message:"Please put employee last name"
    //     },
    // ]).then(function(response){
    //     console.log(response);
    //     connection.query("DELETE FROM employee WHERE ?", 
    //     {
    //         first_name: response.removeFirstName,
    //         last_name: response.removeLastName
    //     }, 
    //     function(err){
    //     if(err){
    //         throw err
    //     }
    //     console.log("Successfully remove an employee from our database!")
        
    //     // Keep asking user prompts
    //     startPrompt();
    // })
    // })
}

// Set remove role function
function removeRole(){
    console.log("Remove Role!");
    // inquirer.prompt([
    //     {
    //         name:"removeTitle",
    //         message:"What's the role title that you would like to remove?"
    //     },
    // ]).then(function(response){
    //     console.log(response);
    //     connection.query("DELETE FROM role WHERE ?",
    //     [
    //         {title: removeTitle}
    //     ], function(err){
    //         if(err){
    //             throw err
    //         }
    //         console.log("Successfully remove the role from our database!")
            
    //         // Keep asking user prompts
    //         startPrompt();
    //     })
    // })
}

// Set remove department function
function removeDepartment(){
    console.log("Remove Department!")
    // inquirer.prompt([
    //     {
    //         name:"removeDepartment",
    //         message:"What department that you would like to remove?"
    //     },
    // ]).then(function(response){
    //     console.log(response);
    //     connection.query("DELETE FROM department WHERE ?",
    //     [
    //         {name: response.removeDepartment},
    //     ],
    //     function(err){
    //         if(err){
    //             throw err
    //         }
    //         console.log("Successfully removed")

    //         // Keep asking user prompts
    //         startPrompt();
    //     })
    // })
}