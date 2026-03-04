/**
 * Lógica del Tablero de Noticias
 */

const newsData = [
    {
        title: "Nueva Era de Interfaces Neuronales",
        summary: "Se presentan los primeros prototipos de dispositivos que permiten la interacción con sistemas digitales mediante impulsos de pensamiento sutil.\n\nEsta tecnología promete revolucionar la forma en que interactuamos con la tecnología, ofreciendo una experiencia más intuitiva y fluida.",
        category: "Innovación",
        date: "Hoy",
        url: "https://noticias.tech/neuronales"
    },
    {
        title: "Descubrimiento en Energía de Fusión",
        summary: "Científicos logran mantener un plasma estable por más de una hora en el reactor experimental, marcando un hito hacia la energía limpia.",
        category: "Ciencia",
        date: "Ayer",
        url: "https://ciencia.org/fusion"
    },
    {
        title: "Ciudades Inteligentes en Marte",
        summary: "El despliegue de infraestructura modular automatizada ha finalizado con éxito en la región de Elysium Planitia.",
        category: "Espacio",
        date: "01 Mar",
        url: "https://espacio.news/marte"
    }
];

function createNewsCard(item) {
    const card = document.createElement('a');
    card.href = item.url || "#";
    card.target = "_blank";
    card.className = "announcement-card p-10 rounded-[3rem] min-h-[340px]";
    
    card.innerHTML = `
        <div class="flex-1">
            <div class="mb-6">
                <span class="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em]">
                    ${item.category}
                </span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 leading-tight">${item.title}</h3>
            ${item.summary.split('\n\n').map(p => `<p class="text-slate-400 leading-relaxed text-sm custom-scrollbar">${p}</p>`).join('')}
        </div>
        <div class="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                <span class="text-[9px] font-black text-blue-300/50 uppercase tracking-[0.3em]">Leer nota completa</span>
            </div>
            <span class="text-xs font-semibold text-slate-500">${item.date}</span>
        </div>
    `;
    return card;
}

function renderBoard(items) {
    const container = document.getElementById('board');
    if (!container) return;
    
    container.innerHTML = '';
    items.forEach(item => {
        container.appendChild(createNewsCard(item));
    });
}

window.addEventListener('DOMContentLoaded', () => {
    renderBoard(newsData);
});