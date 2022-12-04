function filterSuspects() {
  const re = new RegExp(search, 'i');
  return countries.filter((country) => {
    return (
      re.test(country.name.official) &&
      (country.region === region || region === 'All')
    );
  });
}
