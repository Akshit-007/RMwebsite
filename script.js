function info() {

    document.getElementById("extend_myinfo").style.display = "block";
    document.getElementById("extend_order").style.display = "none";
    document.getElementById("extend_address").style.display = "none";
}
function order() {
    document.getElementById("extend_myinfo").style.display = "none";
    document.getElementById("extend_order").style.display = "block";
    document.getElementById("extend_address").style.display = "none";
}
function address() {
    document.getElementById("extend_myinfo").style.display = "none";
    document.getElementById("extend_order").style.display = "none";
    document.getElementById("extend_address").style.display = "block";
}