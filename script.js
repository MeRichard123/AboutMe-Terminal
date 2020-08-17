var app = document.getElementById("app");
const CodePen =
  '<li><a href="https://codepen.io/dashboard/" class="underline">CodePen</a> <br /></li>';
const Instagram =
  '<li><a href="https://www.instagram.com/me_richard1/" class="underline">Instagram</a> <br /></li>';
const GitHub =
  '<li><a href="https://github.com/MeRichard123" class="underline">GitHub</a> <i class="fas fa-arrow-left"></i> MY PROJECTS <br /></li>';

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  autoStart: true,
  cursor: "█",
  strings: ["Hello", "My Name is Richard Coric", "A Front-End Developer"]
});

typewriter
  .deleteAll(1)
  .pauseFor(50)
  .deleteAll(1)
  .typeString("I am a Web-Dev Student <br />")
  .pauseFor(300)
  //.deleteAll(1)
  .typeString("Find me Online: <br />")
  .pauseFor(300)
  .typeString(`<ol>${GitHub} ${CodePen} ${Instagram}</ol>`)
  .pauseFor(300)
  .typeString("See some of my projects here:<br />")
  .typeString(
    '<a href="https://github.com/MeRichard123" target=_blank class="underline">Click Me</a> <br />'
  )
  .pauseFor(2000)
  .deleteChars(39)

  .typeString("<br /> Loading Data... <br /><br />")
  .typeString("████████████████████████████████████ <br />")
  .typeString("<br />LOADED SUCCESSFULLY...<br /> <br />")
  .pauseFor(300)
  .changeDelay(200)
  .typeString(
    "My Skill Set Includes:<ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>ReactJS</li><li>Python Django</li>"
  )
  .changeDelay(100)
  .pauseFor(300)
  .typeString("A Bit About Me: <br /><br />")
  .typeString("I Enjoy making Websites which go straight to the point.<br /> ")
  .typeString("Are Responsive and intuitive, <br />")
  .typeString("Use a range of Different Methods to experiment <br />")
  .typeString(
    'And have some fun while im at it <i class="far fa-smile-beam"></i>'
  )
  .typeString("<br /> Thankyou for Reading")
  .pauseFor(300)
  .deleteChars(20);

// window.addEventListener("keypress", e => {
//   if (e.keyCode == 13) {
//     typewriter.start();
//   }
// });

