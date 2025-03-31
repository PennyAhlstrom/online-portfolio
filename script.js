// Function to display a selected project and hide the others
function showProject(projectId) {
    // Hide all projects first
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.style.display = 'none';
    });

    // Show the selected project
    const selectedProject = document.getElementById(projectId);
    if (selectedProject) {
        selectedProject.style.display = 'block';
    }
}
