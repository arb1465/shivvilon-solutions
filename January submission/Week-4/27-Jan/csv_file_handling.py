import csv

with open('homies.csv','a', newline="") as file:
    data = csv.reader(file, delimiter="\t")
    data = csv.DictReader(file, delimiter="\t")
    
    # print(data)
    for line in data:
        # print(line['Name'])
        if line['Department'] == 'EE':
            print(line)
    
    header = next(data)
    print(header)
    
    writer = csv.writer(file, delimiter="\t")
    writer.writerow(["Parth Sadariya", "CSE"])