def factorial ( *args ):
    if ( args [ 0 ] == 0 ):
        return 1
    else:
        return factorial ( args [ 0 ] - 1 ) * args [ 0 ]

if ( __name__ == "__main__" ):
    print ( "\n\tFactorial:" )
    number = int ( input ( "\n\tAdd a positive integer: " ) )
    ans = factorial ( number )
    print ( "\n\tThe factorial of ", number, " is: ", ans, "\n" )
