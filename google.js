fetch("https://www.google.com")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
