class Motorcycle:
    _max_number_of_wheels = 3
    # __init__: Class constructor.
    def __init__ ( self, brand = None, model = None, cylinder = None, color = None, wheels = None ):
        self.cylinder = cylinder
        self.wheels = wheels
        self.brand = brand
        self.model = model
        self.color = color

    # Getters.
    def getBrand ( self ):
        return self.brand

    def getModel ( self ):
        return self.model

    def getColor ( self ):
        return self.color

    def getCylinder ( self ):
        return self.cylinder

    def getWheels ( self ):
        return self.wheels

    # Setters.
    def setBrand ( self, brand ):
        self.brand = brand

    def setModel ( self, model ):
        self.model = model

    def setColor ( self, color ):
        self.color = color

    def setCylinder ( self, cylinder ):
        self.cylinder = cylinder

    def setWheels ( self, wheels ):
        if ( wheels > self._max_number_of_wheels ):
            self.wheels = self._max_number_of_wheels
        else:
            self.wheels = wheels
