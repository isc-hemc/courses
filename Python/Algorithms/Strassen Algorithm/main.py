from create_matrices import *
from strassen import *

def printer ( A, B, C ):
    assert len ( A ) == len ( B ) == len ( C )
    print ( "\n\tStrassen Algorithm:" )
    print ( "\n\tMatrix A:\n" )
    list ( map ( lambda x: print ( "\t{}".format ( x ) ), A ) )
    print ( "\n\tMatrix B:\n" )
    list ( map ( lambda x: print ( "\t{}".format ( x ) ), B ) )
    print ( "\n\tProduct A * B:\n" )
    list ( map ( lambda x: print ( "\t{}".format ( x ) ), C ) )
    n = len ( C )
    print ( "\n\tWhere: A, B, C ∈ M [ {}x{} ] ( ℤ+ )\n".format ( n, n ) )

if ( __name__ == "__main__" ):
    A, B = create ( )
    C = strassen ( A, B )
    printer ( A, B, C )
