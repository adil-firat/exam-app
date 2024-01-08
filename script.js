const vize = document.querySelector("#vize");
const ödev = document.querySelector("#ödev");
const final = document.querySelector("#final");
const ortalamaPuanText = document.querySelector(".ortalama");
const harfNotuText = document.querySelector(".harf-notu");

const hesaplaBtn = document.querySelector(".btn-hesapla");

hesaplaBtn.addEventListener("click", function () {
  const ortalamaPuan = vize.value * 0.3 + ödev.value * 0.1 + final.value * 0.6;

  if (ortalamaPuan > 90) {
    ortalamaPuanText.innerHTML = `Ortalama Puan : ${ortalamaPuan.toFixed(2)}`;
    harfNotuText.textContent = `Harf Notu : AA`;
    harfNotuText.style.color = "green";
  } else if (ortalamaPuan > 80) {
    ortalamaPuanText.innerHTML = `Ortalama Puan : ${ortalamaPuan.toFixed(2)}`;
    harfNotuText.textContent = `Harf Notu : BA`;
    harfNotuText.style.color = "green";
  } else if (ortalamaPuan > 70) {
    ortalamaPuanText.innerHTML = `Ortalama Puan : ${ortalamaPuan.toFixed(2)}`;
    harfNotuText.textContent = `Harf Notu : BB`;
    harfNotuText.style.color = "green";
  } else if (ortalamaPuan > 60) {
    ortalamaPuanText.innerHTML = `Ortalama Puan : ${ortalamaPuan.toFixed(2)}`;
    harfNotuText.textContent = `Harf Notu : CB`;
    harfNotuText.style.color = "orange";
  } else if (ortalamaPuan > 50) {
    ortalamaPuanText.innerHTML = `Ortalama Puan : ${ortalamaPuan.toFixed(2)}`;
    harfNotuText.textContent = `Harf Notu : CC`;
    harfNotuText.style.color = "orange";
  } else if (ortalamaPuan > 40) {
    ortalamaPuanText.innerHTML = `Ortalama Puan : ${ortalamaPuan.toFixed(2)}`;
    harfNotuText.textContent = `Harf Notu : DC`;
    harfNotuText.style.color = "red";
  } else if (ortalamaPuan > 30) {
    ortalamaPuanText.innerHTML = `Ortalama Puan : ${ortalamaPuan.toFixed(2)}`;
    harfNotuText.textContent = `Harf Notu : DD`;
    harfNotuText.style.color = "red";
  } else {
    ortalamaPuanText.innerHTML = `Ortalama Puan : ${ortalamaPuan.toFixed(2)}`;
    harfNotuText.textContent = `Harf Notu : FF`;
    harfNotuText.style.color = "red";
  }
});

const resetBtn = document.querySelector(".btn-reset");
resetBtn.addEventListener("click", resetleme);
function resetleme() {
  ortalamaPuanText.innerHTML = `Ortalama Puan : --`;
  harfNotuText.textContent = `Harf Notu : --`;
  harfNotuText.style.color = "black";
}

alert(
  "Vize Notu : 30%\nödev Notu : 60%\nDeğerleri Baz Alınarak Hesaplanmıştır"
);
