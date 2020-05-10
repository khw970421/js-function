# js-function js에대한 함수들을 나열해 필요에 따라 바로보고 쓸수있게 사용 (출처는 거의 MDN web docs)

추가적으로 intellj와 github 연결방법을 여기다가 써놓는다.

1. 내 컴퓨터 폴더와 github연결부터 시도한다. 
  github에서 repository만들고 그걸 복사한후 원하는 위치의 폴더 (지금은 intellj와 관련된 위치에서)에서 git bash를 통해
  초기설정을 위해 git config --global user.name "khw970421"
                 git config --global user.email "khw970421@kakao.com" 으로 설정해준다.
                 
  이후에는 git clone "복사한주소"  이렇게 clone을 생성시킨다.
  
2. intellj와 내 컴퓨터 폴더 연결
  File->new->project를 통해서 원하는 위치의 주소에있는 폴더를 새로운 연결로 지정시킨다.
  

3. intellj에서 프로그램을 github로 옮기기
원하는 js-function에서 원하는 코딩을 한 후에 commit,push를 위해서
commit ->  ctrl + k 를 통해 commit 내용을 적고 commit 시킨다.
push -> ctrl + shift + k 를 통해 push를 한다. 
