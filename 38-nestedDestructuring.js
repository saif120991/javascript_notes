let users = [
  {
    userId: 1,
    userName: "afzal",
    userRuns: 3600,
  },
  {
    userId: 2,
    userName: "amar",
    userRuns: 600,
  },
  {
    userId: 3,
    userName: "rajjan",
    userRuns: 1000,
  },
];

let [{userId:user1Id,userRuns:user1Runs}, , {userName:user3Name}] = users;
console.log(user1Id);
console.log(user1Runs);
console.log(user3Name);
