function showSection(sectionId){
  const hideSection = document.querySelectorAll('.section1');
  hideSection.forEach(section => section.style.display = "none");

  const activeSection = document.getElementById(sectionId)
  if(activeSection){
    activeSection.style.display= "block";
  }
}

window.onload = function() {
  showSection('home'); // Replace 'home' with the actual ID of your home section
};