from generators import *

# Dictionary: Stores the generators functions assigning a key to each one.
switcher = {
    1: factorial ( ),
    2: fibonacci ( ),
    3: cubes ( )
}

# Menu section.
print ( "\n\n\t\tGenerators:" )
print ( "\n\tSelect one of the following generators:" )
print ( "\t1.- Factorial." )
print ( "\t2.- Fibonacci." )
print ( "\t3.- Sum of first 'n' cubes." )
ans = int ( input ( "\tAnswer: " ) )
lim = int ( input ( "\n\tNumber to calculate: " ) )
aux = 0

# Iterates the generator in the position 'ans' of the dictionary 'switcher'.
for i in switcher [ ans ]:
    if ( aux == lim ):
        aux = i
        break
    aux += 1

print ( "\n\tG ( ", lim, " ) = ", aux, "\n" )
