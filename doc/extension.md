# Scratch-GUI 的 extension 制作方法

## 参考样例

[example-extension](https://github.com/LLK/scratch-gui/blob/develop/src/examples/extensions/example-extension.js)

## 为 GUI 制作 extension

- 创建 extension 的存储目录

```shell
mkdir build
```

- 编写 extension

```js
const LinkSystemExtension = function() {};

LinkSystemExtension.prototype.getInfo = function() {
    return {
        id: "linksystem",
        name: "Linksystem",
        blocks: [
            {
                opcode: "getBrowserName",
                blockType: Scratch.BlockType.REPORTER,
                text: "Get Browser's Name",
            }
        ],

        // translation_map: {
        //     zh: {
        //         extensionName: "LinkSystem-Browser",
        //         getBrowserName: "浏览器"
        //     }
        // }
    };
};

LinkSystemExtension.prototype.getBrowserName = function(args) {
    return navigator.appVersion;
};

Scratch.extensions.register(new LinkSystemExtension());
```

- 在 GUI 中配置 extension 的ICON

```shell
# 进入 GUI 配置插件的目录
cd src/lib/libraries/extensions
# 创建插件存放的 ICON 目录
mkdir linksystem
# 添加的文件，如下所示
ll -a linksystem/
# 插件的 ICON
-rwxrwxrwx 1 zhi zhi 10875 Apr  4 13:38 browser.svg*
# 插件的封面
-rwxrwxrwx 1 zhi zhi 20674 Apr  4 13:51 network.svg*
```

- 配置使用对应的 Extension, 此文件

```js
import React from 'react';
import {FormattedMessage} from 'react-intl';

...

// 插件的 ICON
import browserIconURL from './browser/browser.svg';
// 插件的封面
import browserInsetIconURL from './browser/network.svg';

export default [
    ...
    {
        name: 'LinkSystem Connector',
        // 指定你的插件，注意需要与你的 extension 的 javascript 的 id 对应
        extensionId: 'linksystem',
        // 如果是存在 build 目录下面， 只需按照下面的格式进行
        extensionURL: './linksystem-extension.js',
        iconURL: browserIconURL,
        insetIconURL: browserInsetIconURL,
        // 插件的描述
        // description: (
        //     <FormattedMessage
        //         defaultMessage="Connect the world by Browser"
        //         description="Connect the world by Browser"
        //         id="browser"
        //     />
        // ),
        featured: true,
        // 是否禁用插件
        disabled: false,
    },
    ...
];
```