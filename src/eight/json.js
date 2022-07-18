// json序列化
const b = { name: 'pjw' }
// 序列化
const bStr = JSON.stringify(b)
console.log(b, bStr)
const a = `{"name":"pjw"}`
// JSON.parse(a)

// 反序列化，由一个json字符串转换为js对象
const reDefine = JSON.parse(a)
console.log(reDefine)



const pkgLockJson = `{
    "name": "lets-web-1",
    "lockfileVersion": 2,
    "requires": true,
    "packages": {
      "": {
        "dependencies": {
          "sass": "^1.53.0"
        }
      },
      "node_modules/anymatch": {
        "version": "3.1.2",
        "resolved": "https://registry.npmmirror.com/anymatch/-/anymatch-3.1.2.tgz",
        "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",
        "dependencies": {
          "normalize-path": "^3.0.0",
          "picomatch": "^2.0.4"
        },
        "engines": {
          "node": ">= 8"
        }
      },
      "node_modules/binary-extensions": {
        "version": "2.2.0",
        "resolved": "https://registry.npmmirror.com/binary-extensions/-/binary-extensions-2.2.0.tgz",
        "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/braces": {
        "version": "3.0.2",
        "resolved": "https://registry.npmmirror.com/braces/-/braces-3.0.2.tgz",
        "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
        "dependencies": {
          "fill-range": "^7.0.1"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/chokidar": {
        "version": "3.5.3",
        "resolved": "https://registry.npmmirror.com/chokidar/-/chokidar-3.5.3.tgz",
        "integrity": "sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==",
        "dependencies": {
          "anymatch": "~3.1.2",
          "braces": "~3.0.2",
          "glob-parent": "~5.1.2",
          "is-binary-path": "~2.1.0",
          "is-glob": "~4.0.1",
          "normalize-path": "~3.0.0",
          "readdirp": "~3.6.0"
        },
        "engines": {
          "node": ">= 8.10.0"
        },
        "optionalDependencies": {
          "fsevents": "~2.3.2"
        }
      },
      "node_modules/fill-range": {
        "version": "7.0.1",
        "resolved": "https://registry.npmmirror.com/fill-range/-/fill-range-7.0.1.tgz",
        "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
        "dependencies": {
          "to-regex-range": "^5.0.1"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/fsevents": {
        "version": "2.3.2",
        "resolved": "https://registry.npmmirror.com/fsevents/-/fsevents-2.3.2.tgz",
        "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
        "hasInstallScript": true,
        "optional": true,
        "os": [
          "darwin"
        ],
        "engines": {
          "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
        }
      },
      "node_modules/glob-parent": {
        "version": "5.1.2",
        "resolved": "https://registry.npmmirror.com/glob-parent/-/glob-parent-5.1.2.tgz",
        "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
        "dependencies": {
          "is-glob": "^4.0.1"
        },
        "engines": {
          "node": ">= 6"
        }
      },
      "node_modules/immutable": {
        "version": "4.1.0",
        "resolved": "https://registry.npmmirror.com/immutable/-/immutable-4.1.0.tgz",
        "integrity": "sha512-oNkuqVTA8jqG1Q6c+UglTOD1xhC1BtjKI7XkCXRkZHrN5m18/XsnUp8Q89GkQO/z+0WjonSvl0FLhDYftp46nQ=="
      },
      "node_modules/is-binary-path": {
        "version": "2.1.0",
        "resolved": "https://registry.npmmirror.com/is-binary-path/-/is-binary-path-2.1.0.tgz",
        "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
        "dependencies": {
          "binary-extensions": "^2.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/is-extglob": {
        "version": "2.1.1",
        "resolved": "https://registry.npmmirror.com/is-extglob/-/is-extglob-2.1.1.tgz",
        "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/is-glob": {
        "version": "4.0.3",
        "resolved": "https://registry.npmmirror.com/is-glob/-/is-glob-4.0.3.tgz",
        "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
        "dependencies": {
          "is-extglob": "^2.1.1"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/is-number": {
        "version": "7.0.0",
        "resolved": "https://registry.npmmirror.com/is-number/-/is-number-7.0.0.tgz",
        "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
        "engines": {
          "node": ">=0.12.0"
        }
      },
      "node_modules/normalize-path": {
        "version": "3.0.0",
        "resolved": "https://registry.npmmirror.com/normalize-path/-/normalize-path-3.0.0.tgz",
        "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/picomatch": {
        "version": "2.3.1",
        "resolved": "https://registry.npmmirror.com/picomatch/-/picomatch-2.3.1.tgz",
        "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
        "engines": {
          "node": ">=8.6"
        }
      },
      "node_modules/readdirp": {
        "version": "3.6.0",
        "resolved": "https://registry.npmmirror.com/readdirp/-/readdirp-3.6.0.tgz",
        "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
        "dependencies": {
          "picomatch": "^2.2.1"
        },
        "engines": {
          "node": ">=8.10.0"
        }
      },
      "node_modules/sass": {
        "version": "1.53.0",
        "resolved": "https://registry.npmmirror.com/sass/-/sass-1.53.0.tgz",
        "integrity": "sha512-zb/oMirbKhUgRQ0/GFz8TSAwRq2IlR29vOUJZOx0l8sV+CkHUfHa4u5nqrG+1VceZp7Jfj59SVW9ogdhTvJDcQ==",
        "dependencies": {
          "chokidar": ">=3.0.0 <4.0.0",
          "immutable": "^4.0.0",
          "source-map-js": ">=0.6.2 <2.0.0"
        },
        "bin": {
          "sass": "sass.js"
        },
        "engines": {
          "node": ">=12.0.0"
        }
      },
      "node_modules/source-map-js": {
        "version": "1.0.2",
        "resolved": "https://registry.npmmirror.com/source-map-js/-/source-map-js-1.0.2.tgz",
        "integrity": "sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw==",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/to-regex-range": {
        "version": "5.0.1",
        "resolved": "https://registry.npmmirror.com/to-regex-range/-/to-regex-range-5.0.1.tgz",
        "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
        "dependencies": {
          "is-number": "^7.0.0"
        },
        "engines": {
          "node": ">=8.0"
        }
      }
    },
    "dependencies": {
      "anymatch": {
        "version": "3.1.2",
        "resolved": "https://registry.npmmirror.com/anymatch/-/anymatch-3.1.2.tgz",
        "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",
        "requires": {
          "normalize-path": "^3.0.0",
          "picomatch": "^2.0.4"
        }
      },
      "binary-extensions": {
        "version": "2.2.0",
        "resolved": "https://registry.npmmirror.com/binary-extensions/-/binary-extensions-2.2.0.tgz",
        "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA=="
      },
      "braces": {
        "version": "3.0.2",
        "resolved": "https://registry.npmmirror.com/braces/-/braces-3.0.2.tgz",
        "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
        "requires": {
          "fill-range": "^7.0.1"
        }
      },
      "chokidar": {
        "version": "3.5.3",
        "resolved": "https://registry.npmmirror.com/chokidar/-/chokidar-3.5.3.tgz",
        "integrity": "sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==",
        "requires": {
          "anymatch": "~3.1.2",
          "braces": "~3.0.2",
          "fsevents": "~2.3.2",
          "glob-parent": "~5.1.2",
          "is-binary-path": "~2.1.0",
          "is-glob": "~4.0.1",
          "normalize-path": "~3.0.0",
          "readdirp": "~3.6.0"
        }
      },
      "fill-range": {
        "version": "7.0.1",
        "resolved": "https://registry.npmmirror.com/fill-range/-/fill-range-7.0.1.tgz",
        "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
        "requires": {
          "to-regex-range": "^5.0.1"
        }
      },
      "fsevents": {
        "version": "2.3.2",
        "resolved": "https://registry.npmmirror.com/fsevents/-/fsevents-2.3.2.tgz",
        "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
        "optional": true
      },
      "glob-parent": {
        "version": "5.1.2",
        "resolved": "https://registry.npmmirror.com/glob-parent/-/glob-parent-5.1.2.tgz",
        "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
        "requires": {
          "is-glob": "^4.0.1"
        }
      },
      "immutable": {
        "version": "4.1.0",
        "resolved": "https://registry.npmmirror.com/immutable/-/immutable-4.1.0.tgz",
        "integrity": "sha512-oNkuqVTA8jqG1Q6c+UglTOD1xhC1BtjKI7XkCXRkZHrN5m18/XsnUp8Q89GkQO/z+0WjonSvl0FLhDYftp46nQ=="
      },
      "is-binary-path": {
        "version": "2.1.0",
        "resolved": "https://registry.npmmirror.com/is-binary-path/-/is-binary-path-2.1.0.tgz",
        "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
        "requires": {
          "binary-extensions": "^2.0.0"
        }
      },
      "is-extglob": {
        "version": "2.1.1",
        "resolved": "https://registry.npmmirror.com/is-extglob/-/is-extglob-2.1.1.tgz",
        "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ=="
      },
      "is-glob": {
        "version": "4.0.3",
        "resolved": "https://registry.npmmirror.com/is-glob/-/is-glob-4.0.3.tgz",
        "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
        "requires": {
          "is-extglob": "^2.1.1"
        }
      },
      "is-number": {
        "version": "7.0.0",
        "resolved": "https://registry.npmmirror.com/is-number/-/is-number-7.0.0.tgz",
        "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng=="
      },
      "normalize-path": {
        "version": "3.0.0",
        "resolved": "https://registry.npmmirror.com/normalize-path/-/normalize-path-3.0.0.tgz",
        "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="
      },
      "picomatch": {
        "version": "2.3.1",
        "resolved": "https://registry.npmmirror.com/picomatch/-/picomatch-2.3.1.tgz",
        "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA=="
      },
      "readdirp": {
        "version": "3.6.0",
        "resolved": "https://registry.npmmirror.com/readdirp/-/readdirp-3.6.0.tgz",
        "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
        "requires": {
          "picomatch": "^2.2.1"
        }
      },
      "sass": {
        "version": "1.53.0",
        "resolved": "https://registry.npmmirror.com/sass/-/sass-1.53.0.tgz",
        "integrity": "sha512-zb/oMirbKhUgRQ0/GFz8TSAwRq2IlR29vOUJZOx0l8sV+CkHUfHa4u5nqrG+1VceZp7Jfj59SVW9ogdhTvJDcQ==",
        "requires": {
          "chokidar": ">=3.0.0 <4.0.0",
          "immutable": "^4.0.0",
          "source-map-js": ">=0.6.2 <2.0.0"
        }
      },
      "source-map-js": {
        "version": "1.0.2",
        "resolved": "https://registry.npmmirror.com/source-map-js/-/source-map-js-1.0.2.tgz",
        "integrity": "sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw=="
      },
      "to-regex-range": {
        "version": "5.0.1",
        "resolved": "https://registry.npmmirror.com/to-regex-range/-/to-regex-range-5.0.1.tgz",
        "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
        "requires": {
          "is-number": "^7.0.0"
        }
      }
    }
  }
  `

// const pkgLockJsonObject = JSON.parse(pkgLockJson)
// console.log(pkgLockJsonObject)
const dependecyStr = `{
    "name": "f-b-demo",
    "version": "1.0.0",
    "description": "",
    "main": "backend.js",
    "scripts": {
      "test": ""
    },
    "keywords": "",
    "author": "",
    "license": "ISC",
    "dependencies": {
      "axios": "^0.27.2"
    }
  }`

const dependecy = JSON.parse(dependecyStr)
  console.log(dependecy.dependencies)



