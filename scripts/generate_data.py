"""Generate data for function"""

__author__      = "Arthur Shaikhatarov"
__copyright__   = "Copyright 2021"

import pandas as pd
import math

def frange(start, stop, step):
	    i = start
	    while i < stop:
	        yield i
	        i += step

columns=['x', 'y']

data = []

for x in frange(0, 2*math.pi, 0.1):
	print(x, math.sin(x))
	data.append([x,math.sin(x)])

df = pd.DataFrame(data, columns=columns)

df.to_csv('data.csv')


