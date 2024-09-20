// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
    
    // Select the skills section
    const skillsSection = document.querySelector('.skills') as HTMLElement;

    // Add click event listener to the button
    toggleSkillsButton.addEventListener('click', () => {
        if (skillsSection) {
            skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
        }
    });
});
