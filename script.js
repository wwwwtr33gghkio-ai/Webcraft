const modulesData = {
    html: {
        title: "Module 1: HTML Fundamentals",
        parts: [
            {
                subTitle: "Lesson 1: What is HTML & Document Anatomy?",
                desc: `
                    <p><strong>HTML (HyperText Markup Language)</strong> is the foundational markup language used to structure content and give it semantic meaning on the World Wide Web. It consists of elements made up of tags enclosed in angle brackets.</p>
                    <p>Every professional HTML document is structured with a strict document tree hierarchy:</p>
                    <ul>
                        <li><code>&lt;!DOCTYPE html&gt;</code>: The document type declaration that instructs the web browser to render the page using HTML5 standards.</li>
                        <li><code>&lt;html lang="en"&gt; ... &lt;/html&gt;</code>: The root container element that wraps all content on the entire webpage. The <code>lang</code> attribute specifies the language of the document.</li>
                        <li><code>&lt;head&gt; ... &lt;/head&gt;</code>: Contains document metadata, character encoding, stylesheets, and browser tab titles.</li>
                        <li><code>&lt;body&gt; ... &lt;/body&gt;</code>: Contains all visible user interface elements rendered inside the browser window.</li>
                    </ul>
                `,
                code: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <title>Complete HTML Document Structure</title>\n  </head>\n  <body>\n    <h1>Welcome to Web Development</h1>\n    <p>This is a structured paragraph demonstrating standard HTML syntax.</p>\n  </body>\n</html>`,
                questions: [
                    {
                        q: "1. What is the precise role of the <!DOCTYPE html> declaration?",
                        options: [
                            "It creates the main visible heading on the webpage canvas",
                            "It informs the browser that the document complies with HTML5 standards",
                            "It imports external JavaScript modules"
                        ],
                        correct: 1,
                        explanation: "The doctype declaration tells the web browser which version of HTML is being utilized (specifically HTML5), preventing quirks mode rendering."
                    },
                    {
                        q: "2. Which HTML element acts as the root container wrapping the entire document structure?",
                        options: [
                            "<body>",
                            "<html>",
                            "<head>"
                        ],
                        correct: 1,
                        explanation: "<html> is the root element of an HTML page. <body> and <head> are nested inside it, but do not wrap the entire document."
                    },
                    {
                        q: "3. Where must all visible user interface elements (headings, text, buttons) be placed?",
                        options: [
                            "Inside the <head> element",
                            "Inside the <body> element",
                            "Directly above the <!DOCTYPE html> declaration"
                        ],
                        correct: 1,
                        explanation: "The <body> element is specifically designed to contain all content rendered visibly to users in the browser window."
                    }
                ]
            },
            {
                subTitle: "Lesson 2: HTML Head, Metadata, and Document Configuration",
                desc: `
                    <p>The <code>&lt;head&gt;</code> element acts as a container for <strong>metadata</strong>—data about the document that is processed by browsers and search engine crawlers but not displayed directly on the visual page canvas.</p>
                    <p>Key components included within the head section:</p>
                    <ul>
                        <li><code>&lt;meta charset="UTF-8"&gt;</code>: Defines character encoding (UTF-8), ensuring universal support for international alphabets and symbols.</li>
                        <li><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>: Critical for responsive design, instructing mobile browsers to scale layout dimensions to the device screen width.</li>
                        <li><code>&lt;meta name="description" content="..."&gt;</code>: Provides page summaries utilized by search engines for indexing and SEO.</li>
                        <li><code>&lt;title&gt;</code>: Defines the title displayed in the browser tab and search engine results.</li>
                        <li><code>&lt;link rel="stylesheet" href="style.css"&gt;</code>: Connects external CSS stylesheets to style the document.</li>
                    </ul>
                `,
                code: `<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="Master web development fundamentals with WebCraft.">\n  <meta name="author" content="Sandy Mohamed Ahmed Gharib">\n  <title>WebCraft - Professional Learning Platform</title>\n  <link rel="stylesheet" href="style.css">\n</head>`,
                questions: [
                    {
                        q: "1. What is the function of <meta charset='UTF-8'> in the document head?",
                        options: [
                            "It sets the character encoding so text and symbols render correctly",
                            "It specifies the responsive device width for mobile screens",
                            "It links an external CSS stylesheet file"
                        ],
                        correct: 0,
                        explanation: "charset='UTF-8' ensures that universal characters, accents, and symbols are decoded and rendered without character corruption."
                    },
                    {
                        q: "2. Which tag defines the text displayed on the browser tab when visiting a webpage?",
                        options: [
                            "<h1>",
                            "<title>",
                            "<meta name='title'>"
                        ],
                        correct: 1,
                        explanation: "The <title> tag inside the head section sets the title shown in the browser tab and search engine result pages."
                    },
                    {
                        q: "3. Why is the viewport meta tag necessary in modern web development?",
                        options: [
                            "It controls responsive scaling and layout scaling on mobile devices",
                            "It compiles JavaScript functions on the server",
                            "It sets the background color of the HTML document"
                        ],
                        correct: 0,
                        explanation: "The viewport meta tag ensures that web pages adapt correctly to mobile, tablet, and desktop screen resolutions."
                    }
                ]
            },
            {
                subTitle: "Lesson 3: HTML Body and Semantic Content Tags",
                desc: `
                    <p>The <code>&lt;body&gt;</code> element contains all structural content, text, media, and interactive components displayed to users. Modern HTML5 introduces <strong>semantic elements</strong> that clearly describe their meaning to both the browser and the developer.</p>
                    <p>Core body tags and semantic structures include:</p>
                    <ul>
                        <li><strong>Headings (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>):</strong> Establish hierarchical document structure and content outlines.</li>
                        <li><strong>Paragraphs (<code>&lt;p&gt;</code>):</strong> Group standard blocks of text.</li>
                        <li><strong>Hyperlinks (<code>&lt;a href="url"&gt;</code>):</strong> Navigate users to external or internal web pages.</li>
                        <li><strong>Images (<code>&lt;img src="image.jpg" alt="description"&gt;</code>):</strong> Embed visual graphics with accessibility descriptions.</li>
                        <li><strong>Semantic Containers (<code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;div&gt;</code>):</strong> Organize page sections logically.</li>
                    </ul>
                `,
                code: `<body>\n  <header>\n    <h1>Platform Overview</h1>\n  </header>\n  <main>\n    <p>Welcome to our educational portal.</p>\n    <a href="https://example.com">Explore Courses</a>\n    <img src="banner.png" alt="Platform Banner Image">\n  </main>\n  <footer>\n    <p>Copyright 2026 WebCraft</p>\n  </footer>\n</body>`,
                questions: [
                    {
                        q: "1. Which attribute on the <a> tag specifies the destination web address?",
                        options: [
                            "src",
                            "href",
                            "link"
                        ],
                        correct: 1,
                        explanation: "href (Hypertext Reference) defines the destination URL for hyperlinks. src is used for media sources like images and scripts."
                    },
                    {
                        q: "2. What is the primary benefit of utilizing HTML5 semantic tags like <main>, <header>, and <footer>?",
                        options: [
                            "They automatically compile JavaScript code into machine language",
                            "They improve code readability, accessibility, and SEO structure",
                            "They replace the need for CSS styling completely"
                        ],
                        correct: 1,
                        explanation: "Semantic tags give structural meaning to web content, making it easier for screen readers, search engines, and developers to understand."
                    },
                    {
                        q: "3. Why is the alt attribute required on <img> elements?",
                        options: [
                            "It provides alternative descriptive text for screen readers and accessibility",
                            "It sets the image border width in pixels",
                            "It stores the high-resolution source file backup"
                        ],
                        correct: 0,
                        explanation: "The alt attribute ensures web accessibility for visually impaired users by describing image content if the image fails to load."
                    }
                ]
            }
        ]
    },
    css: {
        title: "Module 2: CSS Styling & Layout",
        parts: [
            {
                subTitle: "Lesson 1: What is CSS and Selector Specificity?",
                desc: `
                    <p><strong>CSS (Cascading Style Sheets)</strong> is a stylesheet language used to describe the presentation and visual design of documents written in HTML. CSS separates content from design, enabling responsive layouts across different devices.</p>
                    <p>A CSS rule consists of a selector and a declaration block:</p>
                    <ul>
                        <li><strong>Element Selectors:</strong> Target tags directly (e.g., <code>h1 { color: blue; }</code>).</li>
                        <li><strong>Class Selectors (<code>.</code>):</strong> Target elements possessing a specific class attribute (e.g., <code>.card</code>).</li>
                        <li><strong>ID Selectors (<code>#</code>):</strong> Target a single unique element by its ID attribute (e.g., <code>#main-header</code>).</li>
                    </ul>
                `,
                code: `/* Element Selector */\np {\n  font-size: 16px;\n  color: #cbd5e1;\n}\n\n/* Class Selector */\n.btn-primary {\n  background-color: #3b82f6;\n  padding: 10px 20px;\n}\n\n/* ID Selector */\n#unique-banner {\n  border: 2px solid #22c55e;\n}`,
                questions: [
                    {
                        q: "1. Which symbol is used in CSS stylesheets to target an element by its class name?",
                        options: [
                            "# (Hash)",
                            ". (Period)",
                            "@ (At symbol)"
                        ],
                        correct: 1,
                        explanation: "The period (.) denotes a class selector. The hash (#) targets unique element IDs."
                    },
                    {
                        q: "2. Which CSS property is responsible for changing the text color of an element?",
                        options: [
                            "font-color",
                            "text-style",
                            "color"
                        ],
                        correct: 2,
                        explanation: "color is the standard CSS property for modifying text color. font-color is invalid."
                    },
                    {
                        q: "3. How are multiple property-value declarations separated inside a CSS block?",
                        options: [
                            "Using semicolons (;)",
                            "Using commas (,)",
                            "Using forward slashes (/)"
                        ],
                        correct: 0,
                        explanation: "Semicolons separate distinct property declarations inside a rule block."
                    }
                ]
            },
            {
                subTitle: "Lesson 2: The CSS Box Model and Spacing Architecture",
                desc: `
                    <p>Every HTML element in CSS is rendered as a rectangular box governed by the <strong>CSS Box Model</strong>. Mastering this model is critical for professional layout design:</p>
                    <ul>
                        <li><strong>Content:</strong> The innermost area containing text and images (governed by <code>width</code> and <code>height</code>).</li>
                        <li><strong>Padding:</strong> Transparent inner spacing between content and the element's border.</li>
                        <li><strong>Border:</strong> A visible or invisible boundary wrapping around the padding and content.</li>
                        <li><strong>Margin:</strong> Outer spacing separating the element from neighboring elements.</li>
                    </ul>
                `,
                code: `.box-model-demo {\n  width: 350px;\n  padding: 24px;\n  border: 3px solid #3b82f6;\n  margin: 20px auto;\n  box-sizing: border-box;\n}`,
                questions: [
                    {
                        q: "1. Which layer of the CSS Box Model creates transparent space outside the border to push away neighboring elements?",
                        options: [
                            "Padding",
                            "Margin",
                            "Content area"
                        ],
                        correct: 1,
                        explanation: "Margin creates outer spacing outside the element border. Padding creates inner space inside the border."
                    },
                    {
                        q: "2. Where does padding sit relative to content and borders?",
                        options: [
                            "Outside the border",
                            "Directly between the inner content and the border",
                            "At the very outer edge of the margin"
                        ],
                        correct: 1,
                        explanation: "Padding is the inner spacing layer located directly between the content and the border."
                    },
                    {
                        q: "3. What is the purpose of 'box-sizing: border-box;'?",
                        options: [
                            "It includes padding and border within the element's total declared width and height",
                            "It removes all element margins automatically",
                            "It converts block elements into inline text elements"
                        ],
                        correct: 0,
                        explanation: "border-box ensures that padding and borders do not expand the overall element width beyond its declared dimensions."
                    }
                ]
            },
            {
                subTitle: "Lesson 3: Modern Layout Systems with CSS Flexbox",
                desc: `
                    <p><strong>CSS Flexbox</strong> (Flexible Box Layout) is a powerful one-dimensional layout model designed to distribute space and align items within a container efficiently, even when dynamic screen sizes change.</p>
                    <ul>
                        <li><code>display: flex;</code>: Activates the flex formatting context on a parent container.</li>
                        <li><code>justify-content</code>: Aligns flex items horizontally along the main axis (e.g., <code>center</code>, <code>space-between</code>).</li>
                        <li><code>align-items</code>: Aligns flex items vertically along the cross axis (e.g., <code>center</code>, <code>flex-start</code>).</li>
                        <li><code>gap</code>: Sets consistent spacing between flex items.</li>
                    </ul>
                `,
                code: `.navbar-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  padding: 15px 30px;\n}`,
                questions: [
                    {
                        q: "1. Which CSS property activates a Flexbox layout container?",
                        options: [
                            "display: flex;",
                            "layout: flexbox;",
                            "position: flex;"
                        ],
                        correct: 0,
                        explanation: "display: flex turns a container into a flex container and its children into flexible items."
                    },
                    {
                        q: "2. Which justify-content value distributes items evenly with maximum space between them?",
                        options: [
                            "justify-content: center;",
                            "justify-content: space-between;",
                            "justify-content: flex-start;"
                        ],
                        correct: 1,
                        explanation: "space-between pushes the first item to the start and the last item to the end, distributing equal space between intermediate items."
                    },
                    {
                        q: "3. What does the gap property achieve in a flex container?",
                        options: [
                            "It defines uniform spacing directly between flex items without applying external margins",
                            "It creates a border around the entire container",
                            "It sets the height of individual items"
                        ],
                        correct: 0,
                        explanation: "The gap property provides clean, consistent spacing between flex or grid items."
                    }
                ]
            }
        ]
    },
    js: {
        title: "Module 3: JavaScript Programming",
        parts: [
            {
                subTitle: "Lesson 1: What is JavaScript & Execution Environment?",
                desc: `
                    <p><strong>JavaScript (JS)</strong> is a high-level, interpreted programming language that adds interactivity, computation, and dynamic behavior to web pages. While HTML provides structure and CSS provides styling, JavaScript executes code in response to user actions.</p>
                    <p>JavaScript is linked to web pages using the <code>&lt;script&gt;</code> tag, typically placed immediately before the closing <code>&lt;/body&gt;</code> tag so that the HTML DOM is fully loaded prior to script execution.</p>
                `,
                code: `// Outputting data to the developer console\nconsole.log("WebCraft application initialized successfully.");\n\n// Basic arithmetic computation\nlet totalScore = 50 + 25;\nconsole.log("Calculated Score:", totalScore);`,
                questions: [
                    {
                        q: "1. What is the primary role of JavaScript in web development?",
                        options: [
                            "To define page structure and semantic headings",
                            "To add dynamic behavior, logic, and interactivity",
                            "To manage database servers on the cloud"
                        ],
                        correct: 1,
                        explanation: "JavaScript empowers web pages with dynamic logic, interactive features, and application processing."
                    },
                    {
                        q: "2. Where is the recommended placement for the <script> tag in an HTML file?",
                        options: [
                            "Before the <!DOCTYPE html> declaration",
                            "Right before the closing </body> tag",
                            "Inside the <title> tag"
                        ],
                        correct: 1,
                        explanation: "Placing scripts before closing </body> ensures all HTML DOM elements exist in memory before JavaScript executes."
                    },
                    {
                        q: "3. Which built-in method outputs debugging messages to the browser developer console?",
                        options: [
                            "console.log()",
                            "document.write()",
                            "window.alert()"
                        ],
                        correct: 0,
                        explanation: "console.log() is the standard method used by developers to output information to the browser console."
                    }
                ]
            },
            {
                subTitle: "Lesson 2: Variables, Data Types, and Functions",
                desc: `
                    <p><strong>Variables</strong> are named containers used to store data values in memory. Modern JavaScript provides two primary declaration keywords:</p>
                    <ul>
                        <li><code>const</code>: Declares a constant reference whose value cannot be reassigned.</li>
                        <li><code>let</code>: Declares a block-scoped variable whose value can be updated.</li>
                    </ul>
                    <p><strong>Functions</strong> encapsulate reusable blocks of code designed to execute specific computational tasks when invoked.</p>
                `,
                code: `const platformName = "WebCraft";\nlet studentScore = 95;\n\nfunction calculateGrade(score) {\n  if (score >= 90) {\n    return "Grade: A";\n  }\n  return "Grade: B";\n}\n\nconsole.log(calculateGrade(studentScore));`,
                questions: [
                    {
                        q: "1. Which keyword should be used when declaring a variable reference that should never be reassigned?",
                        options: [
                            "let",
                            "const",
                            "var"
                        ],
                        correct: 1,
                        explanation: "const enforces variable immutability, preventing accidental reassignment."
                    },
                    {
                        q: "2. What is the core purpose of defining a function in JavaScript?",
                        options: [
                            "To style HTML headers with custom fonts",
                            "To encapsulate reusable blocks of code that perform specific operations",
                            "To link external CSS style sheets"
                        ],
                        correct: 1,
                        explanation: "Functions encapsulate logic into reusable routines that can be invoked multiple times efficiently."
                    },
                    {
                        q: "3. Which keyword exits a function and outputs a computed result back to the caller?",
                        options: [
                            "output",
                            "return",
                            "break"
                        ],
                        correct: 1,
                        explanation: "The return statement halts function execution and returns a value to the caller."
                    }
                ]
            },
            {
                subTitle: "Lesson 3: The DOM API and Event Handling",
                desc: `
                    <p>When a web page loads, the browser creates the <strong>Document Object Model (DOM)</strong>—an object-oriented representation of the webpage that enables JavaScript to access, modify, and update HTML elements dynamically.</p>
                    <ul>
                        <li><code>document.getElementById("id")</code>: Selects a specific element by its unique ID.</li>
                        <li><code>element.innerText</code>: Reads or updates text content inside an element.</li>
                        <li><code>element.addEventListener("click", callback)</code>: Binds interactive event listeners to user actions.</li>
                    </ul>
                `,
                code: `const triggerBtn = document.getElementById("submitBtn");\nconst statusBox = document.getElementById("statusMsg");\n\ntriggerBtn.addEventListener("click", function() {\n  statusBox.innerText = "Operation completed successfully!";\n  statusBox.style.color = "#22c55e";\n});`,
                questions: [
                    {
                        q: "1. What does DOM stand for in frontend web engineering?",
                        options: [
                            "Data Object Management",
                            "Document Object Model",
                            "Dynamic Output Mechanism"
                        ],
                        correct: 1,
                        explanation: "DOM stands for Document Object Model, representing the structured node tree of HTML elements."
                    },
                    {
                        q: "2. Which method selects an HTML element using its unique ID attribute?",
                        options: [
                            "document.getElementById()",
                            "document.getElementsByClass()",
                            "document.selectNode()"
                        ],
                        correct: 0,
                        explanation: "document.getElementById() retrieves a specific element matching the provided ID string."
                    },
                    {
                        q: "3. Which method attaches an interactive event listener (like a click event) to a DOM element?",
                        options: [
                            "element.onClickEvent()",
                            "element.addEventListener()",
                            "element.listenTo()"
                        ],
                        correct: 1,
                        explanation: "addEventListener is the standard modern API method for attaching event handlers to DOM elements."
                    }
                ]
            }
        ]
    }
};

const STORAGE_KEY = 'webcraft_user_progress_v2';

let userProgress = {
    unlockedModules: ['html'],
    completedModules: [],
    unlockedParts: {
        html: 0,
        css: 0,
        js: 0
    },
    currentPart: {
        html: 0,
        css: 0,
        js: 0
    }
};

let currentModuleKey = '';
let currentPartIndex = 0;

function loadProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            userProgress = { ...userProgress, ...parsed };
        } catch (e) {
            localStorage.removeItem(STORAGE_KEY);
        }
    }
    updateHomeUI();
}

function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress));
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all saved curriculum progress?')) {
        localStorage.removeItem(STORAGE_KEY);
        userProgress = {
            unlockedModules: ['html'],
            completedModules: [],
            unlockedParts: { html: 0, css: 0, js: 0 },
            currentPart: { html: 0, css: 0, js: 0 }
        };
        updateHomeUI();
    }
}

function updateHomeUI() {
    ['html', 'css', 'js'].forEach(mod => {
        const card = document.getElementById(`card-${mod}`);
        const status = document.getElementById(`status-${mod}`);
        const btn = document.getElementById(`btn-${mod}`);

        if (userProgress.completedModules.includes(mod)) {
            card.classList.remove('locked');
            status.innerText = 'Completed';
            status.className = 'status-badge unlocked';
            btn.disabled = false;
            btn.innerText = `Review ${mod.toUpperCase()} Module`;
        } else if (userProgress.unlockedModules.includes(mod)) {
            card.classList.remove('locked');
            status.innerText = 'Available';
            status.className = 'status-badge unlocked';
            btn.disabled = false;
            const savedPart = userProgress.currentPart[mod] || 0;
            btn.innerText = savedPart > 0 ? `Resume ${mod.toUpperCase()} (Lesson ${savedPart + 1})` : `Start ${mod.toUpperCase()} Module`;
        } else {
            card.classList.add('locked');
            status.innerText = 'Locked';
            status.className = 'status-badge locked-badge';
            btn.disabled = true;
            btn.innerText = mod === 'css' ? 'Complete HTML First' : 'Complete CSS First';
        }
    });
}

function openModule(moduleKey) {
    if (!userProgress.unlockedModules.includes(moduleKey)) {
        alert('Please complete the previous module first.');
        return;
    }

    currentModuleKey = moduleKey;
    currentPartIndex = userProgress.currentPart[moduleKey] || 0;
    renderPart();

    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('lessonScreen').style.display = 'block';
    window.scrollTo(0, 0);
}

function switchLesson(partIdx) {
    if (partIdx <= userProgress.unlockedParts[currentModuleKey]) {
        currentPartIndex = partIdx;
        userProgress.currentPart[currentModuleKey] = currentPartIndex;
        saveProgress();
        renderPart();
        window.scrollTo(0, 0);
    }
}

function renderPart() {
    const moduleData = modulesData[currentModuleKey];
    const partData = moduleData.parts[currentPartIndex];
    const maxUnlockedPart = userProgress.unlockedParts[currentModuleKey];

    document.getElementById('moduleMainTitle').innerText = moduleData.title;
    document.getElementById('stepIndicator').innerText = `Lesson ${currentPartIndex + 1} of ${moduleData.parts.length}`;

    let navHTML = '';
    moduleData.parts.forEach((p, idx) => {
        const isLocked = idx > maxUnlockedPart;
        const isActive = idx === currentPartIndex;
        navHTML += `<button class="lesson-nav-btn ${isActive ? 'active' : ''}" onclick="switchLesson(${idx})" ${isLocked ? 'disabled' : ''}>Lesson ${idx + 1}</button>`;
    });
    document.getElementById('lessonNavBar').innerHTML = navHTML;

    document.getElementById('subLessonTitle').innerText = partData.subTitle;
    document.getElementById('lessonDesc').innerHTML = partData.desc;
    document.getElementById('lessonCode').innerText = partData.code;

    let quizHTML = '';
    partData.questions.forEach((item, qIndex) => {
        quizHTML += `<div class="question-block" id="question_block_${qIndex}">`;
        quizHTML += `<p class="question-text">${escapeHTML(item.q)}</p>`;
        quizHTML += `<div class="quiz-options">`;
        item.options.forEach((opt, optIndex) => {
            quizHTML += `<label><input type="radio" name="question_${qIndex}" value="${optIndex}"> ${escapeHTML(opt)}</label>`;
        });
        quizHTML += `</div></div>`;
    });

    document.getElementById('quizContainer').innerHTML = quizHTML;
    document.getElementById('feedbackMsg').innerText = '';
    document.getElementById('submitQuizBtn').style.display = 'block';
    document.getElementById('nextLessonBtn').style.display = 'none';
    
    const expContainer = document.getElementById('explanationContainer');
    expContainer.style.display = 'none';
    expContainer.innerHTML = '';
}

function escapeHTML(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

function goHome() {
    updateHomeUI();
    document.getElementById('lessonScreen').style.display = 'none';
    document.getElementById('homeScreen').style.display = 'block';
    window.scrollTo(0, 0);
}

function checkAnswers() {
    const moduleData = modulesData[currentModuleKey];
    const partData = moduleData.parts[currentPartIndex];
    const feedback = document.getElementById('feedbackMsg');

    let allAnswered = true;
    let allCorrect = true;

    partData.questions.forEach((item, qIndex) => {
        const block = document.getElementById(`question_block_${qIndex}`);
        const radios = document.getElementsByName(`question_${qIndex}`);
        let selected = -1;
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selected = parseInt(radios[i].value);
                break;
            }
        }

        if (selected === -1) {
            allAnswered = false;
            block.classList.remove('incorrect-question');
        } else if (selected !== item.correct) {
            allCorrect = false;
            block.classList.add('incorrect-question');
        } else {
            block.classList.remove('incorrect-question');
        }
    });

    if (!allAnswered) {
        feedback.style.color = 'var(--warning)';
        feedback.innerText = 'Please answer all questions before submitting.';
        return;
    }

    if (!allCorrect) {
        feedback.style.color = 'var(--error)';
        feedback.innerText = 'Incorrect answers are highlighted in red above. Please review them and try again.';
        return;
    }

    feedback.style.color = 'var(--success)';
    feedback.innerText = 'All answers correct! Review the explanations below.';

    let explanationHTML = '<h4>Comprehensive Answer Explanations:</h4>';
    partData.questions.forEach((item, qIndex) => {
        explanationHTML += `<div class="explanation-item"><strong>Question ${qIndex + 1}:</strong> ${escapeHTML(item.explanation)}</div>`;
    });

    const expContainer = document.getElementById('explanationContainer');
    expContainer.innerHTML = explanationHTML;
    expContainer.style.display = 'block';

    const nextBtn = document.getElementById('nextLessonBtn');
    if (currentPartIndex < moduleData.parts.length - 1) {
        const nextIdx = currentPartIndex + 1;
        if (userProgress.unlockedParts[currentModuleKey] < nextIdx) {
            userProgress.unlockedParts[currentModuleKey] = nextIdx;
        }
        nextBtn.innerText = `Continue to Lesson ${nextIdx + 1}`;
    } else {
        if (!userProgress.completedModules.includes(currentModuleKey)) {
            userProgress.completedModules.push(currentModuleKey);
        }
        if (currentModuleKey === 'html' && !userProgress.unlockedModules.includes('css')) {
            userProgress.unlockedModules.push('css');
        } else if (currentModuleKey === 'css' && !userProgress.unlockedModules.includes('js')) {
            userProgress.unlockedModules.push('js');
        }
        nextBtn.innerText = 'Complete Module & Return to Curriculum';
    }

    saveProgress();
    nextBtn.style.display = 'block';
}

function proceedToNext() {
    const moduleData = modulesData[currentModuleKey];
    if (currentPartIndex < moduleData.parts.length - 1) {
        currentPartIndex++;
        userProgress.currentPart[currentModuleKey] = currentPartIndex;
        saveProgress();
        renderPart();
        window.scrollTo(0, 0);
    } else {
        userProgress.currentPart[currentModuleKey] = 0;
        saveProgress();
        goHome();
    }
}

loadProgress();