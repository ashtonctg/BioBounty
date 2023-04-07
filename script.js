// Function to show or hide sections based on the section ID
function toggleSectionVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
  }
  
  // Initialize sections
  document.addEventListener('DOMContentLoaded', function () {
    const sections = ['challenge-submission', 'participant-registration', 'genetic-compiler', 'simulation-results'];
    sections.forEach((sectionId) => {
      toggleSectionVisibility(sectionId);
    });
  });
  