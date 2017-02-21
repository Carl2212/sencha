Ext.define('Sme.overrides.FieldScroller', {
    override: 'Ext.viewport.Default',
    constructor: function(){
        this.callParent(arguments);
        var bind = Ext.Function.bind;
        this.addWindowListener('resize', bind(this.scrollFocusedFieldIntoView, this));
    },
    onElementFocus: function() {
        this.callParent(arguments);
        this.scrollFocusedFieldIntoView();
    },
    scrollFocusedFieldIntoView: function() {
        //理论上focus触发的第一次是不滚动的 弹出keyboard之后窗口重新resize之后才真正发生滚动
        var me = this,
            focusedDom = me.focusedElement,
            fieldEl = focusedDom && Ext.fly(focusedDom).up('.x-field'),
            fieldId = fieldEl && fieldEl.id,
            fieldCmp = fieldId && Ext.getCmp(fieldId),
            offsetTop = 0,
            scrollingContainer, scroller, scrollerEl, domCursor, thresholdY, containerHeight;
        if (!fieldCmp) {
            return;
        }

        setTimeout(function(){
            scrollingContainer = fieldCmp.up('{getScrollable()}');

            if (scrollingContainer) {
                scroller = scrollingContainer.getScrollable().getScroller();
                scrollerEl = scroller.getElement();
                domCursor = focusedDom;

                while (domCursor && domCursor !=scrollerEl.dom) {
                    offsetTop += domCursor.offsetTop;
                    domCursor = domCursor.offsetParent;
                }
                //可视区域高度
                containerHeight = scroller.getContainerSize().y;
                //目标元素底部到scrollingContainer元素的高度
                thresholdY = offsetTop + fieldEl.getHeight() + (me.config.fieldFocusPadding || 40);

                //scroller.position.y == scrollTop
                if (scroller.position.y + containerHeight < thresholdY) {//目标元素不在可视区域内，滚动
                    scroller.scrollTo(0, thresholdY - containerHeight, true);
                }
            }
        },100);
    }
});
/**/