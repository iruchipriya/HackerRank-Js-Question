const tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const tabContent = document.querySelectorAll('.content');

    tabContent.forEach((content) => {
      content.style.display = 'none';
    });

    const contentId = tab.dataset.tab;
    const showcontent = document.getElementById(contentId);

    if (showcontent) {
      showcontent.style.display = 'block';
    }
  });
});
