document.addEventListener('DOMContentLoaded', () => {
    // 1. Calculate Age
    const birthDateStr = document.getElementById('birthDate').textContent;
    const ageDisplay = document.getElementById('ageDisplay');
    
    function calculateAge(dateString) {
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    if (birthDateStr) {
        const age = calculateAge(birthDateStr);
        ageDisplay.textContent = `${age} Tahun`;
    }

    // 2. Dynamic Footer Year
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    // 3. Simple Interactivity: Tilt Effect for Cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Very subtle tilt
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -2; // Max 2deg rotation
            const rotateY = ((x - centerX) / centerX) * 2;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
             card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
});
