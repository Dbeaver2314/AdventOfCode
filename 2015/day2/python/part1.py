with  open('input.txt') as raw:
    lines = raw.readlines()

totalPaper = 0

for line in lines:
    l,w,h = line.split("x");
    l,w,h = (int(l),int(w),int(h))
    side1 = l*w
    side2 = w*h
    side3 = l*h
    smallestSide = min(side1,side2,side3);
    
    totalPaper = (totalPaper + ((side1 + side2 + side3)*2) + smallestSide)

print(totalPaper)
