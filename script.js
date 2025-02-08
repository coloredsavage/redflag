const profiles = [
  "Thinks the moon landing was staged… but in a cool way.", // Skeptical Realist (2)
  "Doesn’t trust people who don’t like dogs.", // Emotional Nurturer (2)
  "Owns way too many novelty mugs.", // The “All About the Little Things” Lover (2)
  "Can’t stop quoting Mean Girls.", // Passionate Firecracker (2), Independent Adventurer (1)
  "Thinks they’d be great on Survivor.", // Over-Thinker (2), Hopeless Romantic (1)
  "Hates when people clap after a plane lands.", // Skeptical Realist (1)
  "Owns a fanny pack, and actually uses it.", // Independent Adventurer (2)
  "Uses ‘Yeet’ in every conversation.", // The “All About the Little Things” Lover (1)
  "Can’t resist taking a nap wherever they are.", // Fun-Loving Foodie (2)
  "Believes that TikTok is a form of art.", // The “Let’s See What Happens” Type (1)
  "Has never seen Titanic… but still quotes it.", // The “All About the Little Things” Lover (3)
  "Has a secret collection of rubber ducks.", // The 'You Can Never Find Love' Type (3)
  "Can quote every line from The Office.", // The “All About the Little Things” Lover (3)
  "Believes their spirit animal is a sloth.", // Hopeless Romantic (2)
  "Refers to themselves as “vibing.”", // The “Let’s See What Happens” Type (3)
  "Wears sunglasses at night.", // Independent Adventurer (1)
  "Can’t walk past a vending machine without buying something.", // Fun-Loving Foodie (1)
  "Holds grudges over minor inconveniences, like when someone cuts in line.", // Independent Adventurer (2)
  "Never knows what day it is but still manages to show up on time.", // Skeptical Realist (2)
  "Thinks every song is better if you add a tambourine.", // Fun-Loving Foodie (1), Skeptical Realist (1)
  "Owns an excessive number of graphic T-shirts.", // The “All About the Little Things” Lover (1)
  "Always makes awkward small talk with cashiers.", // The “Let’s See What Happens” Type (1)
  "Will fight you on whether or not pineapple belongs on pizza.", // Passionate Firecracker (2), Fun-Loving Foodie (1)
  "Can’t pronounce foreign food names correctly, but does it anyway.", // Fun-Loving Foodie (1)
  "Refuses to use a normal-sized toothbrush, only the giant ones.", // The “All About the Little Things” Lover (1)
  "Constantly wears a hoodie, even in 90-degree weather.", // Independent Adventurer (3)
  "Has an irrational fear of escalators.", // Skeptical Realist (3)
  "Believes that taking a nap makes them a wizard.", // Emotional Nurturer (1)
  "Knows all the lyrics to Barbie Girl.", // Hopeless Romantic (3)
  "Uses “I’m not a morning person” as an excuse for everything.", // The “Let’s See What Happens” Type (2)
  "Is obsessed with watching home renovation shows but doesn’t own a toolbox.", // Over-Thinker (1)
  "Always orders the same thing at a restaurant, no exceptions.", // Fun-Loving Foodie (2)
  "Collects empty bottles just for the aesthetic.", // Emotional Nurturer (1)
  "Thinks the moon controls their mood.", // Over-Thinker (3), Emotional Nurturer (2)
  "Can’t resist buying things they don’t need during a Target run.", // Fun-Loving Foodie (1), Hopeless Romantic (2)
  "Hides snacks around the house for later.", // Fun-Loving Foodie (2)
  "Constantly claims they could’ve been a professional athlete.", // Over-Thinker (2)
  "Writes in all caps like they’re shouting.", // Passionate Firecracker (1)
  "Has a conspiracy theory about the Bermuda Triangle.", // Skeptical Realist (1), Over-Thinker (1)
  "Talks to their plants like they’re friends.", // Emotional Nurturer (3), The 'You Can Never Find Love' Type (1)
  "Thinks cold pizza is a delicacy.", // Fun-Loving Foodie (3), The “All About the Little Things” Lover (2)
  "Has a secret stash of candy that they won’t share.", // Fun-Loving Foodie (2)
  "Prefers to make up their own rules to board games.", // Passionate Firecracker (2)
  "Has a “life hack” for everything.", // Over-Thinker (1)
  "Wears band T-shirts but can’t name three songs by the band.", // The “All About the Little Things” Lover (2)
  "Claims to be “super into yoga” but only does it once a year.", // Skeptical Realist (3)
  "Can’t decide between being a dog person or a cat person.", // Emotional Nurturer (1)
  "Has an irrational love for 90s sitcoms.", // Hopeless Romantic (3), The 'You Can Never Find Love' Type (1)
  "Refers to themselves as “unique” when they’re just a little quirky.", // The “All About the Little Things” Lover (2)
  "Doesn’t use the ‘just add water’ instructions for instant noodles.", // The “All About the Little Things” Lover (1)
  "Is constantly trying to start a podcast, but never follows through.", // Over-Thinker (2)
  "Believes they would make an excellent spy, despite being terrible at keeping secrets.", // Over-Thinker (2)
  "Still watches cartoons, no shame.", // The 'You Can Never Find Love' Type (1)
  "Finds it impossible to say ‘no’ to a sale.", // Fun-Loving Foodie (1)
  "Lives for the drama in reality TV.", // Passionate Firecracker (2)
  "Has an extensive collection of cat memes.", // The “Let’s See What Happens” Type (1)
  "Can’t stop talking about their favorite conspiracy theory at parties.", // Passionate Firecracker (3)
  "Sleeps with a stuffed animal.", // The 'You Can Never Find Love' Type (3), The “Let’s See What Happens” Type (2)
  "Is obsessed with finding the perfect Instagram filter.", // Independent Adventurer (2)
  "Unironically loves ASMR videos.", // The “Let’s See What Happens” Type (1)
  "Spends hours organizing their playlists, but never listens to them.", // Over-Thinker (1)
  "Takes random polls about silly things.", // The “Let’s See What Happens” Type (1)
  "Always ends up in awkward situations with their ex.", // The “Let’s See What Happens” Type (2)
  "Thinks they could survive in the wild without any survival skills.", // Over-Thinker (1)
  "Is convinced they were a superhero in a past life.", // Over-Thinker (3)
  "Loves to text in emoji code.", // Passionate Firecracker (1)
  "Is always late but blames traffic even if it’s 2 AM.", // Emotional Nurturer (2)
  "Pretends to know how to cook but always orders takeout.", // Fun-Loving Foodie (1)
  "Can’t resist picking up every stray animal they see.", // Emotional Nurturer (2)
  "Can’t function without caffeine, but only drinks it with sugar.", // The “Let’s See What Happens” Type (2)
  "Makes up stories about their “wild adventures” just to sound interesting.", // Over-Thinker (2)
  "Obsessed with collecting useless trivia." // Over-Thinker (1)
];

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
const profileScoring = {
  "Thinks the moon landing was staged… but in a cool way.": { "The Skeptical Realist": 2 },
  "Doesn’t trust people who don’t like dogs.": { "The Emotional Nurturer": 2 },
  "Owns way too many novelty mugs.": { "The All About the Little Things Lover": 2 },
  "Can’t stop quoting Mean Girls.": { "The Passionate Firecracker": 2, "The Independent Adventurer": 1 },
  "Thinks they’d be great on Survivor.": { "The Over-Thinker": 2, "The Hopeless Romantic": 1 },
  "Hates when people clap after a plane lands.": { "The Skeptical Realist": 1 },
  "Owns a fanny pack, and actually uses it.": { "The Independent Adventurer": 2 },
  "Uses ‘Yeet’ in every conversation.": { "The All About the Little Things Lover": 1 },
  "Can’t resist taking a nap wherever they are.": { "The Fun-Loving Foodie": 2 },
  "Believes that TikTok is a form of art.": { "The Let’s See What Happens Type": 1 },
  "Has never seen Titanic… but still quotes it.": { "The All About the Little Things Lover": 3 },
  "Has a secret collection of rubber ducks.": { "The 'You Can Never Find Love' Type": 3 },
  "Can quote every line from The Office.": { "The All About the Little Things Lover": 3 },
  "Believes their spirit animal is a sloth.": { "The Hopeless Romantic": 2 },
  "Refers to themselves as “vibing.”": { "The Let’s See What Happens Type": 3 },
  "Wears sunglasses at night.": { "The Independent Adventurer": 1 },
  "Can’t walk past a vending machine without buying something.": { "The Fun-Loving Foodie": 1 },
  "Holds grudges over minor inconveniences, like when someone cuts in line.": { "The Independent Adventurer": 2 },
  "Never knows what day it is but still manages to show up on time.": { "The Skeptical Realist": 2 },
  "Thinks every song is better if you add a tambourine.": { "The Fun-Loving Foodie": 1, "The Skeptical Realist": 1 },
  "Owns an excessive number of graphic T-shirts.": { "The All About the Little Things Lover": 1 },
  "Always makes awkward small talk with cashiers.": { "The Let’s See What Happens Type": 1 },
  "Will fight you on whether or not pineapple belongs on pizza.": { "The Passionate Firecracker": 2, "The Fun-Loving Foodie": 1 },
  "Can’t pronounce foreign food names correctly, but does it anyway.": { "The Fun-Loving Foodie": 1 },
  "Refuses to use a normal-sized toothbrush, only the giant ones.": { "The All About the Little Things Lover": 1 },
  "Constantly wears a hoodie, even in 90-degree weather.": { "The Independent Adventurer": 3 },
  "Has an irrational fear of escalators.": { "The Skeptical Realist": 3 },
  "Believes that taking a nap makes them a wizard.": { "The Emotional Nurturer": 1 },
  "Knows all the lyrics to Barbie Girl.": { "The Hopeless Romantic": 3 },
  "Uses “I’m not a morning person” as an excuse for everything.": { "The Let’s See What Happens Type": 2 },
  "Is obsessed with watching home renovation shows but doesn’t own a toolbox.": { "The Over-Thinker": 1 },
  "Always orders the same thing at a restaurant, no exceptions.": { "The Fun-Loving Foodie": 2 },
  "Collects empty bottles just for the aesthetic.": { "The Emotional Nurturer": 1 },
  "Thinks the moon controls their mood.": { "The Over-Thinker": 3, "The Emotional Nurturer": 2 },
  "Can’t resist buying things they don’t need during a Target run.": { "The Fun-Loving Foodie": 1, "The Hopeless Romantic": 2 },
  "Hides snacks around the house for later.": { "The Fun-Loving Foodie": 2 },
  "Constantly claims they could’ve been a professional athlete.": { "The Over-Thinker": 2 },
  "Writes in all caps like they’re shouting.": { "The Passionate Firecracker": 1 },
  "Has a conspiracy theory about the Bermuda Triangle.": { "The Skeptical Realist": 1, "The Over-Thinker": 1 },
  "Talks to their plants like they’re friends.": { "The Emotional Nurturer": 3, "The 'You Can Never Find Love' Type": 1 },
  "Thinks cold pizza is a delicacy.": { "The Fun-Loving Foodie": 3, "The All About the Little Things Lover": 2 },
  "Has a secret stash of candy that they won’t share.": { "The Fun-Loving Foodie": 2 },
  "Prefers to make up their own rules to board games.": { "The Passionate Firecracker": 2 },
  "Has a “life hack” for everything.": { "The Over-Thinker": 1 },
  "Wears band T-shirts but can’t name three songs by the band.": { "The All About the Little Things Lover": 2 },
  "Claims to be “super into yoga” but only does it once a year.": { "The Skeptical Realist": 3 },
  "Can’t decide between being a dog person or a cat person.": { "The Emotional Nurturer": 1 },
  "Has an irrational love for 90s sitcoms.": { "The Hopeless Romantic": 3, "The 'You Can Never Find Love' Type": 1 },
  "Refers to themselves as “unique” when they’re just a little quirky.": { "The All About the Little Things Lover": 2 },
  "Doesn’t use the ‘just add water’ instructions for instant noodles.": { "The All About the Little Things Lover": 1 },
  "Is constantly trying to start a podcast, but never follows through.": { "The Over-Thinker": 2 },
  "Believes they would make an excellent spy, despite being terrible at keeping secrets.": { "The Over-Thinker": 2 },
  "Still watches cartoons, no shame.": { "The 'You Can Never Find Love' Type": 1 },
  "Finds it impossible to say ‘no’ to a sale.": { "The Fun-Loving Foodie": 1 },
  "Lives for the drama in reality TV.": { "The Passionate Firecracker": 2 },
  "Has an extensive collection of cat memes.": { "The Let’s See What Happens Type": 1 },
  "Can’t stop talking about their favorite conspiracy theory at parties.": { "The Passionate Firecracker": 3 },
  "Sleeps with a stuffed animal.": { "The 'You Can Never Find Love' Type": 3, "The Let’s See What Happens Type": 2 },
  "Is obsessed with finding the perfect Instagram filter.": { "The Independent Adventurer": 2 },
  "Unironically loves ASMR videos.": { "The Let’s See What Happens Type": 1 },
  "Spends hours organizing their playlists, but never listens to them.": { "The Over-Thinker": 1 },
  "Takes random polls about silly things.": { "The Let’s See What Happens Type": 1 },
  "Always ends up in awkward situations with their ex.": { "The Let’s See What Happens Type": 1 }
};
let currentProfileIndex = 0;
let isDragging = false;
let startX, startY;
let offsetX = 0;
const dragThreshold = 60;
let nextProfiles = [];
const MAX_SWIPES = 10;

const quirkEmojis = {
"Thinks the moon landing was staged… but in a cool way.": "🌕", // Moon emoji
"Doesn’t trust people who don’t like dogs.": "🐶", // Dog emoji
"Owns way too many novelty mugs.": "☕", // Coffee mug emoji
"Can’t stop quoting Mean Girls.": "👯", // Dancing women emoji
"Thinks they’d be great on Survivor.": "🏝️", // Desert island emoji
"Hates when people clap after a plane lands.": "✈️", // Airplane emoji
"Owns a fanny pack, and actually uses it.": "👝", // Clutch bag emoji
"Uses ‘Yeet’ in every conversation.": "💨", // Dashing away emoji
"Can’t resist taking a nap wherever they are.": "😴", // Sleeping face emoji
"Believes that TikTok is a form of art.": "🎨", // Artist palette emoji
"Has never seen Titanic… but still quotes it.": "🚢", // Ship emoji
"Has a secret collection of rubber ducks.": "🦆", // Duck emoji
"Can quote every line from The Office.": "📺", // Television emoji
"Believes their spirit animal is a sloth.": "🦥", // Sloth emoji
"Refers to themselves as “vibing.”": "🎶", // Musical notes emoji
"Wears sunglasses at night.": "🕶️", // Sunglasses emoji
"Can’t walk past a vending machine without buying something.": "🍫", // Chocolate bar emoji
"Holds grudges over minor inconveniences, like when someone cuts in line.": "😠", // Angry face emoji
"Never knows what day it is but still manages to show up on time.": "📅", // Calendar emoji
"Thinks every song is better if you add a tambourine.": "🎶", // Musical notes emoji
"Owns an excessive number of graphic T-shirts.": "👕", // T-shirt emoji
"Always makes awkward small talk with cashiers.": "💬", // Speech balloon emoji
"Will fight you on whether or not pineapple belongs on pizza.": "🍍", // Pineapple emoji
"Can’t pronounce foreign food names correctly, but does it anyway.": "🍜", // Steaming bowl emoji
"Refuses to use a normal-sized toothbrush, only the giant ones.": "🪥", // Toothbrush emoji
"Constantly wears a hoodie, even in 90-degree weather.": "🧥", // Coat emoji
"Has an irrational fear of escalators.": "🪜", // Ladder emoji
"Believes that taking a nap makes them a wizard.": "🧙", // Wizard emoji
"Knows all the lyrics to Barbie Girl.": "🎤", // Microphone emoji
"Uses “I’m not a morning person” as an excuse for everything.": "🌅", // Sunrise emoji
"Is obsessed with watching home renovation shows but doesn’t own a toolbox.": "🛠️", // Hammer and wrench emoji
"Always orders the same thing at a restaurant, no exceptions.": "🍽️", // Fork and knife emoji
"Collects empty bottles just for the aesthetic.": "🍾", // Bottle with popping cork emoji
"Thinks the moon controls their mood.": "🌙", // Crescent moon emoji
"Can’t resist buying things they don’t need during a Target run.": "🛒", // Shopping cart emoji
"Hides snacks around the house for later.": "🍪", // Cookie emoji
"Constantly claims they could’ve been a professional athlete.": "🏅", // Medal emoji
"Writes in all caps like they’re shouting.": "🔊", // Loudspeaker emoji
"Has a conspiracy theory about the Bermuda Triangle.": "🔺", // Red triangle emoji
"Talks to their plants like they’re friends.": "🌿", // Herb emoji
"Thinks cold pizza is a delicacy.": "🍕", // Pizza emoji
"Has a secret stash of candy that they won’t share.": "🍬", // Candy emoji
"Prefers to make up their own rules to board games.": "🎲", // Game die emoji
"Has a “life hack” for everything.": "🛠️", // Hammer and wrench emoji
"Wears band T-shirts but can’t name three songs by the band.": "🎸", // Guitar emoji
"Claims to be “super into yoga” but only does it once a year.": "🧘", // Person in lotus position emoji
"Can’t decide between being a dog person or a cat person.": "🐱", // Cat emoji
"Has an irrational love for 90s sitcoms.": "📺", // Television emoji
"Refers to themselves as “unique” when they’re just a little quirky.": "🦄", // Unicorn emoji
"Doesn’t use the ‘just add water’ instructions for instant noodles.": "🍜", // Steaming bowl emoji
"Is constantly trying to start a podcast, but never follows through.": "🎙️", // Studio microphone emoji
"Believes they would make an excellent spy, despite being terrible at keeping secrets.": "🕵️", // Detective emoji
"Still watches cartoons, no shame.": "📺", // Television emoji
"Finds it impossible to say ‘no’ to a sale.": "🛍️", // Shopping bags emoji
"Lives for the drama in reality TV.": "📺", // Television emoji
"Has an extensive collection of cat memes.": "🐱", // Cat emoji
"Can’t stop talking about their favorite conspiracy theory at parties.": "🕵️", // Detective emoji
"Sleeps with a stuffed animal.": "🧸", // Teddy bear emoji
"Is obsessed with finding the perfect Instagram filter.": "📸", // Camera emoji
"Unironically loves ASMR videos.": "🎧", // Headphone emoji
"Spends hours organizing their playlists, but never listens to them.": "🎶", // Musical notes emoji
"Takes random polls about silly things.": "📊", // Chart increasing emoji
"Always ends up in awkward situations with their ex.": "😬", // Grimacing face emoji
"Thinks they could survive in the wild without any survival skills.": "🌲", // Evergreen tree emoji
"Is convinced they were a superhero in a past life.": "🦸", // Superhero emoji
"Loves to text in emoji code.": "📱", // Mobile phone emoji
"Is always late but blames traffic even if it’s 2 AM.": "🚗", // Car emoji
"Pretends to know how to cook but always orders takeout.": "🍳", // Cooking emoji
"Can’t resist picking up every stray animal they see.": "🐾", // Paw prints emoji
"Can’t function without caffeine, but only drinks it with sugar.": "☕", // Coffee mug emoji
"Makes up stories about their “wild adventures” just to sound interesting.": "🗺️", // World map emoji
"Obsessed with collecting useless trivia.": "📚" // Books emoji
};
// Function to shuffle an array
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]];
}
}

// Shuffle the profiles array and preload the next two profiles
shuffleArray(profiles);
nextProfiles = profiles.slice(currentProfileIndex, currentProfileIndex + 2);

function createCard(text) {
const card = document.createElement("div");
card.classList.add("card");

// Add the emoji and text to the card
const emoji = quirkEmojis[text] || "❓"; // Default to a question mark if no emoji is found
card.innerHTML = `<span class="emoji">${emoji}</span> ${text}`;

return card;
}

function showProfile() {
const cardStack = document.getElementById("card-stack");
cardStack.innerHTML = "";

if (currentProfileIndex < Math.min(profiles.length, MAX_SWIPES)) {
  const cardsToShow = Math.min(3, MAX_SWIPES - currentProfileIndex); // Show fewer cards as we approach the end

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


// script.js
function swipe(isGreenFlag) {
  if (currentProfileIndex >= MAX_SWIPES) return;

  const cardStack = document.getElementById("card-stack");
  const card = cardStack.querySelector(".card");

  if (card) {
    const currentProfile = card.textContent;

    // Add swipe feedback (inner shadow and circular button) for button clicks
    if (isGreenFlag) {
      card.classList.add("swiping-right"); // Add right inner shadow
      card.innerHTML += `<div class="swipe-icon right"><i class="fas fa-check"></i></div>`; // Add ✓ icon
    } else {
      card.classList.add("swiping-left"); // Add left inner shadow
      card.innerHTML += `<div class="swipe-icon left"><i class="fas fa-times"></i></div>`; // Add X icon
    }

    // Add points for green flag swipes
    if (isGreenFlag && profileScoring[currentProfile]) {
      for (const [type, points] of Object.entries(profileScoring[currentProfile])) {
        profileScores[type] += points;
      }
    }

    // Add both the swipe and shadow classes
    if (isGreenFlag) {
      card.classList.add("swipe-right", "swipe-shadow-right");
      card.classList.remove("swipe-shadow-left");
    } else {
      card.classList.add("swipe-left", "swipe-shadow-left");
      card.classList.remove("swipe-shadow-right");
    }

    // Remove the swipe icon and inner shadows after the swipe animation
    card.addEventListener("transitionend", () => {
      if (card.querySelector(".swipe-icon.left")) {
        card.querySelector(".swipe-icon.left").remove();
      }
      if (card.querySelector(".swipe-icon.right")) {
        card.querySelector(".swipe-icon.right").remove();
      }
      card.classList.remove("swiping-left", "swiping-right"); // Remove inner shadows
      card.remove();

      // Check if this is the final swipe
      if (currentProfileIndex + 1 >= MAX_SWIPES) {
        // Show the loader
        const loader = document.getElementById("loader");
        loader.style.display = "block"; // Make the loader visible
        cardStack.innerHTML = ""; // Clear the card stack

        // Delay the results display by 1.5 seconds
        setTimeout(() => {
          loader.style.display = "none"; // Hide the loader
          showResult(); // Show the results
        }, 1500); // 1.5 seconds delay
      } else {
        currentProfileIndex++;
        nextProfiles = profiles.slice(currentProfileIndex, currentProfileIndex + 2);
        showProfile();
      }
    }, { once: true });
  }
}

// Function to make a card draggable
function makeDraggable(card) {
card.addEventListener("mousedown", startDrag);
card.addEventListener("touchstart", startDrag, { passive: true });
card.addEventListener("mouseup", endDrag);
card.addEventListener("touchend", endDrag);
card.addEventListener("mousemove", drag);
card.addEventListener("touchmove", drag, { passive: true });
}

// Start dragging
function startDrag(e) {
isDragging = true;
const card = e.target;
card.classList.add("dragging");

// Get the initial touch/mouse position
const clientX = e.touches ? e.touches[0].clientX : e.clientX;
const clientY = e.touches ? e.touches[0].clientY : e.clientY;

startX = clientX - card.offsetLeft;
startY = clientY - card.offsetTop;
}

// End dragging
// script.js
// script.js
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
// Add emojis based on the type
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

function showResult() {
  const cardStack = document.getElementById("card-stack");
  const buttons = document.querySelector(".flag-buttons");

  // Hide the buttons
  buttons.classList.add("hide-buttons");

  // Disable swipe functionality
  const hammer = new Hammer(cardStack);
  hammer.off("swipeleft swiperight"); // Remove swipe event listeners

  // Find the type with the highest score
  let maxScore = -1;
  let resultType = "";

  for (const [type, score] of Object.entries(profileScores)) {
      if (score > maxScore) {
          maxScore = score;
          resultType = type;
      }
  }

  // Get the result details
  const result = resultDescriptions[resultType];

  // Display the result with romantic style, description, and pairing information
  cardStack.innerHTML = `
      <div class="card">
          <h2>Your romantic style is: ${resultType} ${result.emoji}</h2>
          <p>${result.description}</p>
          <div class="pairing-info">
              <h3>You will pair well with a ${result.pairing.style}</h3>
          </div>
      </div>
  `;
}


document.getElementById("red-flag").addEventListener("click", () => {
  swipe(false); // Trigger swipe with red flag feedback
});

document.getElementById("green-flag").addEventListener("click", () => {
  swipe(true); // Trigger swipe with green flag feedback
});
// Ensure that the showProfile function is defined and correctly displays the profile
showProfile();