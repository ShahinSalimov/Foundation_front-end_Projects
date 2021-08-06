print("""
*** QEYDIYYATDAN KECMEK UCUN 1 DAXIL EDIN ***
---------------------------------------------
*** SISTEME DAXIL OLMAQ UCUN 2 DAXIL EDIN ***
-------------------*****---------------------
""")
user_List=[]
secim=int(input("zehmet olmazsa seciminizi edin :"))

def register():
   name=input("name :")
   surname=input("surname :")
   email=input("email :")
   Username=input("username :")
   Password=input("password :")

   User={
       "name":name,
       "surname":surname,
       "email":email,
       "Username":Username,
       " Password": Password
   }
   user_List.append(User)

   while True:
    if secim==1:
       register()
       print("davam etmek isteyirsinizse?yes/no")
       secim1= input(":")
       if secim1=="yes":
           register()
           print(f" USER LIST : {user_List}")
           print("yene de davam etmek isteyirsinizse?yes/no")
           secim1 = input(":")
           break
       elif secim1=="no":
        print(f" USER LIST : {user_List}")
        break