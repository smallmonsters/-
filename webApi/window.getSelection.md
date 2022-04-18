### window.getSelection

* [window.getSelection](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getSelection)可以获取页面选中的文本

* window.getSelection返回[Selection对象](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection)

* 可以对Selection对象进行以下操作
  * 可以通过selection.getRangeAt(0)获取 [Range对象](https://developer.mozilla.org/en-US/docs/Web/API/Range)

  ``` JavaScript
  var selection = window.getSelection();
  var range  = selection.getRangeAt(0);
  ```

PS：  
在Firefox, Edge (非 Chromium 版本) 及 Internet Explorer 中，getSelection() 对 \<textarea> 及 \<input> 元素不起作用。 HTMLInputElement.setSelectionRange() 或 selectionStart 及 selectionEnd 属性可用于解决此问题。
