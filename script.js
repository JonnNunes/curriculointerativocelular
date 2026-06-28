let contatoAtual = 0;

const contatos = [
    '<p><strong>Nome:</strong> João Pedro Nunes de Souza</p>',
    '<p><strong>Email:</strong> joaopedronunesde21@gmail.com</p>',
    '<p><strong>WhatsApp:</strong> (11) 96810-5438</p>',
    '<p><strong>LinkedIn:</strong> Em breve</p>'
];

function trocarContato(direcao){

    contatoAtual += direcao;

    if(contatoAtual < 0){
        contatoAtual = contatos.length - 1;
    }

    if(contatoAtual >= contatos.length){
        contatoAtual = 0;
    }

    document.getElementById("infoContato").innerHTML =
        contatos[contatoAtual];
}

function abrirModal(tipo){

    const titulo = document.getElementById("tituloModal");
    const conteudo = document.getElementById("conteudoModal");

    if(!titulo || !conteudo){
        console.error("tituloModal ou conteudoModal não encontrados.");
        return;
    }

    switch(tipo){

case "contato":

    titulo.innerText = "CONTATO";

    contatoAtual = 0;

    conteudo.innerHTML = `
    <div style="
        display:flex;
        align-items:center;
        justify-content:center;
        gap:20px;
    ">

        <button
            id="setaEsquerda"
            onclick="trocarContato(-1)"
            style="visibility:hidden;">
            ◀
        </button>

        <div id="infoContato" style="min-width:350px;">
            <p><strong>Nome:</strong> João Pedro Nunes de Souza</p>
        </div>

        <button
            id="setaDireita"
            onclick="trocarContato(1)">
            ▶
        </button>

    </div>
`;
    break;

        case "formacao":

            titulo.innerText = "FORMAÇÃO";

            conteudo.innerHTML = `
                <p>Graduação em Marketing - Uni Ítalo</p>
                <p>Técnico em IoT - Senac</p>
            `;
            break;

        case "experiencia":

            titulo.innerText = "EXPERIÊNCIA";

            conteudo.innerHTML = `
                <p>Auxiliar Administrativo de Lavanderia</p>
                <p>Auxílio em Fiscalização</p>
                <p>Auxiliar de Logística</p>
            `;
            break;

        case "softskills":

            titulo.innerText = "SOFT SKILLS";

            conteudo.innerHTML = `
                <div class="skills-container">
                    <span class="skill">Comunicação</span>
                    <span class="skill">Organização</span>
                    <span class="skill">Criatividade</span>
                    <span class="skill">Proatividade</span>
                    <span class="skill">Adaptabilidade</span>
                    <span class="skill">Liderança</span>
                    <span class="skill">Empatia</span>
                    <span class="skill">Trabalho em Equipe</span>
                    <span class="skill">Aprendizado Rápido</span>
                    <span class="skill">Resolução de Problemas</span>
                </div>
            `;
            break;

        case "competencias":

            titulo.innerText = "COMPETÊNCIAS";

            conteudo.innerHTML = `
                <div class="skills-container">
                    <span class="skill">HTML</span>
                    <span class="skill">CSS</span>
                    <span class="skill">JavaScript</span>
                    <span class="skill">Canva</span>
                    <span class="skill">Excel</span>
                    <span class="skill">Word</span>
                    <span class="skill">PowerPoint</span>
                    <span class="skill">Marketing Digital</span>
                    <span class="skill">Banco de Dados</span>
                    <span class="skill">Arduino</span>
                    <span class="skill">IoT</span>
                </div>
            `;
            break;

        case "cursos":

            titulo.innerText = "CURSOS";

            conteudo.innerHTML = `
                <p>Técnico em IoT</p>
                <p>Inglês Intermediário</p>
            `;
            break;

        case "projetos":

            titulo.innerText = "PROJETOS";

            conteudo.innerHTML = `
                <p>Portfólio Interativo Gamificado</p>
                <p>Projetos do Curso Técnico</p>
            `;
            break;

        case "conquistas":

            titulo.innerText = "CONQUISTAS";

            conteudo.innerHTML = `
                <p>Conclusão do Técnico em IoT</p>
                <p>Projetos Acadêmicos Desenvolvidos</p>
            `;
            break;
    }

    document.getElementById("modal").style.display = "flex";
}

function fecharModal(){
    document.getElementById("modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("modal");

    if(modal){

        modal.addEventListener("click", function(event){

            if(event.target === modal){
                fecharModal();
            }

        });

    }

});