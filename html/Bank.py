class Bank ():
    amount=None
    name=None
    def __init__(self,amount,name):
        self.amount = amount
        self.name=name
        print("account information:\namount=",amount,"\n"+"name=",name)
    def compare(self,account1,account2,userAccount1,userAccount2):
        if account1>account2:
            return userAccount1+" has more money than "+userAccount2
        else:
            return userAccount2+" has more money than "+userAccount1


bank=Bank(1000,"ahmad")
print(bank.compare(1000,2000,"ali","anas"))
