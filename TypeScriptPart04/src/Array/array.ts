import type type = require("../types/type");

const friend: type.TFriend = ["shakib", "Md shakib", "themdshakibul", "Sakib"];

const [myNickName, a, ...other] = friend;

console.log(friend);
