import logging

logging.basicConfig(filename='logfile_2.log',
                    filemode='w',
                    format="%(asctime)s : %(process)s : %(name)s : %(levelname)s \t %(message)s",
                    datefmt="%d-%b-%y %H:%M:%S",                   
)

loggerObj = logging.getLogger("ARB")

loggerObj.setLevel(10)
loggerObj.info("This is an information")
loggerObj.error("This is an ERROR")