f2 = open('file2.txt', '+a')

with open('file1.txt', 'r') as f1:
    for line in f1:
        f2.write("\n" + line)

lis = [
    '\nShivani Baraiya'
    '\nArsi Baraiya'
    '\nPayal Baraiya'
    '\nSumita Baraiya'
    '\nChampaben Baraiya'
    '\nRajubhai Baraiya'
]

f1 = open("file2.txt", 'a')
f1.writelines(lis)