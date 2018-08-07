window.chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => 
    {
        let activeElement = document.activeElement;
        if(activeElement.textContent == '')
        {
            activeElement.textContent = request.message;
        }
        else
        {
            // paste in the middleof the existing text
            activeElement.textContent = pasteElementWithText(activeElement.textContent, request.message);
        }
    }
);

function getCursorPosition() {
    return window.getSelection().getRangeAt(0).startOffset;
}

function pasteElementWithText(currentText, emoji)
{
    return currentText.substring(0, getCursorPosition())
        + emoji
        + currentText.substring(getCursorPosition());
}
