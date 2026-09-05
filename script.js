// Typewriter effect
const typewriterElement = document.getElementById("typewriter");
const texts = ["Backend Developer", "Web Design"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
const currentText = texts[textIndex];

if (!isDeleting) {
typewriterElement.textContent = currentText.substring(0, charIndex + 1);
charIndex++;

if (charIndex === currentText.length) {
isDeleting = true;
setTimeout(typeWriter, 2000);
return;
}
} else {
typewriterElement.textContent = currentText.substring(0, charIndex - 1);
charIndex--;

if (charIndex === 0) {
isDeleting = false;
textIndex = (textIndex + 1) % texts.length;
setTimeout(typeWriter, 500);
return;
}
}

setTimeout(typeWriter, isDeleting ? 50 : 100);
}

// Start typewriter effect
setTimeout(() => {
typeWriter();
}, 1000);



async function loadProjects() {
try {
// Pastikan path ini sesuai dengan struktur folder Anda
const response = await fetch('./src/project/data.json');

if (!response.ok) {
throw new Error(`HTTP error! status: ${response.status}`);
}

const projects = await response.json();
const container = document.getElementById('project-container');

if (!container) {
console.error("Elemen 'project-container' tidak ditemukan!");
return;
}

container.innerHTML = projects.map(project => `
<div
    class="relative group p-4 sm:p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl rounded-2xl border border-blue-400/60 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
    <a href="${project.image}">
        <img src="${project.image}" alt="${project.title}" class="rounded-md mb-4 w-full h-48 object-cover" />
    </a>
    <h3 class="text-lg font-bold text-white mb-2 text-justify">
        ${project.title}
    </h3>
    <p class="text-sm md:text-base text-gray-300 mb-2 text-justify">
        ${project.description}
    </p>
    <div class="flex flex-wrap gap-2 text-sm">
        ${project.tech.map(t => {
        let color = 'bg-gray-700';
        if (t === 'PHP') color = 'bg-purple-700';
        if (t === 'Laravel') color = 'bg-red-800';
        if (t === 'JavaScript') color = 'bg-yellow-500';
        if (t === 'MySQL') color = 'bg-orange-500';
        if(t === 'Tailwind CSS') color = 'bg-teal-500';
        if(t === 'React Native Expo') color = 'bg-blue-500';
        if(t === 'Flutter') color = 'bg-blue-800';
        if(t === 'CSS') color = 'bg-blue-600';
        return `<span class="${color} text-white px-2 py-1 rounded-full">${t}</span>`;
        }).join('')} </div>
</div>
`).join('');
} catch (error) {
console.error('Gagal memuat proyek:', error);
}
// Di dalam function loadProjects(), bagian mapping tech:
if (t === 'PHP') color = 'bg-purple-700';
if (t === 'Laravel') color = 'bg-red-800';
if (t === 'JavaScript') color = 'bg-yellow-500';
if (t === 'MySQL') color = 'bg-orange-500';
if (t === 'Tailwind CSS') color = 'bg-teal-500';
if (t === 'React Native Expo') color = 'bg-blue-500';
if (t === 'Flutter') color = 'bg-blue-800';
if (t === 'CSS') color = 'bg-blue-600';
// Tambahkan 2 baris ini:
if (t === 'IoT') color = 'bg-emerald-600';
if (t === 'Telegram Bot') color = 'bg-sky-600';
}

async function loadCertificates() {
try {
// Sesuaikan path ke file JSON sertifikat Anda
const response = await fetch('./src/project/sertifikat.json');

if (!response.ok) {
throw new Error(`HTTP error! status: ${response.status}`);
}

const certificates = await response.json();
const container = document.getElementById('sertifikat-container');

if (!container) {
console.error("Elemen 'sertifikat-container' tidak ditemukan!");
return;
}

container.innerHTML = certificates.map(cert => {
const isPDF = cert.image.toLowerCase().endsWith('.pdf');
const displayImage = isPDF ? 'src/img/hki.png' : cert.image;

return `
<div
    class="relative group p-4 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl rounded-2xl border ${cert.borderColor} shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-transform duration-300 hover:scale-[1.02]">
    <a href="${cert.image}" target="_blank" rel="noopener noreferrer">
        <div class="relative overflow-hidden rounded-md mb-4 h-48">
            <img src="${displayImage}" alt="${cert.title}"
                class="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
        </div>
    </a>
    <h3 class="text-sm md:text-base font-bold text-white mb-2 text-center md:text-left leading-tight">
        ${cert.title}
    </h3>
    <p class="text-xs text-blue-300 italic">Klik untuk memperbesar/unduh</p>
</div>
`;
}).join('');
} catch (error) {
console.error('Gagal memuat sertifikat:', error);
}
}

loadProjects();
loadCertificates();
