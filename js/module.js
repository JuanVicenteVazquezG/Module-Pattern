const buyTicket = (function () {
    // function IIFE(Immediately Invoked Function Expression);
    
    // private
    let event = "Conference JS 2019";

    const adquireTicket = () => {
        const element = document.createElement('p');
        element.textContent = `Buying ticket for: ${event}`;
        document.querySelector('#app').appendChild(element);
    };

    // Public
    return {
        showTicket: function () {
            adquireTicket();
        }
    };
})();

buyTicket.showTicket();