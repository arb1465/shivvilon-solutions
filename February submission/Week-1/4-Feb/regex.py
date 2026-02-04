import re

search_text = "coding"
search_area = '''Hey! I'm Aasutosh Baraiya, a passionate programmer and final year Computer Science student at SVNIT Surat. I began my coding journey driven by a love for mathematics and problem solving, which naturally led me into the world of Programming. I enjoy building projects that blend logic with design, from C++-powered algorithms to responsive web apps using differenet technologies. I was part of a team of four that built 'KOE - The Kafe' for a college-wide hackathon. Beyond coding, I care deeply about collaboration and mentorship, often supporting my peers in tech clubs and team projects. I'm also drawn to clean design and intuitive user experience, believing that thoughtful interfaces can amplify impact. With curiosity as my compass, I'm always learning.'''

# result = re.search(search_text, search_area)
# print(result)


search_area = ''' Aasutosh Baraiya joined Shivvilon Solutions on 03-01-2026 as a Full-Stack Developer Intern. 
 His official email is aasutoshbaraiya146@gmail.com
 He works from 10:00 AM to 6:30 PM and submits daily reports at https://github.com/arb1465/shivvilon-solutions at Shivvilon Solutions.
 His contact number is +91-9664758560. He is learning Python, MongoDB, REST APIs and regex. '''

search_text = r"[A-Z]hivvilon"
result = re.search(search_text, search_area)
# print(result)
# print(result,span())
# print("Start ind: ", result.start())
# print("End ind: ", result.end())


# search_text = r"[A-Z, a-z]hivvilon"
allMatches = re.findall(search_text, search_area)
# print(allMatches)
# for match in allMatches:
#     print(match)


search_text = r"\d+"   # to find digit, + for >= 1 occurences
res = re.search(search_text, search_area)
# print(res)

# p = re.compile('\W+')
# print(p.findall(search_area))

# print(re.split('[a-e]', "Aasutosh Baraiya"))

# print(re.sub(r"\W", "#", "Room 101"))