var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mode;
(function (Mode) {
    Mode["Cool"] = "COOL";
    Mode["Heat"] = "HEAT";
    Mode["Fan"] = "FAN";
})(Mode || (Mode = {}));
var Power;
(function (Power) {
    Power["On"] = "Ligado";
    Power["Off"] = "Desligado";
})(Power || (Power = {}));
var RemoteControl = /** @class */ (function () {
    function RemoteControl(cor, marca, volume, canal) {
        this.color = cor;
        this.brand = marca;
        this.volume = volume;
        this.channel = canal;
        this.power = Power.Off;
    }
    Object.defineProperty(RemoteControl.prototype, "getPower", {
        get: function () {
            return this.power;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoteControl.prototype, "getColor", {
        get: function () {
            return this.color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoteControl.prototype, "getBrand", {
        get: function () {
            return this.brand;
        },
        enumerable: false,
        configurable: true
    });
    RemoteControl.prototype.togglePower = function () {
        if (this.power === Power.Off) {
            this.power = Power.On;
        }
        else {
            this.power = Power.Off;
        }
        console.log("O Dispositvo est\u00E1 ".concat(this.power));
    };
    RemoteControl.prototype.increaseVolume = function () {
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
    };
    RemoteControl.prototype.decreaseVolume = function () {
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
    };
    RemoteControl.prototype.changeChannel = function (newChannel) {
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
    };
    RemoteControl.prototype.showControlStatus = function () {
        console.log("\n      \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n      \u2551       STATUS DO CONTROLE TV        \u2551\n      \u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563\n      \u2551 Volume         : ".concat(this.volume, "                \u2551\n      \u2551 Canal          : ").concat(this.channel, "                 \u2551\n      \u2551 Cor do Controle: ").concat(this.color, "             \u2551\n      \u2551 Marca da TV    : ").concat(this.brand, "           \u2551\n      \u2551 Estado da TV   : ").concat(this.power ? "Ligada" : "Desligada", "            \u2551\n      \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D\n    "));
    };
    return RemoteControl;
}());
//#region Controle1
var remote1 = new RemoteControl("Preto", "Samsung", 20, 1);
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
var remote2 = new RemoteControl("Cinza", "Philips", 10, 3);
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
var AirConditionerRemoteControl = /** @class */ (function (_super) {
    __extends(AirConditionerRemoteControl, _super);
    function AirConditionerRemoteControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.temperature = 16;
        return _this;
    }
    AirConditionerRemoteControl.prototype.showControlStatus = function () {
        console.log("\n      \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n      \u2551  STATUS DO CONTROLE DO AR-COND.    \u2551\n      \u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563\n      \u2551 Temperatura    : ".concat(this.temperature, "\u00B0C              \u2551\n      \u2551 Modo           : ").concat(this.mode, "              \u2551\n      \u2551 Cor do Controle: ").concat(this.getColor, "            \u2551\n      \u2551 Marca          : ").concat(this.getBrand, "             \u2551\n      \u2551 Estado         : ").concat(this.getPower, "            \u2551\n      \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D\n    "));
    };
    AirConditionerRemoteControl.prototype.changeTemperature = function (newTemperature) {
        if (this.getPower) {
            this.temperature += newTemperature;
            console.log("Temperatura ajustada para: ".concat(this.temperature, "\u00B0C"));
        }
        else {
            console.log("Ligue o Ar-condicionado para ajustar a temperatura.");
        }
    };
    AirConditionerRemoteControl.prototype.changeMode = function (newMode) {
        if (this.getPower) {
            this.mode = newMode;
            console.log("Modo alterado para: ".concat(this.mode));
        }
        else {
            console.log("Ligue o Ar-condicionado para alterar o modo.");
        }
    };
    return AirConditionerRemoteControl;
}(RemoteControl));
var airControl = new AirConditionerRemoteControl("Branco", "Elgin", 0, 0);
airControl.togglePower();
airControl.changeMode(Mode.Heat);
airControl.changeTemperature(10);
airControl.showControlStatus();
airControl.changeMode(Mode.Cool);
airControl.changeTemperature(-5);
airControl.showControlStatus();
//#endregion
