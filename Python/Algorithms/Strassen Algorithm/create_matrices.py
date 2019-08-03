import random as rnd
import math

def create ( ):
    # Size of the matrices: 2^n.
    power = int ( input ( "\n\tAdd an nth-power: " ) )
    n = int ( math.pow ( 2, power ) )
    A = [ [ rnd.randint ( 0, 9 ) for i in range ( n ) ] for j in range ( n ) ]
    B = [ [ rnd.randint ( 0, 9 ) for i in range ( n ) ] for j in range ( n ) ]
    return A, B
