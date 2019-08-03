from matrix_operations import *
from sub_matrices import *

def strassen ( A, B ):
    # Validates the condition of matrices of [ 2^n x 2^n ] size.
    assert len ( A ) == len ( A [ 0 ] ) == len ( B ) == len ( B [ 0 ] )
    assert type ( A ) == list and type ( B ) == list

    # Usual matrix product.
    if ( len ( A ) == 2 ):
        return usual_matrix_product ( A, B )
    else:
    # Strassen algorithm.
        n = int ( len ( A ) / 2 )
        # Divide de matrices A and B in eigth sub-matrices of size 2^n/2.
        A11, A12, A21, A22, B11, B12, B21, B22 = split_in_sub_matrices ( A, B, n )
        # S1 = strassen ( ( A11 + A22 ), ( B11 + B22 ) )
        S1 = strassen ( add ( A11, A22 ), add ( B11, B22 ) )
        # S2 = strassen ( ( A21 + A22 ), ( B11 ) )
        S2 = strassen ( add ( A21, A22 ), B11 )
        # S3 = strassen ( ( A11 ), ( B12 - B22 ) )
        S3 = strassen ( A11, subtrack ( B12, B22 ) )
        # S4 = strassen ( ( A22 ), ( B21 - B11 ) )
        S4 = strassen ( A22, subtrack ( B21, B11 ) )
        # S5 = strassen ( ( A11 + A12 ), ( B22 ) )
        S5 = strassen ( add ( A11, A12 ), B22 )
        # S6 = strassen ( ( A21 - A11 ), ( B11 + B12 ) )
        S6 = strassen ( subtrack ( A21, A11 ), add ( B11, B12 ) )
        # S7 = strassen ( ( A12 - A22 ), ( B21 + B22 ) )
        S7 = strassen ( subtrack ( A12, A22 ), add ( B21, B22 ) )

        # Expressing Cij in terms of Sk, where C it's the resulting matrix.
        # C11 = S1 + S4 - S5 + S7
        C11 = subtrack ( add ( add ( S1, S4 ), S7 ), S5 )
        # C12 = S3 + S5
        C12 = add ( S3, S5 )
        # C21 = S2 + S4
        C21 = add ( S2, S4 )
        # C22 = S1 - S2 + S3 + S6
        C22 = add ( subtrack ( S1, S2 ), add ( S3, S6 ) )
        # Joining all the resulting sub-matrices
        return join_resulting_sub_matrices ( C11, C12, C21, C22, n * 2 )
