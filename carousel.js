let index = 0;
const technologies = document.querySelectorAll('.tech');

function showNextTechnology() {
  technologies.forEach((tech, i) => {
    if (i === index % technologies.length) {
      tech.style.display = 'block';
    } else {
      tech.style.display = 'none';
    }
  });
  index++;
}
=
showNextTechnology();
setInterval(showNextTechnology, 3000);
