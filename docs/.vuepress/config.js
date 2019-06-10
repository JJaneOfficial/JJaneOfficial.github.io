module.exports = {	
    base: '/jjane/',
    title: 'JJane极简',
    description: 'JJane Official Site',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json'}]
    ],
    //站点多语言配置
    locales: { 	
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
          title: 'JJane极简',
          description: 'Vue-powered Static Site Generator'
        },
        '/zh/': {
          lang: 'zh-CN',
          title: 'JJane极简',
          description: '超值产品级Java源码包'
        }
    },    
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://janemall.cn',
        // 自定义仓库链接文字。
        repoLabel: '官网',
        //默认主题多语言配置
        locales: {
        	//英文
	        '/': {
		        selectText: 'Languages',
		        label: 'English',
		        editLinkText: 'Edit this page on GitHub',
		        serviceWorker: {
		          updatePopup: {
		            message: "New content is available.",
		            buttonText: "Refresh"
		          }
		        },
		        algolia: {},
		        nav: [
		          { text: 'Home', link: '/' },
	              { text: 'Archive',
	                items: [
	                  { text: 'SpringBoot', link: '/SpringBoot/' },
	                  { text: 'Docker', link: '/Docker/' },
	                  { text: '微服务', link: '/微服务/' }
	                ] 
	              },
	              { text: 'About', link: '/about/' }
	        	],
		        sidebar: {
            		'/SpringBoot/': [
                        "",
                        "SpringBoot"
                    ],
                    '/Docker/': dockerSidebarConfig('Docker'),
            	}
	        },
	        //中文
	        '/zh/': {
		        // 多语言下拉菜单的标题
		        selectText: '选择语言',
		        // 该语言在下拉菜单中的标签
		        label: '简体中文',
		        // 编辑链接文字
		        editLinkText: '在 GitHub 上编辑此页',
		        // Service Worker 的配置
		        serviceWorker: {
		          updatePopup: {
		            message: "发现新内容可用.",
		            buttonText: "刷新"
		          }
		        },
		        // 当前 locale 的 algolia docsearch 选项
		        algolia: {},
		        nav: [
		          { text: '首页', link: '/zh/' },
	              { text: '极简点餐', link: '/zh/jjanefood/' },
                { text: '极简支付', link: '/zh/jjanepay/' },
                { text: '极简超市', link: '/zh/jjanemall/' },
                { text: '极简商城', link: '/zh/jjaneshop/' },
                { text: '关于', link: '/zh/about/' }
	        	],
		        sidebar: {
                  '/zh/jjanefood/': jjaneFoodSidebarConfig('JJane Food'),
                	'/zh/jjanepay/': jjanePaySidebarConfig('JJane Pay'),
                  '/zh/jjanemall/': jjaneMallSidebarConfig('JJane Mall'),
                	'/zh/jjaneshop/': jjaneShopSidebarConfig('JJane Shop')
            	},
            	sidebarDepth: 2,
        		lastUpdated: 'Last Updated',
	      	}
        }
        
    },
    markdown: {
    	//显示行号
	  	lineNumbers: true
	}
}


//极简点餐 侧边栏配置
function jjaneFoodSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: ['', '简介', '运行环境搭建', '在阿里云（CentOS）上部署']
    }
  ]
}

//极简支付 侧边栏配置
function jjanePaySidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: ['', '简介', '运行环境搭建']
    }
  ]
}

//极简超市 侧边栏配置
function jjaneMallSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: ['', '简介', '运行环境搭建']
    }
  ]
}

//极简商城 侧边栏配置
function jjaneShopSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: ['', '简介', '运行环境搭建']
    }
  ]
}

//
function dockerSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: ['', '什么是Docker', '为什么要使用Docker', 'Ubuntu安装Docker', 'Docker引擎', 'Docker系统架构','Docker容器','Docker镜像加速器','Docker镜像','Docker仓库']
    }
  ]
}

//
function dockerComposeSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: ['', '什么是Docker', '为什么要使用Docker', 'Ubuntu安装Docker', 'Docker引擎', 'Docker系统架构','Docker容器','Docker镜像加速器','Docker镜像','Docker仓库']
    }
  ]
}

