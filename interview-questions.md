1\. What is Git and why use it?
-------------------------------

Git is a version control system that tracks code changes. Use it to:

*   Save project history
    
*   Collaborate with others
    
*   Revert mistakes
    
*   Work on features separately
    

2\. How do you push code to GitHub?
-----------------------------------

bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git add .  git commit -m "Your message"  git push origin main   `

3\. What is GitHub Pages?
-------------------------

A free hosting service by GitHub for static websites. Deploys directly from your repository.

4\. Difference between static and dynamic websites?
---------------------------------------------------

**Static websites**: Fixed HTML/CSS/JS files, same for all users (blogs, portfolios)

**Dynamic websites**: Generated on-the-fly with databases, personalized content (Facebook, Netflix)

5\. How do you revert commits in Git?
-------------------------------------

bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git revert   # Safe, creates new commit  git reset --hard   # Dangerous, deletes history   `

6\. What is branching in Git?
-----------------------------

Creating separate lines of development. Main branch stays stable while you develop features on other branches.

bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git branch feature-name  git checkout feature-name   `

7\. Explain pull requests
-------------------------

A request to merge your code changes into another branch. Allows code review before merging.

8\. How to resolve merge conflicts?
-----------------------------------

1.  Git marks conflicts in files with <<<<<<<, =======, >>>>>>>
    
2.  Manually edit to keep desired code
    
3.  Remove conflict markers
    
4.  git add and git commit
    

9\. How to host a website for free?
-----------------------------------

*   **GitHub Pages** - static sites
    
*   **Netlify** - static sites
    
*   **Vercel** - static + serverless
    
*   **Render** - free tier available
    

10\. What is continuous deployment?
-----------------------------------

Automatically deploying code to production after passing tests. Code goes from commit → testing → live site without manual intervention.
