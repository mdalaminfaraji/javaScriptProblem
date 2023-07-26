function generateRandomPassword(length) {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_-+=[]{}|;:,.<>?";
  
    const allChars = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      console.log(randomIndex);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  
  const passwordLength = 8;
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);
  