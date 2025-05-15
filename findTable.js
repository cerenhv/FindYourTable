async function findTable() {
  const name = document.getElementById("guestName").value;
  const url = `https://script.google.com/macros/s/AKfycbx8tqvstirWvGepaKYv2l8qY0X_6mFNZC9wel4qm2MPhw5o_HN6jMhwsaaJsygMBWZH/exec?guest=${encodeURIComponent(name)}`;
  const result = document.getElementById("result");

  try {
    const response = await fetch(url);
    const guests = await response.json();

    if (guests.length > 0) {
      result.innerHTML = guests.map(
        g => `👤 ${g["İsim"]} → Masa ${g["Masa"]} (${g["Tip"]})`
      ).join("<br>");
    } else {
      result.textContent = "⚠️ Bu isim listede bulunamadı.";
    }
  } catch (error) {
    result.textContent = "❌ Bir hata oluştu.";
    console.error(error);
  }
}
