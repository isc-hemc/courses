"""
                            HANGMAN GAME

    This module stores two dictionaries: "_hangman" which stores the ASCII art
    of the game and "_words" which stores the words to guess.

"""

_hangman = {
    0: """
          +----+
          |    |
          |    |
               |
               |
               |
               |
               |
               | attempts = 6
       ================= """,
    1: """
          +----+
          |    |
          |    |
          O    |
               |
               |
               |
               |
               | attempts = 5
       ================= """,
    2: """
          +----+
          |    |
          |    |
          O    |
          |    |
          |    |
               |
               |
               |
               | attempts = 4
       ================= """,
    3: """
          +----+
          |    |
          |    |
          O    |
         /|    |
          |    |
               |
               |
               |
               | attempts = 3
       ================= """,
    4: """
          +----+
          |    |
          |    |
          O    |
         /|\   |
          |    |
               |
               |
               |
               | attempts = 2
       ================= """,
    5: """
          +----+
          |    |
          |    |
          O    |
         /|\   |
          |    |
         /     |
               |
               |
               | attempts = 1
       ================= """,
    6: """
          +----+
          |    |
          |    |
          O    |
         /|\   |
          |    |
         / \   |
               |
               |
               | attempts = 0
       ================= """
}

_words = {
    0: "Kings Landing",
    1: "Winterfell",
    2: "Riverrun",
    3: "Eyrie",
    4: "Sunspear",
    5: "Pyke",
    6: "The Wall",
    7: "Highgarden",
    8: "Dreadfort",
    9: "Castle Black",
    10: "Dragonstone",
    11: "Storms End",
    12: "Meereen",
    13: "Braavos",
    14: "Old Valyria",
    15: "Volantis",
    16: "Asshai",
    17: "Lannisport",
    18: "Lorath",
    19: "Lys",
    20: "Myr",
    21: "Oldtown",
    22: "Pentos",
    23: "Qarth",
    24: "Qohor",
    25: "Tyrosh",
    26: "Vaes Dothrak",
    27: "White Harbor",
    28: "Yunkai"
}
