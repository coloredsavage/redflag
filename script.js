// Global Variables
let profiles, profileScoring, quirkEmojis;
let currentProfileIndex = 0;
let isDragging = false;
let startX, startY;
let offsetX = 0;
const dragThreshold = 60;
let nextProfiles = [];
const MAX_SWIPES = 10;

const profileScores = {
  "Fun-Loving Foodie": 0,
  "The Over-Thinker": 0,
  "The Hopeless Romantic": 0,
  "The Independent Adventurer": 0,
  "The Let's See What Happens Type": 0,
  "The Emotional Nurturer": 0,
  "The All About the Little Things Lover": 0,
  "The Passionate Firecracker": 0,
  "The Skeptical Realist": 0,
  "The 'You Can Never Find Love' Type": 0
};

// Data Loading
async function loadData() {
  try {
    const responses = await Promise.all([
      fetch('profiles.json'),
      fetch('profileScoring.json'),
      fetch('quirkEmojis.json')
    ]);

    [profiles, profileScoring, quirkEmojis] = await Promise.all(
      responses.map(res => res.json())
    );

    // Initialize after data is loaded
    shuffleArray(profiles);
    nextProfiles = profiles.slice(currentProfileIndex, currentProfileIndex + 2);
    showProfile();
  } catch (error) {
    console.error('Error loading data:', error);
    alert('Failed to load data. Please try again later.');
  }
}

// Shuffle Function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Card Functions
function createCard(text) {
  const card = document.createElement("div");
  card.classList.add("card");

  const emoji = quirkEmojis[text] || "❓";
  card.innerHTML = `
    <div class="card-header">
      <span class="emoji">${emoji}</span>
    </div>
    <div class="card-content">
      <p>${text}</p>
    </div>
    <div class="card-footer">
      <img src="collab-logo.png" alt="Logo" class="card-logo">
    </div>
  `;

  return card;
}

function showProfile() {
  const cardStack = document.getElementById("card-stack");
  cardStack.innerHTML = "";

  if (currentProfileIndex < Math.min(profiles.length, MAX_SWIPES)) {
    const cardsToShow = Math.min(3, MAX_SWIPES - currentProfileIndex);

    for (let i = 0; i < cardsToShow; i++) {
      const card = createCard(nextProfiles[i]);
      cardStack.appendChild(card);
    }

    const topCard = cardStack.querySelector(".card");
    if (topCard) {
      makeDraggable(topCard);
    }
  } else {
    showResult();
  }
}

// Swipe Function
function swipe(isGreenFlag) {
  if (currentProfileIndex >= MAX_SWIPES) return;

  const cardStack = document.getElementById("card-stack");
  const card = cardStack.querySelector(".card");

  if (card) {
    const currentProfile = card.querySelector('.card-content p').textContent;

    if (isGreenFlag) {
      card.classList.add("swiping-right");
      card.innerHTML += `<div class="swipe-icon right"><i class="fas fa-check"></i></div>`;
    } else {
      card.classList.add("swiping-left");
      card.innerHTML += `<div class="swipe-icon left"><i class="fas fa-times"></i></div>`;
    }

    if (isGreenFlag && profileScoring[currentProfile]) {
      for (const [type, points] of Object.entries(profileScoring[currentProfile])) {
        profileScores[type] += points;
      }
    }

    if (isGreenFlag) {
      card.classList.add("swipe-right", "swipe-shadow-right");
      card.classList.remove("swipe-shadow-left");
    } else {
      card.classList.add("swipe-left", "swipe-shadow-left");
      card.classList.remove("swipe-shadow-right");
    }

    card.addEventListener("transitionend", () => {
      if (card.querySelector(".swipe-icon.left")) {
        card.querySelector(".swipe-icon.left").remove();
      }
      if (card.querySelector(".swipe-icon.right")) {
        card.querySelector(".swipe-icon.right").remove();
      }
      card.classList.remove("swiping-left", "swiping-right");
      card.remove();

      if (currentProfileIndex + 1 >= MAX_SWIPES) {
        const loader = document.getElementById("loader");
        loader.style.display = "block";
        cardStack.innerHTML = "";

        setTimeout(() => {
          loader.style.display = "none";
          showResult();
        }, 1500);
      } else {
        currentProfileIndex++;
        nextProfiles = profiles.slice(currentProfileIndex, currentProfileIndex + 2);
        showProfile();
      }
    }, { once: true });
  }
}

// Drag Functions
function makeDraggable(card) {
  // Allow the whole card to be draggable, including its text
  card.querySelectorAll('*').forEach(element => {
      element.style.userSelect = 'none';
      element.style.pointerEvents = 'auto';  // Allow interaction with text while dragging
      element.draggable = false;
  });

  card.style.userSelect = 'none';
  card.style.pointerEvents = 'auto';
  
  card.addEventListener("mousedown", startDrag);
  card.addEventListener("touchstart", startDrag, { passive: true });
  document.addEventListener("mouseup", endDrag);
  document.addEventListener("touchend", endDrag);
  document.addEventListener("mousemove", drag);
  document.addEventListener("touchmove", drag, { passive: true });
}

function startDrag(e) {
  isDragging = true;
  const card = e.currentTarget;

  card.classList.add("dragging");

  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  startX = clientX - card.offsetLeft;
  startY = clientY - card.offsetTop;

  // Prevent default behavior
  e.preventDefault();
}

function drag(e) {
  if (!isDragging) return;

  const card = e.target;

  // Calculate new horizontal position
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  offsetX = clientX - startX;

  // Add swipe feedback icons and inner shadow
  if (offsetX < -50) {
    // Swiping left: show X icon and left inner shadow
    if (!card.querySelector(".swipe-icon.left")) {
      card.innerHTML += `<div class="swipe-icon left"><i class="fas fa-times"></i></div>`;
    }
    if (card.querySelector(".swipe-icon.right")) {
      card.querySelector(".swipe-icon.right").remove();
    }
    card.classList.add("swiping-left"); // Add left inner shadow
    card.classList.remove("swiping-right"); // Remove right inner shadow
  } else if (offsetX > 50) {
    // Swiping right: show ✓ icon and right inner shadow
    if (!card.querySelector(".swipe-icon.right")) {
      card.innerHTML += `<div class="swipe-icon right"><i class="fas fa-check"></i></div>`;
    }
    if (card.querySelector(".swipe-icon.left")) {
      card.querySelector(".swipe-icon.left").remove();
    }
    card.classList.add("swiping-right"); // Add right inner shadow
    card.classList.remove("swiping-left"); // Remove left inner shadow
  } else {
    // Reset: remove icons and inner shadows if not swiping far enough
    if (card.querySelector(".swipe-icon.left")) {
      card.querySelector(".swipe-icon.left").remove();
    }
    if (card.querySelector(".swipe-icon.right")) {
      card.querySelector(".swipe-icon.right").remove();
    }
    card.classList.remove("swiping-left", "swiping-right"); // Remove both inner shadows
  }

  // Limit how far the card can be dragged horizontally
  const maxDrag = 250;
  offsetX = Math.max(-maxDrag, Math.min(offsetX, maxDrag));


 // Apply the drag effect
 card.style.transform = `translate(${offsetX}px, 0) rotate(${offsetX / 10}deg)`;
}

function endDrag(e) {
  if (!isDragging) return;

  const card = e.target;
  card.classList.remove("dragging");

  // Remove inner shadows when dragging ends
  card.classList.remove("swiping-left", "swiping-right");

  offsetX = e.touches ? e.changedTouches[0].clientX - startX : e.clientX - startX;

  if (Math.abs(offsetX) > 100) {
    if (offsetX > 0) {
      swipe(true); // Green flag
    } else {
      swipe(false); // Red flag
    }
  } else {
    // Reset card position
    card.style.transform = "translate(0, 0) rotate(0)";
  }

  isDragging = false;
}

isDragging = false;
const resultDescriptions = {
  "Fun-Loving Foodie": {
      emoji: "🍕",
      description: "You’re a lover who lives for fun, laughter, and good food. You’ll whisk your partner away for spontaneous pizza dates, or cook up something quirky just to make them laugh. You believe romance is best served with a side of snacks.",
      pairing: {
          style: "The Hopeless Romantic"
      }
  },
  "The Over-Thinker": {
      emoji: "🤔",
      description: "You tend to analyze every little detail of a relationship. Should you text them now, or wait? Are they “the one”? Your love life might feel like a strategic chess game, but it’s just your way of ensuring everything is perfect.",
      pairing: {
          style: "The Skeptical Realist"
      }
  },
  "The Hopeless Romantic": {
      emoji: "💘",
      description: "You’re all about grand gestures, candlelit dinners, and endless affection. You see romance in everything and can’t help but pour your heart into every relationship. For you, love is the ultimate adventure.",
      pairing: {
          style: "The Fun-Loving Foodie"
      }
  },
  "The Independent Adventurer": {
      emoji: "🌍",
      description: "You value your freedom, and your ideal relationship is one that respects boundaries. You love having your own space but can still make time for a partner when it’s right. You’re not looking for someone to complete you; you’re looking for someone who complements your life.",
      pairing: {
          style: "The Let's See What Happens Type"
      }
  },
  "The Let's See What Happens Type": {
      emoji: "🎲",
      description: "You approach love like a fun experiment. You’re open to new experiences and relationships, but you don’t try to force anything. You believe in going with the flow and seeing where things take you.",
      pairing: {
          style: "The Independent Adventurer"
      }
  },
  "The Emotional Nurturer": {
      emoji: "🌱",
      description: "You love making your partner feel special. From comforting hugs to personalized gifts, you’re always thinking about ways to show love. You thrive on taking care of your partner emotionally and creating a warm, safe space for them.",
      pairing: {
          style: "The All About the Little Things Lover"
      }
  },
  "The All About the Little Things Lover": {
      emoji: "✨",
      description: "You thrive on the small, meaningful moments. A handwritten note, a quiet walk in the park, or making your partner their favorite drink—that’s what romance is about for you. You believe it’s the little things that make love last.",
      pairing: {
          style: "The Emotional Nurturer"
      }
  },
  "The Passionate Firecracker": {
      emoji: "🔥",
      description: "You’re all in when it comes to romance. From wild adventures to intense emotions, you live for that deep connection and fiery passion. You want someone who can keep up with your high-energy love.",
      pairing: {
          style: "The Hopeless Romantic"
      }
  },
  "The Skeptical Realist": {
      emoji: "🧐",
      description: "You’re not one to believe in fairy tales. You prefer a relationship that’s grounded in reality and based on mutual respect and understanding. Love for you is about finding someone who gets you, flaws and all.",
      pairing: {
          style: "The 'You Can Never Find Love' Type"
      }
  },
  "The 'You Can Never Find Love' Type": {
      emoji: "😅",
      description: "You’re a bit of a lone wolf. You’re not really looking for anything serious, and sometimes it feels like you’re just waiting for the perfect person to come along—but that might never happen if you’re too picky or closed off.",
      pairing: {
          style: "The Skeptical Realist"
      }
  }
};
// Result Functions
function showResult() {
  const cardStack = document.getElementById("card-stack");
  const buttons = document.querySelector(".flag-buttons");

  // Hide the buttons if they exist
  if (buttons) {
    buttons.style.display = "none";
  }

  // Find the type with the highest score
  let maxScore = -1;
  let resultType = "";
  
  for (const [type, score] of Object.entries(profileScores)) {
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
    }
  }

  // Fallback to a default type if no clear winner
  if (!resultType) {
    resultType = "The Let's See What Happens Type";
  }

  // Get the result details
  const result = resultDescriptions[resultType];

  // Create result card
  const resultCard = document.createElement('div');
  resultCard.classList.add('result-card');
  
  resultCard.innerHTML = `
    <div class="result-content">
      <div class="result-header">
        <span class="result-emoji">${result.emoji}</span>
        <h2 class="result-title">Your Romantic Style Is:</h2>
        <h3 class="result-type">${resultType}</h3>
      </div>
      
      <div class="result-description">
        <p>${result.description}</p>
      </div>
      
      <div class="result-pairing">
        <h4 class="pairing-title">Perfect Match ${result.pairing.style === resultType ? '💘' : '❤️'}</h4>
        <p class="pairing-text">You will pair well with:</p>
        <h3 class="pairing-type">${result.pairing.style}</h3>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .result-card {
      background: white;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .result-header {
      margin-bottom: 2rem;
    }

    .result-emoji {
      font-size: 4rem;
      display: block;
      margin-bottom: 1rem;
    }

    .result-header h2 {
      color: #666;
      font-size: 1.5rem;
      margin: 0.5rem 0;
    }

    .result-header h3 {
      color: #333;
      font-size: 2rem;
      margin: 0.5rem 0;
      font-weight: bold;
    }

    .result-description {
      margin: 2rem 0;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 10px;
    }

    .result-description p {
      color: #444;
      line-height: 1.6;
      margin: 0;
    }

    .result-pairing {
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 2px solid #f0f0f0;
    }

    .result-pairing h4 {
      color: #666;
      font-size: 1.2rem;
      margin: 0.5rem 0;
    }

    .result-pairing p {
      color: #888;
      margin: 0.5rem 0;
    }

    .result-pairing h3 {
      color: #333;
      font-size: 1.5rem;
      margin: 0.5rem 0;
      font-weight: bold;
    }
  `;
  document.head.appendChild(style);

  // Clear and display result
  cardStack.innerHTML = '';
  cardStack.appendChild(resultCard);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("red-flag").addEventListener("click", () => {
    swipe(false);
  });

  document.getElementById("green-flag").addEventListener("click", () => {
    swipe(true);
  });
});

// Start the App
loadData();