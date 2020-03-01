db.collection('test2').add({
      rooms: [
        {
          id: 'room01',
          thumbnail: null,
          name: '탈출',
          escape: 0,
          total: 0,
          limit: 30,
          steps: [
            {
              image: null,
              text: '눈을 뜨니 낯선 공간에 있는 나를 발견했다. 물소리가 들리고.. 비상 싸이렌 소리가...응?',
              input: []
            },
            {
              image: null,
              text: `시간이 얼마나 흐른걸까..? 산소부족 경고다. 예비 산소를 충전해야한다. 패스워드는?`,
              input: [
                {
                  type: 'password',
                  answer: 180
                }
              ]
            },
            {
              image: null,
              text: `여긴 도대체 어디지? 잠금을 풀어 구조요청을 하자!`,
              input: [
                {
                  type: 'password',
                  answer: 9110426
                }
              ]
            },
            {
              image: null,
              text: `불이 들어온다! 작동한다! 몇 번으로 걸어야 하지?`,
              input: [
                {
                  type: 'password',
                  answer: 1019
                }
              ]
            },
            {
              image: null,
              text: `Drrrrr… Press your extention number. 내선번호?`,
              input: [
                {
                  type: 'password',
                  answer: 1972
                }
              ]
            },
            {
              image: null,
              text: `연결됐다! @#!@$%^^&#$##…please 엥!?현재 좌표를 알려달라고 여기에 힌트가 있나?`,
              input: [
                {
                  type: 'password',
                  answer: 'OKY3'
                }
              ]
            },
            {
              image: null,
              text: `연결됐다! @#!@$%^^&#$##…please 엥!?현재 좌표를 알려달라고 여기에 힌트가 있나?`,
              input: [
                {
                  type: 'password',
                  answer: 'OKY3'
                }
              ]
            },
          ],
          successView: {
            text: '카톡 친구 추가하고 다음 미션을 받아보자',
            buttons: [
              {
                name: 'CH',
                url: null
              },
              {
                name: '이번주여기',
                url: 'http://pf.kakao.com/_EHpxmT/chat'
              }
            ]
          },
          failView: {
            text: '카톡 친구 추가하고 다음 미션을 받아보자',
            buttons: [
              {
                name: 'CH',
                url: null
              },
              {
                name: '이번주여기',
                url: 'http://pf.kakao.com/_EHpxmT/chat'
              }
            ]
          }
        }
      ],
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }