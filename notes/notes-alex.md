# Browserify Modules

> See `demo-snapshots/05-browserify-modules`.

## 💡 Idea

Browserify will also bundle node packaged modules

## ⏱ Changes

- Install "is-number" module through a package manager
- Introduce "is-number" module to multiply.js

## 👎 Problems

- Everything is still global
- Bundle can be huge, especially when npm modules are involved

- - -


# ECMAScript Modules

> See `demo-snapshots/06-ecmascript-modules`.

## 💡 Idea 

Introduce `add` and `multiply` to the html files using `import`

## ⏱ Changes

- Remove "is-number" usage
- Add `type="module"` to `<script>` tag
- Import modules where needed


## 👎 Problems

- Lots of npm packages do not use ES Modules



- - -



# Snowpack

> See `demo-snapshots/07-snowpack`.

## 💡 Idea 

Snowpack includes the best of all worlds: combines organized, automated package management with modularized, fast and reusable ES modules

Also allows for faster development builds

## ⏱ Changes

- Reintroduce "is-number" usage
- Build with snowpack

