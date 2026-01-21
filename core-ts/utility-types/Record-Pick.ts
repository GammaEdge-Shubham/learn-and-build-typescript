type Role = "Buyer" | "Seller" | "Admin";

interface Services {
  allowedServices: string[];
}

const users: Record<Role, Services> = {
  Buyer: {
    allowedServices: ["buy", "see", "search"],
  },
  Seller: {
    allowedServices: ["buy", "sell", "search"],
  },
  Admin: {
    allowedServices: ["approve", "delete", "search"],
  },
};

console.log(users.Seller);

// pick
interface User {
  id: number;
  name: string;
  username: string;
  password: string;
}

const login: Pick<User, "username" | "password"> = {
  username: "someone123",
  password: "crackit",
};

console.log(login);
