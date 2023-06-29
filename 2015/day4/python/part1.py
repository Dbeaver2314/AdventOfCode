import hashlib

suffix = 0
code = 'bgvyzdsv'
# result = hashlib.md5(b"Hello MD5").hexdigest()
hash = ""

while hash[0:5] != "00000":
    suffix +=1
    hash = hashlib.md5((code + str(suffix)).encode('utf-8')).hexdigest()

print(suffix)