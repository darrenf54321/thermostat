'use strict';

function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20
  this.MIN_TEMPERATURE = 10
  this.MAX_TEMPERATURE = 32
  this.powerSaveMode = true
  this.currentTemperature = this.DEFAULT_TEMPERATURE
}

// if(this._weather.isStormy()) {
//   throw new Error("cannot land during storm");
// }

Thermostat.prototype.increaseTemp = function(amount){
  this.currentTemperature += amount;
}

Thermostat.prototype.decreaseTemp = function (amount) {
  this.currentTemperature -= amount;
}

Thermostat.prototype.powerSaveModeOn = function() {
  this.MAX_TEMPERATURE = 25;
  this.powerSaveMode = true;
}

Thermostat.prototype.powerSaveModeOff = function() {
  this.MAX_TEMPERATURE = 32;
  this.powerSaveMode = false;
}

Thermostat.prototype.resetTemp = function() {
  this.currentTemperature = this.DEFAULT_TEMPERATURE;
}