# coneko-api
https://www.geeksforgeeks.org/git-create-a-branch-from-another-branch/

Steps to Create a Branch From Another Branch

Step 1: Ensure that you have checked out the branch from which you want to create the new branch. You can use the git checkout command to switch to the branch.
git checkout existing-branch

Step 2: Use the git branch command to create a new branch.
git branch new-branch

Step 3: Switch to the new branch using the git checkout command.
git checkout new-branch

Step 4: Make changes to the new branch as needed. You can commit your changes to the new branch using the git commit command.
git commit -m "Commit message"

Step 5: If you want to push the new branch to a remote repository, use the git push command.
git push -u origin new-branch