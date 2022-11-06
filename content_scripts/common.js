chrome.storage.local.get('pref', (preference) => {
    const pref = preference.pref ?? {
        playStyle: 0,
        level: 11,
        difficult: 3,
        clearType: 0,
    };

    const play_style = document.querySelectorAll('[name="play_style"], [name="style"]');
    for(const play_style_element of play_style){
        play_style_element.options[pref.playStyle].selected = true;
    }

    const play_menu = document.getElementById('play-menu');
    if(play_menu){
        play_menu.children[0].children[pref.playStyle].click();
    }

    const level = document.getElementsByName("difficult");
    for(const level_element of level){
        level[0].options[pref.level].selected = true;
    }

    const difficult = document.getElementsByName("note_detail");
    for(const difficult_element of difficult){
        difficult[0].options[pref.difficult].selected = true;
    }

    const series_menu = document.getElementById('series-menu');
    if(series_menu){
        series_menu.children[0].children[pref.difficult].click();
    }

    const clear = document.getElementsByName("clear_type");
    for(const clear_element of clear){
        clear[0].options[pref.clearType].selected = true;
    }
});