let string = " ";
let memoryHistory = [];


let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'M-') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        // else if (value === 'M+') {
        //     // Show two more buttons
        //     document.getElementById('memory-buttons').style.display = 'block';
        //     memory = string;
        // }
        else if (value === 'M+') {
            // Save to memory and show history buttons
            if (string.trim() !== "") {
                memoryHistory.push(string);
            }
            document.getElementById('memory-buttons').style.display = 'block';
        }

        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})

// Show history
document.getElementById('mem-show').addEventListener('click', () => {
    const historyDiv = document.getElementById('history-output');
    if (memoryHistory.length === 0) {
        historyDiv.innerHTML = "<p><i>No history yet.</i></p>";
    } else {
        historyDiv.innerHTML = "<h4>History:</h4><ul>" + memoryHistory.map(item => `<li>${item}</li>`).join('') + "</ul>";
    }
});

// Clear history
document.getElementById('mem-clear').addEventListener('click', () => {
    memoryHistory = [];
    document.getElementById('history-output').innerHTML = "<p><i>History cleared.</i></p>";
});