enum UserRole {
  Admin = "Admin",
  Teacher = "Teacher",
  Student = "Student",
}


interface User {
  id: number;
  name: string;
  role: UserRole;
}

function printUserInfo(user: User): void {
  switch (user.role) {
    case UserRole.Admin:
      console.log(`Администратор: ${user.name} (ID: ${user.id})`);
      break;
    case UserRole.Teacher:
      console.log(`Учитель: ${user.name} (ID: ${user.id})`);
      break;
    case UserRole.Student:
      console.log(`Студент: ${user.name} (ID: ${user.id})`);
      break;
  }
}

const users: User[] = [
  { id: 1, name: "Иван", role: UserRole.Admin },
  { id: 2, name: "Мария", role: UserRole.Teacher },
  { id: 3, name: "Петр", role: UserRole.Student },
  { id: 4, name: "Анна", role: UserRole.Student },
];

console.log("Все пользователи:");
users.forEach(printUserInfo);

function filterUsersByRole(role: UserRole): User[] {
  return users.filter(user => user.role === role);
}

console.log("\nТолько студенты:");
filterUsersByRole(UserRole.Student).forEach(printUserInfo);

function greetUser(name: string, greeting?: string): void {
  if (greeting) {
    console.log(`${greeting}, ${name}!`);
  } else {
    console.log(`Привет, ${name}!`);
  }
}

greetUser("Иван"); 
greetUser("Мария", "Добро пожаловать"); 

/*
Все пользователи:
Администратор: Иван (ID: 1)
Учитель: Мария (ID: 2)
Студент: Петр (ID: 3)
Студент: Анна (ID: 4)

Только студенты:
Студент: Петр (ID: 3)
Студент: Анна (ID: 4)
Привет, Иван!
Добро пожаловать, Мария!

*/
