const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "4578",
      "tasks": [
        {
          "taskTitle": "Prepare Monthly Report",
          "taskDescription": "Compile the financial report for January.",
          "taskDate": "2025-01-15",
          "category": "Finance",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Client Meeting",
          "taskDescription": "Attend the quarterly review meeting with Client A.",
          "taskDate": "2025-01-20",
          "category": "Meetings",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "System Upgrade",
          "taskDescription": "Upgrade the internal software system to version 2.5.",
          "taskDate": "2025-01-28",
          "category": "IT",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "4578",
      "tasks": [
        {
          "taskTitle": "Market Research",
          "taskDescription": "Analyze the competitors' market strategies.",
          "taskDate": "2025-01-14",
          "category": "Research",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Email Campaign",
          "taskDescription": "Design and send out the promotional email for February.",
          "taskDate": "2025-01-21",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Update Website",
          "taskDescription": "Add new product details to the company website.",
          "taskDate": "2025-01-25",
          "category": "Web Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "4578",
      "tasks": [
        {
          "taskTitle": "Customer Feedback",
          "taskDescription": "Gather and summarize customer feedback from last quarter.",
          "taskDate": "2025-01-18",
          "category": "Customer Support",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Inventory Check",
          "taskDescription": "Perform a full inventory audit for the warehouse.",
          "taskDate": "2025-01-19",
          "category": "Operations",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "4578",
      "tasks": [
        {
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Create slides for the board meeting.",
          "taskDate": "2025-01-22",
          "category": "Administration",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Team Training",
          "taskDescription": "Organize a training session on time management.",
          "taskDate": "2025-01-30",
          "category": "Training",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "4578",
      "tasks": [
        {
          "taskTitle": "Bug Fixing",
          "taskDescription": "Resolve issues reported in the bug tracker.",
          "taskDate": "2025-01-26",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Social Media Updates",
          "taskDescription": "Schedule posts for the company's LinkedIn account.",
          "taskDate": "2025-01-23",
          "category": "Social Media",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  ]


        
        const admin=[ {
              "id": 1,
              "email": "admin@example.com",
              "password": "4578"
            }
        ]
          
export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
}
  