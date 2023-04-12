with open('data.txt') as raw:
    data = raw.read()

floor = 0
counter = 0
for char in data:
    counter += 1
    if (char == "("):
        floor += 1
    else:
        floor -= 1
    if (floor < 0):
        print(counter)
        break
