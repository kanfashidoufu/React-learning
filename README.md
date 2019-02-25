
# 开发环境搭建
* 安装LTS版nodejs 已安装可以忽略
* 安装create-react-app快速创建一个react应用或直接使用`npx create-react-app my-app`
* `cd my-app`
   `npm start`

# 什么是组件？
组件可以理解为网页的一部分
一个html标签也可以是一个组件

**React中一大写字母开头的一般都表示为组件**
``` jsx
import React from 'react';
```
``` jsx
import ReactDOM from 'react-dom';
```

React这个库的意义在于将代码识别为React语法的代码
ReactDom的意义在于用来将React组件渲染到页面中的真实dom节点上

## 如何定义一个React组件
首先需要在组件的js中引入React
``` jsx
import React, { Component } from 'react';
```

其次 定义一个组件实际上是一个类 继承于React.Component
``` jsx
class App extends Component {

}
```

组件中必须要有一个render函数 负责组件要显示的内容

``` jsx
render（）{
	return {
	}
}
```

最后把组件对外暴露
``` jsx
export default App;
```

## 简单的JSX语法
JSX语法可以让我们在编写一个React组件的时候 可以在函数中直接使用html标签
``` jsx
render() {
    return (
      <div className="App">
        hello, i am Kevin
      </div>
    );
  }
  ```
在JSX中在标签语法中还可以使用js的表达式
``` jsx
render() {
    return (
      <div className="App">
	  { 1 + 2 }
        hello, i am Kevin
      </div>
    );
  }
```
## 事件绑定
在React中的JSX中绑定React中的注册事件
``` jsx
handleBtnClick() {
    alert('click')
  }

  render() {
    return (
      <div className="TodoList">
        <div>
          <input />
          <button onClick={this.handleBtnClick}>add</button>
        </div>
      </div>
    );
  }
```
## 数据处理
### 初始化state保存数据
``` jsx
constructor(props){
    super(props);
    this.state = {
      
    }
  }
```

### 数据更新
调用React提供的setState（）方法 实现数据更新 进而实现视图更新
``` jsx
this.setState({
      list: {...this.state.list, 'hello world'}
    })
```
## 组件通信

### 父=>子组件通信
父组件通过属性的方式传递参数到子组件
子组件中通过`this.props.属性值`的方式获得父组件传递参数
``` jsx
return <TodoItem content={item} />
```
``` jsx
class TodoItem extends Component {
	render() {
		return (
			<div>{this.props.content}</div>
		)
	}
}
```
### 子=>父组件通信
在React中子组件如果想和父组件通信，要调用父组件传递过来的方法
``` jsx
 return <TodoItem delete={this.handleDelete.bind(this)} key={index} content={item} index={index} />
 ```
 这里父组件传递一个`delete`属性，实际上是一个`handleDelete`函数
 
 ``` jsx
 handleDelete() {
		this.props.delete(this.props.index);
	}

	render() {
		return (
			<div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
		)
	}
```
在子组件中绑定一个click事件 将传递过来的方法在click事件中调用将`index`传入， 从而实现了子组件向父组件传递数据

## 样式问题
在JSX语法中无法直接使用style属性添加样式

 1. 可以使用js表达式的方式添加一个样式对象

``` jsx
 <button style={{background: 'red'}} onClick={this.handleBtnClick}>add</button>
 ```
 
 2. 可以使用className属性定义原生的Class样式类
 ``` jsx
 <button className='red-btn' onClick={this.handleBtnClick}>add</button>
 ```






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
