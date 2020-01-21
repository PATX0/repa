#include <Wire.h>

#define SLAVE_ADDRESS 0x04
#define fsrpin A0
#define ledpin 13

int number = 0;
int state = 0;
int fsrreading;

void setup() {
  pinMode(ledpin, OUTPUT);
  Serial.begin(9600); // start serial for output
  // initialize i2c as slave
  Wire.begin(SLAVE_ADDRESS);

  // define callbacks for i2c communication
  Wire.onReceive(receiveData);
  Wire.onRequest(sendData);

 // Serial.println("Ready!");
}

void loop() {
  delay(100);
}

// callback for received data
void receiveData(int byteCount){

  while(Wire.available()) {
    number = Wire.read();
   // Serial.print("data received: ");
  //  Serial.println(number);
  }
}

// callback for sending data 
void sendData(){
  fsrreading = analogRead(fsrpin);
  fsrreading = map(fsrreading, 0, 1023, 0, 255);
  Wire.write(fsrreading);
  Serial.print("READINGS: ");
  Serial.println(fsrreading);
}