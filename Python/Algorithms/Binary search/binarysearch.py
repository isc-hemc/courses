def binarysearch ( n, p, q, x ):
    if ( p > q ):
        return -1
    middle = int ( ( p + q ) / 2 )
    if ( n [ middle ] == x ):
        return middle
    elif ( n [ middle ] < x ):
        return binarysearch ( n, middle + 1, q, x )
    elif ( n [ middle ] > x ):
        return binarysearch ( n, p, middle - 1, x )
