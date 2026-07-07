export type TUser = {
  name: string;
  age: number;
  college: string;
  address: {
    city: string;
    state: string;
    pincode: number;
  };
  isMarried: boolean;
};



export type TFriend = string[]