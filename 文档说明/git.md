1.在coding里建项目 拿到"远程仓库地址"
2.在本地 找到你要提交的文件夹 cd进文件夹
    a. 在本地初始化一个Git仓库            git init
    b. 标记本地你想上传的代码文件          git add . /git add index.js
    c. 把标记好的文件提交到本地git仓库     git commit -m "备注" . / git commit -m "备注" index.js
    4. 建立coding和本地git仓库的远程连接   git remote add origin "远程仓库地址"  （一个项目只要执行一次）
    5. 提交到master分支                 git push origin master

    6. 查看当前分支 git branch
    7. 新增分支    git branch 分支名称
    8. 切换分支    git checkout 分支名称