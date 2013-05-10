#Backbone拆分打包##为什么会有这个项目？1. 在无线端，对文件体积的要求比较高。2. 根据业务特征的不同，需要对部分功能做拆分、重构或删除 ## 优化点1. 仅加载被Backbone依赖的Underscore API。2. 移除IE的支持。3. Underscore中已被Zepto(或GMU)实现的功能做转换。4. 使得Backbone的Event、Model、Collection、View、Router、History、Sync及其子功能可以定制。5. 对emulateHTTP/emulateJSON的支持可定制。5. HTTP Method的定制(是否支持PUT/CREATE/DELETE/PATCH)。##如何使用？###环境依赖`node.js`###配置关于配置，请参考Config目录具体文件。###打包`node build.js`###压缩:`uglifyjs pack.js -m -o pack.min.js`##优化说明###环境说明1. 使用uglifyjs压缩，开启-m参数。2. 开启apache gzip##优化过程<table>    <thead>        <tr>            <td>优化点</td>            <td>体积(uglifyjs+gzip)</td>        </tr>    </thead>    <tbody>        <tr>            <td>Underscore.js+Backbone.js</td>            <td>10.8</td>        </tr>                <tr>            <td>删除未使用的Underscore API</td>            <td>8.0</td>        </tr>        <tr>            <td>适配Underscore API至GMU</td>            <td>7.8</td>        </tr>        <tr>            <td>移除IE支持</td>            <td>7.4</td>        </tr>        <tr>            <td>移除emulateHTTP/emulateJSON及HTTP PUT/CREATE/DELETE/PATCH支持</td>            <td>7.1</td>        </tr>        <tr>            <td>移除Collection支持</td>            <td>5.6</td>        </tr>        <tr>            <td>精简Backbone非常用API(见下详述)</td>            <td> 4.3 </td>        </tr>        <tr>            <td>改造Model</td>            <td> -- </td>        </tr>    </tbody></table>##关于精简Backbone非常用API1. History仅支持start2. Model移除changed,changedAttributes,clear,clone,escape,has,hasChanged,idAttribute,isValid,previous,previousAttributes,save,unset,validationError3. View移除setElement支持##备忘1. `Underscore.js`的`isEqual`的优化2. `Backbone.js`的`extend`的优化(可以使用$.extend的深度复制么？)