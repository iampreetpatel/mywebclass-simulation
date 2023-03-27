DevOps Documentation:

In order to install the project on a Windows or Mac computer, the following steps need to be taken.

1. Download PyCharm, Docker, nodejs and Git.
2. Create accounts on all the above platforms except nodeJS.
3. Fork the main repository to create your own repository. 
4. In the settings under Secrets and variables, select actions and enter your DOCKER_USERNAME and DOCKER_PASSWORD as individual secrets.
5. Create an SSH public/private key pair using powershell (Windows) or terminal (MAC) and in your account settings add the whole SSH key.
6. Open PyCharm and copy the SSH link to clone into PyCharm.
7. Go into settings and search nodejs and change the path to point to the nodejs download
8. Run npm install
9. Now you can then make changes to the code as you wish.

In order to deploy the project, 

1. Under the repository settings go to pages and choose the source as GitHub Actions.
2. Open Pycharm and in the pycharm terminal enter “Git checkout -b (branch name)”. Replace branch name with Development.
3. For any changes you’ve made in the pycharm terminal “git commit -m “(Enter commit message here)””. Replace Enter commit message here with a note about the changes being made. 
4. In the Pycharm terminal enter git push Development
5. Afterwards, in GitHub go to pull request tab and there should be in orange a compare and create pull request notification.Merge the development branch to master.
