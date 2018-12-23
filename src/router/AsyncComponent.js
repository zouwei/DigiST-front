import Loading from 'components/Loading'

export default function (component) {
    return function () {
        return {
            // 需要加载的组件 (应该是一个 `Promise` 对象)
            component,
            // 异步组件加载时使用的组件
            loading: Loading
        }
    }
}
