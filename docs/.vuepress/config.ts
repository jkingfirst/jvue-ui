import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
export default defineUserConfig({
    lang: 'zh-CN',
    title: 'jvue-ui',
    description: 'vue-ui',
    plugins: [
        searchPlugin({
            // 配置项
            maxSuggestions:5,
            hotKeys:['ctrl', 'k']
        }),
        docsearchPlugin({
            // 配置项
            appId: '<APP_ID>',
            apiKey: '<API_KEY>',
            indexName: '<INDEX_NAME>',
            placeholder: '搜索文档',
        }),
        backToTopPlugin()
    ],
    theme: defaultTheme({
        logo:'/images/logo.png',
        // 在这里进行配置
        navbar:[
            {
                text:'指南',
                link:'/guide/home/home.md'
            }, {
                text:'参考',
                link:'/'
            } , {
                text:'插件',
                link:'/'
            },{
                text:'了解更多',
                children: [
                    {
                        text: 'webpack',
                        link:'/group/foo.md'
                    },
                    {
                        text: 'vite',
                        link:'/group/bar.md'
                    }
                ],
            },{
                text: 'GitHub',
                link: 'https://github.com',
                target:'_blank',
                rel:''
            }
        ],
        sidebar: [
            {
                text:'指南',
                link:'/guide/home/home.md'
            }
        ]
    }),
})
