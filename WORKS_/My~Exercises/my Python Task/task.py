import json

with open("books.json", "r+") as book:
 books = json.load(book)
for i in books:
    total = sum(i["pages"] for i in books)
    print(total)