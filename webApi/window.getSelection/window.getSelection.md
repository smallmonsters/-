### window.getSelection

* [window.getSelection](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getSelection)可以获取页面选中的文本

* window.getSelection返回[Selection对象](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection)  
  >可以获取选中的文本的node对象  
  >获取选取开始/结束位置  
  >containsNode能判断指定的节点是否包含在Selection中(是否被选中)  
  >添加/移除/获取(selection.getRangeAt(0))Range对象  
  >extend改变锚点到焦点的范围  
  >selectAllChildren把指定元素的所有子元素设为选中区域，并取消之前的选中区域  
  >selection.toString获取选中的文本

PS：  
在Firefox, Edge (非 Chromium 版本) 及 Internet Explorer 中，getSelection() 对 \<textarea> 及 \<input> 元素不起作用。 HTMLInputElement.setSelectionRange() 或 selectionStart 及 selectionEnd 属性可用于解决此问题。

[Demo](http://htmlpreview.github.io/?https://github.com/smallmonsters/my-growth/blob/master/webApi/window.getSelection/demo/index.html)
