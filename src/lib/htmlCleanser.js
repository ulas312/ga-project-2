function cleanseData(
  string,
  toFilter = [
    '<p>',
    '</p>',
    '<br />',
    '<br /',
    '<a>',
    '</a>',
    '<a data-linktype="external" href="https://www.fbi.gov/wanted/counterintelligence/christopher-douglas-emms" data-urltype="/view" data-val="https://www.fbi.gov/wanted/counterintelligence/christopher-douglas-emms">',
    '<a data-linktype="external" href="https://www.fbi.gov/wanted/cyber/mohsin-raza" data-urltype="/view" data-val="https://www.fbi.gov/wanted/cyber/mohsin-raza">',
    '<a data-linktype="external" href="https://www.fbi.gov/wanted/kidnap/natasha-alex-carter" data-urltype="/view" data-val="https://www.fbi.gov/wanted/kidnap/natasha-alex-carter">',
    '<a data-linktype="internal" href="https://www.fbi.gov/wanted/seeking-info/delmas-traversie-jr-" data-urltype="_direct_" data-val="b659218ef3554ffe960878620f184cb6">'
  ]
) {
  let cleansedString = string;
  for (const tagElement of toFilter) {
    let index = cleansedString.indexOf(tagElement);
    while (index != -1) {
      if (index == 0) {
        cleansedString = [...cleansedString]
          .splice(index + tagElement.length, cleansedString.length)
          .join('');
      } else {
        cleansedString =
          [...cleansedString].splice(0, index - 1).join('') +
          [...cleansedString]
            .splice(index + tagElement.length, cleansedString.length)
            .join('');
      }
      index = cleansedString.indexOf(tagElement);
    }
  }
  return cleansedString;
}
export default cleanseData;
