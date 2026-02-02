import logging

logging.basicConfig(filename='logfile.log', 
                    level=logging.DEBUG, 
                    filemode='w',
                    format="%(asctime)s : %(process)s : %(name)s : %(levelname)s \t %(message)s",
                    datefmt="%d-%b-%y %H:%M:%S",
                    
)  # Deine levels


logging.debug("This is a debug msg")  # 10
logging.info("This is the phase-5 of learning python")  # 20
logging.warning("This is a WARNING MSG")  # 30
logging.error("There is some error")  # 40
logging.critical("This is critical section\n")  # 50