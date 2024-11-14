let count = 0;

// Select value and button elements
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("Decrease")) {
            count--;
        } else if (styles.contains("Increase")) {
            count++;
        } else if (styles.contains("Reset")) {
            count = 0;
        }

        // Update color based on count value
        if (count > 0) {
            value.style.color = "blue";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }

        // Update displayed count
        value.textContent = count;
    });
});
