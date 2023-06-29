with open('input.txt') as input:
    data = input.read()
    stopCount = 0
    santaX = 0
    santaY = 0
    roboX = 0
    roboY = 0
    stops = [(0,0)]


    def doMove(x,y,direction):
        if direction == "^":
            y = y + 1
        elif direction == "v":
            y = y - 1
        elif direction == ">":
            x = x + 1
        elif direction == "<":
            x = x -1
        return ((x,y))


    for direction in data:
        stopCount += 1

        if stopCount % 2 == 0 :
            santaX,santaY = doMove(santaX,santaY,direction)
            x = santaX
            y = santaY
        else:
            roboX,roboY = doMove(roboX,roboY,direction)
            x = roboX
            y = roboY

        if (x,y) not in stops:
            stops.append((x,y))
print(len(stops))
