//sliding side panel 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("header1").style.marginLeft="250px";
    document.getElementById("fashion").style.marginLeft="250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("header1").style.marginLeft="0";
    document.getElementById("fashion").style.marginLeft="0";
}
function switchContent(contentId) {
    // Remove 'active' class from all content sections
    document.querySelectorAll('.content').forEach(function(el) {
        el.classList.remove('active');
    });
    // Add 'active' class to the selected content section
    document.getElementById(contentId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    window.addToCart = function(id, name, price) {
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            const newItem = { id, name, price, quantity: 1 };
            cart.push(newItem);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    };
    
});