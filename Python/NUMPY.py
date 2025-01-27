
# https://colab.research.google.com/drive/13BwuQmgillEYbqfRBxtpFwv07olRxxaR

import numpy as np 

x = np.array([1,2,3,4])
y = np.array([4,3,2,1])

# z = x + y 
# print(z)


# z = x * y 
# print(z)

# z = np.dot(x,y)
# print(z)

# https://colab.research.google.com/drive/1ZqJIS0BnbpHo6RofWkXTilRkEdmdQ4dH

Matrix1 = np.array([[1,2,3] , [4,5,6] , [7,8,9]])
Matrix2 = np.array([[10,11,12] , [13,14,15] , [16,17,18]])
# print(Matrix1)
# print("")
# print(Matrix2)


sum = Matrix1 + Matrix2 

# element wise multiplication
product = Matrix1 * Matrix2 

transpose = np.transpose(Matrix1)
transpose_alt = Matrix1.T 

Product =Matrix1 @ Matrix2 

ZeroMatrix = np.zeros((2,2))
OneMatrix = np.ones ((4,4))

I = np.eye(3)


# print("sum" , sum)
# print("product" , product)
# print("transpose" , transpose)
# print("transpose alt " , transpose_alt)
# print("Product" , Product)
# print("Zero Matrix" , ZeroMatrix)
# print("One Matrix " , OneMatrix)
# print("I" , I)


# https://colab.research.google.com/drive/1kn9OrihGePy8qFFJSSic6wDuVzYk9FqU

X = np.array([1,2,3])
M = np.array([[1,2,3] , [4,5,6]])

# print("X has shape " , X.shape)
# print("M has shape " , M.shape)

# print("X has dimension " , X.ndim)
# print("M has dimension " , M.ndim)


# M = M.reshape(6)
# print(M)



# BROADCASTING

## if you  [[1,2,3] , [3,4,5] , [5,6,7]]  + [1,1,1] , that [1,1,1] will be converted into 3x3 matrix , with same rows


import numpy as np

x = np.linspace(-1, 1, 5)
y = 2 * x + 4
print(y)