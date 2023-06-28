with  open('input.txt') as raw:
    lines = raw.readlines()

totalRibbon = 0

for line in lines:
    l,w,h = line.split("x");
    sides = [int(l),int(w),int(h)]
    sides.sort();
    s1,s2,s3 = sides

    totalRibbon = totalRibbon + ((s1*2) + (s2 * 2)) + s1*s2*s3

print(totalRibbon)
