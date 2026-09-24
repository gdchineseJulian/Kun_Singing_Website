// 1. 取得 HTML 裡的元素。
const cards = document.querySelectorAll('.card');
const filters = document.querySelectorAll('.filter');
const search = document.querySelector('#search');
const player = document.querySelector('#player');
const audio = document.querySelector('#audio');
const message = document.querySelector('#player-message');
let category = '全部';

// 2. 依照分類與搜尋文字，顯示或隱藏歌曲。
function filterSongs() {
  const keyword = search.value.trim().toLowerCase();
  let count = 0;

  cards.forEach(card => {
    const matchesCategory = category === '全部' || card.dataset.category === category;
    const matchesKeyword = card.textContent.toLowerCase().includes(keyword);
    card.hidden = !(matchesCategory && matchesKeyword);
    if (!card.hidden) count++;
  });

  document.querySelector('#song-count').textContent = `${count} 首歌曲`;
  document.querySelector('#empty').hidden = count !== 0;
}

search.addEventListener('input', filterSongs);

filters.forEach(button => {
  button.addEventListener('click', () => {
    category = button.dataset.category;
    filters.forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    filterSongs();
  });
});

// 3. 點封面後，將這首歌的資料放進播放器。
cards.forEach(card => {
  card.addEventListener('click', () => {
    const cover = card.querySelector('img');
    document.querySelector('#song-cover').src = cover.src;
    document.querySelector('#song-cover').alt = cover.alt;
    document.querySelector('#song-title').textContent = card.querySelector('h2').textContent;
    document.querySelector('#song-artist').textContent = card.querySelector('p').textContent;

    audio.pause();
    audio.removeAttribute('src');
    const file = card.dataset.audio;
    audio.hidden = !file;
    if (file) {
      audio.src = file;
      message.textContent = '按下播放鍵開始聆聽。';
    } else {
      message.textContent = '尚未加入音檔。';
    }
    audio.load();
    player.showModal();
  });
});

// 4. 關閉視窗（包含 Esc）時停止播放。
document.querySelector('#close').addEventListener('click', () => player.close());
player.addEventListener('close', () => audio.pause());

audio.addEventListener('error', () => {
  if (audio.getAttribute('src')) {
    message.textContent = '無法載入音檔，請確認檔案路徑與音訊格式。';
  }
});
audio.addEventListener('playing', () => {
  message.textContent = '';
});

filterSongs();
