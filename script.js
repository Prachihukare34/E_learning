document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const levelFilter = document.getElementById('levelFilter');
  const courseCards = document.querySelectorAll('.course-card');

  function filterCourses() {
    const search = searchInput.value.toLowerCase();
    const level = levelFilter.value;

    courseCards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const cardLevel = card.getAttribute('data-level');

      const matchesSearch = title.includes(search);
      const matchesLevel = (level === 'all' || cardLevel === level);

      card.style.display = (matchesSearch && matchesLevel) ? 'block' : 'none';
    });
  }

  searchInput.addEventListener('input', filterCourses);
  levelFilter.addEventListener('change', filterCourses);
});
