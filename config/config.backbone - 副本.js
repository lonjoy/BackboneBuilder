module.exports = {    /**     * 使用的模块     *     *     */      "Use" : {          "Collection" : false        , "Events"     : {              "on"            : true            , "once"          : true            , "stopListening" : true            , "trigger"       : true        }        , "History"    : {              "checkUrl"    : false            , "getFragment" : false            , "getHash"     : false            , "loadUrl"     : false            , "navigate"    : false            , "route"       : false            , "start"       : true            , "stop"        : false        }        , "Model"      : {              "changed"            : false            , "changedAttributes"  : false            , "clear"              : false            , "clone"              : false            , "destroy"            : true            , "escape"             : false            , "fetch"              : true            , "get"                : true            , "has"                : false            , "hasChanged"         : false            , "idAttribute"        : false            , "initialize"         : true            , "isNew"              : false            , "isValid"            : false            , "parse"              : true            , "previous"           : false            , "previousAttributes" : false            , "save"               : false            , "set"                : false            , "sync"               : false            , "toJSON"             : true            , "unset"              : false            , "url"                : true            , "validationError"    : false        }        , "Router"     : {              "initialize" : true            , "navigate"   : true            , "route"      : true        }        , "Sync"       : true        , "View"       : {              "$"                : true            , "delegateEvents"   : true            , "initialize"       : true            , "remove"           : true            , "render"           : true            , "setElement"       : false            , "tagName"          : true            , "undelegateEvents" : true        }        , "emulateHTTP" : false        , "emulateJSON" : false                //1 = post/get        //2 = post/get/put/create/delete/patch        , "EnableHTTPMethodLevel" : 1    }        /**     * 是否仅支持浏览器     *     *     */    , "OnlyBrowser" : true        /**     * 不支持的浏览器类型     *     *     */    , "BrowserNotSupport" : {        "IE" : true    }        /**     * 依赖的Underscore API     *     * build时会需要     */    , "Underscore" : {          "Require" : []        , "NotLoadFiles" : [                ]    }        /**     * 依赖库     *     *      */    , "Library" : {          "Zepto" : {            "NameSpace" : "$"          }        , "GMU"   : {            "NameSpace" : "$"        }    }                /**     * 分析的入口文件路径     *     *      */    , "MainFile" : "src/Backbone/Backbone.js"    };