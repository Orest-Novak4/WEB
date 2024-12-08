document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const jobList = document.getElementById("jobList");
    const jobs = document.querySelectorAll(".job");

    function filterJobs() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        jobs.forEach(job => {
            const jobTitle = job.textContent.toLowerCase();
            const jobCategory = job.getAttribute("data-category");

            if (
                (jobTitle.includes(searchTerm) || !searchTerm) &&
                (jobCategory === selectedCategory || !selectedCategory)
            ) {
                job.style.display = "block";
            } else {
                job.style.display = "none";
            }
        });
    }

    searchInput.addEventListener("input", filterJobs);
    categoryFilter.addEventListener("change", filterJobs);
});
