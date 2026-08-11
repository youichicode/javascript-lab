# Conventional Commits

A simple guide to writing Git commit messages that are easy to understand.

## The idea

A commit message should answer two questions:

1. **What kind of change is this?**
2. **What did I change?**

The basic format is:

```text
<type>: <description>
```

For example:

```text
feat: add JSON loading exercise
```

Here, `feat` tells you the **kind of change**, while `add JSON loading exercise` tells you **what changed**.

---

## The types you'll use most

You do not need to memorize every possible type.

For a personal learning repository like `javascript-lab`, these six will cover most situations:

| Type | Use it when... |
| --- | --- |
| `feat` | You add something new |
| `fix` | You fix something that was wrong |
| `docs` | You add or change documentation |
| `refactor` | You improve the code's structure without changing what it does |
| `test` | You add or change tests |
| `chore` | You maintain or organize the project |

The easiest way to choose is to ask:

> **What is the purpose of this change?**

Then pick the type that matches that purpose.

---

## `feat` — I added something new

Use `feat` when you add a new capability, feature, or learning exercise.

Examples:

```text
feat: add Hiragana quiz
feat: add JSON loading exercise
feat: add Node.js readline template
```

Think:

> **"The project can now do something it couldn't do before."**

For your `javascript-lab`, adding a new experiment is usually a good use of `feat`.

---

## `fix` — I corrected something that was wrong

Use `fix` when existing code behaves incorrectly and you correct it.

For example, suppose your quiz has:

```js
Math.trunc(Math.random() * 6);
```

but your array only has five items.

After fixing it:

```text
fix: correct random question index
```

Other examples:

```text
fix: handle empty user input
fix: correct quiz answer comparison
```

Think:

> **"Something was supposed to work this way, but it didn't. I fixed it."**

---

## `docs` — I changed documentation

Use `docs` when the main purpose of the commit is writing or changing documentation.

Examples:

```text
docs: add Conventional Commits guide
docs: add notes about JSON loading
docs: update readline notes
```

If you create a Markdown guide explaining Conventional Commits, use:

```text
docs: add Conventional Commits guide
```

The fact that the file is stored in GitHub does not make it `chore`. The important part is that **you added documentation**.

---

## `refactor` — I changed how the code is organized

Use `refactor` when you improve the structure of existing code **without intentionally changing its behavior**.

For example, your quiz works correctly, but you reorganize the code to make it easier to understand:

```text
refactor: separate quiz data from logic
```

Or:

```text
refactor: simplify quiz question handling
```

Think:

> **"It still does the same thing, but the code is cleaner or better structured."**

### `refactor` vs `fix`

If you change the code because it is **wrong**:

```text
fix: correct random question index
```

If you change the code because it is **messy or unnecessarily complicated**, while keeping the same behavior:

```text
refactor: simplify random question logic
```

---

## `test` — I added or changed tests

Use `test` when the purpose of the commit is testing code.

Examples:

```text
test: add quiz answer tests
test: add randomizer tests
```

Think:

> **"I'm adding code that checks whether my other code works correctly."**

You may not use this much yet while you're learning, and that's completely fine.

---

## `chore` — I maintained the project

`chore` is for project maintenance that doesn't represent a new feature, bug fix, documentation change, or code refactor.

Common examples:

```text
chore: initialize javascript-lab
chore: reorganize experiment folders
chore: rename experiment files
chore: add gitignore
```

Think:

> **"I'm maintaining the project itself, rather than changing what the program does."**

### `chore` is broader than folder organization

It is not just for moving folders.

It can cover things like:

- Project setup
- File organization
- Renaming files
- Configuration changes
- General repository maintenance

If another type describes the change more accurately, use that more specific type instead.

---

# The types you may encounter later

You don't need these right now, but you'll see them in real projects.

### `style`

Formatting changes that don't affect behavior.

```text
style: format quiz files
```

### `perf`

A change specifically intended to improve performance.

```text
perf: reduce unnecessary array searches
```

### `build`

Changes to the build system or dependencies.

```text
build: configure project dependencies
```

### `ci`

Changes to continuous integration or deployment configuration.

```text
ci: add GitHub Actions workflow
```

For now, the important six are:

```text
feat
fix
docs
refactor
test
chore
```

---

# A quick decision guide

When you're about to commit, ask these questions in order:

### 1. Did I add something new?

Yes → `feat`

```text
feat: add JSON loading exercise
```

### 2. Did I fix something that was wrong?

Yes → `fix`

```text
fix: correct random question index
```

### 3. Did I add or change documentation?

Yes → `docs`

```text
docs: add Conventional Commits guide
```

### 4. Did I reorganize existing code without changing its behavior?

Yes → `refactor`

```text
refactor: separate quiz data from logic
```

### 5. Did I add or change tests?

Yes → `test`

```text
test: add quiz answer tests
```

### 6. Did I maintain or organize the project itself?

Yes → `chore`

```text
chore: reorganize experiment folders
```

If you're still unsure, describe **what the commit accomplishes**, rather than what files you touched.

---

# Write the description like an action

A useful convention is to write the description in an **imperative** style.

Think:

> "This commit will..."

So:

```text
feat: add Hiragana quiz
```

rather than:

```text
feat: added Hiragana quiz
```

And:

```text
fix: correct random question index
```

rather than:

```text
fix: fixed random question index
```

The first style is short and consistent.

---

# Keep commits focused

Try to make each commit represent **one logical change**.

For example, if you added a new quiz, fixed a bug, and reorganized your folders, avoid putting everything into one vague commit:

```text
feat: update project
```

Instead, if the changes are intentionally separate, you could have:

```text
feat: add Hiragana quiz
fix: correct random question index
chore: reorganize experiment folders
```

This makes your Git history much easier to understand later.

---

# Examples from `javascript-lab`

Here are examples that fit the kind of work you're doing:

```text
chore: initialize javascript-lab

feat: add Node.js readline template

feat: add JSON loading exercise

docs: add Conventional Commits guide

chore: reorganize experiment folders

fix: correct random question index

refactor: separate quiz data from logic
```

Notice how each message tells you what happened without needing to inspect the entire commit.

---

# The main idea to remember

You don't need to memorize a huge list of commit types.

Start with this:

```text
feat     → I added something new
fix      → I fixed something broken
docs     → I wrote or changed documentation
refactor → I improved code structure
test     → I added or changed tests
chore    → I maintained the project
```

Then write:

```text
<type>: <short description>
```

For example:

```text
feat: add JSON loading exercise
```

That's enough to start.

As your projects become more complex, you'll naturally encounter the other commit types and learn when they make sense.
