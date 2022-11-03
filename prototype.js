const first = {
  one : 1,
  two : 2,
  makeString: function() {
    return this.one + ' ' + this.two;
  }
}
// 객체 리터럴 first는 숫자 값이 담긴 두 개의 property와 하나의 메서드(함수)를 가지고 있다.
console.log(first.makeString());
console.log(typeof first.makeString());

const second = {
  one : 3,
  two : 4,
  makeString: function() {
    return this.one + ' ' + this.two;
  }
}
// 객체 리터럴 second도 동일하게 같은 property를 가지고 있으나 숫자값이 다르다.
// '같은 구조'이지만 값이 다르기 때문에 구분되어야 하지만
// 작성된 메서드 makeString()는 first와 second가 완전히 '동일'하다.
// 중복이 발생한 셈
console.log(second.makeString());
console.log(typeof second.makeString());

const third = {
  one : 5,
  two : 6
}
// 객체 리터럴 third는 값이 다른 property의 구조는 first, second와 동일한 패턴이다.
// 하지만 메서드가 빠져있다.

third.prototype.makeString = function() {
  return this.one + ' ' + this.two;
}
// 메서드를 객체 외부에서 선언해준 형태를 확인 할 수 있다.
// 새로운 문법인 prototype이 체인(연결)되어있는 것을 주목 할 것
// 결과적으로 아래의 호출은 first와 second의 결과와 동일하지만
// 동적으로 처리되었기 때문에 "필요하지 않으면" 메서드를 사용하지 않아도 된다.
// 즉 중복코드를 줄이고 심지어 모듈로도 변형이 가능하다.
console.log(third.makeString());
// 객체리터럴 한 두 개가 아닌 인스턴스 수 만개가 생성된다면, 데이터 양과 복잡도가 사람의 인지 수준을 가뿐하게 넘어가기 때문에 개발 작업의 볼륨이 커질수록 도입해야 할 '메서드 동적 선언'이 된다.
// 위의 예제는 함수 리터럴 방식으로 재활용은 생각하지 않은 prototype 작성방식이지만,
// 기명함수 선언방식 (함수 작성 기본형)을 활용한다면, 곧바로 호출하는 방식으로 할당 할 수 있기 때문에 진가를 발휘한다.
// 생성자 함수의 class extends 개념과 상당히 비슷하지만 약간 방향성이 다르다.
// 동일하게 사용 할 수도 있고, 'prototype' 이라는 단어 자체가 '동적'이라는 뜻을 뉘앙스 상으로 겸하기 때문에 개발팀 내에서 약속을 하여 구분짓고 사용하기도 한다.