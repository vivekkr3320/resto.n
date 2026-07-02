/* ==========================================================================
   CULINARY MENU DATA
   ========================================================================== */
const MENU_ITEMS = [
    {
        id: "crispy-pork",
        title: "Crispy Pork Belly",
        category: "tapas",
        price: 580,
        image: "assets/crispy_pork.png",
        fallbackImg: "https://placehold.co/600x400/163324/FAF6F0?text=Crispy+Pork",
        description: "Slow-cooked pork belly with perfectly blistered crackling, glazed with Goan toddy vinegar, ginger, and honey. Chef's signature specialty.",
        popular: true,
        ingredients: "Pork belly, toddy vinegar, local honey, fresh red chilies, ginger, secret spice rub.",
        tags: ["Pork", "Chef's Special", "Gluten Free"]
    },
    {
        id: "marisco-bulhao",
        title: "Marisco A Bulhao Pato",
        category: "mains",
        price: 750,
        image: "assets/seafood_dish.png",
        fallbackImg: "https://placehold.co/600x400/163324/FAF6F0?text=Marisco+A+Bulhao+Pato",
        description: "Fresh coastal clams steamed in white wine, high-grade olive oil, garlic, lemon juice, and a generous heap of fresh coriander.",
        popular: true,
        ingredients: "Fresh clams, white wine, garlic, extra virgin olive oil, coriander, lemon.",
        tags: ["Seafood", "Portuguese Classic"]
    },
    {
        id: "panko-prawns",
        title: "Panko Prawns with Wasabi",
        category: "tapas",
        price: 620,
        image: "assets/panko_prawns.png",
        fallbackImg: "https://placehold.co/600x400/163324/FAF6F0?text=Panko+Prawns",
        description: "Jumbo prawns breaded in crispy panko flakes and fried golden brown. Served with a pungent house-made wasabi mayonnaise dip.",
        popular: false,
        ingredients: "Jumbo prawns, panko breadcrumbs, wasabi paste, egg, garlic mayo.",
        tags: ["Seafood", "Crispy"]
    },
    {
        id: "pork-burnt-ends",
        title: "Pork Burnt Ends",
        category: "tapas",
        price: 560,
        image: "assets/crispy_pork.png",
        fallbackImg: "https://placehold.co/600x400/163324/FAF6F0?text=Pork+Burnt+Ends",
        description: "Smoked pork shoulder cubes tossed in a caramelized sticky glaze of local Goan palm jaggery and dark rum.",
        popular: false,
        ingredients: "Pork shoulder, palm jaggery, Old Monk rum, smoked paprika, garlic.",
        tags: ["Pork", "Smoked", "Sweet & Spicy"]
    },
    {
        id: "crispy-calamari",
        title: "Crispy Calamari",
        category: "tapas",
        price: 490,
        image: "assets/seafood_dish.png",
        fallbackImg: "https://placehold.co/600x400/163324/FAF6F0?text=Crispy+Calamari",
        description: "Tender squid rings dusted with seasoned cornstarch, fried crisp, and served with a zesty lemon garlic aioli.",
        popular: false,
        ingredients: "Squid rings, cornstarch, black pepper, sea salt, garlic aioli.",
        tags: ["Seafood", "Crispy"]
    },
    {
        id: "choris-rice",
        title: "Choris Fried Rice",
        category: "mains",
        price: 680,
        image: "assets/hero_bg.png",
        fallbackImg: "https://placehold.co/600x400/163324/FAF6F0?text=Choris+Fried+Rice",
        description: "Tangy and spicy traditional Goan pork sausage (Choris) sautéed with aromatic Basmati rice, sweet onions, potatoes, and fresh coriander.",
        popular: true,
        ingredients: "Goan pork chorizo, Basmati rice, baby potatoes, red onions, fresh coriander.",
        tags: ["Pork", "Goan Heritage", "Spicy"]
    },
    {
        id: "lumpia",
        title: "Lumpia (Goan Style)",
        category: "tapas",
        price: 420,
        image: "assets/hero_bg.png",
        fallbackImg: "https://placehold.co/600x400/163324/FAF6F0?text=Goan+Lumpia",
        description: "Crispy spring rolls stuffed with spiced minced chicken, local cabbage, carrots, and glass noodles. Served with sweet chili vinegar.",
        popular: false,
        ingredients: "Minced chicken, carrots, cabbage, spring onion, wrappers, local dipping vinegar.",
        tags: ["Poultry", "Crispy", "Popular Tapas"]
    },
    {
        id: "chicken-steak",
        title: "Chicken Steak with Pepper Sauce",
        category: "mains",
        price: 720,
        image: "assets/hero_bg.png",
        fallbackImg: "https://placehold.co/600x400/163324/FAF6F0?text=Chicken+Steak",
        description: "Juicy pan-seared chicken breast basted in butter and garlic, served over creamy mashed potatoes and smothered in a rich green peppercorn gravy.",
        popular: false,
        ingredients: "Chicken breast, fresh cream, green peppercorns, potatoes, garlic, seasonal greens.",
        tags: ["Poultry", "Comfort Food"]
    },
    {
        id: "sticky-toffee",
        title: "Sticky Toffee Pudding",
        category: "desserts",
        price: 450,
        image: "assets/cocktail_vibe.png",
        fallbackImg: "https://placehold.co/600x400/163324/FAF6F0?text=Sticky+Toffee+Pudding",
        description: "Warm, moist date sponge cake drenched in a decadent rich butterscotch sauce, served with a scoop of premium vanilla bean ice cream.",
        popular: true,
        ingredients: "Dates, brown sugar, butter, cream, vanilla ice cream.",
        tags: ["Dessert", "Sweet", "Chef's Recommendation"]
    },
    {
        id: "brownie-icecream",
        title: "Brownie with Ice Cream",
        category: "desserts",
        price: 400,
        image: "assets/cocktail_vibe.png",
        fallbackImg: "https://placehold.co/600x400/163324/FAF6F0?text=Brownie+with+Ice+Cream",
        description: "House-baked dark chocolate fudge brownie served sizzler style, topped with hot chocolate ganache and vanilla bean ice cream.",
        popular: false,
        ingredients: "Dark chocolate, cocoa, eggs, butter, vanilla ice cream, hot ganache.",
        tags: ["Dessert", "Chocolate"]
    },
    {
        id: "ana-sunset",
        title: "Ana Sunset Feni Splash",
        category: "drinks",
        price: 520,
        image: "assets/cocktail_vibe.png",
        fallbackImg: "https://placehold.co/600x400/163324/FAF6F0?text=Feni+Splash+Cocktail",
        description: "Artisanal double-distilled cashew Feni mixed with fresh Goan kokum juice, lime, soda, and a sprig of mint. The taste of Goa.",
        popular: true,
        ingredients: "Cashew Feni, kokum extract, fresh lime juice, mint leaves, simple syrup, soda.",
        tags: ["Alcoholic", "Feni Craft", "Refreshing"]
    },
    {
        id: "porto-tonic",
        title: "Porto Tonico",
        category: "drinks",
        price: 550,
        image: "assets/cocktail_vibe.png",
        fallbackImg: "https://placehold.co/600x400/163324/FAF6F0?text=Porto+Tonico",
        description: "A crisp Portuguese classic. Fine white port wine served over ice with premium tonic water, garnished with a slice of orange and rosemary.",
        popular: false,
        ingredients: "White Port wine, premium tonic water, fresh orange, fresh rosemary, ice.",
        tags: ["Alcoholic", "Portuguese Icon"]
    }
];

/* ==========================================================================
   GOOGLE REVIEWS DATA
   ========================================================================== */
let CUSTOMER_REVIEWS = [
    {
        author: "Alevtina Pominova",
        status: "Local Guide · 56 reviews · 311 photos",
        rating: 5,
        time: "5 months ago",
        content: "Having found this secret gem in Old Goa was the best of luck for us - their cuisine is absolutely unique, and genuinely delicious 😋. The crispy pork is out of this world! Excellent cocktails.",
        tag: "pork",
        response: {
            author: "Owner",
            time: "3 months ago",
            text: "Glad you had a good experience! We take pride in our unique menu items."
        }
    },
    {
        author: "Darshan",
        status: "Local Guide · 124 reviews · 281 photos",
        rating: 5,
        time: "6 months ago",
        content: "Great place for good food and cocktails 🍸. Chef Vasquito has some amazing curated menu options here and a must visit spot 🙂. Highly recommend !! Especially the sticky toffee pudding.",
        tag: "pudding",
        response: {
            author: "Owner",
            time: "5 months ago",
            text: "Thank you Darshan! Chef Vasquito loves feedback from foodies like you. Hope to see you again soon."
        }
    },
    {
        author: "Ajit Barreto",
        status: "Local Guide · 179 reviews · 1,732 photos",
        rating: 5,
        time: "7 months ago",
        content: "Went for lunch on a Monday (note: their weekly off is on Tuesdays), and wow, what an amazing foodie time we had! This ~25 covers restaurant in a very simple setting is run by the talented Chef. The choris fried rice and lumpia were incredible! Best pork in town.",
        tag: "rice",
        response: null
    },
    {
        author: "Sarah Fernandes",
        status: "Verified Customer",
        rating: 4,
        time: "2 months ago",
        content: "Love the Portuguese vibes and the intimate setting. Booking ahead is definitely required since there are very few tables. The Marisco A Bulhao Pato was perfectly seasoned. Price is slightly premium but totally worth it.",
        tag: "all",
        response: null
    },
    {
        author: "Rajesh K.",
        status: "Local Guide · 22 reviews",
        rating: 5,
        time: "1 month ago",
        content: "Unbelievable flavors! Visited with family. We ordered the crispy pork and lumpia. The service is friendly, and you can tell Chef Vasquito pours his heart into every single plate. Beautiful cocktails as well.",
        tag: "lumpia",
        response: {
            author: "Owner",
            time: "1 month ago",
            text: "Appreciate the love, Rajesh! We try to make every guest feel at home."
        }
    }
];

/* ==========================================================================
   APP INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initPreloader();
    initCursor();
    initAmbientPlayer();
    initTasteMatcher();
    initFloorPlan();
    initScrollReveal();
    
    // Core components
    initOperatingHours();
    initMenu();
    initReservations();
    initReviews();
    initGallery();
    initMap();
    initHeaderScroll();
    initMobileNav();
});

/* ==========================================================================
   PRELOADER CONTROLLER
   ========================================================================== */
function initPreloader() {
    const preloader = document.getElementById("preloader-screen");
    const progressFill = document.getElementById("progress-fill");
    const statusText = document.getElementById("preloader-status-text");
    
    if (!preloader) return;
    
    const steps = [
        { percentage: 20, text: "Stoking the woodfire..." },
        { percentage: 45, text: "Chilling the Port Wine..." },
        { percentage: 70, text: "Spicing the Pork Belly..." },
        { percentage: 90, text: "Curating the Goan Vibe..." },
        { percentage: 100, text: "Welcome to Ana." }
    ];
    
    let currentStep = 0;
    
    function runPreloader() {
        if (currentStep < steps.length) {
            const step = steps[currentStep];
            progressFill.style.width = `${step.percentage}%`;
            statusText.innerText = step.text;
            currentStep++;
            setTimeout(runPreloader, 350);
        } else {
            setTimeout(() => {
                preloader.classList.add("fade-out");
            }, 300);
        }
    }
    
    runPreloader();
}

/* ==========================================================================
   CUSTOM CURSOR FOLLOWER
   ========================================================================== */
function initCursor() {
    const dot = document.getElementById("custom-cursor-dot");
    const ring = document.getElementById("custom-cursor-ring");
    
    if (!dot || !ring) return;
    
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Instant movement for dot
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    });
    
    // Smooth trailing interpolation for outer ring
    function animateRing() {
        const speed = 0.15; // interpolation factor
        ringX += (mouseX - ringX) * speed;
        ringY += (mouseY - ringY) * speed;
        
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
        
        requestAnimationFrame(animateRing);
    }
    animateRing();
    
    // Hover expansions
    const hoverElements = 'a, button, .category-btn, .menu-item-card, .floor-table.available, .gallery-item, .star-input, .map-marker';
    
    document.addEventListener("mouseover", (e) => {
        if (e.target.closest(hoverElements)) {
            document.body.classList.add("custom-cursor-hover");
        }
    });
    
    document.addEventListener("mouseout", (e) => {
        if (!e.target.closest(hoverElements)) {
            document.body.classList.remove("custom-cursor-hover");
        }
    });
}

/* ==========================================================================
   AMBIENT PROCEDURAL AUDIO SYNTHESIZER
   ========================================================================== */
let audioCtx = null;
let synthInterval = null;
let oceanSynth = null;
let lowDrone = null;
let isPlayingSynth = false;

function initAmbientPlayer() {
    const widget = document.getElementById("ambient-player-widget");
    const btn = document.getElementById("player-play-btn");
    
    if (!widget || !btn) return;
    
    btn.addEventListener("click", () => {
        if (!isPlayingSynth) {
            startSynthesizer();
            widget.classList.add("playing");
            isPlayingSynth = true;
        } else {
            stopSynthesizer();
            widget.classList.remove("playing");
            isPlayingSynth = false;
        }
    });
}

function startSynthesizer() {
    try {
        // Initialize Web Audio API Context
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        // Resume context if suspended (browser security restrictions)
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        
        // 1. Generate Low Cozy Tavern Hum (110Hz and 55Hz Low Drones)
        lowDrone = audioCtx.createOscillator();
        const lowGain = audioCtx.createGain();
        lowDrone.type = 'triangle';
        lowDrone.frequency.value = 55; // Double low bass note
        lowGain.gain.value = 0.08;
        
        lowDrone.connect(lowGain);
        lowGain.connect(audioCtx.destination);
        lowDrone.start();
        
        // 2. Generate Ocean breeze / sea waves (filtered white noise)
        const bufferSize = audioCtx.sampleRate * 2; // 2 seconds of noise
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        
        const whiteNoise = audioCtx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;
        
        const waveFilter = audioCtx.createBiquadFilter();
        waveFilter.type = 'lowpass';
        waveFilter.frequency.value = 350;
        
        const waveGain = audioCtx.createGain();
        waveGain.gain.value = 0.04;
        
        whiteNoise.connect(waveFilter);
        waveFilter.connect(waveGain);
        waveGain.connect(audioCtx.destination);
        whiteNoise.start();
        
        oceanSynth = { noise: whiteNoise, filter: waveFilter, gain: waveGain };
        
        // Animate wave filter back & forth to simulate slow swells
        let waveDir = 1;
        let waveFreq = 300;
        
        function sweepWave() {
            if (!isPlayingSynth) return;
            waveFreq += waveDir * 2;
            if (waveFreq > 600) waveDir = -1;
            if (waveFreq < 250) waveDir = 1;
            
            waveFilter.frequency.setValueAtTime(waveFreq, audioCtx.currentTime);
            setTimeout(sweepWave, 40);
        }
        sweepWave();
        
        // 3. Cozy Portuguese Guitar Strumming (Slow synthesized chords)
        const notes = [
            [146.83, 196.00, 293.66], // G Major / D chords frequencies
            [164.81, 220.00, 329.63], // A minor chord
            [130.81, 164.81, 261.63]  // C Major chord
        ];
        
        let chordIndex = 0;
        
        function playGuitarStrum() {
            if (!isPlayingSynth) return;
            
            const chord = notes[chordIndex];
            chord.forEach((freq, idx) => {
                setTimeout(() => {
                    if (!isPlayingSynth) return;
                    const osc = audioCtx.createOscillator();
                    const gainNode = audioCtx.createGain();
                    
                    osc.type = 'sine';
                    osc.frequency.value = freq;
                    
                    // Decaying acoustic pluck envelope
                    gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.8);
                    
                    osc.connect(gainNode);
                    gainNode.connect(audioCtx.destination);
                    
                    osc.start();
                    osc.stop(audioCtx.currentTime + 2.0);
                }, idx * 120); // slightly rolled strum
            });
            
            chordIndex = (chordIndex + 1) % notes.length;
            
            // Strum once every 4 seconds
            synthInterval = setTimeout(playGuitarStrum, 4000);
        }
        playGuitarStrum();
        
    } catch (e) {
        console.warn("Web Audio API not fully supported or blocked by browser policies.", e);
    }
}

function stopSynthesizer() {
    if (lowDrone) {
        try { lowDrone.stop(); } catch(e){}
        lowDrone = null;
    }
    if (oceanSynth) {
        try { oceanSynth.noise.stop(); } catch(e){}
        oceanSynth = null;
    }
    if (synthInterval) {
        clearTimeout(synthInterval);
        synthInterval = null;
    }
}

/* ==========================================================================
   SOMMELIER TASTE MATCHER ENGINE WIZARD
   ========================================================================== */
function initTasteMatcher() {
    const trigger = document.getElementById("btn-sommelier-launch");
    const modal = document.getElementById("sommelier-wizard-modal");
    const closeBtn = document.getElementById("sommelier-close-btn");
    
    const prevBtn = document.getElementById("btn-somm-prev");
    const nextBtn = document.getElementById("btn-somm-next");
    const restartBtn = document.getElementById("btn-somm-restart");
    const attachBtn = document.getElementById("btn-somm-attach");
    const wizardNav = document.getElementById("somm-wizard-nav");
    
    if (!modal) return;
    
    let currentStepIndex = 1;
    let selections = {
        flavor: "",
        protein: "",
        beverage: ""
    };
    
    // Open Modal
    trigger.addEventListener("click", () => {
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        resetWizard();
    });
    
    function closeWizard() {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "auto";
    }
    
    closeBtn.onclick = closeWizard;
    modal.onclick = (e) => {
        if (e.target === modal) closeWizard();
    };
    
    // Selection Cards Click Handling
    const optCards = document.querySelectorAll(".somm-opt-card");
    optCards.forEach(card => {
        card.addEventListener("click", (e) => {
            const stepCard = e.currentTarget;
            const stepParent = stepCard.closest(".sommelier-step");
            const stepId = stepParent.id;
            
            // Remove previous selections in same step
            stepParent.querySelectorAll(".somm-opt-card").forEach(c => c.classList.remove("selected"));
            stepCard.classList.add("selected");
            
            const val = stepCard.getAttribute("data-val");
            
            if (stepId === "somm-step-1") selections.flavor = val;
            if (stepId === "somm-step-2") selections.protein = val;
            if (stepId === "somm-step-3") selections.beverage = val;
        });
    });
    
    // Navigation controllers
    nextBtn.addEventListener("click", () => {
        // Validate selection before moving forward
        if (currentStepIndex === 1 && !selections.flavor) { alert("Please select a flavor direction first."); return; }
        if (currentStepIndex === 2 && !selections.protein) { alert("Please select a protein preference first."); return; }
        if (currentStepIndex === 3 && !selections.beverage) { alert("Please select your beverage base first."); return; }
        
        if (currentStepIndex < 3) {
            document.getElementById(`somm-step-${currentStepIndex}`).classList.remove("active");
            currentStepIndex++;
            document.getElementById(`somm-step-${currentStepIndex}`).classList.add("active");
            prevBtn.disabled = false;
        } else if (currentStepIndex === 3) {
            // Render results
            document.getElementById("somm-step-3").classList.remove("active");
            calculatePairingResults();
            currentStepIndex = 4; // Results index
            document.getElementById("somm-step-results").classList.add("active");
            
            // Hide footer navigation during results view
            wizardNav.style.display = "none";
        }
    });
    
    prevBtn.addEventListener("click", () => {
        if (currentStepIndex > 1 && currentStepIndex <= 3) {
            document.getElementById(`somm-step-${currentStepIndex}`).classList.remove("active");
            currentStepIndex--;
            document.getElementById(`somm-step-${currentStepIndex}`).classList.add("active");
            
            if (currentStepIndex === 1) prevBtn.disabled = true;
        }
    });
    
    // Reset/Restart Wizard
    function resetWizard() {
        currentStepIndex = 1;
        selections = { flavor: "", protein: "", beverage: "" };
        optCards.forEach(c => c.classList.remove("selected"));
        
        document.querySelectorAll(".sommelier-step").forEach(s => s.classList.remove("active"));
        document.getElementById("somm-step-1").classList.add("active");
        
        prevBtn.disabled = true;
        wizardNav.style.display = "flex";
    }
    
    restartBtn.addEventListener("click", resetWizard);
    
    // Pairing recommendation rules logic
    function calculatePairingResults() {
        let tapas = "";
        let main = "";
        let drink = "";
        let code = "TM-";
        
        // Determine Tapas & Main pairings
        if (selections.protein === "pork") {
            tapas = "Signature Crispy Pork Belly";
            main = "Choris Fried Rice (traditional Goan)";
            code += "PRK";
        } else if (selections.protein === "seafood") {
            tapas = "Panko Prawns with Wasabi";
            main = "Marisco A Bulhao Pato (wine steamed clams)";
            code += "SFD";
        } else {
            tapas = "Goan Chicken Lumpia Rolls";
            main = "Chicken Steak with green peppercorn gravy";
            code += "PTY";
        }
        
        // Determine drinks pairings
        if (selections.beverage === "feni") {
            drink = "Ana Sunset Feni Splash (kokum/mint)";
            code += "-FEN";
        } else if (selections.beverage === "port") {
            drink = "Porto Tonico (white port & orange slice)";
            code += "-PRT";
        } else {
            drink = "Botanical Ginger-Lime cordial mocktail";
            code += "-BOT";
        }
        
        // Append flavor note code
        code += "-" + selections.flavor.toUpperCase().substring(0, 3);
        
        document.getElementById("pair-tapas").innerText = tapas;
        document.getElementById("pair-main").innerText = main;
        document.getElementById("pair-drink").innerText = drink;
        document.getElementById("pair-code").innerText = code;
    }
    
    // Attach Pairing to Booking Card Notes
    attachBtn.addEventListener("click", () => {
        const tapas = document.getElementById("pair-tapas").innerText;
        const main = document.getElementById("pair-main").innerText;
        const drink = document.getElementById("pair-drink").innerText;
        const code = document.getElementById("pair-code").innerText;
        
        const noteEl = document.getElementById("res-notes");
        if (noteEl) {
            noteEl.value = `Taste Matcher Pairing Attached [Code: ${code}]. \n- App: ${tapas}\n- Main: ${main}\n- Drink: ${drink}\n`;
        }
        
        closeWizard();
        
        // Scroll to reservation section
        document.getElementById("reserve").scrollIntoView({ behavior: 'smooth' });
    });
}

/* ==========================================================================
   VISUAL FLOOR PLAN BLUEPRINT CONTROLLER
   ========================================================================== */
function initFloorPlan() {
    const svg = document.getElementById("floor-plan-svg-element");
    const tables = document.querySelectorAll(".floor-table");
    const seatingInput = document.getElementById("res-seating");
    const tableIdHidden = document.getElementById("res-table-id");
    const guestsDropdown = document.getElementById("res-guests");
    const alertText = document.getElementById("blueprint-alert-text");
    const mobileBtnGrid = document.getElementById("mobile-table-selector-grid");
    
    if (!svg) return;
    
    // Setup initial table configurations
    const TABLES_LIST = [
        { id: "Stool A", max: 1, zone: "Chef's Counter" },
        { id: "Stool B", max: 1, zone: "Chef's Counter", reserved: true },
        { id: "Stool C", max: 1, zone: "Chef's Counter" },
        { id: "Stool D", max: 1, zone: "Chef's Counter" },
        { id: "Table 1", max: 4, zone: "Cozy Indoor" },
        { id: "Table 2", max: 4, zone: "Cozy Indoor", reserved: true },
        { id: "Tasting Table", max: 6, zone: "Chef's Counter" },
        { id: "Table 3", max: 2, zone: "Veranda Patio" },
        { id: "Table 4", max: 2, zone: "Veranda Patio" }
    ];
    
    // Set visual classes on SVG elements based on list
    TABLES_LIST.forEach(t => {
        const svgEl = document.querySelector(`.floor-table[data-table-id='${t.id}']`);
        if (svgEl) {
            svgEl.setAttribute("data-max", t.max);
            svgEl.setAttribute("data-zone", t.zone);
            if (t.reserved) {
                svgEl.classList.add("reserved");
                svgEl.classList.remove("available");
            } else {
                svgEl.classList.add("available");
                svgEl.classList.remove("reserved");
            }
        }
    });

    // Populate mobile quick selector buttons
    if (mobileBtnGrid) {
        mobileBtnGrid.innerHTML = "";
        TABLES_LIST.forEach(t => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "mb-select-btn";
            btn.setAttribute("data-id", t.id);
            
            const shortName = t.id === "Tasting Table" ? "VIP Table" : t.id;
            btn.innerHTML = `<strong>${shortName}</strong> <span class="cap-pill">Max ${t.max}</span>`;
            
            if (t.reserved) {
                btn.classList.add("reserved");
                btn.disabled = true;
            } else {
                btn.classList.add("available");
            }
            
            btn.addEventListener("click", () => {
                selectSpecificTable(t.id, t.zone, t.max);
            });
            
            mobileBtnGrid.appendChild(btn);
        });
    }

    // Common select logic
    function selectSpecificTable(tableId, zone, maxGuests) {
        // Clear all selected states from SVG tables & mobile buttons
        tables.forEach(t => t.classList.remove("selected"));
        if (mobileBtnGrid) {
            mobileBtnGrid.querySelectorAll(".mb-select-btn").forEach(b => b.classList.remove("selected"));
        }
        
        // Highlight active table in SVG
        const activeSvgEl = document.querySelector(`.floor-table[data-table-id='${tableId}']`);
        if (activeSvgEl) activeSvgEl.classList.add("selected");
        
        // Highlight active mobile button
        if (mobileBtnGrid) {
            const activeBtn = mobileBtnGrid.querySelector(`.mb-select-btn[data-id='${tableId}']`);
            if (activeBtn) activeBtn.classList.add("selected");
        }
        
        // Bind form values
        seatingInput.value = `${zone} — ${tableId}`;
        tableIdHidden.value = tableId;
        
        // Change guest count options dynamically based on capacity
        guestsDropdown.innerHTML = "";
        for (let i = 1; i <= maxGuests; i++) {
            const opt = document.createElement("option");
            opt.value = i;
            opt.innerText = `${i} ${i === 1 ? 'Guest' : 'Guests'}`;
            if (i === Math.min(2, maxGuests)) opt.selected = true;
            guestsDropdown.appendChild(opt);
        }
        
        // Update alert text
        alertText.innerHTML = `<i class="fa-solid fa-circle-check text-gold"></i> Table <strong>${tableId}</strong> selected! Max Capacity: ${maxGuests} Guests.`;
        alertText.style.borderColor = "var(--gold)";
        alertText.style.color = "var(--gold)";
    }
    
    // Add Click listener to available tables in SVG
    tables.forEach(table => {
        table.addEventListener("click", (e) => {
            const clicked = e.currentTarget;
            
            if (clicked.classList.contains("reserved")) {
                alert("This table is currently fully booked for this time block. Please select another table.");
                return;
            }
            
            const tableId = clicked.getAttribute("data-table-id");
            const zone = clicked.getAttribute("data-zone");
            const maxGuests = parseInt(clicked.getAttribute("data-max"));
            
            selectSpecificTable(tableId, zone, maxGuests);
        });
    });
}

/* ==========================================================================
   SCROLL REVEAL INTERSECTION OBSERVER
   ========================================================================== */
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    
    if (!revealElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // trigger when 10% visible
        rootMargin: "0px 0px -50px 0px" // triggers slightly before entering viewport
    });
    
    revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   DYNAMIC OPERATING HOURS STATUS
   ========================================================================== */
function initOperatingHours() {
    const statusTextEl = document.getElementById("live-status-text");
    const statusBadgeEl = document.getElementById("status-badge");
    
    if (!statusTextEl) return;
    
    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const timeVal = hour + minutes / 60; 
    
    let isOpen = false;
    let text = "";
    
    if (day === 2) {
        isOpen = false;
        text = "Closed Today (Tuesday Weekly Off) · Opens Wednesday 12:00 PM";
    } else {
        const lunchOpen = 12.0;
        const lunchClose = 15.5;
        const dinnerOpen = 19.0;
        const dinnerClose = 22.5;
        
        if (timeVal >= lunchOpen && timeVal < lunchClose) {
            isOpen = true;
            text = "Open Now · Lunch Session (Closes 3:30 PM)";
        } else if (timeVal >= dinnerOpen && timeVal < dinnerClose) {
            isOpen = true;
            text = "Open Now · Dinner Session (Closes 10:30 PM)";
        } else {
            isOpen = false;
            if (timeVal < lunchOpen) {
                text = "Closed Now · Opens at 12:00 PM";
            } else if (timeVal >= lunchClose && timeVal < dinnerOpen) {
                text = "Closed Now · Reopens at 7:00 PM";
            } else {
                text = "Closed for the Day · Opens tomorrow 12:00 PM";
            }
        }
    }
    
    statusTextEl.innerText = text;
    if (isOpen) {
        statusBadgeEl.classList.remove("closed");
    } else {
        statusBadgeEl.classList.add("closed");
    }
}

/* ==========================================================================
   HEADER SCROLL & MOBILE NAV EFFECT
   ========================================================================== */
function initHeaderScroll() {
    const header = document.getElementById("site-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

function initMobileNav() {
    const toggleBtn = document.getElementById("nav-toggle-btn");
    const mainNav = document.getElementById("main-nav");
    const navLinks = document.querySelectorAll(".nav-link");
    
    toggleBtn.addEventListener("click", () => {
        mainNav.classList.toggle("open");
        toggleBtn.classList.toggle("active");
    });
    
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
            toggleBtn.classList.remove("active");
        });
    });
}

/* ==========================================================================
   CULINARY MENU FILTERING
   ========================================================================== */
function initMenu() {
    const grid = document.getElementById("menu-items-grid");
    const tabs = document.querySelectorAll("#menu-categories-tabs .category-btn");
    
    if (!grid) return;
    
    function renderMenu(categoryFilter = "all") {
        grid.innerHTML = "";
        
        const filtered = categoryFilter === "all" 
            ? MENU_ITEMS 
            : MENU_ITEMS.filter(item => item.category === categoryFilter);
            
        filtered.forEach(item => {
            const card = document.createElement("div");
            card.className = "menu-item-card reveal-on-scroll";
            card.id = `menu-item-${item.id}`;
            
            let badgesHtml = "";
            if (item.popular) {
                badgesHtml += `<span class="badge badge-popular">Popular</span>`;
            }
            item.tags.forEach(tag => {
                badgesHtml += `<span class="badge badge-tag">${tag}</span>`;
            });
            
            card.innerHTML = `
                <div class="menu-item-thumb">
                    <img src="${item.image}" alt="${item.title}" onerror="this.src='${item.fallbackImg}'">
                </div>
                <div class="menu-item-content">
                    <div class="menu-item-header">
                        <h4 class="menu-item-title">${item.title}</h4>
                        <span class="menu-item-price">₹${item.price}</span>
                    </div>
                    <p class="menu-item-desc">${item.description}</p>
                    <div class="menu-item-badges">
                        ${badgesHtml}
                    </div>
                </div>
            `;
            
            card.addEventListener("click", () => openDishModal(item));
            grid.appendChild(card);
        });
        
        // Re-execute scroll observer on newly injected elements
        initScrollReveal();
    }
    
    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            tabs.forEach(t => t.classList.remove("active"));
            e.target.classList.add("active");
            
            const category = e.target.getAttribute("data-category");
            renderMenu(category);
        });
    });
    
    renderMenu("all");
}

/* Dish Detail Modal Handler */
function openDishModal(item) {
    const modal = document.getElementById("dish-modal");
    const closeBtn = document.getElementById("dish-close-btn");
    
    const modalImgDiv = document.getElementById("dish-modal-img-div");
    const modalTitle = document.getElementById("dish-modal-title");
    const modalPrice = document.getElementById("dish-modal-price");
    const modalDesc = document.getElementById("dish-modal-desc");
    const modalIngredients = document.getElementById("dish-modal-ingredients");
    const modalBadges = document.getElementById("dish-modal-badges");
    const modalCategory = document.getElementById("dish-modal-category");
    const bookBtn = document.getElementById("dish-modal-book-btn");
    
    modalImgDiv.style.backgroundImage = `url('${item.image}'), url('${item.fallbackImg}')`;
    modalTitle.innerText = item.title;
    modalPrice.innerText = `₹${item.price}`;
    modalDesc.innerText = item.description;
    modalIngredients.innerText = item.ingredients;
    modalCategory.innerText = item.category.toUpperCase();
    
    modalBadges.innerHTML = "";
    if (item.popular) {
        modalBadges.innerHTML += `<span class="badge badge-popular">Popular</span>`;
    }
    item.tags.forEach(tag => {
        modalBadges.innerHTML += `<span class="badge badge-tag" style="margin-right: 5px;">${tag}</span>`;
    });
    
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    
    function closeModal() {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "auto";
    }
    
    closeBtn.onclick = closeModal;
    bookBtn.onclick = closeModal;
    
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
}

/* ==========================================================================
   RESERVATION TABLE PLANNER LOGIC
   ========================================================================== */
function initReservations() {
    const form = document.getElementById("reservation-form");
    const receipt = document.getElementById("booking-receipt");
    const dateInput = document.getElementById("res-date");
    const closeReceiptBtn = document.getElementById("btn-close-receipt");
    
    if (!form) return;
    
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const dateVal = new Date(dateInput.value);
        
        if (dateVal.getDay() === 2) {
            alert("Ana Bar & Restaurant is closed on Tuesdays. Please choose another date.");
            return;
        }
        
        const name = document.getElementById("res-name").value;
        const time = document.getElementById("res-time").value;
        const guests = document.getElementById("res-guests").value;
        const seating = document.getElementById("res-seating").value;
        const tableId = document.getElementById("res-table-id").value || "General";
        
        const randomRef = "ANA-" + Math.floor(100000 + Math.random() * 900000);
        
        document.getElementById("rec-name").innerText = name;
        document.getElementById("rec-datetime").innerText = `${dateInput.value} at ${time}`;
        document.getElementById("rec-guests").innerText = `${guests} ${guests == 1 ? 'Guest' : 'Guests'}`;
        document.getElementById("rec-seating").innerText = `${seating} (${tableId})`;
        document.getElementById("rec-ref").innerText = randomRef;
        
        form.style.opacity = "0";
        setTimeout(() => {
            form.style.display = "none";
            receipt.style.display = "block";
            receipt.style.opacity = "1";
        }, 300);
    });
    
    closeReceiptBtn.addEventListener("click", () => {
        receipt.style.opacity = "0";
        setTimeout(() => {
            receipt.style.display = "none";
            form.style.display = "flex";
            form.style.opacity = "1";
            form.reset();
            
            // Reset floor plan visual states
            document.querySelectorAll(".floor-table").forEach(t => t.classList.remove("selected"));
            document.getElementById("blueprint-alert-text").innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Click a table above to select seating zone & max capacity automatically.`;
        }, 300);
    });
}

/* ==========================================================================
   DYNAMIC GOOGLE REVIEWS & RATING MANAGEMENT
   ========================================================================== */
function initReviews() {
    const listContainer = document.getElementById("reviews-list-container");
    const tagFilters = document.querySelectorAll("#reviews-tag-filters .tag-btn");
    const writeTrigger = document.getElementById("btn-write-review-trigger");
    
    const writeModal = document.getElementById("review-write-modal");
    const closeFormBtn = document.getElementById("review-close-btn");
    const reviewForm = document.getElementById("write-review-form");
    
    if (!listContainer) return;
    
    function getStarsHtml(rating) {
        let starsHtml = "";
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starsHtml += `<i class="fa-solid fa-star"></i>`;
            } else {
                starsHtml += `<i class="fa-regular fa-star"></i>`;
            }
        }
        return starsHtml;
    }
    
    function renderReviews(filterTag = "all") {
        listContainer.innerHTML = "";
        
        const filtered = filterTag === "all" 
            ? CUSTOMER_REVIEWS 
            : CUSTOMER_REVIEWS.filter(rev => rev.tag === filterTag);
            
        filtered.forEach(rev => {
            const card = document.createElement("div");
            card.className = "review-card reveal-on-scroll";
            
            let responseHtml = "";
            if (rev.response) {
                responseHtml = `
                    <div class="review-owner-response">
                        <h5 class="owner-title">Response from the Owner</h5>
                        <p class="owner-text">"${rev.response.text}"</p>
                    </div>
                `;
            }
            
            card.innerHTML = `
                <div class="rev-header">
                    <div class="rev-author-info">
                        <span class="rev-name">${rev.author}</span>
                        <span class="rev-badge"><i class="fa-solid fa-circle-check"></i> ${rev.status}</span>
                    </div>
                    <div class="rev-stars">
                        ${getStarsHtml(rev.rating)}
                    </div>
                </div>
                <span class="rev-time">${rev.time}</span>
                <p class="rev-content">"${rev.content}"</p>
                ${responseHtml}
            `;
            
            listContainer.appendChild(card);
        });
        
        initScrollReveal();
    }
    
    tagFilters.forEach(btn => {
        btn.addEventListener("click", (e) => {
            tagFilters.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            
            const tag = e.target.getAttribute("data-tag");
            renderReviews(tag);
        });
    });
    
    writeTrigger.addEventListener("click", () => {
        writeModal.classList.add("open");
        writeModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    });
    
    function closeWriteModal() {
        writeModal.classList.remove("open");
        writeModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "auto";
    }
    
    closeFormBtn.onclick = closeWriteModal;
    writeModal.onclick = (e) => {
        if (e.target === writeModal) closeWriteModal();
    };
    
    const starInputs = document.querySelectorAll("#rating-input-container .star-input");
    const hiddenRatingInput = document.getElementById("rev-rating");
    
    starInputs.forEach(star => {
        star.addEventListener("click", (e) => {
            const val = parseInt(e.target.getAttribute("data-value"));
            hiddenRatingInput.value = val;
            
            starInputs.forEach(s => {
                const sVal = parseInt(s.getAttribute("data-value"));
                if (sVal <= val) {
                    s.classList.add("active");
                } else {
                    s.classList.remove("active");
                }
            });
        });
    });
    
    starInputs.forEach(s => s.classList.add("active"));
    
    reviewForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const author = document.getElementById("rev-author").value;
        const rating = parseInt(hiddenRatingInput.value);
        const tag = document.getElementById("rev-tag").value || "all";
        const content = document.getElementById("rev-content").value;
        
        CUSTOMER_REVIEWS.unshift({
            author: author,
            status: "Verified Guest",
            rating: rating,
            time: "Just now",
            content: content,
            tag: tag,
            response: null
        });
        
        renderReviews("all");
        
        tagFilters.forEach(b => b.classList.remove("active"));
        document.getElementById("btn-tag-all").classList.add("active");
        
        reviewForm.reset();
        starInputs.forEach(s => s.classList.add("active"));
        hiddenRatingInput.value = "5";
        
        closeWriteModal();
    });
    
    renderReviews("all");
}

/* ==========================================================================
   IMAGE LIGHTBOX CONTROLLER
   ========================================================================== */
function initGallery() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCap = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("lightbox-close-btn");
    
    if (!lightbox) return;
    
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const imgSrc = item.getAttribute("data-img-src");
            const caption = item.getAttribute("data-caption");
            
            lightboxImg.src = imgSrc;
            lightboxCap.innerText = caption;
            
            lightbox.classList.add("open");
            lightbox.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        });
    });
    
    function closeLightbox() {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "auto";
    }
    
    closeBtn.onclick = closeLightbox;
    lightbox.onclick = (e) => {
        if (e.target === lightbox) closeLightbox();
    };
}

/* ==========================================================================
   SVG MAP DETAILS PANEL INTERACTION
   ========================================================================== */
function initMap() {
    const markers = document.querySelectorAll(".map-marker");
    const panel = document.getElementById("map-details-panel");
    const panelTitle = document.getElementById("map-panel-title");
    const panelDesc1 = document.getElementById("map-panel-desc-1");
    const panelDesc2 = document.getElementById("map-panel-desc-2");
    
    if (!panel) return;
    
    markers.forEach(marker => {
        marker.addEventListener("mouseenter", () => {
            const name = marker.getAttribute("data-name");
            const desc = marker.getAttribute("data-desc");
            
            panelTitle.textContent = name;
            
            if (desc.length > 28) {
                panelDesc1.textContent = desc.substring(0, 26) + "...";
                panelDesc2.textContent = desc.substring(26);
            } else {
                panelDesc1.textContent = desc;
                panelDesc2.textContent = "";
            }
            
            panel.style.opacity = "1";
            panel.setAttribute("transform", "translate(15, 310)");
        });
        
        marker.addEventListener("mouseleave", () => {
            panel.style.opacity = "0";
        });
    });
}
