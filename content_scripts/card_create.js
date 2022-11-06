const version = window.location.pathname.split('/')[3];

Array.from(document.querySelectorAll('.bingo-table td > center')).map(
    e=>e.innerHTML = e.innerHTML
        .replace('FULLCOMBO CLEAR',`<img src="/game/2dx/${version}/images/score_icon/clflg7.gif">`)
        .replace('EX HARD CLEAR',`<img src="/game/2dx/${version}/images/score_icon/clflg6.gif">`)
        .replace('HARD CLEAR',`<img src="/game/2dx/${version}/images/score_icon/clflg5.gif">`)
        .replace('EASY CLEAR',`<img src="/game/2dx/${version}/images/score_icon/clflg3.gif">`)
        .replace('ASSIST CLEAR',`<img src="/game/2dx/${version}/images/score_icon/clflg2.gif">`)
        .replace('FAILED',`<img src="/game/2dx/${version}/images/score_icon/clflg1.gif">`)
        .replace('NO PLAY',`<img src="/game/2dx/${version}/images/score_icon/clflg0.gif">`)
        .replace('CLEAR',`<img src="/game/2dx/${version}/images/score_icon/clflg4.gif">`)
        .replace('BEGINNER',`<img class="difficulty" src="/game/2dx/${version}/images/ranking/diff_beginner.png">`)
        .replace('NORMAL',`<img class="difficulty" src="/game/2dx/${version}/images/ranking/diff_normal.png">`)
        .replace('HYPER',`<img class="difficulty" src="/game/2dx/${version}/images/ranking/diff_hyper.png">`)
        .replace('ANOTHER',`<img class="difficulty" src="/game/2dx/${version}/images/ranking/diff_another.png">`)
        .replace('LEGGENDARIA',`<img class="difficulty" src="/game/2dx/${version}/images/ranking/diff_leggendaria.png">`)
);