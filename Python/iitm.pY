# def sum(n):
#     if(n==1) :
#         return 1 
#     else: 
#         return sum(n-1) + n
# print(sum(5))

# def comp(p,n):
#     if(n==1):
#         return p*(1.1)
#     else :
#         return comp(p,n-1) * 1.1


# print(comp(10,3))

# def binaryS(L,k) :
    
#     begin = 0 ; 
#     end = len(L) - 1 

#     while end - begin > 1:
#         mid = (begin + end) // 2
        
#         if L[mid] == k :
#             print("middle")
#             return 1  
#         if L[mid] > k :
#             end = mid - 1 
#         if L[mid < k] :
#             begin = mid + 1 

#     if L[begin] == k or L[end] == k :
#         print("here")
#         return 1 
#     else : 
#         return 0 
    

# print(binaryS([1,2,3,4,5,6] , 4))

# def BS(L,k) :
#     begin = 0 
#     end = len(L) - 1 

#     while end - begin > 1 :

#         mid = (end + begin) // 2

#         if L[mid] == k :
#             return 1 
#         if L[mid] > k :
#             end = mid - 1 
#         if L[mid] < k :
#             begin = mid + 1 

#     if L[begin] == k or L[end] == k :
#         return 1 
#     else :
#         return 0 
    
# print(BS([1,2,3,4,5,6,7,8,9,10] , 2 ))


# def rBS(L,k,begin , end):
#     if (begin == end):
#         if L[begin] == k :
#             return 1 
#         else :
#             return 0 
#     if (end - begin == 1 ) :
#         if L[end] == k or L[begin] == k :
#             return 1 
#         else :
#             return 0 
#     if (end - begin )> 1 :
#         mid = (end + begin) //2 
#         if L[mid] > k :
#             end = mid - 1 
#         if L[mid] < k :
#             begin = mid + 1
#         if L[mid] == k :
#             return 1 
    
#     return rBS(L,k,begin,end)

# L = [1,2,3,4,6,7,9,10,11,12,13,14,15]
# k = 4
# begin = 0 
# end = len(L) - 1 

# print(rBS(L , k , begin , end))


# def rbs(L , k , begin, end) : 
#     if (begin == end):
#         if(L[begin] == k):
#             return 1 
#         else :
#             return 0 
        
#     if (end - begin == 1 ):
#         if L[end] == k or L[begin] == 1 :
#             return 1 
#         else :
#             return 1 
#     if (end - begin > 1):
#         mid = end + begin 
#         if (L[mid] > k ):
#             end = mid - 1 
#         if L[mid] < k :
#             begin = mid + 1
#         if L[mid] == k :
#             return 1 
        
#     return rbs(L , k , begin , end)

# print(rbs([1,2,3,4,5,6,7,8] , 4 , 0 , 7))

# def triangular(n):
#     if(n == 1) :
#         return 1 
#     else : 
#         return triangular(n-1) + n
        
# print(triangular(10))

# def multiply(a, b):
#     if a == 0 or b == 0:
#         return 0
#     return multiply(a - 1, b) + b

# result = multiply(5, 3)
# print(result)


# def logarithm(x):
#     count = 0 
#     while(x >1):
#         x = x / 2 
#         count +=1 
    
#     return count

# print(logarithm(256))

def palindrome(word):
     





















