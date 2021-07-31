Menu = """ 
**Qeydiyyat üçün : 1 **
--------------------------------
**Sistemə daxil olmaq üçün : 2 **
 """
Users = []


class User:
    def __init__(self, name, surname, email, username, password):
        self.name = name
        self.surname = surname
        self.Email = email
        self.Username = username
        self.Password = password
        Users.append(self)

    def user_info(self):
        print(f'{self.name} | {self.surname} | {self.Email} | {self.Username} | {self.Password}')


def user_info():
    for User in Users:
        User.user_info()


def Sigh_up():
    def new_user():
        name = input("name: ")
        surname = input("surname: ")
        email = input("Email: ")
        username = input("Username: ")
        password = input("Password: ")
        User(name, surname, email, username, password)

    while True:
        secim= input("Yeni istifadeci daxil etmek ucun -Y- herfini yazin: ")
        if secim == "Y":
            new_user()
        else:
            break


def enter():
    username = input("Username: ")
    password = input("Password: ")
    for User in Users:
        if User.Username == username and User.Password == password:
            user_info()
        else:
            secim = input("melumatlar yanlishdir..tekrar cehd etmek isteyirsinizse -s- hərfinə basın: ")
            if secim == 's':
                Sigh_up()
            else:
                print('Daxil olunan melumat yanlisdir')


def show_Menu():
    print(Menu)
show_Menu()

while True:
    secim = int(input("seciminizi edin: "))
    if secim == 1:
        Sigh_up()
    elif secim == 2:
        enter()
    else:
        print('yanlish daxil edildi....')
        break