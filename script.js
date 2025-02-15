function checkAnswer(button, status) {
    if (status === 'correct') {
        button.classList.add('correct');
        button.innerText += " ✅ Correct!";
    } else {
        button.classList.add('wrong');
        button.innerText += " ❌ Try Again!";
    }

    // Disable all buttons in the same question to prevent multiple clicks
    let parentDiv = button.parentElement;
    let options = parentDiv.getElementsByClassName('option');
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }
}
