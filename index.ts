let cor: string = "preto";
let volume: number = 0;
let canal: number = 1;
let estadoTV: boolean = false;
let marcaTV: string = "Samsung";

const controle = {
  cor: cor,
  volume: volume,
  canal: canal,
  estadoTV: estadoTV,
  marcaTV: marcaTV,
};

exibirControle();

function exibirControle(): void {
  if (controle.estadoTV == false) {
    console.log(
      `A TV${controle.marcaTV} está Desligada! Ligue para conseguir interagir.`
    );
  } else {
    console.log(
      `Controle: volume: ${controle.volume}, canal: ${controle.canal}, cor: ${
        controle.cor
      }, marcaTv: ${controle.marcaTV}, estadoTv: ${
        controle.estadoTV ? "Ligada" : "Desligada"
      }`
    );
  }
}

function ligarTv(): void {
  controle.estadoTV = true;
  exibirControle();
}

function desligarTv(): void {
  controle.estadoTV = false;
  exibirControle();
}

function mudarCanal(): void {
  if (controle.estadoTV === true) {
    controle.canal = canal++;
    exibirControle();
  } else {
    console.log(
      `A TV${controle.marcaTV} está Desligada! Ligue para conseguir interagir.`
    );
  }
}

function aumentarVolume(): void {
  if (controle.estadoTV === true) {
    if (controle.volume < 0) {
      volume = 0;
      console.log("O seu volume já está no mínimo!");
    } else if (volume == 0 || volume < 100) {
      volume += 10;
      controle.volume = volume;
      exibirControle();
    } else if (volume == 100) {
      console.log("O seu volume já está no máximo!");
    }
  } else {
    console.log(
      `A TV${controle.marcaTV} está Desligada! Ligue para conseguir interagir.`
    );
  }
}

function diminuirVolume(): void {
  if (controle.estadoTV === true) {
    if (volume > 0 || volume == 100) {
      volume -= 10;
      controle.volume = volume;
      exibirControle();
    } else if (volume == 0 || volume < 0) {
      volume = 0;
      console.log("O seu volume já está no mínimo!");
    }
  } else {
    console.log(
      `A TV${controle.marcaTV} está Desligada! Ligue para conseguir interagir.`
    );
  }
}

let corLG: string = "branco";
let volumeLG: number = 10;
let canalLG: number = 5;
let estadoTVLG: boolean = false;
let marcaTVLG: string = "LG";

const controleLG = {
  cor: corLG,
  volume: volumeLG,
  canal: canalLG,
  estadoTV: estadoTVLG,
  marcaTV: marcaTVLG,
};

exibirControleLG();

function exibirControleLG(): void {
  if (controleLG.estadoTV == false) {
    console.log(
      `A TV ${controleLG.marcaTV} está Desligada! Ligue para conseguir interagir.`
    );
  } else {
    console.log(
      `Controle: volume: ${controleLG.volume}, canal: ${
        controleLG.canal
      }, cor: ${controleLG.cor}, marcaTv: ${controleLG.marcaTV}, estadoTv: ${
        controleLG.estadoTV ? "Ligada" : "Desligada"
      }`
    );
  }
}

function ligarTvLG(): void {
  controleLG.estadoTV = true;
  exibirControleLG();
}

function desligarTvLG(): void {
  controleLG.estadoTV = false;
  exibirControleLG();
}

function mudarCanalLG(): void {
  if (controleLG.estadoTV === true) {
    controleLG.canal++;
    exibirControleLG();
  } else {
    console.log(
      `A TV ${controleLG.marcaTV} está Desligada! Ligue para conseguir interagir.`
    );
  }
}

function aumentarVolumeLG(): void {
  if (controleLG.estadoTV === true) {
    if (controleLG.volume < 100) {
      controleLG.volume += 5;
      exibirControleLG();
    } else {
      console.log("O volume já está no máximo!");
    }
  } else {
    console.log(
      `A TV ${controleLG.marcaTV} está Desligada! Ligue para conseguir interagir.`
    );
  }
}

function diminuirVolumeLG(): void {
  if (controleLG.estadoTV === true) {
    if (controleLG.volume > 0) {
      controleLG.volume -= 5; // Decremento de volume diferente (5 unidades)
      exibirControleLG();
    } else {
      console.log("O volume já está no mínimo!");
    }
  } else {
    console.log(
      `A TV ${controleLG.marcaTV} está Desligada! Ligue para conseguir interagir.`
    );
  }
}

executarTestes();

function executarTestes() {
  console.log("** Iniciando Testes para a TV Samsung **");
  ligarTv();
  aumentarVolume();
  aumentarVolume();
  aumentarVolume();
  diminuirVolume();
  mudarCanal();
  mudarCanal();
  desligarTv();

  console.log("\n** Iniciando Testes para a TV LG **");
  ligarTvLG();
  aumentarVolumeLG();
  aumentarVolumeLG();
  diminuirVolumeLG();
  mudarCanalLG();
  mudarCanalLG();
  desligarTvLG();
}
