def f(i, values = []):
    values.append(i)
    return values

f(1)
f(2)
v = f(3)
print(v)
