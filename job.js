// Sample job data
const jobs = [
    { title: 'Frontend Developer', location: 'Chennai', type: 'Full-time', salary: '80,000 - 1,00,000' },
    { title: 'Backend Developer', location: 'Hyderbad', type: 'Full-time', salary: '90,000 - 1,10,000' },
    { title: 'UI/UX Designer', location: 'vizag', type: 'Contract', salary: '70,000 - 90,000' },
    { title: 'Data Scientist', location: 'Australia', type: 'Full-time', salary: '100,000 - 120,000' },
    { title: 'Software Engineer', location: 'kannada', type: 'Part-time', salary: '60,000 - 80,000' },
];

// Function to display job listings
function displayJobs() {
    const jobListings = document.getElementById('jobListings');
    jobListings.innerHTML = ''; // Clear previous listings

    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job');
        jobElement.innerHTML = `
            <h2>${job.title}</h2>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Type:</strong> ${job.type}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
        `;
        jobListings.appendChild(jobElement);
    });
}

// Function to search jobs
function searchJobs() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchInput) ||
        job.location.toLowerCase().includes(searchInput) ||
        job.type.toLowerCase().includes(searchInput) ||
        job.salary.toLowerCase().includes(searchInput)
    );
    displayFilteredJobs(filteredJobs);
}

// Function to display filtered job listings
function displayFilteredJobs(filteredJobs) {
    const jobListings = document.getElementById('jobListings');
    jobListings.innerHTML = ''; // Clear previous listings

    filteredJobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job');
        jobElement.innerHTML = `
            <h2>${job.title}</h2>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Type:</strong> ${job.type}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
        `;
        jobListings.appendChild(jobElement);
    });
}

// Initial display of jobs when the page loads
window.onload = displayJobs;