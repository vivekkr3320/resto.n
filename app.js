/* ==========================================================================
   CULINARY MENU DATA (GOAN CLASSIC SEAFOOD & BAR)
   ========================================================================== */
const MENU_ITEMS = [
    {
        id: "goan-thali",
        title: "Goan Fish Thali",
        category: "thali",
        price: 280,
        image: "assets/goan_thali.png",
        fallbackImg: "https://placehold.co/600x400/0a3d62/FAF6F0?text=Goan+Fish+Thali",
        description: "An authentic local platter: rava fried fish, coconut fish curry, basmati rice, solkadi, cabbage foogath, and local pickles.",
        popular: true,
        ingredients: "Fresh fish, coconut milk, Basmati rice, kokum extract, cabbage, Goan spice masalas.",
        tags: ["Local Heritage", "Popular", "Complete Meal"]
    },
    {
        id: "chonak-fry",
        title: "Chonak Rava Fry",
        category: "seafood",
        price: 450,
        image: "assets/chonak_fry.png",
        fallbackImg: "https://placehold.co/600x400/0a3d62/FAF6F0?text=Chonak+Rava+Fry",
        description: "Local giant seabass (Chonak) thick steak marinated in red recheado spice paste, coated in semolina (rava), and shallow fried.",
        popular: true,
        ingredients: "Chonak fish, recheado chili paste, semolina coating, lemon juice, coconut oil.",
        tags: ["Gluten Free Option", "Spicy Catch"]
    },
    {
        id: "giant-lobster",
        title: "Giant Lobster Platter",
        category: "seafood",
        price: 1400,
        image: "assets/goan_thali.png",
        fallbackImg: "https://placehold.co/600x400/0a3d62/FAF6F0?text=Giant+Lobster",
        description: "Freshly caught whole lobster cooked in a creamy butter garlic pepper sauce, served with seasonal grilled greens.",
        popular: false,
        ingredients: "Whole lobster, garlic butter, black pepper, parsley, lemon zest, olive oil.",
        tags: ["Premium Seafood", "Chef's Special"]
    },
    {
        id: "mackerel-fry",
        title: "Mackerel Tawa Fry",
        category: "seafood",
        price: 320,
        image: "assets/chonak_fry.png",
        fallbackImg: "https://placehold.co/600x400/0a3d62/FAF6F0?text=Mackerel+Tawa+Fry",
        description: "Fresh local mackerel fish stuffed with spicy, tangy green herb masala, pan-fried on a flat iron tawa.",
        popular: false,
        ingredients: "Mackerel, green coriander chili stuffing, ginger-garlic paste, local vinegar.",
        tags: ["Spicy Stuffing", "Seafood Classic"]
    },
    {
        id: "sikh-kabab",
        title: "Traditional Sikh Kabab",
        category: "tandoor",
        price: 380,
        image: "assets/outdoor_restaurant.png",
        fallbackImg: "https://placehold.co/600x400/0a3d62/FAF6F0?text=Sikh+Kabab",
        description: "Skewered minced mutton blended with chopped green chilies, coriander, mint, and tandoor spices, flame-grilled.",
        popular: false,
        ingredients: "Minced mutton, mint leaves, green chili, ginger-garlic paste, tandoori masala.",
        tags: ["Tandoor Hot", "Meaty Appetizer"]
    },
    {
        id: "chicken-tikka-naan",
        title: "Tikka Masala with Cheese Naan",
        category: "tandoor",
        price: 480,
        image: "assets/outdoor_restaurant.png",
        fallbackImg: "https://placehold.co/600x400/0a3d62/FAF6F0?text=Tikka+Masala+%2b+Naan",
        description: "Rich and creamy tandoor-grilled chicken tikka gravy, served alongside fresh butter cheese naan bread.",
        popular: true,
        ingredients: "Chicken cubes, tomato cream gravy, fenugreek, refined flour, mozzarella cheese.",
        tags: ["Family Favorite", "Tandoori Combo"]
    },
    {
        id: "chicken-lollipop",
        title: "Chicken Lollipop Normal",
        category: "tandoor",
        price: 350,
        image: "assets/outdoor_restaurant.png",
        fallbackImg: "https://placehold.co/600x400/0a3d62/FAF6F0?text=Chicken+Lollipops",
        description: "Crispy chicken winglets shaped into lollipops, spiced and fried Goan-Chinese style, served with hot schezwan sauce.",
        popular: false,
        ingredients: "Chicken wings, cornstarch batter, red chili paste, soy sauce, garlic dip.",
        tags: ["Crispy Fry", "Crowd Pleaser"]
    },
    {
        id: "matka-kulfi",
        title: "Saffron Matka Kulfi",
        category: "desserts",
        price: 150,
        image: "assets/matka_kulfi.png",
        fallbackImg: "https://placehold.co/600x400/0a3d62/FAF6F0?text=Matka+Kulfi",
        description: "Slow-reduced milk ice cream flavored with saffron, cardamoms, and pistachios, frozen in traditional clay matkas.",
        popular: true,
        ingredients: "Reduced milk, saffron strands, cardamom powder, slivered pistachios, clay Matka pot.",
        tags: ["Sweet Ending", "Traditional Dessert"]
    },
    {
        id: "neer-dosa",
        title: "Fluffy Neer Dosa (3 pcs)",
        category: "tandoor",
        price: 90,
        image: "assets/goan_thali.png",
        fallbackImg: "https://placehold.co/600x400/0a3d62/FAF6F0?text=Neer+Dosa",
        description: "Lacy, ultra-thin, soft crepes made of ground rice batter, best enjoyed with Goan fish curry.",
        popular: false,
        ingredients: "Rice batter, coconut oil, salt, water.",
        tags: ["Vegetarian", "Soft Crepes"]
    },
    {
        id: "solkadi-drink",
        title: "Tangy Kokum Solkadi",
        category: "drinks",
        price: 60,
        image: "assets/goan_thali.png",
        fallbackImg: "https://placehold.co/600x400/0a3d62/FAF6F0?text=Chilled+Solkadi",
        description: "A cooling digestive drink prepared with fresh coconut milk, kokum berries (amsol), garlic, and a hint of green chili.",
        popular: true,
        ingredients: "Coconut milk, kokum extract, garlic, green chili, asafoetida.",
        tags: ["Digestive", "Chilled", "Local Brew"]
    },
    {
        id: "wine-glass",
        title: "Premium Wine by the Glass",
        category: "drinks",
        price: 250,
        image: "assets/matka_kulfi.png",
        fallbackImg: "https://placehold.co/600x400/0a3d62/FAF6F0?text=Wine+by+the+Glass",
        description: "Curated collection of fine local white and red table wines to pair with spicy coastal seafood.",
        popular: false,
        ingredients: "Fermented grapes, house selection.",
        tags: ["Alcoholic", "Pairing Option"]
    }
];

/* ==========================================================================
   GOOGLE REVIEWS DATA (GOAN CLASSIC REAL REVIEWS)
   ========================================================================== */
let CUSTOMER_REVIEWS = [
    {
        author: "Pruthviraj Phate",
        status: "Local Guide · 171 reviews · 845 photos",
        rating: 5,
        time: "7 months ago",
        content: "We did visit this place when we visited the Se Cathedral church. We had a good Lunch here. There was ample parking at the back side of the restaurant which could accommodate around 10 vehicles. The restaurant ambience was good, the food was extremely tasty especially the Goan Fish Thali! Clean restrooms too.",
        tag: "curry",
        response: {
            author: "Owner",
            time: "6 months ago",
            text: "Thank you Pruthviraj! Glad you enjoyed the Fish Thali and appreciated our backside parking lot."
        }
    },
    {
        author: "Manoj Saralkar",
        status: "Local Guide · 35 reviews · 46 photos",
        rating: 5,
        time: "4 months ago",
        content: "Great location in Old Goa with ample parking and very clean restrooms. They have AC and non-AC seating, including an open-air sheltered arrangement, which is really pleasant. The Goan food is fresh, neat, and well-prepared, with reasonable pricing. Highly recommend the Chonak fry.",
        tag: "solkadi",
        response: null
    },
    {
        author: "Alina Gabriela",
        status: "2 reviews · 4 photos",
        rating: 5,
        time: "8 months ago",
        content: "We came here with a Hop-on Hop-off bus tour for lunch. Highly recommend the place. The food was amazing, very fresh seafood, and our waiter Santosh was very good and helpful! We will return.",
        tag: "solkadi",
        response: {
            author: "Owner",
            time: "8 months ago",
            text: "Thanks Alina! Santosh sends his regards. We love welcoming Hop-on Hop-off travelers."
        }
    },
    {
        author: "Sanjay Joshi",
        status: "Verified Customer",
        rating: 5,
        time: "1 month ago",
        content: "Price, service, consistency, quality and quantity top notch. Best Goan curry in town. Visited with my entire family during New Year and we had a great time in the AC dining room.",
        tag: "curry",
        response: null
    },
    {
        author: "Nandini R.",
        status: "Local Guide · 45 reviews",
        rating: 4,
        time: "2 weeks ago",
        content: "Very neat family restaurant. Ordered the Sikh Kababs and Neer Dosa. The food was tasty, staff is very polite and helpful. Ample parking at the back makes it very convenient in busy Old Goa.",
        tag: "dosa",
        response: null
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
    initThaliBuilder();
    
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
        { percentage: 20, text: "Baking the Neer Dosa..." },
        { percentage: 45, text: "Brewing the Solkadi..." },
        { percentage: 70, text: "Frying the Chonak..." },
        { percentage: 90, text: "Curating the Classic Vibe..." },
        { percentage: 100, text: "Welcome to Goan Classic." }
    ];
    
    let currentStep = 0;
    
    function runPreloader() {
        if (currentStep < steps.length) {
            const step = steps[currentStep];
            progressFill.style.width = `${step.percentage}%`;
            statusText.innerText = step.text;
            currentStep++;
            setTimeout(runPreloader, 300);
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
        
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    });
    
    function animateRing() {
        const speed = 0.15;
        ringX += (mouseX - ringX) * speed;
        ringY += (mouseY - ringY) * speed;
        
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
        
        requestAnimationFrame(animateRing);
    }
    animateRing();
    
    const hoverElements = 'a, button, .category-btn, .menu-item-card, .floor-table.available, .parking-slot.available-slot, .gallery-item, .star-input, .map-marker, .thali-btn-opt';
    
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
   AMBIENT PROCEDURAL AUDIO SYNTHESIZER (GOAN BEACH & MANDOLIN)
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
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        
        // 1. Generate Cozy Restaurant Hum (low 60Hz and 120Hz tones)
        lowDrone = audioCtx.createOscillator();
        const lowGain = audioCtx.createGain();
        lowDrone.type = 'sine';
        lowDrone.frequency.value = 60;
        lowGain.gain.value = 0.08;
        lowDrone.connect(lowGain);
        lowGain.connect(audioCtx.destination);
        lowDrone.start();
        
        // 2. Generate Sea Waves swell (filtered white noise)
        const bufferSize = audioCtx.sampleRate * 2;
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
        waveFilter.frequency.value = 300;
        
        const waveGain = audioCtx.createGain();
        waveGain.gain.value = 0.05;
        
        whiteNoise.connect(waveFilter);
        waveFilter.connect(waveGain);
        waveGain.connect(audioCtx.destination);
        whiteNoise.start();
        
        oceanSynth = { noise: whiteNoise, filter: waveFilter, gain: waveGain };
        
        let waveDir = 1;
        let waveFreq = 300;
        
        function sweepWave() {
            if (!isPlayingSynth) return;
            waveFreq += waveDir * 2.5;
            if (waveFreq > 650) waveDir = -1;
            if (waveFreq < 220) waveDir = 1;
            
            waveFilter.frequency.setValueAtTime(waveFreq, audioCtx.currentTime);
            setTimeout(sweepWave, 30);
        }
        sweepWave();
        
        // 3. Bright Goan Mandolin pluck notes
        // Mandolin plucks are brighter, rapid double plucks (tremolo style)
        const chords = [
            [293.66, 392.00, 587.33], // G Major high notes
            [329.63, 440.00, 659.25], // A minor high notes
            [261.63, 329.63, 523.25]  // C Major high notes
        ];
        
        let chordIdx = 0;
        
        function playMandolinStrum() {
            if (!isPlayingSynth) return;
            
            const chord = chords[chordIdx];
            // Play rapid double plucks for mandolin character
            chord.forEach((freq, idx) => {
                // Pluck 1
                setTimeout(() => {
                    if (!isPlayingSynth) return;
                    pluckString(freq);
                }, idx * 80);
                
                // Pluck 2 (rapid echo)
                setTimeout(() => {
                    if (!isPlayingSynth) return;
                    pluckString(freq * 1.005); // slightly detuned for mandolin chorus feel
                }, idx * 80 + 40);
            });
            
            chordIdx = (chordIdx + 1) % chords.length;
            
            // Strum once every 3.5 seconds
            synthInterval = setTimeout(playMandolinStrum, 3500);
        }
        
        function pluckString(frequency) {
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            osc.type = 'triangle'; // triangle has richer high harmonics than sine
            osc.frequency.value = frequency;
            
            gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);
            
            osc.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            osc.start();
            osc.stop(audioCtx.currentTime + 1.3);
        }
        
        playMandolinStrum();
        
    } catch (e) {
        console.warn("Audio Context not supported.", e);
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
   INTERACTIVE THALI BUILDER CONTROLLER
   ========================================================================== */
function initThaliBuilder() {
    const optionButtons = document.querySelectorAll(".thali-btn-opt");
    const attachBtn = document.getElementById("btn-attach-thali-to-res");
    
    let thaliState = {
        fish: { name: "Chonak Rava Fry", price: 450 },
        curry: { name: "Classic Coconut Curry", price: 120 },
        side: { name: "Tangy Kokum Solkadi", price: 60 },
        carb: { name: "Basmati Steamed Rice", price: 80 }
    };

    function calculateTotal() {
        const total = thaliState.fish.price + thaliState.curry.price + thaliState.side.price + thaliState.carb.price;
        
        // Update DOM
        document.getElementById("thali-total-price").innerText = `₹${total}`;
        document.getElementById("thali-composition-text").innerText = `${thaliState.fish.name} + ${thaliState.curry.name} + ${thaliState.side.name} + ${thaliState.carb.name}`;
        
        // Update Platter Visual Elements
        document.getElementById("thali-visual-fish").innerText = thaliState.fish.name.split(" ")[0];
        document.getElementById("thali-visual-curry").innerText = thaliState.curry.name.split(" ")[0];
        document.getElementById("thali-visual-side").innerText = thaliState.side.name.split(" ")[0];
        document.getElementById("thali-visual-carb").innerText = thaliState.carb.name.split(" ")[0];
    }

    optionButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const opt = e.target;
            const type = opt.getAttribute("data-type");
            const name = opt.getAttribute("data-name");
            const price = parseInt(opt.getAttribute("data-price"));
            
            // Toggle active visual state in sibling options
            const siblings = opt.closest(".thali-step-control").querySelectorAll(".thali-btn-opt");
            siblings.forEach(s => s.classList.remove("active"));
            opt.classList.add("active");
            
            // Update state
            thaliState[type] = { name: name, price: price };
            
            calculateTotal();
            
            // Play a small click tone if synthesizer is active
            if (isPlayingSynth && audioCtx) {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.frequency.value = 600;
                gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.1);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start();
                osc.stop(audioCtx.currentTime + 0.12);
            }
        });
    });

    // Attach to Booking Notes
    if (attachBtn) {
        attachBtn.addEventListener("click", () => {
            const noteEl = document.getElementById("res-notes");
            const total = thaliState.fish.price + thaliState.curry.price + thaliState.side.price + thaliState.carb.price;
            
            if (noteEl) {
                noteEl.value = `Custom Goan Fish Thali Locked [₹${total}]: \n- Fish: ${thaliState.fish.name}\n- Curry: ${thaliState.curry.name}\n- Side: ${thaliState.side.name}\n- Carb: ${thaliState.carb.name}\n`;
            }
            
            alert("Your custom Fish Thali selection has been pinned to your reservation! Complete the form below to lock your booking.");
            
            // Scroll down to reservation form
            document.getElementById("reserve").scrollIntoView({ behavior: 'smooth' });
        });
    }

    calculateTotal(); // Initial run
}

/* ==========================================================================
   SPICE MATCHER PAIRING WIZARD MODAL (GOAN CLASSIC)
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
        spice: "",
        protein: "",
        beverage: ""
    };
    
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
    
    const optCards = document.querySelectorAll(".somm-opt-card");
    optCards.forEach(card => {
        card.addEventListener("click", (e) => {
            const stepCard = e.currentTarget;
            const stepParent = stepCard.closest(".sommelier-step");
            const stepId = stepParent.id;
            
            stepParent.querySelectorAll(".somm-opt-card").forEach(c => c.classList.remove("selected"));
            stepCard.classList.add("selected");
            
            const val = stepCard.getAttribute("data-val");
            
            if (stepId === "somm-step-1") selections.spice = val;
            if (stepId === "somm-step-2") selections.protein = val;
            if (stepId === "somm-step-3") selections.beverage = val;
        });
    });
    
    nextBtn.addEventListener("click", () => {
        if (currentStepIndex === 1 && !selections.spice) { alert("Please select a spice tolerance."); return; }
        if (currentStepIndex === 2 && !selections.protein) { alert("Please select a culinary preference."); return; }
        if (currentStepIndex === 3 && !selections.beverage) { alert("Please select a beverage."); return; }
        
        if (currentStepIndex < 3) {
            document.getElementById(`somm-step-${currentStepIndex}`).classList.remove("active");
            currentStepIndex++;
            document.getElementById(`somm-step-${currentStepIndex}`).classList.add("active");
            prevBtn.disabled = false;
        } else if (currentStepIndex === 3) {
            document.getElementById("somm-step-3").classList.remove("active");
            calculatePairingResults();
            currentStepIndex = 4;
            document.getElementById("somm-step-results").classList.add("active");
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
    
    function resetWizard() {
        currentStepIndex = 1;
        selections = { spice: "", protein: "", beverage: "" };
        optCards.forEach(c => c.classList.remove("selected"));
        
        document.querySelectorAll(".sommelier-step").forEach(s => s.classList.remove("active"));
        document.getElementById("somm-step-1").classList.add("active");
        
        prevBtn.disabled = true;
        wizardNav.style.display = "flex";
    }
    
    restartBtn.addEventListener("click", resetWizard);
    
    function calculatePairingResults() {
        let tapas = "";
        let main = "";
        let drink = "";
        let code = "GC-";
        
        // Define Recommendation Rules
        if (selections.protein === "fish") {
            tapas = "Crispy Chonak Rava Fry";
            main = "Steamed Basmati Rice & Classic Curry";
            code += "FSH";
        } else if (selections.protein === "shellfish") {
            tapas = "Giant Butter Garlic Lobster";
            main = "Lacy Neer Dosa (3 pcs)";
            code += "LOB";
        } else {
            tapas = "Skewered Mutton Sikh Kabab";
            main = "Chicken Tikka Masala & Cheese Naan";
            code += "TND";
        }
        
        if (selections.beverage === "wine") {
            drink = "Premium White Wine by the glass";
            code += "-WNE";
        } else if (selections.beverage === "solkadi") {
            drink = "Chilled Kokum Solkadi (coconut brew)";
            code += "-SOL";
        } else {
            drink = "Iced Lime Soda (freshly squeezed)";
            code += "-LME";
        }
        
        code += "-" + selections.spice.toUpperCase().substring(0, 3);
        
        document.getElementById("pair-tapas").innerText = tapas;
        document.getElementById("pair-main").innerText = main;
        document.getElementById("pair-drink").innerText = drink;
        document.getElementById("pair-code").innerText = code;
    }
    
    attachBtn.addEventListener("click", () => {
        const tapas = document.getElementById("pair-tapas").innerText;
        const main = document.getElementById("pair-main").innerText;
        const drink = document.getElementById("pair-drink").innerText;
        const code = document.getElementById("pair-code").innerText;
        
        const noteEl = document.getElementById("res-notes");
        if (noteEl) {
            noteEl.value = `Spice Matcher Recommendation Attached [Code: ${code}]: \n- Dish: ${tapas}\n- Side: ${main}\n- Beverage: ${drink}\n`;
        }
        
        closeWizard();
        document.getElementById("reserve").scrollIntoView({ behavior: 'smooth' });
    });
}

/* ==========================================================================
   VISUAL FLOOR PLAN BLUEPRINT CONTROLLER (AC, VERANDA, PARKING)
   ========================================================================== */
function initFloorPlan() {
    const svg = document.getElementById("floor-plan-svg-element");
    const tables = document.querySelectorAll(".floor-table");
    const parkingSlots = document.querySelectorAll(".parking-slot");
    const seatingInput = document.getElementById("res-seating");
    const tableIdHidden = document.getElementById("res-table-id");
    const guestsDropdown = document.getElementById("res-guests");
    const alertText = document.getElementById("blueprint-alert-text");
    const mobileBtnGrid = document.getElementById("mobile-table-selector-grid");
    
    if (!svg) return;
    
    // Config details
    const TABLES_LIST = [
        { id: "AC-1", max: 4, zone: "AC Family Hall" },
        { id: "AC-2", max: 4, zone: "AC Family Hall", reserved: true },
        { id: "AC-3", max: 6, zone: "AC Family Hall" },
        { id: "V-1", max: 2, zone: "Open-Air Veranda" },
        { id: "V-2", max: 4, zone: "Open-Air Veranda", reserved: true },
        { id: "V-3", max: 6, zone: "Open-Air Veranda" }
    ];
    
    // Set visual classes on SVG tables based on listing
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
            
            btn.innerHTML = `<strong>${t.id}</strong> <span class="cap-pill">${t.zone.split(" ")[0]} · Max ${t.max}</span>`;
            
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
        tables.forEach(t => t.classList.remove("selected"));
        if (mobileBtnGrid) {
            mobileBtnGrid.querySelectorAll(".mb-select-btn").forEach(b => b.classList.remove("selected"));
        }
        
        const activeSvgEl = document.querySelector(`.floor-table[data-table-id='${tableId}']`);
        if (activeSvgEl) activeSvgEl.classList.add("selected");
        
        if (mobileBtnGrid) {
            const activeBtn = mobileBtnGrid.querySelector(`.mb-select-btn[data-id='${tableId}']`);
            if (activeBtn) activeBtn.classList.add("selected");
        }
        
        seatingInput.value = `${zone} — ${tableId}`;
        tableIdHidden.value = tableId;
        
        guestsDropdown.innerHTML = "";
        for (let i = 1; i <= maxGuests; i++) {
            const opt = document.createElement("option");
            opt.value = i;
            opt.innerText = `${i} ${i === 1 ? 'Guest' : 'Guests'}`;
            if (i === Math.min(2, maxGuests)) opt.selected = true;
            guestsDropdown.appendChild(opt);
        }
        
        alertText.innerHTML = `<i class="fa-solid fa-circle-check text-gold"></i> Seating: <strong>${tableId}</strong> (${zone}) selected! Capacity: Max ${maxGuests} guests.`;
        alertText.style.borderColor = "var(--gold)";
        alertText.style.color = "var(--gold)";
    }
    
    // Add Click listener to available tables in SVG
    tables.forEach(table => {
        table.addEventListener("click", (e) => {
            const clicked = e.currentTarget;
            
            if (clicked.classList.contains("reserved")) {
                alert("This table is currently reserved. Please choose another table.");
                return;
            }
            
            const tableId = clicked.getAttribute("data-table-id");
            const zone = clicked.getAttribute("data-zone");
            const maxGuests = parseInt(clicked.getAttribute("data-max"));
            
            selectSpecificTable(tableId, zone, maxGuests);
        });
    });

    // Add click event for parking slots as a fun interactive detail
    parkingSlots.forEach(slot => {
        slot.addEventListener("click", (e) => {
            const clicked = e.currentTarget;
            const slotId = clicked.getAttribute("data-slot");
            
            if (clicked.classList.contains("occupied")) {
                alert(`Parking Slot ${slotId} is currently occupied by another guest's vehicle.`);
            } else {
                alert(`Parking Slot ${slotId} is empty! Customers enjoy free private parking at Goan Classic.`);
            }
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
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
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
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const timeVal = hour + minutes / 60; 
    
    let isOpen = false;
    let text = "";
    
    // Goan Classic hours: Lunch (12:00 PM – 4:00 PM: 12.0 to 16.0)
    // Dinner (7:00 PM – 11:00 PM: 19.0 to 23.0)
    const lunchOpen = 12.0;
    const lunchClose = 16.0;
    const dinnerOpen = 19.0;
    const dinnerClose = 23.0;
    
    if (timeVal >= lunchOpen && timeVal < lunchClose) {
        isOpen = true;
        text = "Open Now · Lunch Session (Closes 4:00 PM)";
    } else if (timeVal >= dinnerOpen && timeVal < dinnerClose) {
        isOpen = true;
        text = "Open Now · Dinner Session (Closes 11:00 PM)";
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
        
        const name = document.getElementById("res-name").value;
        const time = document.getElementById("res-time").value;
        const guests = document.getElementById("res-guests").value;
        const seating = document.getElementById("res-seating").value;
        const tableId = document.getElementById("res-table-id").value || "General";
        
        const randomRef = "GC-" + Math.floor(100000 + Math.random() * 900000);
        
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
   SVG MAP DETAILS PANEL INTERACTION (OLD GOA HERITAGE MAP)
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
