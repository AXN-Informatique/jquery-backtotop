# jQuery "back to top" pluggin

```html
<script src="jquery.js"></script>
<script src="jquery.backtotop.js"></script>
```

```html
<button id="btn-back-to-top">Back to top</button>
```

```css
#btn-back-to-top {
    position: fixed;
    bottom: 15px;
    right: 15px;
    display: none;
}
```

```javascript
(function($) {
    $('#btn-back-to-top').backtotop();
})(jQuery);
```

With options :

```javascript
(function($) {
    $('#btn-back-to-top').backtotop({
        showAt: 200,
        fadeInDelay: 400,
        fadeOutDelay: 400,
        scrollTopDelay: 600
    });
})(jQuery);
```
