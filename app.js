/**
 * Lógica del Tablero de Noticias
 */

const newsData = [
    {
        title: "Corredor Interoceánico en Chiapas: avance entre negativas ambientales, dudas empresariales y cuestionamientos sobre seguridad",
        summary: "En Chiapas, se construye el ramal KA, una línea férrea secundaria que se desprende de la Línea K, y conectará la red con Puerto Chiapas para el traslado de carga. Asimismo, el gobierno federal sostiene que la Línea K registra un avance de 88 % y que estará lista a mediados de 2026. Sin embargo, la Cámara Nacional de la Industria de Transformación (Canacintra) ha pedido que expertos independientes validen la seguridad de la infraestructura antes de su entrega.",
        category: "Trenes",
        date: "03 de marzo, 2026",
        url: "https://animalpolitico.com/estados/corredor-interoceanico-chiapas-negativas-ambientales-seguridad"
    },
    {
        title: "Vecinos frenan estudios del Tren México Querétaro en San Mateo Ixtacalco; acusan falta de información sobre obras de mitigación",
        summary: "Pobladores de San Mateo Ixtacalco impidieron anoche a trabajadores realizar estudios de mecánica de suelos; señalan que solo les han informado de palabra que habrán puentes y temen que afecte la identidad de la comunidad.",
        category: "Trenes",
        date: "03 de marzo, 2026",
        url: "https://www.eluniversal.com.mx/metropoli/vecinos-frenan-estudios-del-tren-mexico-queretaro-en-san-mateo-ixtacalco-acusan-falta-de-informacion-sobre-obras-de-mitigacion/"
    },
    {
        title: "Tren del Norte proyecta 70 mil pasajeros diarios en sus dos corredores",
        summary: "La Secretaría de Infraestructura Comunicaciones y Transportes (SICT) estimó que el proyecto del Tren del Norte atenderá una demanda de aproximadamente 70 mil pasajeros diarios en sus rutas Ciudad de México-Querétaro-Irapuato y Saltillo -Nuevo León. La SICT informó que las unidades serán fabricadas por Alstom Méixoc.",
        category: "Trenes",
        date: "03 de marzo, 2026",
        url: "https://www.tyt.com.mx/nota/tren-del-norte-proyecta-70-mil-pasajeros-diarios-en-sus-dos-corredores"
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
            <h3 class="text-2xl font-bold text-white mb-4 leading-tight text-justify hyphens-auto">${item.title}</h3>
            ${item.summary.split('\n\n').map(p => `<p class="text-slate-400 leading-relaxed text-sm custom-scrollbar text-justify">${p}</p>`).join('')}
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