<!--
 * @Author: Liu Yuchen
 * @Date: 2021-04-27 23:35:08
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-28 04:17:04
 * @Description: 
 * @FilePath: /taskTracker/README.md
 * @GitHub: https://github.com/liuyuchen777
-->
# Task Tracker

## Introduction

A simple react demo for to-do list liked task tracker

function include:
* add task
* delete task
* label task as done

## How to use

### 1. pure frontend version

first you need to change ./src_backup to ./src, then:

```bash
# install package
yarn 
# run project
yarn start
```

### 2. with json server

```bash
# start json-server
npm run server
# start frontend
yarn start
# or
npm run
```

## Note

npm install json-server

```bash
# install json-server
npm i json-server
```

set server

```bash
# package.json
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
"server": "json-server --watch db.json --port 5500"
},
```

## demo pictures

![image](./img/01.jpg)

![image](./img/02.jpg)