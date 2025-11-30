const infoBox = document.getElementById('info-box');
const imageBox = document.getElementById('image-box');

// 離島對應圖片 (單張用字串，多張用陣列)
const islandImages = {
  TWKIN: 'img/kinmen.png',
  TWLIE: 'img/matsu.png',
  TWPEN: 'img/penghu.png',
  TWPIF: ['img/pingtung_1.png','img/pingtung_2.png'],
  TWTTT: ['img/taitung_1.png','img/taitung_2.png']
};

// 離島 ID 列表
const islandIds = ['TWKIN', 'TWLIE', 'TWPEN', 'TWPIF', 'TWTTT'];

document.querySelectorAll('path').forEach(path => {
  path.addEventListener('click', () => {
    // 顯示縣市名稱
    infoBox.textContent = path.getAttribute('name');

    // 清空舊圖片
    imageBox.innerHTML = '';

    // 如果是離島，生成對應圖片
    if(islandIds.includes(path.id) && islandImages[path.id]) {
      let imgs = islandImages[path.id];
      if(!Array.isArray(imgs)) imgs = [imgs]; // 單張圖片轉成陣列

      imgs.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.style.width = '300px'; // 統一圖片大小
        img.style.height = 'auto';
        img.style.margin = '10px';
        imageBox.appendChild(img);
      });
    }
  });
});

function goBack(){
    window.location.href="https://ChiaYunn.github.io/front_page.html";
}