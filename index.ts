interface RemoteControl {
  color: string;
  brand: string;
  volume: number;
  channel: number;
  power: boolean;

  showControlStatus(): void;
  togglePower(): void;
  increaseVolume(): void;
  decreaseVolume(): void;
  changeChannel(channel: number): void;
}

//#region Controle1
const remote1: RemoteControl = {
  color: "Preto",
  brand: "Samsung",
  volume: 20,
  channel: 1,
  power: false,

  showControlStatus() {
    console.log(`
      ╔════════════════════════════════════╗
      ║         STATUS DO CONTROLE         ║
      ╠════════════════════════════════════╣
      ║ Volume         : ${this.volume}                ║
      ║ Canal          : ${this.channel}                 ║
      ║ Cor do Controle: ${this.color}             ║
      ║ Marca da TV    : ${this.brand}           ║
      ║ Estado da TV   : ${this.power ? "Ligada" : "Desligada"}            ║
      ╚════════════════════════════════════╝
    `);
  },

  togglePower() {
    this.power = !this.power;
    console.log(`A TV está ${this.power ? "Ligada" : "Desligada"}`);
  },

  increaseVolume() {
    if (this.power) {
      if (this.volume < 100) {
        this.volume += 10;
        console.log(`Volume aumentado para: ${this.volume}`);
      } else {
        console.log("O volume já está no máximo!");
      }
    } else {
      console.log(`A TV ${this.brand} está Desligada! Ligue para conseguir interagir.`);
    }
  },

  decreaseVolume() {
    if (this.power) {
      if (this.volume > 0) {
        this.volume -= 10;
        console.log(`Volume reduzido para: ${this.volume}`);
      } else {
        console.log("O volume já está no mínimo!");
      }
    } else {
      console.log(`A TV ${this.brand} está Desligada! Ligue para conseguir interagir.`);
    }
  },

  changeChannel(newChannel: number) {
    if (this.power) {
      if (newChannel > 0) {
        this.channel = newChannel;
        console.log(`Canal alterado para: ${this.channel}`);
      } else {
        console.log("Número de canal inválido!");
      }
    } else {
      console.log(`A TV ${this.brand} está Desligada! Ligue para conseguir interagir.`);
    }
  },
};

remote1.togglePower();
remote1.showControlStatus();
remote1.increaseVolume();
remote1.increaseVolume();
remote1.increaseVolume();
remote1.increaseVolume();
remote1.changeChannel(5);
remote1.decreaseVolume();
remote1.showControlStatus();
//#endregion

//#region Controle2
type RemoteControlType = {
  color: string;
  brand: string;
  volume: number;
  channel: number;
  power: boolean;

  showControlStatus(): void;
  togglePower(): void;
  increaseVolume(): void;
  decreaseVolume(): void;
  changeChannel(newChannel: number): void;
};

const remote2: RemoteControlType = {
  color: "Branco",
  brand: "LG",
  volume: 10,
  channel: 3,
  power: false,

  showControlStatus() {
    console.log(`
      ╔════════════════════════════════════╗
      ║         STATUS DO CONTROLE         ║
      ╠════════════════════════════════════╣
      ║ Volume         : ${this.volume}                ║
      ║ Canal          : ${this.channel}                 ║
      ║ Cor do Controle: ${this.color}            ║
      ║ Marca da TV    : ${this.brand}                ║
      ║ Estado da TV   : ${this.power ? "Ligada" : "Desligada"}            ║
      ╚════════════════════════════════════╝
    `);
  },

  togglePower() {
    this.power = !this.power;
    console.log(`A TV está ${this.power ? "Ligada" : "Desligada"}`);
  },

  increaseVolume() {
    if (this.power) {
      if (this.volume < 100) {
        this.volume += 10;
        console.log(`Volume aumentado para: ${this.volume}`);
      } else {
        console.log("O volume já está no máximo!");
      }
    } else {
      console.log(`A TV ${this.brand} está Desligada! Ligue para conseguir interagir.`);
    }
  },

  decreaseVolume() {
    if (this.power) {
      if (this.volume > 0) {
        this.volume -= 10;
        console.log(`Volume reduzido para: ${this.volume}`);
      } else {
        console.log("O volume já está no mínimo!");
      }
    } else {
      console.log(`A TV ${this.brand} está Desligada! Ligue para conseguir interagir.`);
    }
  },

  changeChannel(newChannel: number) {
    if (this.power) {
      if (newChannel > 0) {
        this.channel = newChannel;
        console.log(`Canal alterado para: ${this.channel}`);
      } else {
        console.log("Número de canal inválido!");
      }
    } else {
      console.log(`A TV ${this.brand} está Desligada! Ligue para conseguir interagir.`);
    }
  },
};

remote2.togglePower();
remote2.showControlStatus();
remote2.increaseVolume();
remote2.increaseVolume();
remote2.increaseVolume();
remote2.increaseVolume();
remote2.increaseVolume();
remote2.increaseVolume();
remote2.changeChannel(7);
remote2.decreaseVolume();
remote2.decreaseVolume();
remote2.showControlStatus();
//#endregion

//#region Controle Ar
type AirConditionerRemoteControl = RemoteControl & {
  temperature: number;
  mode: "cool" | "heat" | "fan";
  changeTemperature(delta: number): void;
  changeMode(newMode: "cool" | "heat" | "fan"): void;
};

const airControl: AirConditionerRemoteControl = {
  color: "Cinza",
  brand: "Elgin",
  volume: 0, 
  channel: 0, 
  power: false,
  temperature: 19,
  mode: "cool",

  showControlStatus() {
    console.log(`
      ╔════════════════════════════════════╗
      ║  STATUS DO CONTROLE DE AR-COND.    ║
      ╠════════════════════════════════════╣
      ║ Temperatura    : ${this.temperature}°C              ║
      ║ Modo           : ${this.mode.toUpperCase()}              ║
      ║ Cor do Controle: ${this.color}             ║
      ║ Marca          : ${this.brand}             ║
      ║ Estado         : ${this.power ? "Ligado" : "Desligado"}            ║
      ╚════════════════════════════════════╝
    `);
  },

  togglePower() {
    this.power = !this.power;
    console.log(`O Ar-condicionado está ${this.power ? "Ligado" : "Desligado"}`);
  },

  increaseVolume() {
    console.log("Esta função não é aplicável ao ar-condicionado.");
  },

  decreaseVolume() {
    console.log("Esta função não é aplicável ao ar-condicionado.");
  },

  changeChannel() {
    console.log("Esta função não é aplicável ao ar-condicionado.");
  },

  changeTemperature(newTemperature: number) {
    if (this.power) {
      this.temperature += newTemperature;
      console.log(`Temperatura ajustada para: ${this.temperature}°C`);
    } else {
      console.log("Ligue o Ar-condicionado para ajustar a temperatura.");
    }
  },

  changeMode(newMode: "cool" | "heat" | "fan") {
    if (this.power) {
      this.mode = newMode;
      console.log(`Modo alterado para: ${this.mode.toUpperCase()}`);
    } else {
      console.log("Ligue o Ar-condicionado para alterar o modo.");
    }
  },
};

airControl.togglePower();
airControl.showControlStatus();
airControl.changeTemperature(2);
airControl.changeMode("heat");
airControl.changeTemperature(-5);
airControl.showControlStatus();
//#endregion