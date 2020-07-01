** @desc 1.初始化仓库和提交操作
 ** git init
 ** git add .
 ** git commit - m 'remark'
 ** 
 ** @desc 2.查看状态
 ** git status
 ** git log --pretty=oneline
 ** 
 ** @desc 3.回退(同步跟新工作区，丢掉工作区未提交改动)
 ** git reset --hard HEAD^
 ** git reset --hard HEAD~n
 ** git reset --hard id
 ** git reflog (查询操作记录)
 ** 
 ** @desc 4.撤销提交(撤销add)
 ** git checkout -- file  (回滚改动)
 ** git checkout .  (回滚改动)
 ** git reset HEAD （回滚add, 后加文件名回滚指定文件）
 ** 
 ** @desc 5.远程仓库
 ** git remote add origin git@github.com:leywis/learngit.git 连接远程仓库
 ** git pull origin master  拉取指定分支
 ** git pull origin master --allow-unrelated-histories  允许pull未关联的远程仓库旧代码
 ** git push origin master 推送到指定的远程分支
 ** git push -u origin master (第一次远程仓库是空的时候，推送加-u)
 ** git clone 克隆远程仓
 ** 
 ** @desc 分支管理
 ** git branch 创建分支
 ** git checkout 切换分支
 ** git checkout -b  创建并切换