class Truck:
    _max_number_of_wheels = 14
    _min_number_of_wheels = 8
    # __init__: Class constructor.
    def __init__ ( self, brand = None, model = None, engine = None, color = None, wheels = None ):
        self.engine = engine
        self.wheels = wheels
        self.brand = brand
        self.model = model
        self.color = color

    # Getters.
    def getBrand ( self ):
        return self.brand

    def getModel ( self ):
        return self.model

    def getEngine ( self ):
        return self.engine

    def getWheels ( self ):
        return self.wheels

    def getColor ( self ):
        return self.color

    # Setters.
    def setBrand ( self, brand ):
        self.brand = brand

    def setModel ( self, model ):
        self.model = model

    def setEngine ( self, engine ):
        self.engine = engine

    def setColor ( self, color ):
        self.color = color

    def setWheels ( self, wheels ):
        if ( wheels < self._min_number_of_wheels ):
            self.wheels = self._min_number_of_wheels
        elif ( wheels > self._max_number_of_wheels ):
            self.wheels = self._max_number_of_wheels
        else:
            self.wheels = wheels
