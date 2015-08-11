# Open Process Designer
Open Process Designer is (or will be) an open source chemical process simulator.

Currently we are trying to think of a better name. Candidates include:
- Ibex (really cool animal)
- Kudu (another really cool animal)
- Prelude
- Open Flow
- Open Process
- Very Good Process Simulator


## Contributing
Contributions are welcome, although there's not much to contribute to yet. Please fork this repository to your own account, then submit a pull request with your commits.

If you're new to git like me, you fork the repository to your own account, then clone the repository to your local machine. Then you create a new branch and add your feature or whatever. When you're done, push the branch to the origin (GitHub) and submit a pull request. Here's how to do it:

1. Create an account on GitHub.
2. Fork this repository. (This creates a copy of Open Process Designer on your own GitHub account.)
3. Clone your repository to your local machine. On Linux, use:

```
> git clone https://github.com/{YOUR USER NAME}/openprocessdesigner.git
``` 

This creates a directory named `openprocessdesigner`. `cd` to that directory and create a new branch, and switch to that branch:

```
> cd openprocessdesigner
> git checkout -b my-new-feature
Switched to a new branch 'my-new-feature'
```

Then make your edits, and commit your edits to the `my-new-feature` branch using `git commit -a`. You will be asked to edit a commit message explaining your changes. After editing the message, `git` will tell you which files have changed. It might look something like this:

```
> git commit -a
[my-new-feature 38af852] Updated README
1 file changed, 26 insertions(+)
```

You can commit as many changes as you want. When you are finished, push your branch to your account. The first time, you must specify the upstream branch using `--set-upstream`: 

```
> git push --set-upstream origin my-new-feature
Counting objects: 5, done.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 890 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/ericman314/openprocessdesigner.git
* [new branch]      my-new-feature -> my-new-feature
Branch my-new-feature set up to track remote branch my-new-feature from origin.
```

On subsequent commits on the `my-new-feature` branch, you only need to use `git push` since you've already set the upstream branch. When you're all done with `my-new-feature`, and you've pushed all the commits to your account, go to your repository on GitHub and:

1. Click "Compare & pull request".
2. Write a comment or two, then click "Create pull request".
3. When the pull request is merged, your edits will be part of Open Process Designer!
