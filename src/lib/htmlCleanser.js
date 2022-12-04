// const testString = `<p>On August 1, 2019, at approximately 10:00 a.m., a GardaWorld armored car was attacked at gunpoint at 3535 Market Street in Philadelphia, Pennsylvania's University City section.</p>\r\n<p><br /> <br />Two armed robbers and a getaway driver were observed.  Armed Robber 1 was in possession of a semi-automatic rifle loaded with a drum-style magazine and Armed Robber 2 was in possession of a loaded semi-automatic handgun.</p>\r\n<p><br /> <br />Video from surveillance cameras in the area of the attempted robbery shows the subjects arriving on the scene in their vehicle, two armed robbers advancing towards the armored car, and then fleeing upon encountering gunfire from the armored car personnel.  Armed Robber 1 is seen diving into the vehicle, with the driver taking off, and Armed Robber 2 then fleeing on foot.</p>\r\n<p><br /> <br />Armed Robber 2 has been arrested and charged with attempted robbery which interferes with interstate commerce in connection with this incident.  He is in federal custody.  The FBI seeks information about the remaining individuals.</p>\r\n<p> </p>`;

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
