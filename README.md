# 光景 Moments — 音樂作品集

使用純HTML、CSS、JavaScript 製作的純前端網頁。一張封面對應一首歌，沒有框架也沒有後端。
直接用瀏覽器開啟 index.html 即可。

## 檔案分工

- index.html：歌曲卡片、標題、分類與內建 audio 播放器。
- style.css：顏色、間距與電腦三欄／手機一欄排版。
- script.js：搜尋、分類及點封面後載入歌曲。
- audio/：資料夾放我MP3的檔案。
- images/：放自己的封面。

## 如何加入歌？

1. 將 MP3 放到 audio 資料夾，例如 audio/my-song.mp3。
2. 在 index.html 找到該歌曲的 data-audio=""，改成 data-audio="audio/my-song.mp3"。
3. 修改卡片內的 h2 歌名、p 演唱者，以及 aria-label 的歌名。
4. 將封面放到 images 資料夾，修改 img 的 src，例如 images/my-cover.jpg，並更新 alt 描述。
5. 要新增歌曲，複製一個完整的 button class="card" 區塊。歌曲數量會自動更新。

分類 data-category 可填「我的歌聲」或「音樂收藏」。
封面點開後，按內建播放器的播放鍵開始聆聽；關閉視窗或按 Esc 會暫停音樂。
示範封面來自 Unsplash，需要網路連線；替換為本機封面後可離線使用。

## 發布前檢查

- 加入真實音檔後，確認播放、暫停、拖曳進度與音量操作。
- 確認關閉視窗後音樂停止，換歌時不會同時播放兩首。
- 確認搜尋、分類與手機版排版。
- 這是靜態網站，發布後音檔可以被存取；只放你有權公開分享的內容。
