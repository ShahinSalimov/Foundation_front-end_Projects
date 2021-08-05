import json


def findBookByName():
       # kitab adı daxil edildiyi zaman kitabın digər detallarını ekrana çap edin
       with open("books.json", "r") as f:
        books = json.load(f)

        while True:
            secim = input("kitabin adi : ")
            if secim == books[0]["title"]:
                print(books[0])
                break
            else:
                break
            pass

def totalPaper():
       # bütün siyahıda var olan kitabların səhifə saylarının cəmini ekrana çap edin
     with open("books.json", "r") as f:
        books = json.load(f)
 
     for i in books:
        total = sum(i["pages"] for i in books)
        print(total)
        pass

def deleteByCountry():
       # ölkə adı daxil edildiyi zaman o ölkəyə aid olan kitabların json faylından silinməsini təmin edin
       pass

def convertToList():
       # bütün kitabların list>object məntiqinə əsasən çevirin
       pass
def createFileOnDesktop():
        # desktop ekranınızda demo.txt adında fayl yaransın
        pass

def findFileByName():
        # kompyuterinizin c diskinde adı daxil olunan fayldan neçə ədəd olduğunu ekrana çap edin
        pass
    
def copyFileToDesktop():
        # desktopda CopiedFiles adında folder yaransın
        # adı daxil olunan faylı kompyuterinizdə axtarın və o faylı yaradılan CopiedFiles qovluğuna kopyalayın
        pass
Tapsiriqlar="""
**********zehmet olmazsa etmek istediyiniz funksiyani secin : **********
--------------------------------------------------------------------------------
1.-kitab adı daxil edildiyi zaman kitabın digər detallarını ekrana çap edin..
2.-bütün siyahıda var olan kitabların səhifə saylarının cəmini ekrana çap edin..
3.-ölkə adı daxil edildiyi zaman o ölkəyə aid olan kitabların json faylından silinməsini təmin edin..
4.-bütün kitabların list>object məntiqinə əsasən çevirin..
5.-desktop ekranınızda demo.txt adında fayl yaransın..
6.-kompyuterinizin c diskinde adı daxil olunan fayldan neçə ədəd olduğunu ekrana çap edin..
7.-desktopda CopiedFiles adında folder yaransın,
  -adı daxil olunan faylı kompyuterinizdə axtarın və o faylı yaradılan CopiedFiles qovluğuna kopyalayın..
"""
while True:
    print(Tapsiriqlar)
    enter=int(input("secmek istediyiniz funksiyanin nomresini daxil edin : "))
    if enter==1:
      findBookByName()  
      break
    elif enter==2:
        totalPaper()
        break
    elif enter==3:
        deleteByCountry()
        break
    elif enter==4:
        convertToList()
        break
    elif enter==5:
        createFileOnDesktop()
        break
    elif enter==6:
        findFileByName()
        break
    elif enter==7:
        copyFileToDesktop()
        break
    else:
        print("yanlish reqem daxil etdiniz....")

        