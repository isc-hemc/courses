from Vehicles.Motorcycle import *
from Vehicles.Truck import *
from Vehicles.Car import *

def certificate ( vehicle ):
    with open ( "Certificate of Title.txt", "w" ) as f:
        f.write ( "\n\t\t\t\t\t\tCERTIFICATE OF TITLE:\n" )
        f.write ( "\n\t\tBrand: " + vehicle.getBrand ( ) )
        f.write ( "\n\t\tModel: " + vehicle.getModel ( ) )
        f.write ( "\n\t\tColor: " + vehicle.getColor ( ) )
        f.write ( "\n\t\tWheels: " + str ( vehicle.getWheels ( ) ) )
        if ( type ( vehicle ) == Car ):
            f.write ( "\n\t\tTransmission: " + vehicle.getTransmission ( ) )
            f.write ( "\n\t\tSunroof: " + vehicle.getSunroof ( ) )
        elif ( type ( vehicle ) == Truck ):
            f.write ( "\n\t\tEngine: " + vehicle.getEngine ( ) )
        else:
            f.write ( "\n\t\tCylinder: " + vehicle.getCylinder ( ) )
