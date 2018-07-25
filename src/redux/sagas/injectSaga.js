import { takeEvery } from 'redux-saga/effects';

function* pasteItem(action) {
    yield window.chrome.tabs.getSelected(null, (tab) => {
        window.chrome.tabs.sendMessage(
            tab.id,
            {message: action.text}
        )
    })
}

export function* inject () {
    yield takeEvery("INJECT", pasteItem);
}
