let sampleOccupationTitles = ['Marketing Coordinator', 'Medical Assistant', 'Web Designer', 'Nursing Assistant', 'Librarian']

let sel = document.getElementById('jobSelect')
for (let i = 0; i < sampleOccupationTitles.length; i++ ) {
    let opt = document.createElement('option');
    opt.innerHTML = sampleOccupationTitles[i];
    opt.value = sampleOccupationTitles[i];
    sel.appendChild(opt);
}