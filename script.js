function save() {
    const note = document.getElementById('note').value;
    localStorage.setItem('note', note);
}

function clearNote() {
    document.getElementById('note').value = '';
}

function download() {
    const note = document.getElementById('note').value;
    const filename = 'note.txt';
    const blob = new Blob([note], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
}

window.onload = function() {
    const note = localStorage.getItem('note');
    if (note !== null) {
        document.getElementById('note').value = note;
    }

    document.getElementById('download').addEventListener('click', download);
}
