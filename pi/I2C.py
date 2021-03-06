import smbus
import time
import datetime
import RPi.GPIO as IO
import requests
 
bus = smbus.SMBus(1)
 
addr = 0x04
IO.setmode(IO.BCM)
IO.setwarnings(False)
IO.setup(18, IO.OUT)
flag = 0
sessionId = 0
data = {"user_id": 3}
#dt = datetime.datetime.now()
 
def readNumber():
    number = bus.read_byte(addr)
    return number
 
def schedule():
    if (dt.time() >= datetime.time(15, 47) and flag == 1):
        if (dt.time() <= datetime.time(15, 48) or flag == 0):
            IO.output(18, IO.HIGH)
            time.sleep(1)
            IO.output(18, IO.LOW)
while(1):
    dt = datetime.datetime.now()
    time.sleep(0.5)
    number = readNumber()
    if (number < 2 and flag == 1):
        flag = 0
        IO.output(18, IO.LOW)
        data["value"] = 1
        response = requests.post('http://178.62.238.173:8080/sessions', data)
        respJson = response.json()
        print(respJson)
        sessionId = respJson['data']['id']
        #print(sessionId)
    elif (number >= 2 and flag == 0):
        flag = 1
        print("Read number: ", number)
        #print(time.strftime("%X"))
        IO.output(18, IO.HIGH)
        data["value"] = 2
        data["session_id"] = sessionId
        requests.post('http://178.62.238.173:8080/sessions', data)
    if (dt.time() >= datetime.time(16, 26) and dt.time() <= datetime.time(16, 28) and flag == 1):
        #print("ENTERING 1st IF\n")
        IO.output(18, IO.HIGH)
        time.sleep(1)
        IO.output(18, IO.LOW)
        if (flag == 0):
            IO.output(18, IO.LOW)
        else:
            IO.output(18, IO.HIGH)