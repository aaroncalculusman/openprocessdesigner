# Open Process Designer
Open Process Designer is (or will be) an open source chemical process simulator.

Currently we are trying to think of a better name. Candidates include:
- Ibex
- Kudu
- Open Flow
- Open Process
- Prelude

## Contributing
Contributions are welcome, although there's not much to contribute to yet. Please fork this repository to your own account, then submit a pull request with your commits.

If you're new to git like me, here's how to do it:
1. Create an account on GitHub.
2. Fork this repository. (This creates a copy of Open Process Designer on your own GitHub account.)
3. Clone your repository to your local machine. There are two ways to do this:
    1. On Windows, use GitHub's desktop program (whatever it's called). It's pretty easy.
    2. On Linux, use:

       ```
       > git clone https://github.com/{YOUR USER NAME}/openprocessdesigner.git
       ``` 
       
       This creates a directory named `openprocessdesigner`. `cd` to that directory and create a new branch, and switch to that branch:
       
       ```
       > cd openprocessdesigner
       > git checkout -b my-new-feature
       Switched to a new branch 'my-new-feature'
       ```
       
       Then make your edits. When you are finished, commit your edits to the `my-new-feature` branch:
       
       ```
       > git commit -a