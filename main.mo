import Array "mo:base/Array";
import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Principal "mo:base/Principal";


actor {
    var paidPrincipals : [Principal] = [];

    public func payed(principal : Principal, paid : Bool ) : async () {
        if (paid) {
            paidPrincipals := Array.append(paidPrincipals, [principal]);
                Debug.print("PAID");

        }
    };

      public func myMethod() {
    Debug.print("This is a debug message");
    };


    public query func getPaidPrincipals() : async [Principal] {
        return paidPrincipals;
    }
}