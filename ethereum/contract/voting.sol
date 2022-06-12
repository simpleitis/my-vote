// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Election {
    address public manager;
    
    struct voter {
        string name;
        string dob;
        address account;
        uint aadhar;
    }

    struct canidate {
        string name;
        string party;
        uint vote;
    }
    
    uint public canidateCount;
    mapping(uint => canidate) public canidatesList;

    uint public voterCount;
    mapping(uint => voter) public votersList;

    mapping(uint => bool) public registeredVoters;
    mapping(uint => bool) public votedList;

    constructor() {
        manager = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    }

    modifier restrictedToManager() {
        require(msg.sender == manager);
        _;
    }

    function addCanidate(string memory name, string memory party) public restrictedToManager {
        canidate storage newCanidate =  canidatesList[canidateCount];
        canidateCount++;

        newCanidate.name =  name;
        newCanidate.party = party;
        newCanidate.vote = 0;
    }

    function addVoter(string memory name, string memory dob, address account, uint aadhar) public restrictedToManager {
        voter storage newVoter = votersList[aadhar];

        newVoter.name = name;
        newVoter.dob = dob;
        newVoter.account = account;
        newVoter.aadhar = aadhar;
    }

    function Vote(uint aadhar, uint canidateID) public {
        require(!votedList[aadhar]);
        require(votersList[aadhar].account == msg.sender);

        canidate storage selectedCanidate = canidatesList[canidateID];
        selectedCanidate.vote++;

        votedList[aadhar] =  true;
    }

}