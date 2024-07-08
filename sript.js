document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let searchText = document.getElementById('searchInput').value.trim().toLowerCase(); 


    let headings = document.querySelectorAll('h2');

    headings.forEach(function(heading) {
        if (!heading.id) {
            heading.id = heading.textContent.trim().toLowerCase().replace(/\W+/g, '-'); 
        }
    });


    let found = false;

    headings.forEach(function(heading) {
        if (heading.textContent.trim().toLowerCase().includes(searchText)) {

            window.scrollTo({
                top: heading.offsetTop - 50, 
                behavior: 'smooth'
            });
            found = true;
        }
    });

    if (!found) {
        alert('No matching section found.');
    }
});
