import socket

def ip():
    return str(socket.gethostbyname(socket.gethostname()))
