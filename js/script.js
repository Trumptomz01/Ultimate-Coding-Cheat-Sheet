
// document.body.style.backgroundColor ="white"
// const section = document.querySelector("section")
// section.style.backgroundColor="white";
const quickSnippets = [
  {
    icon: "fa-brands fa-html5",
    programmingLanguage: "HTML",
    topic: "How to create a form?",
    link:"/app/html.html#form-syntax"
  },
  {
    icon: "fa-brands fa-css3",
    programmingLanguage: "CSS",
    topic: "How to center a div?",
    link:"/app/css.html#center-element"
  },
  {
    icon: "fa-brands fa-js",
    programmingLanguage: "JavaScript",
    topic: "How to create a function?",
    link:"app/javaScript.html#js-function-declare"

  },
  {
    icon: "fa-brands fa-python",
    programmingLanguage: "Python",
    topic: "How to create a list?",
    link:"/app/python.html#create-list"
  },
  {
    icon: "fa-brands fa-java",
    programmingLanguage: "Java",
    topic: "How to create a class?",
    link:"/app/java.html#create-class"

  },
];
const snippetContents = [
  {
    name: "HTML",
    description: "HTML is the structure of web pages.",
    exampleHeading: "",
    snippetLink: "/app/html.html",
    codeSnippet: `
    &lt;!DOCTYPE html&gt;
    &lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
       &lt;meta charset=&quot;UTF-8&quot; /&gt;
       &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
       &lt;title&gt;Page Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
 
       &lt;!-- Content goes here --&gt;
 
    &lt;/body&gt;
    &lt;/html&gt;
   `,
    linkToLearn: "https://www.w3schools.com/html/default.asp",
    Reference: "https://www.w3schools.com/tags/",
  },

  {
    name: "CSS",
    description: "CSS styles the look of web pages.",
    exampleHeading: "Centering a Div",
    snippetLink: "/app/css.html",
    codeSnippet: `
    /* common way*/
    .container {
       display: flex;
       justify-content: center; /* Horizontal */
       align-items: center;     /* Vertical */
       height: 100vh;           /* Full viewport height */
    }
    `,
    linkToLearn: "https://web.dev/learn/css",
    Reference: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  
  {
    name: "JavaScript",
    description: "JavaScript adds interactivity to websites.",
    exampleHeading: "",
    snippetLink: "/app/javaScript.html",
    codeSnippet: `
    <script>
       function greet(name) {
          console.log("Hello, " + name + "!");
          document.getElementById("output").textContent = "Hello, " + name + "!";
       }
 
       document.getElementById("btn").addEventListener("click", function () {
          const name = document.getElementById("nameInput").value || "World";
          greet(name);
       });
    </script>
    `,
    linkToLearn: "https://javascript.info/",
    Reference: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
  },
  {
    name: "PYTHON",
    description: "Python is a simple, powerful programming language.",
    exampleHeading: "",
    snippetLink: "/app/python.html",
    codeSnippet: `
  def greet_user():
    name= input('enter your name? : ')
    name_output = name.replace(' ','')
    print(f"Hello, {name_output}!")
    print(f"Your name has {len(name_output)} characters.")
  greet_user()
    `,
    linkToLearn: "https://www.learnpython.org/",
    Reference: "https://docs.python.org/3/reference/index.html",
  },
  {
    name: "JAVA",
    description:
      "Java is a versatile language used in apps and enterprise software.",
    exampleHeading: "",
    snippetLink: "/app/java.html",
    codeSnippet: `
    import java.util.Scanner;
    public class GreetUser {
       public static void main(String[] args) {
          System.out.print("Name? ");
          String name = new Scanner(System.in).nextLine().trim();
          name = name.isEmpty() ? "World" : name;
          System.out.printf("Hello, %s!%nLength: %d%n", name, name.length());
       }
    }
    `,
    linkToLearn: "https://www.w3schools.com/java/",
    Reference: "https://www.w3schools.com/java/java_ref_reference.asp",
  },
];
const communityHighlights = [
  {
    icon: "fas fa-code-branch",
    heading: "Collaborate",
    paragraph: "Work on open-source projects with community members",
  },
  {
    icon: "fa-bolt",
    heading: "Learn Fast",
    paragraph: "Weekly coding challenges to sharpen your skills",
  },
  {
    icon: "fa-user-friends",
    heading: "Network",
    paragraph: "Connect with developers at all experience levels",
  },
];

const cardContainer = document.querySelector("#card-container");
let languageCard = "";
quickSnippets.map((card) => {
  languageCard += `
      <div class="card">
         <div class="program-icon"><i class="${card.icon}"></i></div>
         <h2>${card.programmingLanguage}</h2>
         <p>${card.topic}</p>
         <button>
            <a href="${card.link}"><i class="fa-solid fa-code"></i>View Code</a>
         </button>
      </div>
   `;
}).join("");
cardContainer.innerHTML = languageCard;

const snippetContainer = document.querySelector("#snippets-section");
let snippetCards = "";
snippetContents.map((cards) => {
  snippetCards += `
      <div class="snippet-div">
         <div class="snippets-section-content">
            <h1>${cards.name}</h1>
            <p>${cards.description}</p>
            <div class="links">
               <a href="${cards.snippetLink}">View Cheat Sheet <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
               <a href="${cards.linkToLearn}">Learn ${cards.name}</a>
               <a href="${cards.Reference}">${cards.name} Reference</a>   
            </div>
         </div>
         <div class="snippets-code-block">
            <h3>${cards.name} Example: ${cards.exampleHeading}</h3>
            <pre><code class="language-${cards.name}">
                  ${cards.codeSnippet}</code>
            </pre>
         </div>
      </div>
   `;
}).join("");
snippetContainer.innerHTML = snippetCards;

const HighlightContainer = document.querySelector("#community-highlights");
let highlight = "";
communityHighlights.map((boxes) => {
  highlight += `
      <div class="highlight-card">
         <div class="icon-circle">
            <i class="fas ${boxes.icon}"></i>
         </div>
         <h2>${boxes.heading}</h2>
         <br>
         <p>${boxes.paragraph}</p>
      </div>
   `;
}).join("");
HighlightContainer.innerHTML = highlight;

// footer section
const footerLinks = [
  {
    type: "Cheats",
    head: "Our Cheats",
    links: {
      html: "/app/html.html",
      css: "/app/css.html",
      javascript: "app/javaScript.html",
      python: "/app/python.html",
      java: "/app/java.html"
    }
  },
  {
    type: "tutorials",
    head: "Top Tutorials",
    links: {
      html: "https://w3schools.com/html/default.asp",
      css: "https://w3schools.com/css/default.asp",
      javascript: "https://w3schools.com/js/default.asp",
      python: "https://w3schools.com/python/default.asp",
      java: "https://w3schools.com/java/default.asp"
    }
  },
  {
    type: "Guides",
    head: "Top Guides",
    links: {
      html: "https://developer.mozilla.org/en-US/docs/Web/HTML#guides",
      css: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides",
      javascript:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
      python: "https://pythonguides.com/",
      java: "https://www.javaguides.net/"
    }
  },
  {
    type: "References",
    head: "Top References",
    links: {
      html: "https://w3schools.com/tags/default.asp",
      css: "https://w3schools.com/cssref/default.asp",
      javascript: "https://w3schools.com/jsref/default.asp",
      python: "https://w3schools.com/python/python_reference.asp",
      java: "https://www.w3schools.com/java/java_ref_reference.asp"
    }
  }
];
 
const footerContent = document.querySelector("#footer-content");
const footerChild = footerLinks.map((section) =>`
   <div class="footer-child">
     <h2>${section.head}</h2>
     <ul>
       <li><a target="_blank" rel="noopener noreferrer" href="${section.links.html}">HTML ${section.type}</a></li>
       <li><a target="_blank" rel="noopener noreferrer" href="${section.links.css}">CSS ${section.type}</a></li>
       <li><a target="_blank" rel="noopener noreferrer" href="${section.links.javascript}">JavaScript ${section.type}</a></li>
       <li><a target="_blank" rel="noopener noreferrer" href="${section.links.python}">Python ${section.type}</a></li>
       <li><a target="_blank" rel="noopener noreferrer" href="${section.links.java}">Java ${section.type}</a></li>
     </ul>
   </div>
`).join("");
if (footerContent){
  footerContent.innerHTML = footerChild;
}

const yearElement = document.querySelector("#live-year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}




