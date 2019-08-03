from flask import Flask

# Flask object: Receive as parameter the name of this module.
app = Flask ( __name__ )

# Route: In which URL were are going to execute this function.
@app.route ( "/" )
def hello_world ( ):
    return "Hello, world!"

if ( __name__ == "__main__" ):
    app.run ( )
