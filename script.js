// Add this function at the beginning of your script file
function createDigitalRain() {
    const container = document.querySelector('.digital-rain');
    const containerWidth = container.offsetWidth;
    const numberOfDrops = 50; // Adjust this number to change rain density

    // Clear existing drops
    container.innerHTML = '';

    // Create new drops
    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('span');
        
        // Random positioning and timing
        const left = Math.random() * containerWidth;
        const delay = Math.random() * 2;
        const duration = 1 + Math.random() * 2;
        
        drop.style.left = `${left}px`;
        drop.style.animationDelay = `${delay}s`;
        drop.style.animationDuration = `${duration}s`;
        
        container.appendChild(drop);
    }
}

// Initialize the rain effect
document.addEventListener('DOMContentLoaded', () => {
    createDigitalRain();
    
    // Recreate rain effect on window resize
    window.addEventListener('resize', createDigitalRain);
});

// Keep your existing login form event listener
document.getElementById('loginForm').addEventListener('submit', function(e) {
    // ... existing login code ...
}); 