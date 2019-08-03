from appium import webdriver
import os


def getdriver():
    host = "http://localhost:4723/wd/hub"
    path = os.path.abspath(os.path.join(os.path.dirname(__file__),
                        "/Users/davidmartinez/Desktop/testing_expo/agenda.apk"))
    capabilities = {
        "platformName": "Android",
        "platformVersion": "7.0",
        "deviceName": "ZTE BLADE V8 MINI",
        "udid": "20e49c2a",
        "app": path,
        "unicodeKeyboard": True,
        "resetKeyboard": True
    }

    driver = webdriver.Remote(host, capabilities)
    return driver