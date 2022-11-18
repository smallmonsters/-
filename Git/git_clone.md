- [git  clone --depth=1 -b ${branch}](#git--clone---depth1--b-branch)

### git  clone --depth=1 -b ${branch}

depth用于指定克隆深度，为1即表示只克隆最近一次commit。只会克隆${branch}分支。如果要浅克隆其他分支，使用：

```bash
# 用来更改追踪的分支，不然git fetch 后无法 git checkout remote_branch_name
git remote set-branches origin 'remote_branch_name'
git fetch --depth 1 origin remote_branch_name
git checkout remote_branch_name
```

**注意：**如果使用了git pull 拉取其他分支，${branch}分支就不在是浅克隆了。
