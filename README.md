# 개요 
KAIST 산업디자인학과 홈페이지 2022년 리뉴얼 작업

# 로컬 서버 실행법 
## Git설정
1. Terminal(OSX)에서 git이 실행되는지 확인 
```
(idkaist) takyeonlee@TAKui-MacBookPro idkaist_react % git
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
    [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
    [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
    [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
    [--super-prefix=<path>] [--config-env=<name>=<envvar>]
    <command> [<args>]
    ...
```
- 안되면 git설치 (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. GitHub에 SSH key 추가하기
- https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

## Repository 클론 하기
zip화일로 다운 받아도 실행은 가능하지만, 수정 사항을 push해서 공유하려면 클론해야함. 설치를 윈하는 폴더에 terminal을 열고 `git clone git@github.com:reflect9/idkaist-react.git`를 실행하면 다음과 같이 떠야함. 
```
(idkaist) takyeonlee@TAKui-MacBookPro temp % git clone git@github.com:reflect9/idkaist-react.git

Cloning into 'idkaist-react'...
remote: Enumerating objects: 451, done.
remote: Counting objects: 100% (73/73), done.
remote: Compressing objects: 100% (60/60), done.
remote: Total 451 (delta 11), reused 47 (delta 7), pack-reused 378
Receiving objects: 100% (451/451), 77.93 MiB | 6.73 MiB/s, done.
Resolving deltas: 100% (130/130), done.
```

## 라이브러리 설치
- `cd idkaist-react`를 실행해서 클론한 폴더로 이동
- `npm install`을 실행해서 라이브러리 설치 (실패시 `npm install --force`도 시도); 아래처럼 warning이 좀 나와도 끝까지 실행되면 ok
```
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated source-map-resolve@0.6.0: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
npm WARN deprecated core-js-pure@3.20.3: core-js-pure@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual version of core-js-pure.
npm WARN deprecated core-js@3.20.3: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual version of core-js.

added 1669 packages, and audited 1670 packages in 14s

221 packages are looking for funding
  run `npm fund` for details

17 vulnerabilities (3 moderate, 11 high, 3 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

## 로컬 서버 실행
- `npm start`실행하면 아래와 같이 나오고 브라우저 창이 자동으로 열려야함 
```
Compiled with warnings.

src/App.js
  Line 1:8:   '_' is defined but never used           no-unused-vars
  Line 16:8:  'ColorCodes' is defined but never used  no-unused-vars
... (생략)
webpack 5.66.0 compiled with 1 warning in 389 ms
```
- 마지막 라인이 나오고 브라우저 창이 새로 열리면 성공


# 소스코드 수정후 공유하기 
src폴더 안에 있는 소스코드를 수정한 뒤 공유할 준비가 되면, `git status`를 실행해서 바뀐 화일들 확인








## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
