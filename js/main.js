// 사용할 요소 찾기
const searchEl = document.querySelector('.search'); // 검색 요소를 선택
const searchInputEl = searchEl.querySelector('input'); // 검색 입력 필드를 선택

// search 요소를 클릭했을 때 발생할 클릭 이벤트 만들기
searchEl.addEventListener('click', function () {
    searchInputEl.focus(); // 검색 입력 필드에 포커스를 줌
});

// 포커스가 되었을 때의 이벤트 처리
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused'); // 검색 요소에 'focused' 클래스 추가
    searchInputEl.setAttribute('placeholder', '통합검색'); // 입력 필드에 플레이스홀더 설정
});

// 포커스가 해제되었을 때의 이벤트 처리
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused'); // 검색 요소에서 'focused' 클래스 제거
    searchInputEl.setAttribute('placeholder', ''); // 입력 필드의 플레이스홀더 제거
});

// document는 html 자체다!
const badgeEl = document.querySelector('header .badges');

// window 하나의 창! 보고있는 화면
window.addEventListener('scroll', _.throttle(function (){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        // 배지 숨기기
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'

        });
    }else {
        // 배지 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));

// _.throttle(함수, 시간);