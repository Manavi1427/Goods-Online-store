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
