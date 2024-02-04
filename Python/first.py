##first_number = input("first number :")
##second_number = input("second number :")
##third_number = input("third number :" )
##sum = print( "Hence the sum is : " + str(int(first_number) * int(second_number) * int(third_number)))

#name= input("Enter Your name : ")
#print("Is your name ? " + name.upper())

#print(name.find("g"))
#x= name.find("g")

#print("given word g is at " +str(x)+ "th position")

#print(name.replace("g" , "aahhaha"))

#y= str((name.replace("a", "1"))) + str((name.replace("g", "7"))) + str((name.replace("h", "8")))  + str((name.replace("v", "22")))

#print("your code name is : " + str(y) )
#name = "Tony Stark"
#print("Stark" in name)
#print(5+2)
#print(8-10)
#print(5*9)
#print(7/2)
#print(7//2)
#print(9%2)
#print(2**10)

#i = 5
#i = i + 2
#i+=2
#print(i

#result= (2 + 3 * 5)
#print(result)
#BODMAS

# x = int(input("First digit:")) + int(input("second digit :"))
# y = int(input("third digit:")) + int(input("forth digit :"))
# print("sum of first and second = " + str(x))
# print("sum of third and forth = " + str(y))

# #print(x>y)
# #print(y>x)
# p=print("is 1st + 2nd greater than y ? " + str(x>y))
# q=print("is 3rd + 4th greater than x ? " + str(y>x))
# r=print("are they equal ? " + str(x==y))


# array = []
# x = 0

# print(array.count)

# import networkx as nx
# import matplotlib.pyplot as plt

# G = nx.DiGraph()
# G.add_edges_from(
#     [('A', 'B'), ('A', 'C'), ('D', 'B'), ('E', 'C'), ('E', 'F'),
#      ('B', 'H'), ('B', 'G'), ('B', 'F'), ('C', 'G')])

# val_map = {'A': 1.0,
#            'D': 0.5714285714285714,
#            'H': 0.0}

# values = [val_map.get(node, 0.25) for node in G.nodes()]

# # Specify the edges you want here
# red_edges = [('A', 'C'), ('E', 'C')]
# edge_colours = ['black' if not edge in red_edges else 'red'
#                 for edge in G.edges()]
# black_edges = [edge for edge in G.edges() if edge not in red_edges]

# # Need to create a layout when doing
# # separate calls to draw nodes and edges
# pos = nx.spring_layout(G)
# nx.draw_networkx_nodes(G, pos, cmap=plt.get_cmap('jet'), 
#                        node_color = values, node_size = 500)
# nx.draw_networkx_labels(G, pos)
# nx.draw_networkx_edges(G, pos, edgelist=red_edges, edge_color='r', arrows=True)
# nx.draw_networkx_edges(G, pos, edgelist=black_edges, arrows=False)
# plt.show()

import numpy as np
import matplotlib.pyplot as plt

# Define the range of x values
x = np.linspace(0.1, 10, 100)  # Avoid x=0 due to the x^-5 term

# Calculate the corresponding y values for the function
y = (3/2) * x + x**(-5)

# Create the plot
plt.figure(figsize=(8, 6))
plt.plot(x, y, label='(3/2)x + x^(-5)')
plt.xlabel('x')
plt.ylabel('y')
plt.title('Graph of (3/2)x + x^(-5)')
plt.grid(True)
plt.legend()
plt.show()
