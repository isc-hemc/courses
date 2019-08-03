
def fibonacci ( n ):
    if ( n == 1 or n == 2 ):
        return 1
    else:
        return fibonacci ( n - 1 ) + fibonacci ( n - 2 )

# Create the file and write information modifying it.
def create ( n ):
    # Using the keyword with it's not necessary to write "f.close ( )", the
    # context manager ( with ) does this for us.
    with open ( "Fibonacci.txt", "w" ) as f:
        for i in range ( 1, n + 1 ):
            f.write ( "F ( " + str ( i ) + " ) = "
            + str ( fibonacci ( i ) ) + "\n" )

def visualize ( ):
    print ( "\n" )
    with open ( "Fibonacci.txt", "r" ) as f:
        [ print ( "\t", line ) for line in f ]

if ( __name__ == "__main__" ):
    print ( "\n\n\tFIBONACCI NUMBERS:" )
    ans = int ( input ( "\n\tCalculate the Fibonacci's numbers from 0 to: " ) )
    create ( ans )
    visualize ( )
