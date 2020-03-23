# MySQL

## ER Diagram

[우아한 형제들 파일럿 프로젝트](https://woowabros.github.io/experience/2018/11/29/pilot-project.html)

![ERD](https://woowabros.github.io/img/2018-11-29/1/ERD.png)

서비스의 요구사항을 분석해서 개체로 나눈 것. UML과 형태가 비슷하다.

## Ubuntu

### LTS

Long Term Support: 3년간 지원해주는 버전. 지원기간이 지난 버전은 보안 이슈로 사용하면 안됨. 서버면 LTS 버전을 사용하고, 데스크탑 버전은 아무거나 사용해도 상관없다.

## MySQL CRUD

### CRUD란

- Create
- Retreival
- Update
- Delete

가장 기본적인 데이터베이스 연산

### Create

```sql
DROP TABLE IF EXSIST USER;
CREATE TABLE IF NOT EXSISTS USER (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  EMAIL VARCHAR(64) UNIQUE,
  NAME VARCHAR(64),
  PASSWORD VARCHAR(64),
  COMMENT TEXT,
  START_DATE DATETIME
);
```

### Insert

```sql
INSERT INTO USER(NAME, PASSWORD) VALUES ('sungikchoi', '1234');
```

### Select

```sql
SELECT * FROM USER;
SELECT ID, NAME FROM USER;
SELECT ID, NAME FROM USER WHERE ID = 3;
```

### Update

```sql
UPDATE USER
  SET NAME = 'Honux' WHERE ID = 2;
```

### Delete

```sql
DELETE FROM USER; #모든 레코드 삭제. 아주 위험
DELETE FROM USER WHERE ID = 4;
```

### NULL

데이터베이스의 NULL은 아직 잘 모르겠다 라는 뜻
