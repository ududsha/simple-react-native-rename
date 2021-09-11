<h1 align="center">Welcome to simple-react-native-rename 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/simple-react-native-rename" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/simple-react-native-rename.svg">
  </a>
  <a href="https://github.com/ududsha/simple-react-native-rename#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/ududsha/simple-react-native-rename/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/ududsha/simple-react-native-rename/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/ududsha/simple-react-native-rename" />
  </a>
  <a href="https://twitter.com/ududsha" target="_blank">
    <img alt="Twitter: ududsha" src="https://img.shields.io/twitter/follow/ududsha.svg?style=social" />
  </a>
</p>

> Rename visible name(only) and bundle id(optional) in react-native app with just one command

### 🏠 [Homepage](https://github.com/ududsha/simple-react-native-rename#readme)

## Install

```sh
npm install
```

## Usage
You can change the package.js app 'name' and use below script to rename easily. (Optionally you can add bundle identifier also when you have a new bundle identifier)
```sh
	"scripts": {
    "app:rename": "simple-react-native-rename '$npm_package_name'",
  }
```

Use cli to rename the app.
```sh
$ npx simple-react-native-rename <newName>
```

With custom Bundle Identifier (Android only. For iOS, please use Xcode)
```sh
$ npx simple-react-native-rename <newNameToTheIcon> -b <newBundleIdentifier>
```

## Run tests

```sh
npm run test
```

## Author

👤 **Shamendra Sirisena <ududsha@gmail.com>**

* Website: http://shamendra.xyz/
* Twitter: [@ududsha](https://twitter.com/ududsha)
* Github: [@ududsha](https://github.com/ududsha)
* LinkedIn: [@udsha](https://linkedin.com/in/udsha)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ududsha/simple-react-native-rename/issues). You can also take a look at the [contributing guide](https://github.com/ududsha/simple-react-native-rename/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/shamendra">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## 📝 License

Copyright © 2021 [Shamendra Sirisena <ududsha@gmail.com>](https://github.com/ududsha).<br />
This project is [MIT](https://github.com/ududsha/simple-react-native-rename/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_