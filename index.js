//#region Controle1
var remote1 = {
    color: "Preto",
    brand: "Samsung",
    volume: 20,
    channel: 1,
    power: false,
    showControlStatus: function () {
        console.log("\n      \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n      \u2551         STATUS DO CONTROLE         \u2551\n      \u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563\n      \u2551 Volume         : ".concat(this.volume, "                \u2551\n      \u2551 Canal          : ").concat(this.channel, "                 \u2551\n      \u2551 Cor do Controle: ").concat(this.color, "             \u2551\n      \u2551 Marca da TV    : ").concat(this.brand, "           \u2551\n      \u2551 Estado da TV   : ").concat(this.power ? "Ligada" : "Desligada", "            \u2551\n      \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D\n    "));
    },
    togglePower: function () {
        this.power = !this.power;
        console.log("A TV est\u00E1 ".concat(this.power ? "Ligada" : "Desligada"));
    },
    increaseVolume: function () {
        if (this.power) {
            if (this.volume < 100) {
                this.volume += 10;
                console.log("Volume aumentado para: ".concat(this.volume));
            }
            else {
                console.log("O volume já está no máximo!");
            }
        }
        else {
            console.log("A TV ".concat(this.brand, " est\u00E1 Desligada! Ligue para conseguir interagir."));
        }
    },
    decreaseVolume: function () {
        if (this.power) {
            if (this.volume > 0) {
                this.volume -= 10;
                console.log("Volume reduzido para: ".concat(this.volume));
            }
            else {
                console.log("O volume já está no mínimo!");
            }
        }
        else {
            console.log("A TV ".concat(this.brand, " est\u00E1 Desligada! Ligue para conseguir interagir."));
        }
    },
    changeChannel: function (newChannel) {
        if (this.power) {
            if (newChannel > 0) {
                this.channel = newChannel;
                console.log("Canal alterado para: ".concat(this.channel));
            }
            else {
                console.log("Número de canal inválido!");
            }
        }
        else {
            console.log("A TV ".concat(this.brand, " est\u00E1 Desligada! Ligue para conseguir interagir."));
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
var remote2 = {
    color: "Branco",
    brand: "LG",
    volume: 10,
    channel: 3,
    power: false,
    showControlStatus: function () {
        console.log("\n      \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n      \u2551         STATUS DO CONTROLE         \u2551\n      \u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563\n      \u2551 Volume         : ".concat(this.volume, "                \u2551\n      \u2551 Canal          : ").concat(this.channel, "                 \u2551\n      \u2551 Cor do Controle: ").concat(this.color, "            \u2551\n      \u2551 Marca da TV    : ").concat(this.brand, "                \u2551\n      \u2551 Estado da TV   : ").concat(this.power ? "Ligada" : "Desligada", "            \u2551\n      \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D\n    "));
    },
    togglePower: function () {
        this.power = !this.power;
        console.log("A TV est\u00E1 ".concat(this.power ? "Ligada" : "Desligada"));
    },
    increaseVolume: function () {
        if (this.power) {
            if (this.volume < 100) {
                this.volume += 10;
                console.log("Volume aumentado para: ".concat(this.volume));
            }
            else {
                console.log("O volume já está no máximo!");
            }
        }
        else {
            console.log("A TV ".concat(this.brand, " est\u00E1 Desligada! Ligue para conseguir interagir."));
        }
    },
    decreaseVolume: function () {
        if (this.power) {
            if (this.volume > 0) {
                this.volume -= 10;
                console.log("Volume reduzido para: ".concat(this.volume));
            }
            else {
                console.log("O volume já está no mínimo!");
            }
        }
        else {
            console.log("A TV ".concat(this.brand, " est\u00E1 Desligada! Ligue para conseguir interagir."));
        }
    },
    changeChannel: function (newChannel) {
        if (this.power) {
            if (newChannel > 0) {
                this.channel = newChannel;
                console.log("Canal alterado para: ".concat(this.channel));
            }
            else {
                console.log("Número de canal inválido!");
            }
        }
        else {
            console.log("A TV ".concat(this.brand, " est\u00E1 Desligada! Ligue para conseguir interagir."));
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
var airControl = {
    color: "Cinza",
    brand: "Elgin",
    volume: 0,
    channel: 0,
    power: false,
    temperature: 19,
    mode: "cool",
    showControlStatus: function () {
        console.log("\n      \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n      \u2551  STATUS DO CONTROLE DE AR-COND.    \u2551\n      \u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563\n      \u2551 Temperatura    : ".concat(this.temperature, "\u00B0C              \u2551\n      \u2551 Modo           : ").concat(this.mode.toUpperCase(), "              \u2551\n      \u2551 Cor do Controle: ").concat(this.color, "             \u2551\n      \u2551 Marca          : ").concat(this.brand, "             \u2551\n      \u2551 Estado         : ").concat(this.power ? "Ligado" : "Desligado", "            \u2551\n      \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D\n    "));
    },
    togglePower: function () {
        this.power = !this.power;
        console.log("O Ar-condicionado est\u00E1 ".concat(this.power ? "Ligado" : "Desligado"));
    },
    increaseVolume: function () {
        console.log("Esta função não é aplicável ao ar-condicionado.");
    },
    decreaseVolume: function () {
        console.log("Esta função não é aplicável ao ar-condicionado.");
    },
    changeChannel: function () {
        console.log("Esta função não é aplicável ao ar-condicionado.");
    },
    changeTemperature: function (newTemperature) {
        if (this.power) {
            this.temperature += newTemperature;
            console.log("Temperatura ajustada para: ".concat(this.temperature, "\u00B0C"));
        }
        else {
            console.log("Ligue o Ar-condicionado para ajustar a temperatura.");
        }
    },
    changeMode: function (newMode) {
        if (this.power) {
            this.mode = newMode;
            console.log("Modo alterado para: ".concat(this.mode.toUpperCase()));
        }
        else {
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
