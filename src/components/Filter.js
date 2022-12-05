function filterSuspects() {
  const re = new RegExp(search, 'i');
  return countries.filter((wanted) => {
    return (
      re.test(wanted.subjects) &&
      (wanted.subjects === subjects || subjects === 'All')
    );
  });

  function displaySuspects() {
    const subjectsArray = filterSuspects().map((wanted) => {
      const {
        name: { common: commonName, nativeName: nativeNameObject },
        flags: { png: flag },
      } = country;
  };

  return (
    <div>
      <h4>{}</h4>
    </div>
  );
}

export default Filter;
