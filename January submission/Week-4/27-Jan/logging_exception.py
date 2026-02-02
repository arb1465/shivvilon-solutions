import logging

logging.basicConfig(filename='logfile_3.log',
                    filemode='a',
                    format="%(asctime)s : %(process)s : %(name)s : %(levelname)s \t %(message)s",
                    datefmt="%d-%b-%y %H:%M:%S",                   
)

loggerObj = logging.getLogger("ARB")

loggerObj.setLevel(50)

try:
    age = int(input("Enter your age: "))
except Exception as obj:
    loggerObj.error(obj)