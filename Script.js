var x = window.matchMedia("(max-width: 600px)");

window.addEventListener("resize", (e) => {
  location.reload();
});

var HomeScreeno =
  "<h1>Welcome to my Home Page! <br> Hello my name Tousiq</h1><h2>Crafting dynamic web experiences with HTML, CSS, and JavaScript, coupled with PHP expertise and Bootstrap finesse. Let's build your digital vision together.z</h2><div class='icons' id='icons'><ul><li><h3><a href='https://github.com/tousiqkashif'><i class='fa-brands fa-github'></i></a></h3></li><li><h3><a href='https://www.linkedin.com/in/tousiq-kashif-564b92223/'><i class='fa-brands fa-linkedin'></i></a></h3></li><li><h3><a><i class='fa-brands fa-facebook'></i></a></h3></li><li><h3><a><i class='fa-brands fa-twitter'></i></a></h3></li></ul></div>";

var aboutUS =
  "<h1>About Us</h1><h2>My Expertise</h2><p>Proficient in HTML5, CSS3, and JavaScript, I specialize in front-end development, where I bring designs to life with precision and creativity. I have a knack for creating responsive designs that adapt seamlessly to various devices and screen sizes, ensuring an optimal user experience across the board.</p><h2>Projects & Experience</h2><p>From designing responsive landing pages for social media giants like Facebook and Snapchat to developing custom web applications for organizations like TLP, I've had the opportunity to work on diverse projects that have sharpened my skills and expanded my horizons. Each project is a chance for me to push boundaries, solve complex problems, and deliver solutions that make a meaningful impact.</p>";

var projects =
  "<div class='facebook'><h2>Facebook Landing page</h2><p>I have Created a Facebook Responsive Landing Page!</p><button type='button'><a href='https://github.com/tousiqkashif/-facebook-signup-page-Html5-Css3.git'>Check Out GitHub</a></button></div> <div class='snapchat'><h2>Snap chat Landing page</h2><p>My name is tousiq please fnd attached my cv.</p><button type='button'><a href='#'>Check Out GitHub</a></button></div> <div class='Snaplenses'><h2>Snap Chat lenses Page  </h2><p>My name is tousiq please fnd attached my cv.</p><button type='button'><a href='#'>Check Out GitHub</a></button></div>";

var skill =
  "<h1>Skills</h1><h3>HTML</h3><progress value='70' max='100'>CSS3</progress><h3>CSS3</h3><progress value='80' max='100'>Vanilla JavaScript</progress><h3>Javascript</h3><progress value='70' max='100'>HTML</progress><h3>Bootstrap 5</h3><progress value='40' max='100'>Bootstrap</progress><h3>PHP</h3><progress value='40' max='100'>HTML</progress>";

var download =
  "<h1 align='center'> Download My Resume </h1><button type='button'><a href='files/Front-End.pdf'>Download My Resume / CV</a></button>";

function HomeScreen() {
  if (window.innerWidth < 600) {
    document.getElementById("content").innerHTML = HomeScreeno;
    document.getElementById("men").style.display = "none";
    document.getElementById("show").style.display = "block";
    document.getElementById("cut").style.display = "none";
    document.getElementById("profile").style.display = "block";
    document.getElementById("name").style.display = "block";
  } else {
    document.getElementById("cut").style.display = "none";
    document.getElementById("content").innerHTML = HomeScreeno;
  }
}

function aboutUs() {
  document.getElementById("content").innerHTML = aboutUS;
  if (window.innerWidth < 600) {
    document.getElementById("content").innerHTML = aboutUS;
    document.getElementById("men").style.display = "none";
    document.getElementById("show").style.display = "block";
    document.getElementById("cut").style.display = "none";
    document.getElementById("profile").style.display = "block";
    document.getElementById("name").style.display = "block";
  }
}

function project() {
  document.getElementById("content").innerHTML = projects;
  if (window.innerWidth < 600) {
    document.getElementById("content").innerHTML = projects;
    document.getElementById("men").style.display = "none";
    document.getElementById("show").style.display = "block";
    document.getElementById("cut").style.display = "none";
    document.getElementById("profile").style.display = "block";
    document.getElementById("name").style.display = "block";
  }
}

function Skillo() {
  document.getElementById("content").innerHTML = skill;

  if (window.innerWidth < 600) {
    document.getElementById("content").innerHTML = skill;
    document.getElementById("men").style.display = "none";
    document.getElementById("show").style.display = "block";
    document.getElementById("cut").style.display = "none";
    document.getElementById("profile").style.display = "block";
    document.getElementById("name").style.display = "block";
  }
}

function menu() {}

document.getElementById("show").addEventListener("click", (e) => {
  document.getElementById("men").style.display = "block";
  document.getElementById("show").style.display = "none";
  document.getElementById("cut").style.display = "block";
  document.getElementById("profile").style.display = "none";
  document.getElementById("name").style.display = "none";
});

function dawn() {
  document.getElementById("content").innerHTML = download;
  if (window.innerWidth < 600) {
    document.getElementById("content").innerHTML = download;
    document.getElementById("men").style.display = "none";
    document.getElementById("show").style.display = "block";
    document.getElementById("cut").style.display = "none";
    document.getElementById("profile").style.display = "block";
    document.getElementById("name").style.display = "block";
  }
}

function cut() {
  document.getElementById("men").style.display = "none";
  document.getElementById("cut").style.display = "none";
  document.getElementById("show").style.display = "block";
  document.getElementById("profile").style.display = "block";
  document.getElementById("name").style.display = "block";
}

var x = window.matchMedia("(max-width:600px)");

if (x.matches) {
  function AboutUs() {
    document.getElementById("men").style.display = "none";
    document.getElementById("show").style.display = "block";
    document.getElementById("cut").style.display = "none";
    document.getElementById("profile").style.display = "block";
    document.getElementById("name").style.display = "block";
  }

  // function AboutUs(){
  //     document.getElementById("men").style.display="none";
  //     document.getElementById("show").style.display="block";
  //     document.getElementById("cut").style.display="none";
  //     document.getElementById("profile").style.display="block";
  //     document.getElementById("name").style.display="block";
  // }

  // function project(){
  //     document.getElementById("men").style.display="none";
  //     document.getElementById("show").style.display="block";
  //     document.getElementById("cut").style.display="none";
  //     document.getElementById("profile").style.display="block";
  //     document.getElementById("name").style.display="block";
  // }

  // function Skillo(){
  //     document.getElementById("men").style.display="none";
  //     document.getElementById("show").style.display="block";
  //     document.getElementById("cut").style.display="none";
  //     document.getElementById("profile").style.display="block";
  //     document.getElementById("name").style.display="block";
  // }

  // function dawn(){
  //     document.getElementById("men").style.display="none";
  //     document.getElementById("show").style.display="block";
  //     document.getElementById("cut").style.display="none";
  //     document.getElementById("profile").style.display="block";
  //     document.getElementById("name").style.display="block";
  // }
}
