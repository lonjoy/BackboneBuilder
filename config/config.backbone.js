module.exports = {    /**     * 使用的模块     *     *     */      "Use" : {          "Collection" : false        , "Events"     : true        , "History"    : true        , "Model"      : true        , "Router"     : true        , "Sync"       : true        , "View"       : true    }        /**     * 是否仅支持浏览器     *     *     */    , "OnlyBrowser" : true        /**     * 不支持的浏览器类型     *     *     */    , "BrowserNotSupport" : ["IE"]        /**     * 依赖的Underscore API     *     * build时会需要     */    , "Underscore" : {          "Require" : []        , "NotLoadFiles" : [                ]    }        /**     * 依赖库     *     *      */    , "Library" : {          "Zepto" : true        , "GMU"   : true    }                /**     * 分析的入口文件路径     *     *      */    , "MainFile" : "src/Backbone/Backbone.js"    };