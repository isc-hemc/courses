def split_in_sub_matrices ( A, B, n ):
    A11, A12, A21, A22 = [ ], [ ], [ ], [ ]
    B11, B12, B21, B22 = [ ], [ ], [ ], [ ]
    # Initialize the sub-matrices.
    A11 = [ [ None for i in range ( n ) ] for j in range ( n ) ]
    A12 = [ [ None for i in range ( n ) ] for j in range ( n ) ]
    A21 = [ [ None for i in range ( n ) ] for j in range ( n ) ]
    A22 = [ [ None for i in range ( n ) ] for j in range ( n ) ]
    B11 = [ [ None for i in range ( n ) ] for j in range ( n ) ]
    B12 = [ [ None for i in range ( n ) ] for j in range ( n ) ]
    B21 = [ [ None for i in range ( n ) ] for j in range ( n ) ]
    B22 = [ [ None for i in range ( n ) ] for j in range ( n ) ]
    # Fill the sub-matrices.
    for i in range ( n ):
        for j in range ( n ):
            A11 [ i ] [ j ] = A [ i ] [ j ]
            A12 [ i ] [ j ] = A [ i ] [ j + n ]
            A21 [ i ] [ j ] = A [ i + n ] [ j ]
            A22 [ i ] [ j ] = A [ i + n ] [ j + n ]
            B11 [ i ] [ j ] = B [ i ] [ j ]
            B12 [ i ] [ j ] = B [ i ] [ j + n ]
            B21 [ i ] [ j ] = B [ i + n ] [ j ]
            B22 [ i ] [ j ] = B [ i + n ] [ j + n ]
    # Return statement.
    return A11, A12, A21, A22, B11, B12, B21, B22

def join_resulting_sub_matrices ( C11, C12, C21, C22, n ):
    sub_size = int ( n / 2 )
    C = [ [ None for i in range ( n ) ] for j in range ( n ) ]
    for i in range ( sub_size ):
        for j in range ( sub_size ):
            C [ i ] [ j ] = C11 [ i ] [ j ]
            C [ i ] [ j + sub_size ] = C12 [ i ] [ j ]
            C [ i + sub_size ] [ j ] = C21 [ i ] [ j ]
            C [ i + sub_size ] [ j + sub_size ] = C22 [ i ] [ j ]
    # Return statement.
    return C
