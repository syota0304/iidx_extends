const ulElement = document.querySelectorAll('#base-inner > div.music-name > ul')[0];
const [title, genre, artist] = Array.from(ulElement.children).map(e=>e.innerText);

const btn = document.createElement("button");
btn.innerHTML = "コピー";
btn.onclick = () => {
    navigator.clipboard.writeText(`${title}\t${genre}\t${artist}`)
};
ulElement.appendChild(btn);