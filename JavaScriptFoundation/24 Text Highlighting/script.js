function highlightFunction() {
    // Get the paragraph element by its ID
    const paragraph = document.getElementById('my-paragraph').value;
    console.log(paragraph)
    // Split the paragraph text into an array of words
    const words = paragraph.split(' ');
    console.log(words)

    let result = document.getElementById('result') 
    // Loop through each word
    for (let i = 0; i < words.length; i++) {
        // Check if the word has more than 8 characters
        var x = document.createElement('span')
        var y = document.createElement('span')
        
        x.innerHTML = `${words[i]}`
        y.innerHTML = `&nbsp`;
        if (words[i].length > 8 && !words[i].includes(`"`)) {
            x.style.backgroundColor = 'yellow'
        }
        console.log(x)
        result.appendChild(x)
        result.appendChild(y)

    }
}
// Join the words array back into a string and update the paragraph element's
// HTMLparagraph.innerHTML = words.join(' ');
document.getElementById('highlight-btn').addEventListener('click', highlightFunction)