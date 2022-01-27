const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('findByEmail userController', ()=>{
  let email='diana.randi1@gmail.com';
  let user =new User(2016330259, 'Diana Rangel', email)
  userController.add(user);   
  expect(userController.findByEmail(email)).toEqual(user);
  });

  test('findByEmail userController', ()=>{
    let idU=2016330259;
    let user =new User(idU, 'Diana Rangel', 'diana.randi1@gmail.com')
    userController.add(user);   
    expect(userController.findById(idU)).toEqual(user);
    });
  