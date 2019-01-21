const url = 'https://douban.uieee.com/v2';


// 异步请求成功会用到的同步 action 创建函数
function actionSuccess(msg) {
    return {
        type: 'SUCCESS',
        message: msg
    }
}

// 异步请求失败会用到的同步 action 创建函数
function actionError() {
    return {
        type: 'ERROR'
    }
}

// 暴露出异步 Action
export  function fetchAction(param) {
    // 异步 action 的固定写法，返回一个函数，第一个参数为 dispatch 函数，第二个参数为 state
    return (dispatch, state) => {
        // 执行异步操作
        fetch(url)
            .then(response => response.json)
            // 请求成功调用成功的同步 Action
            .then(json => dispatch(actionSuccess(actionSuccess)))
            .catch(error => dispatch(actionError()))
    }
}