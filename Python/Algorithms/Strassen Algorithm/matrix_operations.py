def usual_matrix_product ( A, B ):
    C = [ [ 0 for i in range ( 2 ) ] for j in range ( 2 ) ]
    for i in range ( 2 ):
        for j in range ( 2 ):
            for k in range ( 2 ):
                C [ i ] [ j ] += A [ i ] [ k ] * B [ k ] [ j ]
    # Return statement.
    return C

def add ( A, B ):
    n = len ( A )
    C = [ [ A [ i ] [ j ] + B [ i ] [ j ] for j in range ( n ) ] for i in range ( n ) ]
    # Return statement.
    return C

def subtrack ( A, B ):
    n = len ( A )
    C = [ [ A [ i ] [ j ] - B [ i ] [ j ] for j in range ( n ) ] for i in range ( n ) ]
    # Return statement.
    return C
