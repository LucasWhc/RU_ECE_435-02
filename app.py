from flask import Flask, render_template, request
from send_email import *

app = Flask(__name__)

threshold = {'temp_low': 34, 'temp_mid': 38, 'temp_up': 42, 'hum_low': 450, 'hum_up': 710, 'light_r': 50}

light_list = ["Dark", "Light"]
temp_list = ['Cold', 'Cool', 'Warm', 'Hot']
hum_list = ["Wet", "Comfortable", "Dry"]

# the user can use this to change the threshold
@app.route('/temp', methods=['GET'])
def temperature():
    ops = request.args.get('ops')
    # first 2 is used to control the threshold of temperature
    if ops == '1':
        threshold['temp_low'] -= 3
        threshold['temp_mid'] -= 3
        threshold['temp_up'] -= 3
    elif ops == '-1':
        threshold['temp_low'] += 3
        threshold['temp_mid'] += 3
        threshold['temp_up'] += 3
    # last 2 is used to control the threshold of the humidity
    elif ops == '2':
        threshold['hum_low'] -= 20
        threshold['hum_up'] -= 20
    elif ops == '-2':
        threshold['hum_low'] += 20
        threshold['hum_up'] += 20
    # get the outcome from checker()
    light, temp, hum = checker()
    string = temp + "                                  " + light + "                                  " + hum
    result = {"res": string}
    return result


def filer():
    with open("/Users/sf/Desktop/RU/Toy-master/test/test", 'r') as f:
        line = f.readline()
    pos = line.find("light")
    line_list = line[pos:].split()
    return int(line_list[1]), float(line_list[3]), int(line_list[5])


# use to preprocess the data, change data into different tags
def checker():
    val1, val2, val3 = filer()
    l = light_list[light(val1)]+" ("+str(val1)+")"
    t = temp_list[tmp(val2)]+" ("+str(val2)+")"
    h = hum_list[hum(val3)]+" ("+str(val3)+")"
    return l, t, h


# next three function is use to judge the data
def light(val):
    if val < threshold['light_r']:
        return 0
    else:
        return 1


# use send() to automatically send the email
def tmp(val):
    if val < threshold['temp_low']:
        text = 'Dear customer, your room is cold'
        send(text)
        return 0
    elif threshold['temp_low'] <= val < threshold['temp_mid']:
        return 1
    elif threshold['temp_mid'] <= val < threshold['temp_up']:
        return 2
    else:
        text = 'Dear customer, your room is hot'
        send(text)
        return 3


def hum(val):
    if val < threshold['hum_low']:
        text = 'Dear customer, your room is dry'
        send(text)
        return 0
    elif threshold['hum_low'] <= val < threshold['hum_up']:
        return 1
    else:
        text = 'Dear customer, your room is wet'
        send(text)
        return 2


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
