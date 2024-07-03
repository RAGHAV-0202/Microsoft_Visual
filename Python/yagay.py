import pandas as pd
import matplotlib.pyplot as plt
dframe = pd.DataFrame([{'Monday' : 510 , 'Tuesday' : 350 , 'Wednesday' : 475 , 'Thursday' : 580 , 'Friday' : 600}])
plt.plot(['Monday','Tuesday','Wednesday','Thursday','Friday',],dframe.loc[0], color = 'red' ,linestyle='--',marker = 'D')
plt.title('The weekly income report')
plt.xlabel('Days')
plt.ylabel('Income')
plt.legend(['Income'])
plt.show()
