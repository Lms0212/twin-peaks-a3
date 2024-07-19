const characterInfo = {
    "dale-cooper": {
        name: "Dale Cooper",
        description: "Dale Cooper é um agente especial do FBI enviado para investigar o assassinato de Laura Palmer. Ele é conhecido por seu amor pelo café e tortas de cereja."
    },
    "laura-palmer": {
        name: "Laura Palmer",
        description: "Laura Palmer é uma jovem que foi encontrada morta, e sua morte desencadeia os eventos da série. Sua vida dupla é um mistério central em Twin Peaks."
    },
    "audrey-horne": {
        name: "Audrey Horne",
        description: "Audrey Horne é a filha do magnata local Benjamin Horne. Ela é uma jovem encantadora e problemática, que se envolve na investigação da morte de Laura Palmer."
    },
    "shelly-johnson": {
        name: "Shelly Johnson",
        description: "Shelly Johnson trabalha no Double R Diner. Ela está em um relacionamento abusivo com seu marido Leo, mas tem um caso com Bobby Briggs."
    },
    "bobby-briggs": {
        name: "Bobby Briggs",
        description: "Bobby Briggs é o namorado de Laura Palmer e tem um relacionamento complicado com seus pais. Ele é um jovem rebelde que se envolve em atividades ilícitas."
    },
    "james-hurley": {
        name: "James Hurley",
        description: "James Hurley é um amigo próximo de Laura Palmer e Donna Hayward. Ele tem uma personalidade introspectiva e é apaixonado por motocicletas."
    },
    "leland-palmer": {
        name: "Leland Palmer",
        description: "Leland Palmer é o pai de Laura Palmer. Sua dor pela morte de Laura leva a comportamentos erráticos e revelações perturbadoras sobre seu passado."
    },
    "benjamin-horne": {
        name: "Benjamin Horne",
        description: "Benjamin Horne é um empresário local e pai de Audrey Horne. Ele tem uma série de esquemas empresariais e está envolvido em muitas tramas da cidade."
    }
};

function showInfo(characterId) {
    const info = characterInfo[characterId];
    const infoContent = document.getElementById('info-content');
    infoContent.innerHTML = `<h2>${info.name}</h2><p>${info.description}</p>`;
    document.getElementById('character-info').style.display = 'flex';
}

function closeInfo() {
    document.getElementById('character-info').style.display = 'none';
}