with open('input.txt') as input:
    data = input.read()
    x = 0
    y = 0
    locations = [(x,y)]
    presents = 1

    for stop in data:
        if stop == "^":
            y = y + 1
        elif stop == "v":
            y = y - 1
        elif stop == ">":
            x = x + 1
        elif stop == "<":
            x = x -1
        
        if (x,y) not in locations:
            locations.append((x,y))
            presents = presents + 1
print(presents)
