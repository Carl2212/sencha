
// @require @packageOverrides
// @require @appOverrides
Ext.application({
    name: 'Sme',
    requires: ["Sme.util.JsonP","Sme.util.Request","Sme.util.Tools"...],
    controllers: ['User','Home','Doc','NewDoc'...],
    stores: ['AppMenus'],
    views: ['Frame'],
    launch: function () {
        Ext.Viewport.add({
            xclass: 'Sme.view.Frame'
        });

    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "更新提示",
            "应用已更新,现在是否重新加载?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
