localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "e@e.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Dashboard UI",
        description: "Create responsive admin dashboard layout",
        date: "2026-01-20",
        category: "UI/UX"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix Login Bug",
        description: "Resolve authentication validation issue",
        date: "2026-01-21",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "API Integration",
        description: "Connect frontend with employee API",
        date: "2026-01-18",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    firstName: "Amit",
    email: "employee2@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Task Form",
        description: "Build task creation form component",
        date: "2026-01-22",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "CSS Styling",
        description: "Improve overall UI styling",
        date: "2026-01-17",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Database Connection",
        description: "Failed to connect MongoDB server",
        date: "2026-01-16",
        category: "Database"
      }
    ]
  },

  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Employee CRUD",
        description: "Implement create and update employee features",
        date: "2026-01-23",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Navbar Component",
        description: "Develop responsive navbar",
        date: "2026-01-15",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Timeout Issue",
        description: "Server response timeout error",
        date: "2026-01-14",
        category: "Bug Fix"
      }
    ]
  },

  {
    id: 4,
    firstName: "Suresh",
    email: "employee4@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Chart Integration",
        description: "Add analytics chart to dashboard",
        date: "2026-01-24",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Responsive Testing",
        description: "Test app on different screen sizes",
        date: "2026-01-19",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deployment Error",
        description: "Build failed during deployment",
        date: "2026-01-18",
        category: "DevOps"
      }
    ]
  },

  {
    id: 5,
    firstName: "Neha",
    email: "employee5@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Notification System",
        description: "Implement toast notifications",
        date: "2026-01-25",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Dark Mode Feature",
        description: "Add dark theme toggle",
        date: "2026-01-20",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Token Expiry Issue",
        description: "JWT token expires too fast",
        date: "2026-01-19",
        category: "Authentication"
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {

    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin}
}
