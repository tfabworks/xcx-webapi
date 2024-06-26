# WebAPI Client

An example extension for [Xcratch](https://xcratch.github.io/)

This extension add extra-block "do it", that executes string in its input field as a sentence in Javascript and return the result.


## JSONへのアクセス方法

* ドット(.)区切りでオブジェクトのキーを列挙
* リストの場合はインデックス番号を全角,半角数字で指定可能, firstは0, lastは最後の要素
* ドット(.)で区切られた中での先頭と末尾のスペースや[]記号は無視される
* 最初や最後のドット(.)があっても無視される
* アクセスできない場合は空文字列が返る

例:

```
.hourly.[temperature_2m].５
```

## ✨ What You Can Do With This Extension

Play [Example Project](https://xcratch.github.io/editor/#https://tfabworks.github.io/xcx-webapi/projects/example.sb3) to look at what you can do with "WebAPI Client" extension.
<iframe src="https://xcratch.github.io/editor/player#https://tfabworks.github.io/xcx-webapi/projects/example.sb3" width="540px" height="460px"></iframe>


## How to Use in Xcratch

This extension can be used with other extension in [Xcratch](https://xcratch.github.io/). 
1. Open [Xcratch Editor](https://xcratch.github.io/editor)
2. Click 'Add Extension' button
3. Select 'Extension Loader' extension
4. Type the module URL in the input field 
```
https://tfabworks.github.io/xcx-webapi/dist/webapiExtension.mjs
```
5. Click 'OK' button
6. Now you can use the blocks of this extension


## Development

### Install Dependencies

```sh
npm install
```

### Setup Development Environment

Change ```vmSrcOrg``` to your local ```scratch-vm``` directory in ```./scripts/setup-dev.js``` then run setup-dev script to setup development environment.

```sh
npm run setup-dev
```

### Bundle into a Module

Run build script to bundle this extension into a module file which could be loaded on Xcratch.

```sh
npm run build
```

### Watch and Bundle

Run watch script to watch the changes of source files and bundle automatically.

```sh
npm run watch
```

### Test

Run test script to test this extension.

```sh
npm run test
```


## 🏠 Home Page

Open this page from [https://tfabworks.github.io/xcx-webapi/](https://tfabworks.github.io/xcx-webapi/)


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/tfabworks/xcx-webapi/issues). 
