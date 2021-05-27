/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
var person = {
    name: "Ram",
    age: 27,
    vehicles: {
        car: "limousine",
        bike: "ktm-duke",
        airlines: {
            lufthansa: "Air123",
            "British airways": "Brt707",
        },
    },
};
console.log(
    "Mr Ram travels by plane called" + " " + person.vehicles.airlines.lufthanza
);