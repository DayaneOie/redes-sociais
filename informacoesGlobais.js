const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function vizualizarInformacoesGlobais() {
    try {
        const res = await fetch(url);

        // Verifica se a resposta foi bem-sucedida
        if (!res.ok) {
            throw new Error('Erro ao buscar dados: ' + res.status);
        }

        const dados = await res.json();
        const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9);
        const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9);
        const horas = parseInt(dados.tempo_medio);
        const minutos = Math.round((dados.tempo_medio - horas) * 60); // Multiplique por 60 para converter para minutos
        const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2);

        const paragrafo = document.createElement('p');
        paragrafo.classList.add('graficos-container__texto');
        paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social.`;

        const container = document.getElementById('graficos-container');
        container.appendChild(paragrafo);
    } catch (error) {
        console.error('Erro ao visualizar informações globais:', error);
    }
}

vizualizarInformacoesGlobais();
