class SafeZone {
  private key = "SecretKey";
}

const sa1: SafeZone = new SafeZone();
//console.log(sa1.key); // not accessible

console.log(sa1["key"]); // accessible

// private -> provide soft security not hard one
