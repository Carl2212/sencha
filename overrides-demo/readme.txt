sencha cmd 4.0.1
��д �� 
/��Ŀ¼/overrides/��д�ļ���FieldScroller.js��
Ext.define('Sme.overrides.FieldScroller', {
    override: 'Ext.viewport.Default',//����Ҫ��д�������
    constructor: function(){//��дcontructor��ʼ������ 
        this.callParent(arguments);//������д�ı�������
        var bind = Ext.Function.bind;
        this.addWindowListener('resize', bind(this.scrollFocusedFieldIntoView, this));
    },
    onElementFocus: function() {
        this.callParent(arguments);
        this.scrollFocusedFieldIntoView();
    },
    scrollFocusedFieldIntoView: function() {
});

������д��

�޸��ļ���.sencha/app/refresh-impl.xml��
-tag=overrides         
	||
-tag=packageOverrides
-tag=appOverrides

�޸��ļ���.sencha/app/sencha.cfg��
���app.overrides=${app.dir}/overrides

�޸��ļ� app.js
�������
// @require @packageOverrides
// @require @appOverrides

���refresh�������ø���֮��
ִ�� sencha app refresh
��ɸ���
���Է���bootstrap.js�ļ���override load�����ø���
