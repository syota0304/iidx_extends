const prefKeys = [
    'playStyle',
    'level',
    'difficult',
    'clearType',
];

function Save(){
    const pref = {};
    for(const prefKey of prefKeys){
        pref[prefKey] = document.getElementById(prefKey).value
    }

    chrome.storage.local.set({'pref': pref});
}

async function Load(){
    const pref = await chrome.storage.local.get('pref');
    if(!pref.pref){
        Save();
        return;
    }
    for(const prefKey of prefKeys){
        if(pref.pref[prefKey]){
            document.getElementById(prefKey).value = pref.pref[prefKey];
        }
    }
}

document.addEventListener('DOMContentLoaded', Load);

document.getElementById('save').addEventListener('click', Save);