"""
                                COUNTRIES INFORMATION:

    The population of several countries it's stores in the dictionary "countries".

"""

countries = {
    "china": "1,409,517,397",
    "india": "1,339,180,127",
    "united states": "324,459,463",
    "indonesia": "263,991,379",
    "brazil": "209,288,278",
    "pakistan": "197,015,955",
    "nigeria": "190,886,311",
    "bangladesh": "164,669,751",
    "russia": "143,989,754",
    "mexico": "129,163,276",
    "japan": "127,484,450",
    "ethiopia": "104,957,438",
    "philippines": "104,918,090",
    "egypt": "97,553,151",
    "viet nam": "95,540,800",
    "germany": "82,114,224",
    "dr congo": "81,339,988",
    "iran": "81,162,788",
    "turkey": "80,745,020",
    "thailand": "69,037,513",
    "united kingdom": "66,181,585",
    "france": "64,979,548",
    "italy": "59,359,900",
    "tanzania": "57,310,019",
    "south africa": "56,717,156",
    "myanmar": "53,370,609",
    "south korea": "50,982,212",
    "kenya": "49,699,862",
    "colombia": "49,065,615",
    "spain": "49,354,321",
    "argentina": "44,271,041",
    "canada": "36,624,199"
}

if ( __name__ == "__main__" ):
    print ( "\n\n\t\tPOPULATION COUNTRY INFORMATION:" )
    print ( "\n\tWelcome to the population country information:" )
    while ( True ):
        ans = str ( input ( "\n\tAdd the name of a country: " ) )
        try:
            print ( "\n\tThe county {} has a population of {} people".format ( ans, countries [ ans ] ) )
        except KeyError:
            print ( "\n\tThere is no information for ", ans )
