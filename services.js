let array = [
    {
        name: "Website design",
        category: "sample Category",
        oldPrice: "$400",
        newPrice: "$350",
        img: "../img/webdesign.webp"
    }
    ,
    {
        name: "Website development",
        category: "sample Category",
        oldPrice: "$1800",
        newPrice: "$1550",
        img: "../img/development.png"
    }
    ,
    {
        name: "Website maintenance",
        category: "Service",
        oldPrice: "$200",
        newPrice: "$150",
        img: "../img/Maintenance.jpg"
    },
    {
        name: "Enhance your computer's performance",
        category: "Service",
        oldPrice: "$200",
        newPrice: "$80",
        img: "../img/performance.webp"
    }
    ,
    {
        name: "Install drivers and programs",
        category: "Service",
        oldPrice: "$200",
        newPrice: "$15",
        img: "../img/install.webp"
    }
    ,
    {
        name: "Online error solution. Troubleshooting",
        category: "Service",
        oldPrice: "$20",
        newPrice: "$10",
        img: "../img/Troubleshooting.jpg"
    }
    ,
    {
        name: "PC repair",
        category: "Service",
        oldPrice: "$80",
        newPrice: "$45",
        img: "../img/repair.jpg"
    }




]

let i = 0;
for (let card of array) {
    ++i;
    card.id = i;
    addCard(card, createCard, "service");
}
