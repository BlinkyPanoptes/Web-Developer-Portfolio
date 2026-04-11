function showSkills(category) {
    // 1. Remove red color from all list items
    document.querySelectorAll('.skill-item').forEach(item => {
        item.classList.remove('active-skill');
    });

    // 2. Hide all skill columns
    document.querySelectorAll('.skill-column').forEach(column => {
        column.classList.remove('active-column');
    });

    // 3. Add red color to clicked item
    // We target the event's source or a specific ID
    if(category === 'frontend') {
        document.getElementById('btn-frontend').classList.add('active-skill');
        document.getElementById('frontend').classList.add('active-column');
    } else if(category === 'backend') {
        document.getElementById('btn-backend').classList.add('active-skill');
        document.getElementById('backend').classList.add('active-column');
    }
    // Add else-if for design and database similarly...
}