const guestList = {
      "Ceren Havaylar": "Masa 1",
      "Erdoğan Havaylar": "Masa 1",
      "Hediye Bilgili": "Masa 3",
      "Ebru Gönen": "Masa 6"
};

function findTable() {
  const nameInput = document.getElementById("guestName").value.toLowerCase().trim();
  const result = document.getElementById("result");
  
  if (guestList[nameInput]) {
    result.textContent = `${nameInput.toUpperCase()} ${guestList[nameInput]} numaralı masada oturuyor.`;
  } else {
    result.textContent = "Bu isim listede bulunamadı.";
  }
}
