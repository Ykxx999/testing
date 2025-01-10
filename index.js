let fbtn = document.getElementById("f-btn")
let sbtn = document.getElementById("s-btn")




 
// Add event listeners to the buttons
fbtn.addEventListener('click', function() {
    fetch("http://evil.com")
});

sbtn.addEventListener('click', function() {
    let s = window.open("http://evil.com");
    alert(0)

  
    // Wait for the new window to load
    // s.onload = function() {
        // Access the new window's console and log something
        
        
        //s.console.log("<script>alert()</script>");
        //    };


});
