document.getElementById('searchBtn').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    document.getElementById('results').innerHTML = 
        `<p>نتایج جستجو برای: ${query}</p><p>این بخش در حال توسعه است...</p>`;
});
