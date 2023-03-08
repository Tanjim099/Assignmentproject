function capitalizeName(name) {
    const firstLetter = name[0];
    const capitalizedFirstLetter = firstLetter.toUpperCase();
    const restOfName = name.slice(1);
    const capitalizedName = capitalizedFirstLetter + restOfName;
    return firstLetter === capitalizedFirstLetter ? name : capitalizedName;
  }
  
  const name = "tanjim";
  const capitalizedName = capitalizeName(name);
  
  console.log(capitalizedName); // Output: "John"