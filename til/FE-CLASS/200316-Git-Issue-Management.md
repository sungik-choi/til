# 공통수업 : Git & 프로세스와 이슈관리

## 프로세스와 이슈관리

- 작은 프로젝트도 포트폴리오로 활용할 수 있다. 짧은 기간내에 다른 사람과 의견을 맞춰가며 프로젝트를 한 경험

## Git을 이용한 Workflow 관리

- 깃의 핵심은 커밋이다
- 내 컴퓨터 disk의 snapshot(특정 시점)
- 지금은 커밋을 쌓기만 하지만, 팀 프로젝트를 하다보면 이전 커밋으로 되돌아갈 경우가 많이 생긴다.
- Branch: 커밋의 참조 변수

### git-flow

- 정답이 아니다. 팀의 룰 마다 다를 수 있음.
- master 브랜치는 완벽하게 기능하는 내용만. 대부분 develop 브랜치에서 시작한다.
- feature/... 식으로 브랜치를 생성하면 상위 디렉토리 별로 브랜치를 모아서 볼 수 있다.
- 기능이 완료되면 develop에 merge하고(rebase 아님) 진행하던 기능 branch를 삭제한다.
- merge가 rebase보다 안전하다 -> merge는 merge커밋이 생성되기 때문에, 이전 커밋으로 돌아갈 수 있다.
- hotfix: 긴급한 일이 일어나서 당장 master 구동가능하게 수정해야 할 경우

### github-flow

- 하나의 규칙: master는 정상적으로 동작하는 것만 넣자.
- 쉽고 간단하고 github 하나로 다 할 수 있다.

### gitlab-flow

- git-flow와 github-flow의 절충안

### 읽어보기

[창작과 비평 - 일의 기쁨과 슬픔](https://magazine.changbi.com/q_posts/%ec%9d%bc%ec%9d%98-%ea%b8%b0%ec%81%a8%ea%b3%bc-%ec%8a%ac%ed%94%94/?board_id=2659)
