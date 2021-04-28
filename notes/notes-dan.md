# 1. Inline Script

> See `demo-snapshots/01-inline-script`.

## 💡 Idea

`<script>` tag within each HTML document.

## 👎 Problems

- Need to duplicate `add` method in `multiply.html`.
- Breaks "DRY" principle.


- - -


# 2. External Script (single file)

> See `demo-snapshots/02-external-script`.

## 💡 Idea 

Split `add` and `multiply` methods into a `math.js` file.

## ⏱ Changes

- add -> math.js
- multiply -> math.js
- reference math.js in add.html  
- reference math.js in multiply.html


## 👎 Problems

- All methods in a single (potentially large) file.
- Everything is global (potentially difficult to track down bugs).



- - -



# 3. External Script (multiple files)

> See `demo-snapshots/03-external-script`.

## 💡 Idea 

Split each function into its own `.js` file.

## ⏱ Changes

- add -> add.js
- multiply -> multiply.js
- reference add.js in add.html  
- reference add.js **and** multiply.js in multiply.html


## 👎 Problems

- Tracking dependencies manually.


- - -



# 4. Bundlers

> See `demo-snapshots/04-browserify`.

## 💡 Idea

"Bundle" functions programatically into a single `bundle.js` file.

- Allows us to keep our functions in separate files.
- Removes need to manually track dependencies.

```
browserify my-math.js -s MyMath -o bundle.js
```

## ⏱ Changes

- export functions as modules
- "require" add.js in multiply.js
- create my-math.js
    - "require" add.js and multiply.js
- browserify -> bundle.js
- reference bundle.js in add.html  
- reference bundle.js in multiply.html


## 👎 Problems

- Everything is still global.
- Bundle can be huge.



# 5. Bundlers (with node modules)

> See `demo-snapshops/05-browserify-modules`

## 💡 Idea

Bundle Node.js modules as well as your own code.

- Allows you to use external libraries.

## ⏱ Changes

- define node package dependencies  in `package.json`