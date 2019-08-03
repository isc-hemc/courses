def prime ( *args ):
    if ( args [ 0 ] < 2 ):
        return False
    else:
        for i in range ( 2, args [ 0 ] ):
            if ( args [ 0 ] % i == 0 ):
                return False
        return True

if ( __name__ == "__main__" ):
    print ( "\n\tPrime numbers:" )
    number = int ( input ( "\n\tAdd a positive integer: " ) )
    if ( prime ( number ) == True ):
        print ( "\n\t", number, " is prime.\n" )
    else:
        print ( "\n\t", number, " is not prime.\n" )
