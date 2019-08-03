import hangman as hg
import random as rnd

# aux: It's a copy of "solve" at an earlier time instant. In line 18,
#      both lists are compared and in case that the user don't guess
#      a hidden letter the counter it's incremented. In other case the
#      letter found is displayed. In each iteration will take the value
#      of "solve" at that time of instant.

def play ( word, solve ):
    attempts = 0
    while ( attempts < 6 ):
        aux = solve [ : ]
        print ( "\n\tWord to solve: ", solve )
        ans = str ( input ( "\n\tEnter a letter: " ) ).lower ( )
        # Modify "solve" in case that the user has found a hidden letter.
        solve = list ( map ( lambda x, y: ans if ( ans == x ) else y, word, solve ) )
        if ( solve == aux ):
            attempts += 1
            print ( "\n\t", hg._hangman [ attempts ] )
        if ( solve == word ):
            print ( "\n\tWord to solve: ", solve )
            return True
    return False

if ( __name__ == "__main__" ):
    print ( "\n\n\tGAME OF THRONES: HANGMAN." )
    rand = rnd.randint ( 0, 28 )
    word = list ( hg._words [ rand ].replace ( " ", "" ) )
    word = list ( map ( str.lower, word ) )
    solve = [ "*--*" for i in range ( len ( word ) ) ]
    # Prints the ASCII art of the attempt in which is it.
    print ( "\n\t", hg._hangman [ 0 ] )
    if ( play ( word, solve ) ):
        print ( "\n\n\tThe Iron Throne is yours, the word was: ", hg._words [ rand ] , "\n\n" )
    else:
        print ( "\n\n\tNot today...\n\n" )
