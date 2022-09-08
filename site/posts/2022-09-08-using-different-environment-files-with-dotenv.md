---
title: Using different files between environments with dotenv
description: 
date: 2022-09-08
---

By default, the [dotenv](https://www.npmjs.com/package/dotenv) library is configured to only use one `.env` file in the root of the project. The readme warns against using multiple environment files, and at first glance this is not supported by the library. Luckily it is possible to change the used file by setting the `DOTENV_CONFIG_PATH` environment variable, and by doing this a different file _can_ be used.

My use case was to use a different environment file when running the unit tests, as I wanted to use the live staging database when testing the app, but a local database when running tests. I prefixed the npm command in my `package.json` with the config path setting, and now only in unit tests this separate `.env.test` file gets loaded.

```json
"scripts": {
    ...
    "test:unit": "DOTENV_CONFIG_PATH=.env.test jest --group=unit",
    ...
}
```

Note that on Windows, your mileage may vary with setting an environment variable like this, and you may have to resort to use a library like [cross-env](https://www.npmjs.com/package/cross-env) to properly load it.
