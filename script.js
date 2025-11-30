// --- PARTICLE INITIALIZATION (Merged from your particles.js) ---
function initializeParticles() {
    particlesJS('particle-canvas', {
        "particles": {
            "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#a0a0a0" }, /* 🌟 New Default Particle Color (Dark Mode) */
            "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
            "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
            "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
            "line_linked": { "enable": true, "distance": 150, "color": "#a0a0a0", "opacity": 0.4, "width": 1 }, /* 🌟 New Default Line Color (Dark Mode) */
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
        },
        "interactivity": {
            "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });
}

// --- PARTICLE HELPER FUNCTION ---
function updateParticleColors() {
    const chatContainer = document.querySelector(".chat-container");
    if (!chatContainer) return;

    // Read the current secondary text color from the active theme's variables
    const particleColor = getComputedStyle(chatContainer).getPropertyValue('--secondary-text-color').trim();
    
    if (window.pJSDom && window.pJSDom.length > 0) {
        const pJS = window.pJSDom[0].pJS;

        // Apply new color to particles and lines
        pJS.particles.color.value = particleColor;
        pJS.particles.line_linked.color = particleColor;
        
        // Redraw canvas to apply changes
        pJS.fn.particlesSetup(); 
        pJS.fn.particlesDraw();
    }
}

// --- THEME LOGIC FUNCTIONS ---
window.applyTheme = function(themeName) {
    const chatContainer = document.querySelector(".chat-container");
    if (!chatContainer) return;

    // Removed "theme-dark" as it's now the base/default theme. Added new themes.
    chatContainer.classList.remove("theme-blue", "theme-green", "theme-red", "theme-yellow"); 
    
    if (themeName !== 'default') {
        chatContainer.classList.add('theme-' + themeName); 
    }
    
    // This runs after the class is applied, picking up the new CSS variables
    updateParticleColors();
}

function saveTheme() {
    const selector = document.getElementById('theme-selector');
    if (selector) {
        const selectedTheme = selector.value;
        localStorage.setItem('userTheme', selectedTheme);
        applyTheme(selectedTheme);
        
        const saveButton = themeContainer.querySelector('#saveThemeButton');
        if (saveButton) { 
            const originalText = saveButton.innerText;
            saveButton.innerText = `Saved (${selectedTheme})!`;
            setTimeout(() => {
                saveButton.innerText = originalText;
            }, 1500);
        }
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('userTheme');
    const selector = document.getElementById('theme-selector');
    
    if (savedTheme) {
        applyTheme(savedTheme);
        if (selector) {
            selector.value = savedTheme;
        }
    } else {
        // "default" is now Dark Mode
        applyTheme('default'); 
        if (selector) {
            selector.value = 'default';
        }
    }
}

// --- MAIN POPUP CREATION FUNCTION ---
function createChatGPTpopup() {
    
    console.log("cwqwe made this.");
    console.log("Lumi was here :3");
    
    const chatContainer = document.createElement("div");
    chatContainer.classList.add("chat-container");
    document.body.appendChild(chatContainer);

    const chatHeader = document.createElement("div");
    chatHeader.classList.add("chat-header");
    chatContainer.appendChild(chatHeader);

    const tabContainer = document.createElement("div");
    tabContainer.classList.add("tab-container");
    chatHeader.appendChild(tabContainer);

    const aboutTab = document.createElement("button");
    aboutTab.classList.add("tab-button");
    aboutTab.innerText = "About";
    tabContainer.appendChild(aboutTab);

    const googleTab = document.createElement("button");
    googleTab.classList.add("tab-button");
    const googleTabSpan = document.createElement("span");
    googleTabSpan.innerText = "Google";
    googleTab.appendChild(googleTabSpan);
    const googleCloakBtn = document.createElement("button");
    googleCloakBtn.classList.add("ab-cloak-button");
    googleCloakBtn.innerText = "AB";
    googleTab.appendChild(googleCloakBtn);
    tabContainer.appendChild(googleTab);

    const chatTab = document.createElement("button");
    chatTab.classList.add("tab-button");
    const chatTabSpan = document.createElement("span");
    chatTabSpan.innerText = "AI";
    chatTab.appendChild(chatTabSpan);
    const chatCloakBtn = document.createElement("button");
    chatCloakBtn.classList.add("ab-cloak-button");
    chatCloakBtn.innerText = "AB";
    chatTab.appendChild(chatCloakBtn);
    tabContainer.appendChild(chatTab);
    
    const proxyTab = document.createElement("button");
    proxyTab.classList.add("tab-button");
    const proxyTabSpan = document.createElement("span");
    proxyTabSpan.innerText = "Proxy";
    proxyTab.appendChild(proxyTabSpan);
    const proxyCloakBtn = document.createElement("button");
    proxyCloakBtn.classList.add("ab-cloak-button");
    proxyCloakBtn.innerText = "AB";
    proxyTab.appendChild(proxyCloakBtn);
    tabContainer.appendChild(proxyTab);

    const toolsTab = document.createElement("button");
    toolsTab.classList.add("tab-button");
    toolsTab.innerText = "Tools";
    tabContainer.appendChild(toolsTab);

    const abCloakTab = document.createElement("button");
    abCloakTab.classList.add("tab-button");
    abCloakTab.innerText = "AB Cloak";
    tabContainer.appendChild(abCloakTab);

    const themeTab = document.createElement("button");
    themeTab.classList.add("tab-button");
    themeTab.innerText = "Themes 🎨";
    tabContainer.appendChild(themeTab);

    const controlButtons = document.createElement("div");
    controlButtons.classList.add("control-buttons");
    chatHeader.appendChild(controlButtons);

    const resetButton = document.createElement("button");
    resetButton.classList.add("reset-button");
    resetButton.innerText = "Reset";
    controlButtons.appendChild(resetButton);

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.innerText = "×";
    controlButtons.appendChild(closeButton);

    const iframe = document.createElement("iframe");
    iframe.classList.add("content-iframe");
    chatContainer.appendChild(iframe);

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("content-panel", "about-page");
    aboutContainer.style.display = "none";
    aboutContainer.innerHTML = `
        <h3>About LABL</h3>
        <p> LABL Is a custom tool to bypass school networks by going around their security, we have many sites to offer, or even a javascript executor that allows you to have a free control of what you are executing with this program. </p>
        <br>
        <h3>Random BS:</h3>
        <ul>
            <li>- Made for people who have Blocksi Now</li>
            <li>- Credits: </li>
            <li>- Made by Lumi_f3m :3 (Made original Brown Design + Clever Cloak) </li>
            <li>- cwqwe contributed (Did the rest of the themes + XD) </li>
        </ul>
    `;
    chatContainer.appendChild(aboutContainer);

    const themeContainer = document.createElement("div");
    themeContainer.classList.add("content-panel", "theme-page");
    themeContainer.style.display = "none";
    themeContainer.innerHTML = `
        <h3>🎨 Choose Your Theme</h3>
        <p>Select a color scheme below to customize the look of the popup.</p>
        <div class="theme-selector-group">
            <label for="theme-selector">Current Theme:</label>
            <select id="theme-selector" onchange="applyTheme(this.value)">
                <option value="default">Default (Dark Mode)</option>
                <option value="blue">Deep Blue</option>
                <option value="green">Forest Green</option>
                <option value="red">Crimson Red</option>
                <option value="yellow">Vibrant Yellow</option>
            </select>
        </div>
        <button id="saveThemeButton">Apply & Save Theme</button>
    `;
    chatContainer.appendChild(themeContainer);

    const toolsContainer = document.createElement("div");
    toolsContainer.classList.add("content-panel");
    toolsContainer.style.display = "none";
    const rightClickSection = document.createElement("div");
    rightClickSection.classList.add("tools-section");
    const rightClickCheckbox = document.createElement("input");
    rightClickCheckbox.type = "checkbox";
    rightClickCheckbox.id = "rightClickToggle";
    const rightClickLabel = document.createElement("label");
    rightClickLabel.innerText = "Enable Right Clicking";
    rightClickLabel.setAttribute("for", "rightClickToggle");
    rightClickSection.appendChild(rightClickCheckbox);
    rightClickSection.appendChild(rightClickLabel);
    toolsContainer.appendChild(rightClickSection);
    
    const codeExecutorSection = document.createElement("div");
    codeExecutorSection.classList.add("tools-section");
    const codeInputLabel = document.createElement("label");
    codeInputLabel.innerText = "Enter Javascript Code:";
    const codeInput = document.createElement("textarea");
    const runCodeButton = document.createElement("button");
    runCodeButton.innerText = "Execute";
    const outputArea = document.createElement("pre");
    codeExecutorSection.appendChild(codeInputLabel);
    codeExecutorSection.appendChild(codeInput);
    codeExecutorSection.appendChild(runCodeButton);
    codeExecutorSection.appendChild(outputArea);
    toolsContainer.appendChild(codeExecutorSection);
    chatContainer.appendChild(toolsContainer);

    const abCloakContainer = document.createElement("div");
    abCloakContainer.classList.add("content-panel", "ab-cloak-page");
    abCloakContainer.style.display = "none";
    abCloakContainer.innerHTML = `
        <h1>Lumi's ab launcher</h1>
        <div class="main-controls">
            <label for="urlInput">Enter URL:</label>
            <input type="text" id="urlInput" placeholder="https://example.com">
            <button id="launchButton">Launch Site</button>
        </div>
        <section class="quick-links-section">
            <h2 class="quick-links-title">Quick Links</h2>
            <div class="quick-links-grid">
                <button class="quick-link-button" data-url="https://genizy-math.vercel.app/">GN-Math 1</button>
                <button class="quick-link-button" data-url="https://schoolworkandstuff.vercel.app/">GN-Math 2</button>
                <button class="quick-link-button" data-url="https://tc44.smelly.cc/">RammerHead</button>
                <button class="quick-link-button" data-url="https://soggycake.verymad.net/">RammerHead</button>
                <button class="quick-link-button" data-url="https://fheuwifuhewi.coolscience.cfd/">Truffed</button>
                <button class="quick-link-button" data-url="https://algebrai.burgerbar.cl/">Truffed</button>
                <button class="quick-link-button" data-url="https://low2fv9h2j.raccoon.sbs/">Doge</button>
                <button class="quick-link-button" data-url="https://q6t1u8.ddx.edpuzzle.icu.cdn.cloudflare.net/">DayDreamX</button>
                <button class="quick-link-button" data-url="https://xk2p4q.ddx.deltamath.icu.cdn.cloudflare.net/">DayDreamX</button>
            </div>
        </section>
    `;
    chatContainer.appendChild(abCloakContainer);
    
    function setActiveTab(activeTab) {
        const tabs = [aboutTab, googleTab, chatTab, proxyTab, toolsTab, abCloakTab, themeTab];
        
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
        activeTab.classList.add("active");

        const containers = [iframe, aboutContainer, toolsContainer, abCloakContainer, themeContainer];
        containers.forEach(container => container.style.display = "none");
        
        if (activeTab === aboutTab) {
            aboutContainer.style.display = "flex";
        } else if (activeTab === toolsTab) {
            toolsContainer.style.display = "flex";
        } else if (activeTab === abCloakTab) {
            abCloakContainer.style.display = "flex";
        } else if (activeTab === themeTab) {
            themeContainer.style.display = "flex";
        } else {
            iframe.style.display = "block";
        }
    }
    
    function setupABCloakPanel() {
        const urlInput = abCloakContainer.querySelector('#urlInput');
        const launchButton = abCloakContainer.querySelector('#launchButton');
        const quickLinksGrid = abCloakContainer.querySelector('.quick-links-grid');
        
        if (launchButton && urlInput) {
            launchButton.addEventListener('click', () => {
                const url = urlInput.value.trim();
                const formattedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
                launchURL(formattedUrl, true);
            });
        }

        if (urlInput) {
            urlInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const url = urlInput.value.trim();
                    const formattedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
                    launchURL(formattedUrl, true);
                }
            });
        }
        
        if (quickLinksGrid) {
            quickLinksGrid.querySelectorAll('.quick-link-button').forEach(button => {
                button.addEventListener('click', () => {
                    const url = button.getAttribute('data-url');
                    launchURL(url, true);
                });
            });
        }
    }

    aboutTab.addEventListener("click", () => {
        setActiveTab(aboutTab);
    });

    googleTab.addEventListener("click", (e) => {
        if (!e.target.classList.contains('ab-cloak-button')) {
            iframe.src = "https://www.google.com/webhp?igu=1";
            setActiveTab(googleTab);
        }
    });

    googleCloakBtn.addEventListener("click", () => {
        launchURL("https://www.google.com/webhp?igu=1", true);
    });

    chatTab.addEventListener("click", (e) => {
        if (!e.target.classList.contains('ab-cloak-button')) {
            iframe.src = "chrome://ai-chrome/api-10293";
            setActiveTab(chatTab);
        }
    });

    chatCloakBtn.addEventListener("click", () => {
        launchURL("chrome://ai-chrome/api-10293", true);
    });
    
    proxyTab.addEventListener("click", (e) => {
        if (!e.target.classList.contains('ab-cloak-button')) {
            iframe.src = "https://tc44.smelly.cc/";
            setActiveTab(proxyTab);
        }
    });

    proxyCloakBtn.addEventListener("click", () => {
        launchURL("https://tc44.smelly.cc/", true);
    });

    toolsTab.addEventListener("click", () => {
        setActiveTab(toolsTab);
    });

    abCloakTab.addEventListener("click", () => {
        setActiveTab(abCloakTab);
    });
    
    themeTab.addEventListener("click", () => {
        setActiveTab(themeTab);
    });

    function launchURL(url, inAboutBlank) {
        if (!url) {
            console.error('Please enter a URL.');
            return;
        }
        
        const formattedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
        
        if (inAboutBlank) {
            const newTab = window.open('about:blank', '_blank');
            if (newTab) {
                newTab.document.title = 'secret :3';
                newTab.document.write(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <title>secret :3</title>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <style>
                            body { margin: 0; overflow: hidden; }
                            iframe {
                                position: fixed;
                                top: 0;
                                left: 0;
                                width: 100vw;
                                height: 100vh;
                                border: none;
                                display: block;
                            }
                        </style>
                    </head>
                    <body>
                        <iframe src="${formattedUrl}"></iframe>
                    </body>
                    </html>
                `);
                newTab.document.close();
            } else {
                console.error('Please allow pop-ups for this site to launch new tabs.');
            }
        } else {
            iframe.src = formattedUrl;
        }
    }

    let contextMenuBlocked = true;
    const contextMenuHandler = function (event) {
        if (contextMenuBlocked) {
            event.stopPropagation();
            event.preventDefault(); 
        }
    };
    
    document.addEventListener('contextmenu', contextMenuHandler, true);

    rightClickCheckbox.addEventListener("change", function () {
        contextMenuBlocked = !this.checked;
    });
    
    runCodeButton.addEventListener("click", () => {
        const code = codeInput.value;
        const sandbox = document.createElement("iframe");
        sandbox.style.display = "none";
        document.body.appendChild(sandbox);
        sandbox.contentWindow.console.log = (message) => {
            outputArea.textContent += message + '\n';
        };
        
        try {
            outputArea.textContent = 'Executing...\n';
            const script = document.createElement("script");
            script.textContent = `try {
                const result = eval(decodeURIComponent('${encodeURIComponent(code)}'));
                window.console.log('Result: ' + result);
            } catch(error) {
                window.console.log('Error: ' + error.message);
            }`;
            sandbox.contentDocument.body.appendChild(script);
        } catch (error) {
            outputArea.textContent = `Setup Error: ${error.message}`;
        } finally {
            setTimeout(() => {
                if(sandbox.parentNode) document.body.removeChild(sandbox)
            }, 100);
        }
    });
    
    closeButton.onclick = () => {
        if(chatContainer.parentNode) document.body.removeChild(chatContainer);
    }
    
    resetButton.onclick = () => {
        localStorage.clear();
        window.location.reload();
    };

    let isDragging = false, offsetX, offsetY;

    chatHeader.addEventListener("mousedown", (e) => {
        if (e.target.tagName.toLowerCase() === 'button' || e.target.closest('.tab-container')) {
            isDragging = false;
            return;
        }
        isDragging = true;
        offsetX = e.clientX - chatContainer.offsetLeft;
        offsetY = e.clientY - chatContainer.offsetTop;
        chatHeader.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;
        
        chatContainer.style.left = `${newX}px`;
        chatContainer.style.top = `${newY}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        chatHeader.style.cursor = "grab";
    });

    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key.toLowerCase() === "e") {
            chatContainer.style.display = chatContainer.style.display === "none" ? "flex" : "none";
            e.preventDefault();
        }
    });

    const saveButton = themeContainer.querySelector('#saveThemeButton');
    if(saveButton) saveButton.addEventListener('click', saveTheme);
    
    setupABCloakPanel(); 
    
    // 1. Initialize Particles
    initializeParticles();
    
    // 2. Set Active Tab
    setActiveTab(aboutTab);
    
    // 3. Load Theme (This calls applyTheme, which updates the canvas color)
    loadTheme();
}

window.onload = createChatGPTpopup;
