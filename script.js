// Sayfa yüklendiğinde notları yükle
window.onload = function() {
    loadNotes();
};

// Notu ekleme ve kaydetme işlevi
function addNote() {
    const noteArea = document.getElementById("note-area");
    const noteText = noteArea.value.trim();

    if (noteText !== "") {
        // Notu diziye ekle
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push(noteText);
        localStorage.setItem("notes", JSON.stringify(notes));

        // Notu listeye ekle
        displayNotes();
        noteArea.value = "";  // Giriş alanını temizle
    } else {
        alert("Lütfen bir not yazın.");
    }
}

// Notları yükleme ve gösterme işlevi
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(note => {
        addNoteToList(note);
    });
}

// Tek bir notu listeye ekleme
function addNoteToList(note) {
    const noteList = document.getElementById("note-list");
    const listItem = document.createElement("li");
    listItem.textContent = note;
    noteList.appendChild(listItem);
}

// Notları sayfada gösterme (listeyi temizleyip yeniden oluşturma)
function displayNotes() {
    const noteList = document.getElementById("note-list");
    noteList.innerHTML = ""; // Mevcut listeyi temizle
    loadNotes(); // Notları yeniden yükle
}

// Tüm notları temizleme işlevi
function clearNotes() {
    if (confirm("Tüm notları silmek istediğinizden emin misiniz?")) {
        localStorage.removeItem("notes");
        displayNotes(); // Listeyi güncelle
    }
}