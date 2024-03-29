/*
 'ISFJ' 0 세네갈앵무
 'INFP' 1 왕관앵무
 'INFJ' 2 퀘이커앵무
 'ESTP' 3 갈라코카투
 'ENFJ' 4 금강앵무
 'ESFJ' 5 한스마카우
 'INTP' 6 코카투
 'ESFP' 7 검은머리카이큐
 'ENFP' 8 코뉴어앵무
 'ESTJ' 9 유리앵무
 'ISFP' 10 뉴기니아
 'ENTJ' 11 아마존앵무 
 'ISTJ' 12 사랑앵무
 'ISTP' 13 목도리앵무
 'ENTP' 14 오색앵무
 'INTJ' 15 회색앵무
*/    



const qnaList = [
  {
    q: '새로운 곳으로<br>이사하게 된 당신은?',
    a: [
      { answer: '기웃기웃 새로운 환경에 빨리 적응한다.', type: [4, 8, 11, 14, 5, 7, 9, 3] },
      { answer: '차근차근 이웃이 말을 걸어주길 바란다.', type: [2, 1, 15, 6, 0, 10, 12, 13] },
    ]
  },
  {
    q: '월요일 아침회의 중<br>적막한 정적이 흐른다..',
    a: [
      { answer: '나부터 보고하고 빨리 끝내야지', type: [1, 5, 4, 3, 9, 7, 8, 14, 11] },
      { answer: '누가 먼저 보고하겠지...', type: [13, 10, 6, 2, 15, 12, 0] },
    ]
  },
  {
    q: '드디어 코로나가 끝나고<br>해외여행을 준비하는 당신은?',
    a: [
      { answer: '유명한 장소를 딱딱 정해서<br>빠릿빠릿 움직인다', type: [4, 11, 5, 9, 2, 15, 0, 12] },
      { answer: '발 닿는 대로 가는 게 여행이지', type: [8, 14, 7, 3, 1, 6, 10, 13] },
    ]
  },
  {
    q: '지방 근무를 택하면<br>연봉을 더 받을 수 있는 상황이다.',
    a: [
      { answer: '가족과 멀어지는 건 좀 그래..그냥 거절하자', type: [2, 0, 15, 7, 9, 11, 12, 4, 5, 0, 6 ] },
      { answer: '기회는 잡아야지! 연봉을 더 받자!', type: [8, 1, 7, 3, 13, 14 ] },
    ]
  },
  {
    q: '직장에서 새로 들어온 신입이<br>똑같은 걸 또 물어본다',
    a: [
      { answer: '이번이 마지막으로 알려주는거야. 알려준다.', type: [12, 9, 5, 1, 8, 2, 4, 0, 10, 6 ] },
      { answer: '응 돌아가', type: [11, 15, 14, 13, 7, 3]},
    ]
  },

  {
    q: '어떤 칭찬을 들을 때<br>더 기분이 좋나요?',
    a: [
      { answer: 'ㅇㅇ씨, 진짜 일 잘한다', type: [4, 8, 11, 14, 5, 7, 9, 3 ] },
      { answer: 'ㅇㅇ씨는 정말 우리 팀에 필요한 사람이야', type: [2, 1, 15, 6, 0, 10, 12, 13 ] },
    ]
  },
  {
    q: '다이어트 결심 1일차.<br>집 앞 치킨집에서 50%할인을 한다',
    a: [
      { answer: '다이어트는 내일부터.<br>미안하지만 먹어야겠다.', type: [14, 8, 3, 7, 6, 1, 13, 10] },
      { answer: '어차피 다 아는 맛이다. 꾹 참아보자.', type: [11, 12, 0, 9, 15, 2, 4, 5] },
    ]
  },
  {
    q: '야근하면서 프로젝트를 했지만<br>결과가 별로인 상황',
    a: [
      { answer: '다음에 더 잘하면 되지! 괜찮아!', type: [4, 8, 5, 7, 2, 1, 0, 10 ] },
      { answer: '부들부들.. 열심히 했는데 억울해!', type: [11, 14, 9, 3, 15, 6, 12, 13 ] },
    ]
  },
  {
    q: '친구가 생일이라고 케이크를 만들어줬다',
    a: [
      { answer: '와 대박 어떻게 만들었어 짱이다!', type: [11, 14, 9, 3, 15, 6, 12, 13 ] },
      { answer: '헐 직접 만들어준거라니 너무 감동이야.', type: [4, 8, 5, 7, 2, 1, 0, 10 ] },
    ]
  },
  {
    q: '오랜만에 만난 친구모임에서 나는 먼저',
    a: [
      { answer: '"나는 그동안 ~ 했어" 근황을 이야기한다.', type: [4, 8, 11, 14, 5, 7, 9, 3] },
      { answer: '"와 그랬구나~" 리액션한다.', type: [2, 1, 15, 6, 0, 10, 12, 13 ] },
    ]
  },
  {
    q: '갑자기 회사에서 아랍어를 배워오라고 한다',
    a: [
      { answer: '아랍어라니 너무 어려울 것 같아..', type: [5, 7, 9, 3, 0, 10, 12, 13 ] },
      { answer: '아랍어라니 흥미진진한데..?', type: [4, 8, 11, 14, 2, 1, 15, 6] },
    ]
  },
  {
    q: '자격증 시험 D-7',
    a: [
      { answer: '1일차엔 이거하고 ~<br> 7일차엔 이렇게 공부해야지', type: [4, 11, 5, 9, 2, 15, 0, 12 ] },
      { answer: '3일만에 합격했다는 후기도 있는데..<br>7일이면 뭐 많이 남았네', type: [8, 14, 7, 3, 1, 6, 10, 13] },
    ]
  }
]

const infoList = [
  {
    name: ' ',
    desc: ' '

  },
  {
    name: ' ',
    desc: ' '
  },
  {
    name: ' ',
    desc: ' '
  },
  {
    name: ' ',
    desc: ' '
  },
  {
    name: ' ',
    desc: ' '
  },
  {
    name: ' ',
    desc: ' '
  },
  {
    name: ' ',
    desc: ' '
  },
  {
    name: ' ',
    desc: ' '
  },
  {
    name: ' ',
    desc: ' '
  },
  {
    name: ' ',
    desc: ' '
  },
  {
    name: ' ',
    desc: ' '
  },
  {
    name: ' ',
    desc: ' '
  },
  {
    name: ' ',
    desc: ' '
  },
  {
    name: ' ',
    desc: ' '
  },
  {
    name: ' ',
    desc: ' ',
  },
  {
    name: ' ',
    desc: ' '
  }
]
