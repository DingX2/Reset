# Reset
reset 으로 없앤 것은 commit 기록이 남지만
reset 권장 !
커밋 기록을 삭제하고 싶다면? Rebase를 사용한다.

# Rebase merge
일종의 커밋 백업이라고 보면된다.
커밋을 복사 붙여넣기해서 새로 또 커밋을 만들어서 저장한다.
rebase, base를 바꾼다는 의미 근데 1 commit?

Merge branch 'main' into dev

# Squash merge
이런식으로 모든 커밋을 합친 변경 커밋을 하나 만들고 이를 머지한다. 원기옥모으는듯 1commit

다만 git graph를 보면 기존 main에 머지하면 main으로 브랜치가 들어간다.

Dev (#10)
```
Dev (#10)
* [Feat] 1번째커밋

* [Feat] 2번째 커밋

* [Feat] 3번째 커밋

* [문제발생 커밋]

* 기록1

* 기록2
```

# Merge pull request
기본, 모든 커밋 기록을 살린채로 합병한다.

Merge pull request #11 from DingX2/dev


# Rebase 
rebase -i drop은 commit 기록이 남지 않음
현재 dev 브랜치에 작성된 아래에 도넛이 3개있나?
도넛을 삭제해본다. 
도넛을 삭제한 커밋명은 : fd084c7e29f004943ee7f0f1f39a676a89f9d7a9
도넛이 있는 커밋명은 : 11510edb1a0761963158d86e8277f77c2b14e043

 

도넛도넛도넛 