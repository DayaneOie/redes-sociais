import { getCSS, tickConfig } from "./common.js";

async function quantidadeUsuariosPorEstilo() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
    const res = await fetch(url);
    const dados = await res.json();
    const nomeDosEstilos = Object.keys(dados);
    const quantidadeDeUsuarios = Object.values(dados);

    const data = [
        {
            x: nomeDosEstilos, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: ['#3a3a3a', '#545454', '#6f6f6f', '#8c8c8c', '#a9a9a9', '#c5c5c5'] // Cores para cada coluna
            }
        }
    ];
    

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Estilos com mais usuários entre alunos',
            font: {
                color: getCSS('--highlight-color'),
                size: 30,
                family: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome dos estilos',
                font: {
                    color: getCSS('--highlight-color') // Espaço removido
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Número de usuários',
                font: {
                    color: getCSS('--highlight-color') // Espaço removido
                }
            }
        }
    };
    

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout); // Correção aqui
}

quantidadeUsuariosPorEstilo();
