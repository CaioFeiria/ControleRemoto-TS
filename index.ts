enum Mode {
  Cool = "COOL",
  Heat = "HEAT",
  Fan = "FAN"
}

enum Power {
  On = "Ligado",
  Off = "Desligado",
}

interface Control {
  // variáveis aqui terão que ser públicas na classe por conta da interface/type não suportar modificadores de acesso
  togglePower(): void;
  increaseVolume(): void;
  decreaseVolume(): void;
  changeChannel(newChannel: number): void;
  showControlStatus(): void;
}

class RemoteControl implements Control {
  private color: string;
  private brand: string;
  private volume: number;
  private channel: number;
  private power: Power;

  get getPower(): Power {
    return this.power;
  }

  get getColor(): string {
    return this.color;
  }

  get getBrand(): string {
    return this.brand;
  }

  constructor(cor: string, marca: string, volume: number, canal: number) {
    this.color = cor;
    this.brand = marca;
    this.volume = volume;
    this.channel = canal;
    this.power = Power.Off;
  }

  togglePower() {
    if (this.power === Power.Off) {
      this.power = Power.On;
    } else {
      this.power = Power.Off;
    }
    console.log(`O Dispositvo está ${this.power}`);
  }

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
  }

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
  }

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
  }

  showControlStatus() {
    console.log(`
      ╔════════════════════════════════════╗
      ║       STATUS DO CONTROLE TV        ║
      ╠════════════════════════════════════╣
      ║ Volume         : ${this.volume}                ║
      ║ Canal          : ${this.channel}                 ║
      ║ Cor do Controle: ${this.color}             ║
      ║ Marca da TV    : ${this.brand}           ║
      ║ Estado da TV   : ${this.power ? "Ligada" : "Desligada"}            ║
      ╚════════════════════════════════════╝
    `);
  }
}

//#region Controle1
const remote1 = new RemoteControl("Preto", "Samsung", 20, 1);

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
const remote2 = new RemoteControl("Cinza", "Philips", 10, 3);

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
class AirConditionerRemoteControl extends RemoteControl {
  private temperature: number = 16;
  private mode: Mode;

   showControlStatus() {
    console.log(`
      ╔════════════════════════════════════╗
      ║  STATUS DO CONTROLE DO AR-COND.    ║
      ╠════════════════════════════════════╣
      ║ Temperatura    : ${this.temperature}°C              ║
      ║ Modo           : ${this.mode}              ║
      ║ Cor do Controle: ${this.getColor}            ║
      ║ Marca          : ${this.getBrand}             ║
      ║ Estado         : ${this.getPower}            ║
      ╚════════════════════════════════════╝
    `);
  }

  changeTemperature(newTemperature: number) {
    if (this.getPower) {
      this.temperature += newTemperature;
      console.log(`Temperatura ajustada para: ${this.temperature}°C`);
    } else {
      console.log("Ligue o Ar-condicionado para ajustar a temperatura.");
    }
  }

  changeMode(newMode: Mode) {
    if (this.getPower) {
      this.mode = newMode;
      console.log(`Modo alterado para: ${this.mode}`);
    } else {
      console.log("Ligue o Ar-condicionado para alterar o modo.");
    }
  }
}

const airControl = new AirConditionerRemoteControl("Branco", "Elgin", 0, 0);

airControl.togglePower();
airControl.changeMode(Mode.Heat);
airControl.changeTemperature(10);
airControl.showControlStatus();
airControl.changeMode(Mode.Cool);
airControl.changeTemperature(-5);
airControl.showControlStatus();
//#endregion