let elements=document.querySelectorAll('p');
for(let i=0;i<elements.length;i++)
    elements[i].innerText = truncateText(elements[i], 100);
    function truncateText(selector, maxLength) {
            truncated = selector.innerText;
        if (truncated.length > maxLength) {
            truncated = truncated.substr(0,maxLength) + '...';
        }
        return truncated;
    }
