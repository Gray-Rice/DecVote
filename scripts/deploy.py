from brownie import Voting, accounts

def main():
    account = accounts[0]
    voting = Voting.deploy({'from': account})
    print(f"Contract deployed at: {voting.address}")