let array = [
    {
        name: "Antonio Jurado",
        job: "Data Entry Operator",
        description: "Responsible for entering data into computer systems.",
        img: "../img/jurado.jpeg"
    },
    {
        name: "José Antonio Márquez",
        job: "Support Technician",
        description: "Provides technical support to users and troubleshoots issues.",
        img: "../img/jouse.jpeg"
    },
    {
        name: "Marcelo Herce",
        job: "Network Administrator",
        description: "Manages and supports an organization's computer networks.",
        img: "../img/Marcelo.jpeg"
    },
    {
        name: "Pablo López",
        job: "Programmer",
        description: "Writes and tests code for software applications.",
        img: "../img/pablo.jpeg"
    },
    {
        name: "Alberto Fernández",
        job: "Software Tester",
        description: "Tests software applications to ensure they work correctly.",
        img: "../img/alberto.jpg"
    },
    {
        name: "María Sisamón",
        job: "Help Desk Technician",
        description: "Provides assistance and support to end-users with technical issues.",
        img: "../img/maria.jpeg"
    },
    {
        name: "Francisco de Paula Osuna",
        job: "Web Designer",
        description: "Creates and designs visual elements for websites.",
        img: "../img/curro.jpeg"
    }
];

let i = 0;
for (let card of array) {
    ++i;
    card.id = i;
    addCard(card, createUserCard, "user");
}
