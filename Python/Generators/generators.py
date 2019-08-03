#!/usr/bin/python3

__copyright__ = "Copyright 2017, David Martinez"
__author__ = "David Hernandez Martinez"
__email__ = "Davestring@outlook.com"
__maintainer__ = "David Martinez"
__credits__ = "David Martinez"
__status__ = "Developer"
__version__ = "1.0.0"
__license__ = "MIT"

"""
This module provide 3 generators:
Fibonacci: Calculate the fibonacci of a given number.
Factorial: Calculate the factorial of a given number.
Cubes: Calculate the sum of the first 'n' cubes.
"""

def factorial ( ):
    """ Calculate the Factorial of a given 'n' number. """
    a, b = 1, 0
    while ( True ):
        yield a
        b = b + 1
        a = a * b

def fibonacci ( ):
    """ Calculate the Fibonacci of a given 'n' number. """
    a, b, f = 1, 1, 0
    while ( True ):
        yield f
        a = b
        b = f + a
        f = a

def cubes ( ):
    """ Calculate the sum of the first 'n' cubes. """
    a, b = 0, 0
    while ( True ):
        a = a + b ** 3
        b = b + 1
        yield a
