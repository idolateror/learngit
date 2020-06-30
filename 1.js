/**
 * @desc 1.初始化仓库和提交操作
 * git init
 * git add .
 * git commit - m 'remark'
 * 
 * @desc 2.查看状态
 * git status
 * git log --pretty=oneline
 * 
 * @desc 3.回退(同步跟新工作区，丢掉工作区未提交改动)
 * git reset --hard HEAD^
 * git reset --hard HEAD~n
 * git reset --hard id
 * git reflog (查询操作记录)
 * 
 * @desc 4.撤销提交(撤销add)
 * git checkout -- file  (回滚改动)
 * git checkout .  (回滚改动)
 * git reset HEAD （回滚add, 后加文件名回滚指定文件）
 */

// 1
var text = 1
// 添加第2条
var a = 2
// 添加第3条
var b = 3
// 添加第4填条
var c =4