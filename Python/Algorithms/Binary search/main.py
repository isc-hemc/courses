from binarysearch import *
import numpy as np

n = list ( np.random.randint ( -1000, 1000, 2**5 ) )
n.sort ( )
print ( n )
num = int ( input ( "\n\tSearch a number: " ) )
index = binarysearch ( n, 0, len ( n ) - 1, num )
if ( index != -1 ):
    print ( "n [ ", index, " ] = ", n [ index ] )
