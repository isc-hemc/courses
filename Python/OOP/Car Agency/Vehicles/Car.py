class Car:
    # __init__: It's the constructor of the class.
    # self: It's the own instance attribute.
    def __init__ ( self, brand = None, model = None, transmission = None, sunroof = None,  color = None, wheels = 4 ):
        self.transmission = transmission
        self.sunroof = sunroof
        self.wheels = wheels
        self.brand = brand
        self.model = model
        self.color = color

    # Getters.
    def getTransmission ( self ):
        return self.transmission

    def getSunroof ( self ):
        return self.sunroof

    def getWheels ( self ):
        return self.wheels

    def getBrand ( self ):
        return self.brand

    def getModel ( self ):
        return self.model

    def getColor ( self ):
        return self.color

    # Setters.
    def setTransmission ( self, transmission ):
        self.transmission = transmission

    def setSunroof ( self, sunroof ):
        self.sunroof = sunroof

    def setBrand ( self, brand ):
        self.brand = brand

    def setModel ( self, model ):
        self.model = model

    def setColor ( self, color ):
        self.color = color
