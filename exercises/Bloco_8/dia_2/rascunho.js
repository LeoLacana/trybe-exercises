/*const numbers = [1, 2, 3, 4, 5];

numbers.forEach((values, index, array) => {
    console.log(`Values: ${values}`);
    console.log(`Index: ${index}`);
    console.log(`Array: ${array}`);
});*/

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };

  emailListInData.forEach((value) => 
    showEmailList(value)
  );