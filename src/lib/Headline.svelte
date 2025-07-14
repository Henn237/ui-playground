<script>
  import { animate } from 'motion';
  import { onMount } from 'svelte';
  
  let headlineLine1Ref;
  let headlineLine2Ref;
  let subheadlineRef;
  
  // Store animation references to control them
  let animations = [];
  
  function resetAnimation() {
    // Cancel any running animations
    animations.forEach(animation => animation.cancel?.());
    animations = [];
    
    // Reset to starting positions instantly
    animate(headlineLine1Ref, { 
      opacity: 0, 
      y: 30, // Reduced from 108 for subtler effect
      scale: 1 // Reset scale
    }, { duration: 0 });
    
    animate(headlineLine2Ref, { 
      opacity: 0, 
      y: 30, // Reduced from 124
      scale: 1 // Reset scale
    }, { duration: 0 });
    
    animate(subheadlineRef, { 
      opacity: 0, 
      y: 20, // Reduced from 148, less movement for subheadline
      scale: 1 // Reset scale
    }, { duration: 0 });
  }

  function playAnimation() {
    resetAnimation();
    
    // Small delay to ensure reset is complete
    setTimeout(() => {
      // Animate first line
      const anim1 = animate(headlineLine1Ref, { 
        opacity: [0, 1], 
        y: [30, 0]
      }, { 
        duration: 0.8,
        easing: [0.4, 0, 0.2, 1] // Smooth easing curve
      });
      animations.push(anim1);
      
      // Animate second line with delay
      setTimeout(() => {
        const anim2 = animate(headlineLine2Ref, { 
          opacity: [0, 1], 
          y: [30, 0]
        }, { 
          duration: 0.8,
          easing: [0.4, 0, 0.2, 1]
        });
        animations.push(anim2);
      }, 150); // 150ms stagger
      
      // Animate subheadline with more delay
      setTimeout(() => {
        const anim3 = animate(subheadlineRef, { 
          opacity: [0, 0.7], // Slightly higher than 0.5 for better visibility
          y: [20, 0]
        }, { 
          duration: 0.8,
          easing: [0.4, 0, 0.2, 1]
        });
        animations.push(anim3);
      }, 300); // 300ms stagger
    }, 50);
  }

  // Animation with the smooth timing values you found
  function playSmoothAnimation() {
    resetAnimation();
    
    setTimeout(() => {
      // First headline line - no delay (--stagger 0)
      animate(headlineLine1Ref, { 
        opacity: [0, 1], 
        y: [20, 0] // Subtle movement
      }, { 
        duration: 0.6, // 600ms
        easing: 'ease' // Standard ease function
      });
      
      // Second headline line - 120ms delay (--stagger 1)
      setTimeout(() => {
        animate(headlineLine2Ref, { 
          opacity: [0, 1], 
          y: [20, 0]
        }, { 
          duration: 0.6,
          easing: 'ease'
        });
      }, 120); // 120ms stagger delay
      
      // Subheadline - 240ms delay
      setTimeout(() => {
        animate(subheadlineRef, { 
          opacity: [0, 0.7], 
          y: [20, 0]
        }, { 
          duration: 0.6,
          easing: 'ease'
        });
      }, 240); // 240ms delay as specified
    }, 0); // No initial delay needed
  }

  // Alternative: Using stagger for cleaner code
  function playAnimationWithStagger() {
    resetAnimation();
    
    setTimeout(() => {
      // Get all elements
      const elements = [headlineLine1Ref, headlineLine2Ref, subheadlineRef];
      
      // Animate with MORE PRONOUNCED stagger
      animate(
        elements,
        { 
          opacity: [0, 1], 
          y: [40, 0], // Increased movement
          scale: [0.95, 1] // Added scale for more dramatic effect
        },
        { 
          duration: 0.6, // Slightly faster per element
          delay: stagger(0.25), // 250ms between each - much more noticeable!
          easing: [0.68, -0.55, 0.265, 1.55] // Elastic easing for bounce
        }
      );
      
      // Special handling for subheadline opacity
      setTimeout(() => {
        animate(subheadlineRef, { opacity: 0.7 }, { duration: 0.3 });
      }, 700);
    }, 50);
  }

  // Even more dramatic stagger for comparison
  function playDramaticStagger() {
    resetAnimation();
    
    setTimeout(() => {
      const elements = [headlineLine1Ref, headlineLine2Ref, subheadlineRef];
      
      // VERY pronounced stagger effect
      elements.forEach((element, index) => {
        setTimeout(() => {
          animate(
            element,
            { 
              opacity: [0, index === 2 ? 0.7 : 1], // Subheadline stays at 0.7
              y: [60, 0],
              x: [-30, 0], // Added horizontal movement
              rotate: [-5, 0], // Added rotation
              scale: [0.8, 1]
            },
            { 
              duration: 1,
              easing: 'spring(1, 80, 10, 0)' // Spring animation
            }
          );
        }, index * 400); // 400ms between each!
      });
    }, 50);
  }
  onMount(() => {
    resetAnimation();
    
    // Optional: Auto-play when element comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            playAnimation();
            observer.disconnect(); // Only play once
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );
    
    // Observe the headline section
    const headlineSection = document.querySelector('.headline-section');
    if (headlineSection) {
      observer.observe(headlineSection);
    }
    
    return () => {
      observer.disconnect();
    };
  });
</script>

<div class="headline-section">
  <h1 class="main-headline">
    <span bind:this={headlineLine1Ref} class="headline-line">
      <span class="jane-text">All the&nbsp;</span><span class="rhymes-text">benefits</span><span class="jane-text">.</span>
    </span>
    <br>
    <span bind:this={headlineLine2Ref} class="headline-line">
      <span class="jane-text">None of the&nbsp;</span><span class="rhymes-text">mess</span><span class="jane-text">.</span>
    </span>
  </h1>
  
  <p bind:this={subheadlineRef} class="sub-headline">
    Food scraps are messy, confusing, and wasteful. Mill Pro solves<br>that with quiet automation, smart design, and zero smell.
  </p>
</div>

<div class="button-container">
  <button
    on:click={playSmoothAnimation}
    class="play-button"
  >
    replay
  </button>
</div>

<style>
  .headline-section {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  .main-headline {
    font-size: clamp(40px, 7vw, 60px); /* Responsive font size */
    line-height: 0.95;
    margin: 0 0 28px 0;
  }

  .headline-line {
    display: inline-block;
    will-change: transform, opacity; /* Hint for browser optimization */
  }

  .jane-text {
    font-family: 'MNKYJane', sans-serif;
    font-weight: 500;
    letter-spacing: -0.02em;
  }

  .rhymes-text {
    font-family: 'Rhymes Text', serif;
    font-weight: 400;
    font-style: italic;
    letter-spacing: -0.03em;
  }

  .sub-headline {
    font-family: 'MNKYJane', sans-serif;
    font-weight: 400;
    font-size: clamp(16px, 2vw, 18px);
    line-height: 1.4;
    letter-spacing: -0.02em;
    margin: 0;
    color: #FAF5F3;
    will-change: transform, opacity;
  }

  .button-container {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 64px;
    z-index: 1000;
    display: flex;
    gap: 1rem;
  }

  .play-button {
    padding: 0.75rem 1.5rem;
    background: #222;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .play-button:hover {
    background: #333;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .play-button:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .stagger-button {
    background: #1a73e8;
  }

  .smooth-button {
    background: #4caf50;
  }

  .smooth-button:hover {
    background: #45a049;
  }
</style>