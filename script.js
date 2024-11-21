const events = [
    { date: "November 4, 2024", title: "Our Story Begins", description: "The magical day we first connected." },
    { date: "November 11, 2024", title: "First Week Milestone", description: "A week of beautiful moments together." },
    { date: "November 21, 2024", title: "Today's Journey", description: "Continuing our love story." }
];

const timelineContainer = document.querySelector('.timeline .events');

events.forEach(event => {
    const eventElement = document.createElement('div');
    eventElement.classList.add('event');
    eventElement.innerHTML = `
        <h3>${event.date}</h3>
        <h4>${event.title}</h4>
        <p>${event.description}</p>
    `;
    timelineContainer.appendChild(eventElement);
});
