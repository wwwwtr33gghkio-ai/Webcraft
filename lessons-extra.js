/* WebCraft extra lessons (detailed). Load AFTER script.js */
const Q = (q, options, correct, explanation) => ({ q, options, correct, explanation });
const L = (subTitle, desc, code, questions) => ({ subTitle, desc, code, questions });

modulesData.html.parts.push(
L("Lesson 4: Lists, Tables and Semantic Sections",
`<p>Real pages are full of grouped information: menus, steps, prices, schedules. Using the right tag for each kind of group helps browsers, search engines and screen readers understand your content, not only how it looks.</p>
<ul>
<li><code>&lt;ul&gt;</code> (unordered list): use it when the ORDER of items does not matter, like a shopping list or a menu. The browser adds bullets. Mistake: putting text directly inside <code>&lt;ul&gt;</code>; only <code>&lt;li&gt;</code> may be its children.</li>
<li><code>&lt;ol&gt;</code> (ordered list): use it when order matters, like recipe steps or a ranking. The browser numbers the items automatically, so you never renumber by hand.</li>
<li><code>&lt;li&gt;</code> (list item): one entry inside a list. It can hold text, links, images or even another nested list.</li>
<li><code>&lt;table&gt;</code>: for real data with rows and columns (marks, prices). Never use it for page layout, that is CSS's job.</li>
<li><code>&lt;tr&gt;</code> = one row. <code>&lt;th&gt;</code> = header cell (bold, centered, and screen readers announce it as a column title). <code>&lt;td&gt;</code> = normal data cell.</li>
<li><code>&lt;nav&gt;</code>: wraps the main navigation links. Screen-reader users can jump straight to it.</li>
<li><code>&lt;section&gt;</code>: a themed group of content, usually with its own heading.</li>
<li><code>&lt;article&gt;</code>: content that makes sense alone, like a blog post or news item.</li>
</ul>`,
`<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
  </ul>
</nav>

<ol>
  <li>Open the editor</li>
  <li>Write the code</li>
</ol>

<table border="1">
  <tr><th>Name</th><th>Score</th></tr>
  <tr><td>Sara</td><td>95</td></tr>
</table>`,
[Q("1. When should you choose <ol> instead of <ul>?", ["When the order of items matters", "When you want bullet points", "When the list has links"], 0, "<ol> numbers items automatically, which suits steps and rankings. <ul> is for items without a meaningful order."),
Q("2. Why use <th> instead of <td> for column titles?", ["It makes the table wider", "It marks the cell as a header, which helps accessibility and default styling", "It merges cells"], 1, "<th> tells browsers and screen readers the cell describes a column or row."),
Q("3. What is the correct use of <table>?", ["Positioning the page layout", "Displaying data in rows and columns", "Creating a navigation bar"], 1, "Tables are for tabular data; layout should be done with CSS (Flexbox/Grid).")]),

L("Lesson 5: Forms and Inputs",
`<p>Forms are how users talk to a website: login, sign-up, search, contact. A form collects values and sends them to a server (or to your JavaScript).</p>
<ul>
<li><code>&lt;form&gt;</code>: the container. It groups the fields and decides what happens on submit. Without it, the Enter key and submit button do not work as expected.</li>
<li><code>&lt;label for="id"&gt;</code>: the visible text of a field. When the <code>for</code> value matches the input's <code>id</code>, clicking the label focuses the field, and screen readers read it aloud. Never skip labels.</li>
<li><code>&lt;input type="..."&gt;</code>: one tag, many behaviors. <code>email</code> checks the format, <code>password</code> hides characters, <code>number</code> accepts digits only, <code>checkbox</code> allows multiple choices, <code>radio</code> allows one choice in a group.</li>
<li><code>name</code> attribute: the key under which the value is sent. An input with no <code>name</code> is NOT submitted.</li>
<li><code>placeholder</code>: a hint inside the field. It disappears when typing, so it never replaces a label.</li>
<li><code>required</code>: the browser blocks submission until the field is filled, a free validation layer.</li>
<li><code>&lt;textarea&gt;</code>: multi-line text. <code>&lt;select&gt;</code> + <code>&lt;option&gt;</code>: dropdown list.</li>
<li><code>&lt;button type="submit"&gt;</code>: sends the form.</li>
</ul>`,
`<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="you@mail.com" required>

  <label for="msg">Message:</label>
  <textarea id="msg" name="msg"></textarea>

  <button type="submit">Send</button>
</form>`,
[Q("1. What happens when you click a <label> whose for matches an input's id?", ["The form is submitted", "The input receives focus", "The input is deleted"], 1, "The for/id link connects the label to the field, improving usability and accessibility."),
Q("2. Why does an input need a name attribute?", ["To style it with CSS", "So its value is sent with the form under that key", "To make it required"], 1, "Submitted data is sent as name=value pairs; no name means no value is sent."),
Q("3. Why is placeholder not a replacement for <label>?", ["It disappears while typing and is not reliable for accessibility", "It is not supported in HTML5", "It blocks submission"], 0, "Placeholders vanish and screen readers may ignore them, so labels remain essential.")])
);

modulesData.css.parts.push(
L("Lesson 4: Colors, Typography and Units",
`<p>Color, text and sizing decide whether a page feels professional and readable.</p>
<ul>
<li><strong>Color formats:</strong> names (<code>red</code>), HEX (<code>#3b82f6</code>), <code>rgb(59,130,246)</code>, <code>hsl()</code>. HEX is the most common; <code>rgba()</code> adds transparency, useful for overlays.</li>
<li><code>color</code> = text color. <code>background-color</code> = behind the element. Always keep strong contrast between them so text stays readable.</li>
<li><code>font-family</code>: list fallbacks (<code>Arial, sans-serif</code>) so a font still works if the first is missing.</li>
<li><code>font-size</code> and <code>font-weight</code>: size and boldness. <code>line-height: 1.6</code> adds breathing room between lines, one of the cheapest ways to improve readability.</li>
<li><code>text-align</code>: left, center, right.</li>
<li><strong>px</strong> is fixed. <strong>%</strong> follows the parent. <strong>rem</strong> follows the root font size, so users who enlarge their browser text get a proportional layout; prefer it for fonts and spacing. <strong>vh/vw</strong> follow the screen size (<code>100vh</code> = full screen height).</li>
</ul>`,
`body {
  font-family: Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #1e293b;
  background-color: #f8fafc;
}
h1 {
  font-size: 2.5rem;
  text-align: center;
  color: rgb(59, 130, 246);
}
.hero {
  height: 50vh;
  width: 80%;
  background-color: rgba(0, 0, 0, 0.5);
}`,
[Q("1. Why list several fonts in font-family?", ["To show all fonts at once", "So the next one is used if the first is unavailable", "To make text bold"], 1, "The browser tries fonts in order, and the last generic family (sans-serif) is the safety net."),
Q("2. Why is rem often better than px for font sizes?", ["It scales with the user's root font size settings", "It is faster to load", "It makes text bold"], 0, "rem respects user text-size preferences, improving accessibility."),
Q("3. What does rgba(0,0,0,0.5) give you?", ["Half-transparent black", "Pure black", "Half-size text"], 0, "The fourth value is opacity from 0 (invisible) to 1 (solid).")]),

L("Lesson 5: Position, Hover and Transitions",
`<p>These tools control WHERE elements sit and make interfaces feel alive.</p>
<ul>
<li><code>position: static</code>: the default; normal flow.</li>
<li><code>relative</code>: the element stays in flow but can be nudged with <code>top/left</code>. Its main job is becoming the reference box for absolute children.</li>
<li><code>absolute</code>: removed from the flow and placed relative to the nearest positioned parent. Perfect for badges, close buttons and tooltips. Mistake: forgetting <code>position: relative</code> on the parent, so it jumps to the page corner.</li>
<li><code>fixed</code>: stays at the same screen spot while scrolling (floating chat button, top bar). <code>sticky</code>: scrolls normally, then sticks at an edge.</li>
<li><code>:hover</code>: styles applied while the mouse is over the element, giving users feedback that it is clickable.</li>
<li><code>transition</code>: smooths the change between two states (<code>transition: background 0.3s</code>). Put it on the normal state, not on :hover, so it animates both in and out.</li>
</ul>`,
`.card { position: relative; }
.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}
.navbar {
  position: sticky;
  top: 0;
}
.btn {
  background: #3b82f6;
  transition: background 0.3s;
}
.btn:hover {
  background: #2563eb;
}`,
[Q("1. Why add position: relative to the parent of an absolute element?", ["So the child is positioned inside that parent instead of the whole page", "To hide the parent", "To make the child fixed"], 0, "An absolute child positions itself against the nearest positioned ancestor."),
Q("2. Where should the transition property be written for a smooth hover in and out?", ["Only inside :hover", "On the normal state of the element", "On the body"], 1, "Placing it on the base state animates the change both ways."),
Q("3. How does sticky differ from fixed?", ["Sticky scrolls normally until it reaches an edge, then sticks", "They are identical", "Sticky removes the element"], 0, "sticky is a hybrid; fixed is always attached to the screen.")]),

L("Lesson 6: CSS Grid",
`<p>Flexbox arranges items in one line (row OR column). <strong>Grid</strong> controls rows AND columns together, which is ideal for galleries, dashboards and full page layouts.</p>
<ul>
<li><code>display: grid</code>: turns the container into a grid; its children become grid items.</li>
<li><code>grid-template-columns</code>: defines the columns. <code>repeat(3, 1fr)</code> means three equal columns.</li>
<li><code>fr</code> (fraction): a share of the free space. <code>1fr 2fr</code> gives the second column twice the first. Unlike %, it accounts for gaps automatically.</li>
<li><code>gap</code>: spacing between rows and columns without margin hacks.</li>
<li><code>repeat(auto-fit, minmax(200px, 1fr))</code>: columns that wrap automatically by screen size, a responsive grid with NO media query.</li>
<li>Rule of thumb: Flexbox for components (navbars, buttons), Grid for page structure.</li>
</ul>`,
`.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.auto-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}`,
[Q("1. When is Grid better than Flexbox?", ["When you need rows and columns together", "When you only want to center text", "Never"], 0, "Grid is two-dimensional; Flexbox is one-dimensional."),
Q("2. What does 1fr 2fr create?", ["Two equal columns", "Two columns where the second is twice as wide", "Two 1px and 2px columns"], 1, "fr values divide the free space proportionally."),
Q("3. What is the benefit of repeat(auto-fit, minmax(200px, 1fr))?", ["Columns adapt to the screen width automatically", "It disables gap", "It fixes the grid at 200px"], 0, "The browser fits as many 200px+ columns as possible, wrapping as needed.")]),

L("Lesson 7: Responsive Design and Media Queries",
`<p>Over half of web traffic comes from phones, so one page must work on every screen size.</p>
<ul>
<li><strong>Viewport meta tag:</strong> without it, phones pretend to be wide desktops and shrink your page. Always include it in <code>&lt;head&gt;</code>.</li>
<li><code>@media (max-width: 768px) { ... }</code>: these rules apply only when the screen is 768px wide or smaller. Typical use: turn 3 columns into 1 on phones.</li>
<li><strong>Mobile-first:</strong> write styles for phones first, then use <code>@media (min-width: 768px)</code> to enhance for larger screens. Pages load lighter on phones and the CSS stays simpler.</li>
<li><code>max-width: 100%; height: auto;</code> on images stops them from overflowing their container.</li>
<li>Test by resizing the browser or using DevTools device mode (F12).</li>
</ul>`,
`img {
  max-width: 100%;
  height: auto;
}
.grid {
  display: grid;
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
[Q("1. What happens on phones without the viewport meta tag?", ["The page is rendered at desktop width and shrunk", "The page becomes faster", "Nothing changes"], 0, "Mobile browsers assume a wide layout unless told to match the device width."),
Q("2. What does mobile-first mean?", ["Base styles target phones, and larger screens are added with min-width queries", "Writing a separate mobile site", "Removing desktop support"], 0, "You start small and progressively enhance."),
Q("3. Why add max-width: 100% to images?", ["They never exceed the width of their container", "They become transparent", "They load faster"], 0, "It keeps large images from breaking small layouts.")])
);

modulesData.js.parts.push(
L("Lesson 4: Data Types, Conditions and Loops",
`<p>Programs make decisions and repeat work. These are the two superpowers of code.</p>
<ul>
<li><strong>Types:</strong> string (text), number, boolean (<code>true/false</code>), <code>null</code> (intentionally empty), <code>undefined</code> (no value yet). <code>typeof x</code> tells you which.</li>
<li><code>===</code> compares value AND type (safe). <code>==</code> converts types first, so <code>"5" == 5</code> is true, a source of bugs. Prefer <code>===</code>.</li>
<li><code>&amp;&amp;</code> (both true), <code>||</code> (at least one true), <code>!</code> (reverse).</li>
<li><code>if / else if / else</code>: run different code depending on a condition, like showing "Adult" or "Minor".</li>
<li><code>for (let i = 0; i &lt; n; i++)</code>: repeat a known number of times. Parts: start, condition, step.</li>
<li><code>while</code>: repeat until a condition becomes false. Mistake: forgetting to change the condition creates an infinite loop that freezes the page.</li>
</ul>`,
`let age = 20;
if (age >= 18 && age < 60) {
  console.log("Adult");
} else {
  console.log("Other");
}

for (let i = 1; i <= 3; i++) {
  console.log("Round " + i);
}

let n = 3;
while (n > 0) {
  console.log(n);
  n--;
}`,
[Q("1. Why is === preferred over ==?", ["It checks type too, avoiding surprising conversions", "It is shorter", "It works only with numbers"], 0, "=== never converts types, so results are predictable."),
Q("2. What causes an infinite while loop?", ["A condition that never becomes false", "Using let", "Using console.log"], 0, "If the loop body never changes the condition, it runs forever."),
Q("3. What does age >= 18 && age < 60 require?", ["Both conditions to be true", "At least one to be true", "Neither to be true"], 0, "&& needs both sides true.")]),

L("Lesson 5: Arrays and Objects",
`<p>Real apps handle groups of data: many students, many products. Arrays and objects organize them.</p>
<ul>
<li><strong>Array</strong> <code>[a, b, c]</code>: an ordered list. Counting starts at 0, so the first item is <code>arr[0]</code> and the last is <code>arr[arr.length - 1]</code>.</li>
<li><code>push(x)</code> adds to the end, <code>pop()</code> removes the last, <code>length</code> counts items.</li>
<li><code>forEach</code>: run code for every item. <code>map</code>: build a NEW array by transforming each item. <code>filter</code>: build a new array with only items that pass a test.</li>
<li><strong>Object</strong> <code>{ key: value }</code>: describes ONE thing with named properties (a student's name, score). Read with <code>student.name</code>, change with <code>student.score = 100</code>.</li>
<li>Combine them: an array of objects is the standard shape of data from servers (a list of users, products, posts).</li>
</ul>`,
`const skills = ["HTML", "CSS"];
skills.push("JS");
console.log(skills[0]);
console.log(skills.length);

const student = { name: "Sara", score: 95 };
student.score = 100;
console.log(student.name);

const scores = [50, 80, 95];
const doubled = scores.map(n => n * 2);
const high = scores.filter(n => n > 70);

const users = [{ name: "Ali" }, { name: "Mona" }];
users.forEach(u => console.log(u.name));`,
[Q("1. How do you get the last item of an array arr?", ["arr[arr.length - 1]", "arr[arr.length]", "arr.last"], 0, "Indexes start at 0, so the last index is length - 1."),
Q("2. What does filter return?", ["A new array with only the items that pass the test", "The first matching item", "The original array changed"], 0, "filter builds a new array and does not modify the original."),
Q("3. When is an object better than an array?", ["To describe one thing with named properties", "To store numbers only", "To loop faster"], 0, "Objects use keys like name and score to describe a single entity.")]),

L("Lesson 6: Selecting Elements, localStorage and fetch",
`<p>This lesson connects your code to the page, to the browser's memory, and to the internet.</p>
<ul>
<li><code>document.querySelector(".card")</code>: selects the FIRST element matching any CSS selector. <code>querySelectorAll</code> returns all matches. It is more flexible than <code>getElementById</code>.</li>
<li><code>localStorage.setItem("key", value)</code> / <code>getItem("key")</code>: saves data in the browser even after refresh (this platform saves your progress with it). Values are stored as text, so objects need <code>JSON.stringify()</code> to save and <code>JSON.parse()</code> to read back.</li>
<li><code>fetch(url)</code>: requests data from a server or API. It returns a Promise (a result that arrives later).</li>
<li><code>async / await</code>: write waiting code in a simple top-to-bottom way. <code>await</code> pauses inside an <code>async</code> function until the data arrives.</li>
<li><code>try / catch</code>: if the network fails, the error is caught instead of crashing your app, and you can show a friendly message.</li>
</ul>`,
`const title = document.querySelector(".title");

const user = { name: "Sara" };
localStorage.setItem("user", JSON.stringify(user));
const saved = JSON.parse(localStorage.getItem("user"));

async function loadData() {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Something went wrong:", err);
  }
}
loadData();`,
[Q("1. Why use JSON.stringify before saving an object in localStorage?", ["localStorage stores only text", "It makes the object faster", "It encrypts the object"], 0, "Objects must be converted to a string first, then parsed back with JSON.parse."),
Q("2. What does await do?", ["Pauses the async function until the Promise finishes", "Stops the whole browser", "Repeats the code"], 0, "It lets you write asynchronous code in a readable sequence."),
Q("3. Why wrap fetch in try / catch?", ["To handle network errors without crashing", "To make fetch faster", "To cache the data"], 0, "catch runs if the request fails, letting you show a message instead.")])
);

/* Home: rebuild lesson lists from data */
['html', 'css', 'js'].forEach(k => {
  const ul = document.querySelector('#card-' + k + ' .lesson-list');
  ul.innerHTML = modulesData[k].parts.map(p => '<li>' + p.subTitle + '</li>').join('');
});
