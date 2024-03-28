function surroundSelection(x) {
        var span = document.createElement("span");
        const className = x.getAttribute('class');
        console.log(className)
        var span = document.createElement("span");
        span.style.fontWeight = "bold";
        span.style.color = "black";

        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.rangeCount) {
                var range = sel.getRangeAt(0).cloneRange();
                range.surroundContents(span);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    }