sencha cmd 4.0.1
重写 ： 
/根目录/overrides/重写文件（FieldScroller.js）
Ext.define('Sme.overrides.FieldScroller', {
    override: 'Ext.viewport.Default',//定义要重写的组件名
    constructor: function(){//重写contructor初始化函数 
        this.callParent(arguments);//调用重写的本来方法
        var bind = Ext.Function.bind;
        this.addWindowListener('resize', bind(this.scrollFocusedFieldIntoView, this));
    },
    onElementFocus: function() {
        this.callParent(arguments);
        this.scrollFocusedFieldIntoView();
    },
    scrollFocusedFieldIntoView: function() {
});

加载重写类

修改文件（.sencha/app/refresh-impl.xml）
-tag=overrides         
	||
-tag=packageOverrides
-tag=appOverrides

修改文件（.sencha/app/sencha.cfg）
添加app.overrides=${app.dir}/overrides

修改文件 app.js
添加以下
// @require @packageOverrides
// @require @appOverrides

完成refresh命令配置更改之后
执行 sencha app refresh
完成更新
可以发现bootstrap.js文件有override load的配置更新
