// ==========================================
// IMAGE PRELOADER
// ==========================================
function preloadImages() {
  return new Promise((resolve) => {
    // imageConfig is now a flat array of full paths
    const allImages = imageConfig;
    
    console.log(`Preloading ${allImages.length} images...`);
    
    if (allImages.length === 0) {
      console.log('No images to preload');
      resolve();
      return;
    }
    
    let loadedCount = 0;
    const totalImages = allImages.length;
    
    const preloaderProgress = document.querySelector('.preloader-circle-progress');
    const preloaderPercent = document.querySelector('.preloader-percent');
    
    // Circle circumference (2 * PI * radius), radius = 8 for 20x20 circle
    const circumference = 2 * Math.PI * 8; // 50.265
    
    // Update progress
    function updateProgress() {
      const percent = Math.round((loadedCount / totalImages) * 100);
      
      // Calculate stroke-dashoffset for circular progress
      const offset = circumference - (percent / 100) * circumference;
      preloaderProgress.style.strokeDashoffset = offset;
      if (preloaderPercent) {
        preloaderPercent.textContent = `${percent}%`;
      }
      
      console.log(`Progress: ${loadedCount}/${totalImages} (${percent}%)`);
      
      if (loadedCount === totalImages) {
        // All images loaded - fill the circle completely
        preloaderProgress.style.strokeDasharray = 'none';
        preloaderProgress.style.strokeDashoffset = '0';
        
        console.log('All images loaded!');
        setTimeout(() => {
          const preloader = document.getElementById('preloader');
          preloader.classList.add('loaded');
          
          // Remove preloader from DOM after fade out
          setTimeout(() => {
            preloader.remove();
          }, 500);
          
          resolve();
        }, 300); // Small delay before fade out
      }
    }
    
    // Preload each image
    allImages.forEach((src, index) => {
      const img = new Image();
      
      img.onload = () => {
        console.log(`✓ Loaded: ${src}`);
        loadedCount++;
        updateProgress();
      };
      
      img.onerror = () => {
        console.warn(`✗ Failed to load: ${src}`);
        loadedCount++;
        updateProgress();
      };
      
      // Set a timeout in case neither event fires
      setTimeout(() => {
        if (!img.complete) {
          console.warn(`⏱ Timeout for: ${src}`);
          loadedCount++;
          updateProgress();
        }
      }, 5000); // 5 second timeout per image
      
      img.src = src;
    });
  });
}

// Note: Preloader is called at the end of the file after all constants are defined

// ==========================================
// GRID SETTINGS (Easy to Adjust!)
// ==========================================
const GRID_MIN_SIZE = 10;           // Minimum grid cell size (10x10px at 1200px width)
const GRID_MAX_SIZE = 20;           // Maximum grid cell size (20x20px at 2400px+ width)
let GRID_DOT_OPACITY = 0.4;         // Final opacity of dots (0.1 = faint, 1.0 = solid)
let GRID_ANIMATION_SPEED = 1.8;     // Animation wave speed in seconds (slow ripple)
let GRID_GLOW_INTENSITY = 2;        // How bright dots glow during ripple (1.0 = 2.5x brighter)
let GRID_PUSH_DISTANCE = 40;        // How far dots push outward in pixels
let GRID_EASING_STYLE = 'varied';   // Choose: 'elastic', 'anticipation', or 'varied'
                                     // elastic: Overshoots then wobbles back with multiple bounces
                                     // anticipation: Pulls back before pushing out (wind-up effect)
                                     // varied: Each dot has random bounce intensity (organic)

// ==========================================
// IMAGE CONFIGURATION (Auto-generated)
// ==========================================
// Images are automatically sorted alphabetically
// To reorder: rename files (e.g., 001-image.jpg, 002-image.jpg)
// To regenerate: Say "update images" or "scan images"
const imageConfig = [
  'images/upper-left/nike-livedesigngif.gif',
  'images/upper-left/nike-me-screen-01.jpg',
  'images/upper-left/nike-me-screen-03.jpg',
  'images/upper-left/nike-me-screen-05.jpg',
  'images/upper-left/nike-me-screen-06.jpg',
  'images/upper-left/nike-me-screen-07.jpg',
  'images/upper-left/nike-me-screen-08.jpg',
  'images/upper-left/nike-me-screen-09.jpg',
  'images/upper-left/nike-deepstory.gif',
  'images/upper-left/nike-live.gif',

  'images/upper-left/lego-1.png',
  'images/upper-left/lego-2.png',
  'images/upper-left/lego-4.png',
  'images/upper-left/lego-3.png',
  'images/upper-right/able-guide-mobile.png',
  'images/upper-right/able-guide-tablet.png',
  'images/upper-right/caravel-dash.png',
  'images/upper-right/bridge-logo.png',
  'images/upper-right/bridge-mobile-1.png',
  'images/upper-right/bridge-mobile-2.png',
  'images/upper-right/bridge-tether.png',
  'images/upper-left/picklethumb.png',
  'images/upper-right/heron-dash.png',
  'images/upper-right/vehicle-detail-1.png',
  'images/upper-right/vehicle-detail-2.png',
  'images/bottom-left/1S6A3228.jpeg',
  'images/bottom-left/5_GalleryImages_1.jpg',
  'images/bottom-left/5_GalleryImages_2.jpg',
  'images/bottom-left/5_GalleryImages_4.jpg',
  'images/bottom-left/break-room.jpg',
  'images/bottom-left/Music-box.jpg',
  'images/bottom-left/Relequary.jpg',
  'images/bottom-left/room-2.jpg',
  'images/bottom-left/door.jpg',
  'images/bottom-left/clocks.jpg',
  'images/bottom-left/gameplay-4.jpg',
  'images/bottom-left/gameplay-6.jpg',
  'images/bottom-left/gameplay-7.jpg',
  'images/bottom-left/gameplay-8.jpg',
  'images/bottom-left/gameplay-9.jpg',
  'images/bottom-left/BTS-1.jpg',
  'images/bottom-left/BTS-10.jpg',
  'images/bottom-left/BTS-12.jpg',
  'images/bottom-left/BTS-13.jpg',
  'images/bottom-left/BTS-15.jpg',
  'images/bottom-left/BTS-23.jpg',
  'images/bottom-left/cubequest85@2x.png',
  'images/bottom-left/theend@2x.png',
  'images/bottom-left/fwa-desktop.png',
  'images/bottom-left/maxal-1.jpg',
  'images/bottom-left/maxal-2.jpg',
  'images/bottom-left/maxal-3.gif',
  'images/bottom-left/maxal-4.gif',
  'images/bottom-left/maxal-5.gif',
];

// ==========================================
// SETTINGS (Easy to Adjust!)
// ==========================================
let MAX_IMAGES = 20;                // Maximum images on screen at once
let IMAGE_SPAWN_RATE = 200;         // Milliseconds between each image spawn
                                    // LOWER = more images (e.g., 100 = faster)
                                    // HIGHER = fewer images (e.g., 300 = slower)
let IMAGE_MAX_WIDTH = 540;          // Maximum image width in pixels
let IMAGE_MAX_HEIGHT = 540;         // Maximum image height in pixels
let IMAGE_POP_ENABLED = true;       // Enable/disable pop animation
let IMAGE_POP_DURATION = 0.18;      // Total animation duration in seconds
let IMAGE_POP_SCALE_START = 1.05;   // Initial scale (overshoot)
let IMAGE_POP_SCALE_DIP = 0.96;     // Dip scale (undershoot)
let IMAGE_POP_SCALE_END = 1;        // Final scale (normal)

// ==========================================
// CORE VARIABLES
// ==========================================
const imageContainer = document.getElementById('image-container');
let currentGridSize = 10;           // Will be calculated based on window width
let canSpawnImages = false;         // Enable after grid animation completes

let imageQueue = [];
let currentIndex = 0;               // Single index for all images

let isMouseMoving = false;
let lastSpawnTime = 0;
let mouseX = 0;
let mouseY = 0;

// ==========================================
// HELPER FUNCTIONS
// ==========================================
function calculateGridSize() {
  // Calculate grid cell size based on window width
  // 1200px = 10x10, 2400px = 20x20, linear interpolation between
  const width = window.innerWidth;
  const minWidth = 1200;
  const maxWidth = 2400;
  const normalizedWidth = Math.min(Math.max((width - minWidth) / (maxWidth - minWidth), 0), 1);
  return GRID_MIN_SIZE + (normalizedWidth * (GRID_MAX_SIZE - GRID_MIN_SIZE));
}

function snapToGrid(x, y, gridSize) {
  // Snap coordinates to nearest grid intersection
  const snappedX = Math.round(x / gridSize) * gridSize;
  const snappedY = Math.round(y / gridSize) * gridSize;
  return { x: snappedX, y: snappedY };
}

// ==========================================
// IMAGE SPAWNING (Grid-Snapped)
// ==========================================
function spawnImage(x, y) {
  if (!imageConfig || imageConfig.length === 0) return;
  
  // Get next image in sequence
  const imagePath = imageConfig[currentIndex];
  
  // Update index for next spawn (cycle through array)
  currentIndex = (currentIndex + 1) % imageConfig.length;
  
  // Create image element
  const img = document.createElement('img');
  img.src = imagePath;
  img.className = 'spawned-image';
  
  // Snap cursor position to nearest grid intersection
  const snappedPos = snapToGrid(x, y, currentGridSize);
  
  // Position at snapped grid location - centered on grid point
  img.style.left = `${snappedPos.x}px`;
  img.style.top = `${snappedPos.y}px`;
  img.style.transform = `translate(-50%, -50%)`;
  img.style.opacity = '0'; // Hide until sized
  
  // Handle 2x resolution: calculate dimensions when image loads
  img.onload = function() {
    // Get natural dimensions (2x resolution)
    let displayWidth = this.naturalWidth / 2;
    let displayHeight = this.naturalHeight / 2;
    
    // Apply max width constraint while maintaining aspect ratio
    if (displayWidth > IMAGE_MAX_WIDTH) {
      const ratio = IMAGE_MAX_WIDTH / displayWidth;
      displayWidth = IMAGE_MAX_WIDTH;
      displayHeight = displayHeight * ratio;
    }
    
    // Apply max height constraint while maintaining aspect ratio
    if (displayHeight > IMAGE_MAX_HEIGHT) {
      const ratio = IMAGE_MAX_HEIGHT / displayHeight;
      displayHeight = IMAGE_MAX_HEIGHT;
      displayWidth = displayWidth * ratio;
    }
    
    // Set final dimensions
    this.style.width = `${displayWidth}px`;
    this.style.height = `${displayHeight}px`;
    
    // Show image now that it's properly sized
    this.style.opacity = '1';
    
    // Apply pop animation if enabled
    if (IMAGE_POP_ENABLED) {
      Motion.animate(
        this,
        {
          transform: [
            `translate(-50%, -50%) scale(${IMAGE_POP_SCALE_START})`,
            `translate(-50%, -50%) scale(${IMAGE_POP_SCALE_DIP})`,
            `translate(-50%, -50%) scale(${IMAGE_POP_SCALE_END})`
          ]
        },
        {
          duration: IMAGE_POP_DURATION,
          easing: 'ease-out'
        }
      );
    }
  };
  
  // Add to container
  imageContainer.appendChild(img);
  
  // Add to queue
  imageQueue.push(img);
  
  // Remove oldest image if exceeding max
  if (imageQueue.length > MAX_IMAGES) {
    const oldestImage = imageQueue.shift();
    if (oldestImage.parentNode) {
      oldestImage.parentNode.removeChild(oldestImage);
    }
  }
}

// ==========================================
// MOUSE TRACKING
// ==========================================
let mouseMoveTimeout;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  isMouseMoving = true;
  
  // Clear previous timeout
  clearTimeout(mouseMoveTimeout);
  
  // Set timeout to detect when mouse stops
  mouseMoveTimeout = setTimeout(() => {
    isMouseMoving = false;
  }, 100);
  
  // Update custom cursor position
  updateCursor(mouseX, mouseY);
});

// Custom cursor follow
function updateCursor(x, y) {
  document.body.style.setProperty('--cursor-x', `${x}px`);
  document.body.style.setProperty('--cursor-y', `${y}px`);
}

// ==========================================
// SPAWN INTERVAL LOOP
// ==========================================
function spawnLoop() {
  const now = Date.now();
  
  // Only spawn images after grid animation is complete
  if (canSpawnImages && isMouseMoving && (now - lastSpawnTime >= IMAGE_SPAWN_RATE)) {
    spawnImage(mouseX, mouseY);
    lastSpawnTime = now;
  }
  
  requestAnimationFrame(spawnLoop);
}

// ==========================================
// INITIALIZATION
// ==========================================
// Note: spawnLoop() is now called after preloading completes

// ==========================================
// GRID BACKGROUND ANIMATION
// ==========================================
function initializeGrid() {
  const canvas = document.getElementById('grid-canvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas size to window size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Calculate grid cell size based on window width
  const gridSize = calculateGridSize();
  currentGridSize = gridSize; // Store for image snapping
  
  // Calculate grid dimensions
  const cols = Math.ceil(canvas.width / gridSize);
  const rows = Math.ceil(canvas.height / gridSize);
  
  // Find center of screen
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  
  // Store dot positions
  const dots = [];
  
  // Create dots at each grid intersection
  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= cols; col++) {
      const x = col * gridSize;
      const y = row * gridSize;
      
      // Calculate distance from exact center of screen for ripple timing
      const dx = x - centerX;
      const dy = y - centerY;
      const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
      
      // Calculate angle from center for radial push direction
      const angle = Math.atan2(dy, dx);
      
      dots.push({ 
        x, 
        y, 
        distanceFromCenter, 
        angle,
        opacity: 0,
        currentX: x,
        currentY: y
      });
    }
  }
  
  // Find max distance for normalization
  const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
  
  // Animate dots with ripple effect
  const startTime = Date.now();
  const animationDuration = GRID_ANIMATION_SPEED * 1000; // Convert to milliseconds
  
  function animate() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / animationDuration, 1);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw dots
    dots.forEach(dot => {
      // Calculate when this dot's ripple wave arrives (based on distance from center)
      const normalizedDistance = dot.distanceFromCenter / maxDistance;
      const waveArrivalTime = normalizedDistance * 0.7; // Wave takes 70% of animation time to reach edges
      
      // Calculate this dot's animation progress
      let dotProgress = 0;
      if (progress >= waveArrivalTime) {
        dotProgress = Math.min((progress - waveArrivalTime) / 0.3, 1); // Individual dot animation takes 30% of time
      }
      
      if (dotProgress > 0) {
        // Easing function for smooth motion (ease-out cubic)
        const eased = 1 - Math.pow(1 - dotProgress, 3);
        
        // === EASING FUNCTIONS ===
        function easeOutBounce(x) {
          const n1 = 7.5625;
          const d1 = 2.75;
          if (x < 1 / d1) {
            return n1 * x * x;
          } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + 0.75;
          } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + 0.9375;
          } else {
            return n1 * (x -= 2.625 / d1) * x + 0.984375;
          }
        }
        
        function easeOutElastic(x) {
          const c4 = (2 * Math.PI) / 3;
          return x === 0 ? 0 : x === 1 ? 1 : 
            Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
        }
        
        // === RADIAL PUSH EFFECT WITH DYNAMIC EASING ===
        let pushAmount = 0;
        
        if (GRID_EASING_STYLE === 'elastic') {
          // ELASTIC: Overshoots further then wobbles back with multiple bounces
          if (dotProgress < 0.5) {
            // Push out quickly (50% of time)
            const outProgress = dotProgress / 0.5;
            pushAmount = outProgress * GRID_PUSH_DISTANCE * 1.3; // Overshoot by 30%
          } else {
            // Elastic snap back with wobble (50% of time)
            const backProgress = (dotProgress - 0.5) / 0.5;
            const elasticEase = easeOutElastic(backProgress);
            pushAmount = GRID_PUSH_DISTANCE * 1.3 * (1 - elasticEase);
          }
          
        } else if (GRID_EASING_STYLE === 'anticipation') {
          // ANTICIPATION: Pulls back slightly before pushing out (wind-up effect)
          if (dotProgress < 0.2) {
            // Pull back phase (20% of time)
            const pullProgress = dotProgress / 0.2;
            pushAmount = -GRID_PUSH_DISTANCE * 0.15 * pullProgress; // Pull back 15%
          } else if (dotProgress < 0.7) {
            // Push out phase (50% of time)
            const outProgress = (dotProgress - 0.2) / 0.5;
            pushAmount = -GRID_PUSH_DISTANCE * 0.15 + 
                        (outProgress * (GRID_PUSH_DISTANCE * 1.15)); // From -15% to 100%
          } else {
            // Settle back (30% of time)
            const backProgress = (dotProgress - 0.7) / 0.3;
            pushAmount = (1 - easeOutBounce(backProgress)) * GRID_PUSH_DISTANCE;
          }
          
        } else if (GRID_EASING_STYLE === 'varied') {
          // VARIED: Each dot has random bounce intensity for organic feel
          // Store random intensity on first calculation
          if (!dot.bounceIntensity) {
            dot.bounceIntensity = 0.7 + Math.random() * 0.6; // Random 0.7-1.3x
          }
          
          if (dotProgress < 0.6) {
            // Push out phase (60% of time)
            const outProgress = dotProgress / 0.6;
            pushAmount = outProgress * GRID_PUSH_DISTANCE * dot.bounceIntensity;
          } else {
            // Bounce back with varied intensity (40% of time)
            const backProgress = (dotProgress - 0.6) / 0.4;
            pushAmount = (1 - easeOutBounce(backProgress)) * GRID_PUSH_DISTANCE * dot.bounceIntensity;
          }
        }
        
        // Apply radial push
        dot.currentX = dot.x + Math.cos(dot.angle) * pushAmount;
        dot.currentY = dot.y + Math.sin(dot.angle) * pushAmount;
        
        // === GLOW EFFECT ===
        // Overshoot brightness then settle to normal
        let glowMultiplier = 1;
        if (dotProgress < 0.4) {
          // Grow to bright (first 40%)
          glowMultiplier = 1 + (dotProgress / 0.4) * GRID_GLOW_INTENSITY * 1.5;
        } else if (dotProgress < 0.7) {
          // Settle back (next 30%)
          const settleProgress = (dotProgress - 0.4) / 0.3;
          glowMultiplier = (1 + GRID_GLOW_INTENSITY * 1.5) - (settleProgress * GRID_GLOW_INTENSITY * 1.5);
        }
        
        dot.opacity = Math.min(eased * GRID_DOT_OPACITY * glowMultiplier, 1.0);
        
        // Draw the dot
        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`;
        ctx.fillRect(dot.currentX, dot.currentY, 1, 1);
      }
    });
    
    // Continue animation until complete
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // Final frame - all dots at rest position with normal opacity
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(dot => {
        ctx.fillStyle = `rgba(255, 255, 255, ${GRID_DOT_OPACITY})`;
        ctx.fillRect(dot.x, dot.y, 1, 1);
      });
      
      // Grid animation complete - enable image spawning
      canSpawnImages = true;
      console.log('Grid animation complete - image spawning enabled');
    }
  }
  
  // Start animation
  animate();
}

// Note: Grid initialization is now called after preloading completes

// ==========================================
// WINDOW RESIZE HANDLING
// ==========================================
window.addEventListener('resize', () => {
  const canvas = document.getElementById('grid-canvas');
  const ctx = canvas.getContext('2d');
  
  // Calculate what the new grid size would be
  const newGridSize = calculateGridSize();
  
  // Only update if new grid size is larger (never shrink)
  if (newGridSize > currentGridSize) {
    currentGridSize = newGridSize;
    
    // Update canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Redraw grid at new size
    const cols = Math.ceil(canvas.width / currentGridSize);
    const rows = Math.ceil(canvas.height / currentGridSize);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw all dots immediately at rest state
    for (let row = 0; row <= rows; row++) {
      for (let col = 0; col <= cols; col++) {
        const x = col * currentGridSize;
        const y = row * currentGridSize;
        ctx.fillStyle = `rgba(255, 255, 255, ${GRID_DOT_OPACITY})`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
    
    console.log(`Grid updated to ${currentGridSize}px (window resized larger)`);
  } else {
    // Just update canvas dimensions, keep same grid
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Redraw existing grid
    const cols = Math.ceil(canvas.width / currentGridSize);
    const rows = Math.ceil(canvas.height / currentGridSize);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let row = 0; row <= rows; row++) {
      for (let col = 0; col <= cols; col++) {
        const x = col * currentGridSize;
        const y = row * currentGridSize;
        ctx.fillStyle = `rgba(255, 255, 255, ${GRID_DOT_OPACITY})`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }
});

// ==========================================
// LIL-GUI SETTINGS PANEL WITH URL SYNC
// ==========================================
const GUI = lil.GUI;
const gui = new GUI({ title: 'Settings', closeFolders: true });
gui.hide(); // Start hidden

// Settings object to track current values
const settings = {
  gridOpacity: GRID_DOT_OPACITY,
  gridSpeed: GRID_ANIMATION_SPEED,
  gridGlow: GRID_GLOW_INTENSITY,
  gridPush: GRID_PUSH_DISTANCE,
  gridEasing: GRID_EASING_STYLE,
  maxImages: MAX_IMAGES,
  spawnRate: IMAGE_SPAWN_RATE,
  maxWidth: IMAGE_MAX_WIDTH,
  maxHeight: IMAGE_MAX_HEIGHT,
  popEnabled: IMAGE_POP_ENABLED,
  popDuration: IMAGE_POP_DURATION,
  popScaleStart: IMAGE_POP_SCALE_START,
  popScaleDip: IMAGE_POP_SCALE_DIP
};

// Load settings from URL on init
function loadFromURL() {
  const params = new URLSearchParams(window.location.search);
  
  if (params.has('gridOpacity')) settings.gridOpacity = parseFloat(params.get('gridOpacity'));
  if (params.has('gridSpeed')) settings.gridSpeed = parseFloat(params.get('gridSpeed'));
  if (params.has('gridGlow')) settings.gridGlow = parseFloat(params.get('gridGlow'));
  if (params.has('gridPush')) settings.gridPush = parseFloat(params.get('gridPush'));
  if (params.has('gridEasing')) settings.gridEasing = params.get('gridEasing');
  if (params.has('maxImages')) settings.maxImages = parseInt(params.get('maxImages'));
  if (params.has('spawnRate')) settings.spawnRate = parseInt(params.get('spawnRate'));
  if (params.has('maxWidth')) settings.maxWidth = parseInt(params.get('maxWidth'));
  if (params.has('maxHeight')) settings.maxHeight = parseInt(params.get('maxHeight'));
  if (params.has('popEnabled')) settings.popEnabled = params.get('popEnabled') === 'true';
  if (params.has('popDuration')) settings.popDuration = parseFloat(params.get('popDuration'));
  if (params.has('popScaleStart')) settings.popScaleStart = parseFloat(params.get('popScaleStart'));
  if (params.has('popScaleDip')) settings.popScaleDip = parseFloat(params.get('popScaleDip'));
}

// Update URL with current settings
function updateURL() {
  const params = new URLSearchParams();
  
  params.set('gridOpacity', settings.gridOpacity);
  params.set('gridSpeed', settings.gridSpeed);
  params.set('gridGlow', settings.gridGlow);
  params.set('gridPush', settings.gridPush);
  params.set('gridEasing', settings.gridEasing);
  params.set('maxImages', settings.maxImages);
  params.set('spawnRate', settings.spawnRate);
  params.set('maxWidth', settings.maxWidth);
  params.set('maxHeight', settings.maxHeight);
  params.set('popEnabled', settings.popEnabled);
  params.set('popDuration', settings.popDuration);
  params.set('popScaleStart', settings.popScaleStart);
  params.set('popScaleDip', settings.popScaleDip);
  
  const newURL = window.location.pathname + '?' + params.toString();
  window.history.replaceState({}, '', newURL);
}

// Load settings from URL first
loadFromURL();

// Apply loaded settings to global variables
GRID_DOT_OPACITY = settings.gridOpacity;
GRID_ANIMATION_SPEED = settings.gridSpeed;
GRID_GLOW_INTENSITY = settings.gridGlow;
GRID_PUSH_DISTANCE = settings.gridPush;
GRID_EASING_STYLE = settings.gridEasing;
MAX_IMAGES = settings.maxImages;
IMAGE_SPAWN_RATE = settings.spawnRate;
IMAGE_MAX_WIDTH = settings.maxWidth;
IMAGE_MAX_HEIGHT = settings.maxHeight;
IMAGE_POP_ENABLED = settings.popEnabled;
IMAGE_POP_DURATION = settings.popDuration;
IMAGE_POP_SCALE_START = settings.popScaleStart;
IMAGE_POP_SCALE_DIP = settings.popScaleDip;

// Grid Settings Folder
const gridFolder = gui.addFolder('Grid');
gridFolder.add(settings, 'gridOpacity', 0.1, 1.0, 0.1)
  .name('Dot Opacity')
  .onChange(value => { 
    GRID_DOT_OPACITY = value;
    updateURL();
  });
gridFolder.add(settings, 'gridSpeed', 0.5, 3.0, 0.1)
  .name('Animation Speed (s)')
  .onChange(value => {
    GRID_ANIMATION_SPEED = value;
    updateURL();
  });
gridFolder.add(settings, 'gridGlow', 0, 5, 0.5)
  .name('Glow Intensity')
  .onChange(value => {
    GRID_GLOW_INTENSITY = value;
    updateURL();
  });
gridFolder.add(settings, 'gridPush', 10, 100, 5)
  .name('Push Distance (px)')
  .onChange(value => {
    GRID_PUSH_DISTANCE = value;
    updateURL();
  });
gridFolder.add(settings, 'gridEasing', ['elastic', 'anticipation', 'varied'])
  .name('Easing Style')
  .onChange(value => {
    GRID_EASING_STYLE = value;
    updateURL();
  });

// Image Settings Folder
const imageFolder = gui.addFolder('Images');
imageFolder.add(settings, 'maxImages', 5, 50, 1)
  .name('Max Images')
  .onChange(value => {
    MAX_IMAGES = value;
    updateURL();
  });
imageFolder.add(settings, 'spawnRate', 50, 500, 10)
  .name('Spawn Rate (ms)')
  .onChange(value => {
    IMAGE_SPAWN_RATE = value;
    updateURL();
  });
imageFolder.add(settings, 'maxWidth', 200, 1000, 20)
  .name('Max Width (px)')
  .onChange(value => {
    IMAGE_MAX_WIDTH = value;
    updateURL();
  });
imageFolder.add(settings, 'maxHeight', 200, 1000, 20)
  .name('Max Height (px)')
  .onChange(value => {
    IMAGE_MAX_HEIGHT = value;
    updateURL();
  });
imageFolder.add(settings, 'popEnabled')
  .name('Pop Animation')
  .onChange(value => {
    IMAGE_POP_ENABLED = value;
    updateURL();
  });
imageFolder.add(settings, 'popDuration', 0.05, 0.5, 0.05)
  .name('Pop Duration (s)')
  .onChange(value => {
    IMAGE_POP_DURATION = value;
    updateURL();
  });
imageFolder.add(settings, 'popScaleStart', 1.0, 1.2, 0.01)
  .name('Pop Scale Start')
  .onChange(value => {
    IMAGE_POP_SCALE_START = value;
    updateURL();
  });
imageFolder.add(settings, 'popScaleDip', 0.9, 1.0, 0.01)
  .name('Pop Scale Dip')
  .onChange(value => {
    IMAGE_POP_SCALE_DIP = value;
    updateURL();
  });

// Toggle button functionality
const guiToggle = document.getElementById('gui-toggle');
guiToggle.addEventListener('click', () => {
  if (gui._hidden) {
    gui.show();
  } else {
    gui.hide();
  }
});

// ==========================================
// START APPLICATION
// ==========================================
// Start preloading, then initialize everything
preloadImages().then(() => {
  console.log('Starting experience...');
  // Initialize grid after all images are loaded
  initializeGrid();
  // Start spawn loop
  spawnLoop();
});
