export const user = {
  name: "Nikki",
  age: 25,
};

export default function username() {
  console.log(`The username should be: ${user.name}, and ${user.name} should be ${user.age}`);
}
