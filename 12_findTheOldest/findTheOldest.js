const findTheOldest = function(people) {
    return people.reduce((final, current) => {
        if (!("yearOfDeath" in current)) current.yearOfDeath = new Date().getFullYear();
        if (current.yearOfDeath - current.yearOfBirth > final.yearOfDeath - final.yearOfBirth) {
            final = current;
        }
        return final;
    });
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.table(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
