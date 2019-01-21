import Mock, {Random} from 'mockjs';
import FetchMock from 'fetch-mock';
import { stringify } from 'postcss';

const test = {
    "array|1-10": [
      {
        "name|+1": [
          "Hello",
          "Mock.js",
          "!"
        ]
      }
    ]
  };

  // 所有的菜单数据
const menus = [
    { id: 1, title: '首页', icon: 'home', url: '/home', parent: null, desc: '首页', sorts: 0, conditions: 1  },
    { id: 2, title: '系统管理', icon: 'setting', url: '/system', parent: null, desc: '系统管理目录分支', sorts: 1, conditions: 1  },
    { id: 3, title: '用户管理', icon: 'user', url: '/useradmin', parent: 2, desc: '系统管理/用户管理', sorts: 0, conditions: 1  },
    { id: 4, title: '角色管理', icon: 'team', url: '/roleadmin', parent: 2, desc: '系统管理/角色管理', sorts: 1, conditions: 1  },
    { id: 5, title: '权限管理', icon: 'coffee', url: '/poweradmin', parent: 2, desc: '系统管理/权限管理', sorts: 2, conditions: 1  },
    { id: 6, title: '菜单管理', icon: 'appstore', url: '/menuadmin', parent: 2, desc: '系统管理/菜单管理', sorts: 3, conditions: 1  },
];


// 配置需要mock的路由
FetchMock.get('/api', {results: [{'test':22323}]});
FetchMock.once('/path/to/api2', Mock.mock(test));
FetchMock.once('/path/to/api3', Mock.mock(test));
FetchMock.once('/path/to/api4', Mock.mock(test));

// 其他路由使用原生fetch，这段代码必须放最后
FetchMock.once('*', (url, options) => {
  FetchMock.restore();
  return fetch(url, options);
});

