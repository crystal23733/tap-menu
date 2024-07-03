const hash = window.location.hash;
let activeTab: string = hash; // activeTab를 string 타입으로 선언하고 초기화

// hash가 null이거나 해당 요소가 존재하지 않는 경우 첫 번째 탭의 href를 가져옴
if (!activeTab) {
  const firstTabHref = document
    .querySelector('.tab-menu li:first-child a')!
    .getAttribute('href');
  activeTab = firstTabHref || ''; // null 체크 후 할당
}

activateTab(activeTab);

const tabLinks = document.querySelectorAll('.tab-menu a');
tabLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const clickedTab = link.getAttribute('href')!;
    activateTab(clickedTab);
    window.location.hash = clickedTab;
  });
});

function activateTab(tabId: string) {
  // 타입 단언을 사용하여 null 체크 후 적절히 처리
  const tabElement = document.querySelector(tabId) as HTMLElement;
  if (tabElement) {
    document.querySelectorAll('.tab-content').forEach((tabContent) => {
      tabContent.classList.remove('active');
    });
    tabElement.classList.add('active');
  }
}
