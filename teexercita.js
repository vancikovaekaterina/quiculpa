const cloudRadians = Math.PI / 180;

function drawWord(d, context) {
    context.save(); // Save the current state of the context
    if (d.rotate) {
        context.translate(d.x, d.y); // Move the context to the word's center
        context.rotate(d.rotate * cloudRadians); // Rotate the context by the specified angle
        context.translate(-d.x, -d.y); // Move back the context
    }
    context.fillText(d.text, d.x, d.y); // Draw the text at the proper location
    context.restore(); // Restore the context to its original state
}

// Sample word data
const wordData = [
    { text: "Hello", x: 100, y: 100, rotate: 45 },
    { text: "World", x: 200, y: 150, rotate: -30 },
];

// Assuming `ctx` is a CanvasRenderingContext2D object
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw each word
wordData.forEach(word => drawWord(word, ctx));
