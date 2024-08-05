function createAnimation(duration) {
  const animation = {
    duration: duration,
    play: function() {
      // Add code to start the animation
      console.log(`Animation is playing for ${this.duration} seconds`);
    },
    stop: function() {
      // Add code to stop the animation
      console.log('Animation stopped');
    }
  };
  return animation;
}

// Usage
const myAnimation = createAnimation(5); // Create an animation with a duration of 5 seconds
myAnimation.play(); // Start the animation
myAnimation.stop(); // Stop the animation
