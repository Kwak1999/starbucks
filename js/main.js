// 사용할 요소 찾기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// search 안에 구성된 디자인을
// 클릭했을 때 발생할 클릭이벤트 만들기
searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

// focus가 되었을 때
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

// focus가 해제 되었을 때
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});