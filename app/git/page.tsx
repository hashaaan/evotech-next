import React from "react";

export default function page() {
  return (
    <main className="container mx-auto py-5 px-14 w-full">
      <h1 className="text-slate-800 font-bold font-mono text-3xl mb-5">
        How Git Works
      </h1>

      <div className="flex flex-row gap-12">
        <section id="basic-git" className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-purple-900">
            Section 1: Basic Overview of Git
          </h2>

          <ol className="list-decimal flex flex-col gap-4 ml-5">
            <li>
              Create a <b>&ldquo;Repository&rdquo;</b> (project) with a git
              hosting tool (like Github, Bitbucket, Gitlab)
            </li>

            <li>
              Copy (or clone) the repository to your local machine
              <br />
              <code className="bg-lime-500 text-blue-600 px-2 py-px rounded">
                git clone {`<your-repo-url>`}
              </code>
            </li>

            <li>
              Add a file to your local repo and <b>&ldquo;Commit&rdquo;</b>{" "}
              (save) the changes
              <br />
              <code className="bg-lime-500 text-blue-600 px-2 py-px rounded">
                git add {`<your-file-name>`} or git add -A
              </code>
              <br />
              <code className="bg-yellow-500 text-blue-600 px-2 py-px rounded">
                git add status
              </code>
              <br />
              <code className="bg-sky-500 text-black px-2 py-px rounded">
                git commit -m {`<your-commit-message>`}
              </code>
            </li>

            <li>
              <b>&ldquo;Push&rdquo;</b> your changes to your main branch
              <br />
              <code className="bg-lime-500 text-blue-600 px-2 py-px rounded">
                git push
              </code>
            </li>

            <li>
              Make a change to your file with a git hosting tool and commit
            </li>

            <li>
              <b>&ldquo;Pull&rdquo;</b> the changes to your local machine
              <br />
              <code className="bg-lime-500 text-blue-600 px-2 py-px rounded">
                git fetch -&gt; git pull
              </code>
            </li>

            <li>
              Create a <b>&ldquo;Branch&rdquo;</b> (version), make a change,
              commit the change
              <br />
              <code className="bg-lime-500 text-blue-600 px-2 py-px rounded">
                git checkout -b {`<new-branch-name>`}
              </code>
              <br />
              <code className="bg-yellow-500 text-blue-600 px-2 py-px rounded">
                git add -A
              </code>
              <br />
              <code className="bg-sky-500 text-black px-2 py-px rounded">
                git commit -m {`<your-commit-message>`}
              </code>
              <br />
              <code className="bg-purple-500 text-white px-2 py-px rounded">
                git push
              </code>
            </li>

            <li>
              Open a <b>&ldquo;Pull Request&rdquo;</b> (propose changes to the
              main branch)
            </li>

            <li>
              <b>&ldquo;Merge&rdquo;</b> your branch to the main branch
              <br />
              <code className="bg-lime-500 text-blue-600 px-2 py-px rounded">
                git merge {`<branch-name>`}
              </code>
            </li>
          </ol>
        </section>

        <section id="existing-project">
          <h2 className="text-lg font-bold mb-4 text-purple-900">
            Section 2: Add current project to existing GitHub repository
          </h2>

          <ol className="list-decimal flex flex-col gap-4 ml-5">
            <li>
              Remove if there is any existing{" "}
              <b className="text-green-800 px-2 font-mono">.git</b> folder
            </li>

            <li>
              Initiate Git using
              <br />
              <code className="bg-lime-500 text-blue-600 px-2 py-px rounded">
                git init
              </code>
            </li>

            <li>
              Add all your local files using
              <br />
              <code className="bg-lime-500 text-blue-600 px-2 py-px rounded">
                git add .
              </code>
              {` or `}
              <code className="bg-lime-500 text-blue-600 px-2 py-px rounded">
                git add -A
              </code>
            </li>

            <li>
              Commit your files as <b>&ldquo;Initial commit&rdquo;</b>
              <br />
              <code className="bg-sky-500 text-black px-2 py-px rounded">
                git commit -m {`"Initial commit"`}
              </code>
            </li>

            <li>
              Add your <b>Remote Git Url</b> to local using
              <br />
              <code className="bg-lime-500 text-blue-600 px-2 py-px rounded">
                git remote add origin {`<your-repo-url>`}
              </code>
            </li>

            <li>
              Push your local commit to remote using
              <br />
              <code className="bg-lime-500 text-blue-600 px-2 py-px rounded">
                git push origin main
              </code>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
