function downloadResume() {
    alert('Downloading resume...');
    window.location.href = 'assets/resume.pdf';
}

document.querySelectorAll('.quickAccess').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = 'yellow';
    });

    link.addEventListener('mouseleave', () => {
        link.style.color = '#e1e7ec';
    });
});

// Smooth scrolling to sections
document.querySelectorAll('.quickAccess').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});