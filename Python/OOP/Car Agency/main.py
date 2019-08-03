from Vehicles.Motorcycle import *
from Vehicles.Truck import *
from Vehicles.Car import *
from certificate import *

def main ( ):
    vehicle = None
    print ( "\n\n\tOnline Vehicle Agency:" )
    print ( "\n\t1.- Buy a Car." )
    print ( "\t2.- Buy a Truck." )
    print ( "\t3.- Buy a Motorcycle." )
    ans = int ( input ( "\tAnswer: " ) )

    if ( ans == 1 ):
        vehicle = Car ( )
        vehicle.setBrand ( str ( input ( "\n\tBrand: " ) ) )
        vehicle.setModel ( str ( input ( "\tModel: " ) ) )
        vehicle.setColor ( str ( input ( "\tColor: " ) ) )
        vehicle.setTransmission ( str ( input ( "\tTransmission: " ) ) )
        vehicle.setSunroof ( str ( input ( "\tSunroof: ") ) )
    elif ( ans == 2 ):
        vehicle = Truck ( )
        vehicle.setBrand ( str ( input ( "\n\tBrand: " ) ) )
        vehicle.setModel ( str ( input ( "\tModel: " ) ) )
        vehicle.setColor ( str ( input ( "\tColor: " ) ) )
        vehicle.setEngine ( str ( input ( "\tDiesel or Gas: " ) ) )
        vehicle.setWheels ( int ( input ( "\tWheels number: " ) ) )
    else:
        vehicle = Motorcycle ( )
        vehicle.setBrand ( str ( input ( "\n\tBrand: " ) ) )
        vehicle.setModel ( str ( input ( "\tModel: " ) ) )
        vehicle.setColor ( str ( input ( "\tColor: " ) ) )
        vehicle.setWheels ( int ( input ( "\tWheels number: " ) ) )
        vehicle.setCylinder ( str ( input ( "\tCylinder: " ) ) )

    certificate ( vehicle )
    print ( "\n" )

if ( __name__ == "__main__" ): main ( )
